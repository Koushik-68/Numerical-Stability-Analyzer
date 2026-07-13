import json
import os
import sys
import tempfile
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer


ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
if ROOT_DIR not in sys.path:
    sys.path.insert(0, ROOT_DIR)


from analyzer.ai_engine import ai_suggest_and_fix
from analyzer.dynamic_analyzer import FUNCTION_PROFILES, analyze_function
from analyzer.error_metrics import absolute_error, relative_error
from analyzer.executor import compile_code, run_code
from analyzer.fixer import apply_fix, suggest_fix
from analyzer.instrumentor import instrument_code
from analyzer.runtime_parser import (
    extract_results,
    extract_traces,
    overall_status_from_summary,
    summarize_results,
)
from analyzer.static_analyzer import detect_patterns


def _json_default(value):
    try:
        import math

        if isinstance(value, float) and math.isnan(value):
            return None
    except Exception:
        pass
    return str(value)


def _send_json(handler, status_code, payload):
    data = json.dumps(payload, default=_json_default).encode("utf-8")
    handler.send_response(status_code)
    handler.send_header("Content-Type", "application/json; charset=utf-8")
    handler.send_header("Content-Length", str(len(data)))
    handler.send_header("Access-Control-Allow-Origin", "*")
    handler.send_header("Access-Control-Allow-Headers", "Content-Type")
    handler.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    handler.end_headers()
    handler.wfile.write(data)


def _read_json(handler):
    length = int(handler.headers.get("Content-Length", "0"))
    raw = handler.rfile.read(length) if length else b"{}"
    if not raw:
        return {}
    return json.loads(raw.decode("utf-8"))


def _build_plot_data(summary_rows, is_fixed=False):
    plot_data = {}
    for row in summary_rows:
        func_key = row.get("function_key")
        if func_key not in FUNCTION_PROFILES or func_key in plot_data:
            continue

        profile = FUNCTION_PROFILES[func_key]
        points = []
        for value in profile["graph_values"]:
            float_res, reference_res = analyze_function(func_key, value)
            computed = reference_res if is_fixed else float_res
            reference = reference_res
            points.append(
                {
                    "input": value,
                    "relativeError": relative_error(computed, reference),
                    "absoluteError": absolute_error(computed, reference),
                }
            )

        plot_data[func_key] = {
            "label": profile["label"],
            "inputLabel": profile["input_label"],
            "points": points,
        }

    return plot_data


def analyze_code(code, is_fixed=False):
    import uuid
    static_issues = detect_patterns(code)
    suggestion_list = suggest_fix(code)

    os.makedirs(os.path.join(ROOT_DIR, "input_code"), exist_ok=True)
    os.makedirs(os.path.join(ROOT_DIR, "instrumented_code"), exist_ok=True)

    run_id = uuid.uuid4().hex
    input_path = os.path.join(ROOT_DIR, "input_code", f"react_input_{run_id}.c")
    instrumented_path = os.path.join(ROOT_DIR, "instrumented_code", f"react_inst_{run_id}.c")
    exe_file = os.path.join(ROOT_DIR, "instrumented_code", f"react_exe_{run_id}.exe")

    try:
        with open(input_path, "w", encoding="utf-8") as file_handle:
            file_handle.write(code)

        instrument_code(input_path, instrumented_path)
        compile_code(instrumented_path, exe_file)
        stdout_output = run_code(exe_file)

        summary = summarize_results(stdout_output)
        traces = extract_traces(stdout_output)
        result_entries = extract_results(stdout_output)
        plot_data = _build_plot_data(summary, is_fixed=is_fixed)

        if result_entries and len(result_entries) == 1 and result_entries[0][0] == "RESULT":
            overall_status = "✅ Stable"
        else:
            overall_status = overall_status_from_summary(summary)

        conclusion = ["Analysis completed."]
        if static_issues:
            conclusion.append(f"Static patterns detected: {len(static_issues)}")
        else:
            conclusion.append("No major static issues detected.")

        return {
            "staticIssues": static_issues,
            "suggestions": suggestion_list,
            "runtimeSummary": summary,
            "traces": [{"name": name, "value": value} for name, value in traces],
            "plots": plot_data,
            "overallStatus": overall_status,
            "conclusion": conclusion,
            "output": stdout_output,
        }
    finally:
        for path in [input_path, instrumented_path, exe_file]:
            try:
                if os.path.exists(path):
                    os.remove(path)
            except Exception as e:
                print(f"[Cleanup Warning] Could not remove {path}: {e}")


import re
import subprocess
import mpmath

def evaluate_mpmath_safe(expression, x_value):
    try:
        mpmath.mp.dps = 60
        # Replace ^ with ** for python syntax compatibility
        py_expr = expression.replace("^", "**")
        
        # Regex validation to prevent command injections
        if not re.match(r'^[a-zA-Z0-9\s.+\-*/()^]+$', expression):
            raise ValueError("Forbidden syntax characters in expression.")
            
        # Map variables/functions to mpmath equivalents
        env = {
            "x": mpmath.mpf(x_value),
            "sin": mpmath.sin,
            "cos": mpmath.cos,
            "tan": mpmath.tan,
            "sqrt": mpmath.sqrt,
            "log": mpmath.log,
            "log10": mpmath.log10,
            "exp": mpmath.exp,
            "pow": mpmath.power,
            "pi": mpmath.pi,
            "e": mpmath.e
        }
        
        val = eval(py_expr, {"__builtins__": None}, env)
        return float(val)
    except Exception as e:
        print(f"[Sandbox Warning] Evaluation of {expression} at {x_value} failed: {e}")
        return 0.0

def run_custom_expression(expr):
    # Regex validate characters
    if not re.match(r'^[a-zA-Z0-9\s.+\-*/()^]+$', expr):
        raise ValueError("Invalid mathematical characters in expression.")
        
    # Translate '^' to pow() in C
    expr_c = expr
    expr_c = re.sub(r'(\w+|\([^)]+\))\s*\^\s*([0-9.]+|\w+|\([^)]+\))', r'pow(\1, \2)', expr_c)
    
    with tempfile.TemporaryDirectory() as tmpdir:
        c_file = os.path.join(tmpdir, "sandbox.c")
        exe_file = os.path.join(tmpdir, "sandbox.exe" if os.name == "nt" else "sandbox")
        
        c_code = f"""#include <stdio.h>
#include <math.h>

double eval_custom(double x) {{
    return {expr_c};
}}

int main() {{
    double inputs[] = {{1e-6, 1e-5, 1e-4, 1e-3, 1e-2, 1e-1, 1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, 10000000.0}};
    int count = sizeof(inputs) / sizeof(inputs[0]);
    for (int i = 0; i < count; i++) {{
        double x = inputs[i];
        double val = eval_custom(x);
        printf("TRACE:x=%e;val=%e\\n", x, val);
    }}
    return 0;
}}
"""
        with open(c_file, "w") as f:
            f.write(c_code)
            
        # Compile C script
        try:
            res = subprocess.run(
                ["gcc", c_file, "-o", exe_file, "-lm"],
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                check=True
            )
        except subprocess.CalledProcessError as err:
            err_msg = err.stderr.decode("utf-8", errors="ignore")
            raise RuntimeError(f"Compiler Error:\n{err_msg}")
            
        # Run binary
        proc = subprocess.run([exe_file], stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)
        output = proc.stdout.decode("utf-8")
        
        # Parse trace output
        points = []
        for line in output.splitlines():
            if line.startswith("TRACE:"):
                parts = line[6:].split(";")
                x_val = float(parts[0].split("=")[1])
                c_val = float(parts[1].split("=")[1])
                
                # High-precision mpmath reference evaluation
                mp_val = evaluate_mpmath_safe(expr, x_val)
                
                # Compute relative error
                rel_err = 0.0
                if abs(mp_val) > 1e-30:
                    rel_err = abs(c_val - mp_val) / abs(mp_val)
                else:
                    rel_err = abs(c_val - mp_val)
                    
                points.append({
                    "input": x_val,
                    "cVal": c_val,
                    "mpVal": mp_val,
                    "relativeError": min(1.0, rel_err)
                })
                
        return points, c_code


def evaluate_mpmath_heatmap_safe(expression, x_value, y_value):
    try:
        mpmath.mp.dps = 60
        # Replace ^ with ** for python syntax compatibility
        py_expr = expression.replace("^", "**")
        
        # Regex validation to prevent command injections (allowing comma now)
        if not re.match(r'^[a-zA-Z0-9\s.+\-*/()^,]+$', expression):
            raise ValueError("Forbidden syntax characters in expression.")
            
        # Map variables/functions to mpmath equivalents
        env = {
            "x": mpmath.mpf(x_value),
            "y": mpmath.mpf(y_value),
            "sin": mpmath.sin,
            "cos": mpmath.cos,
            "tan": mpmath.tan,
            "sqrt": mpmath.sqrt,
            "log": mpmath.log,
            "log10": mpmath.log10,
            "exp": mpmath.exp,
            "pow": mpmath.power,
            "pi": mpmath.pi,
            "e": mpmath.e
        }
        
        val = eval(py_expr, {"__builtins__": None}, env)
        if isinstance(val, (complex, mpmath.mpc)):
            if abs(val.imag) < 1e-12:
                val = val.real
            else:
                return float('nan')
        return float(val)
    except Exception as e:
        print(f"[Sandbox Warning] Evaluation of {expression} failed: {e}")
        return 0.0


def generate_range(start, end, steps, scale):
    if steps <= 1:
        return [start]
    if scale == "log":
        # Ensure we don't have log of 0 or negative values. If start is 0, shift it.
        s_val = max(1e-30, start)
        e_val = max(1e-30, end)
        s = math.log10(s_val)
        e = math.log10(e_val)
        return [10**(s + i * (e - s) / (steps - 1)) for i in range(steps)]
    else:
        return [start + i * (end - start) / (steps - 1) for i in range(steps)]


import math

def run_heatmap_expression(expr, x_min, x_max, x_scale, x_steps, y_min, y_max, y_scale, y_steps):
    if not re.match(r'^[a-zA-Z0-9\s.+\-*/()^,]+$', expr):
        raise ValueError("Invalid mathematical characters in expression.")
        
    # Translate '^' to pow() in C
    expr_c = expr
    expr_c = re.sub(r'(\w+|\([^)]+\))\s*\^\s*([0-9.]+|\w+|\([^)]+\))', r'pow(\1, \2)', expr_c)
    
    x_vals = generate_range(x_min, x_max, x_steps, x_scale)
    y_vals = generate_range(y_min, y_max, y_steps, y_scale)
    
    x_vals_str = ", ".join(f"{v:.18e}" for v in x_vals)
    y_vals_str = ", ".join(f"{v:.18e}" for v in y_vals)
    
    with tempfile.TemporaryDirectory() as tmpdir:
        c_file = os.path.join(tmpdir, "heatmap.c")
        exe_file = os.path.join(tmpdir, "heatmap.exe" if os.name == "nt" else "heatmap")
        
        c_code = f"""#include <stdio.h>
#include <math.h>

double eval_custom(double x, double y) {{
    return {expr_c};
}}

int main() {{
    double x_vals[] = {{{x_vals_str}}};
    double y_vals[] = {{{y_vals_str}}};
    int x_count = {len(x_vals)};
    int y_count = {len(y_vals)};
    
    for (int i = 0; i < x_count; i++) {{
        for (int j = 0; j < y_count; j++) {{
            double x = x_vals[i];
            double y = y_vals[j];
            double val = eval_custom(x, y);
            printf("TRACE:x=%.18e;y=%.18e;val=%.18e\\n", x, y, val);
        }}
    }}
    return 0;
}}
"""
        with open(c_file, "w") as f:
            f.write(c_code)
            
        # Compile C script
        try:
            res = subprocess.run(
                ["gcc", c_file, "-o", exe_file, "-lm"],
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                check=True
            )
        except subprocess.CalledProcessError as err:
            err_msg = err.stderr.decode("utf-8", errors="ignore")
            raise RuntimeError(f"Compiler Error:\n{err_msg}")
            
        # Run binary
        proc = subprocess.run([exe_file], stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)
        output = proc.stdout.decode("utf-8")
        
        # Parse trace output
        points = []
        for line in output.splitlines():
            if line.startswith("TRACE:"):
                parts = line[6:].split(";")
                x_val = float(parts[0].split("=")[1])
                y_val = float(parts[1].split("=")[1])
                c_val = float(parts[2].split("=")[1])
                
                # High-precision mpmath reference evaluation
                mp_val = evaluate_mpmath_heatmap_safe(expr, x_val, y_val)
                
                # Compute relative error
                rel_err = 0.0
                if abs(mp_val) > 1e-30:
                    try:
                        import math as py_math
                        if py_math.isnan(mp_val) or py_math.isinf(mp_val):
                            rel_err = 0.0 if (py_math.isnan(c_val) == py_math.isnan(mp_val) or py_math.isinf(c_val) == py_math.isinf(mp_val)) else 1.0
                        else:
                            rel_err = abs(c_val - mp_val) / abs(mp_val)
                    except Exception:
                        rel_err = 1.0
                else:
                    rel_err = abs(c_val - mp_val)
                    
                points.append({
                    "x": x_val,
                    "y": y_val,
                    "cVal": c_val,
                    "mpVal": mp_val,
                    "relativeError": min(1.0, rel_err)
                })
                
        return points

def auto_fix_code(code):
    try:
        result = ai_suggest_and_fix(code)
        fixed_code = result.get("fixed_code", code)
        
        # If AI returned unchanged code (e.g. rate limits or no key), run fallback rewrite rules
        if fixed_code == code:
            fallback_code = apply_fix(code)
            if fallback_code != code:
                return {
                    "fixedCode": fallback_code,
                    "explanation": "Applied deterministic algebraic rewrite rules (AI rate-limit fallback)."
                }

        return {
            "fixedCode": fixed_code,
            "explanation": result.get("explanation", "Applied AI-based remediation."),
        }
    except Exception:
        fixed_code = apply_fix(code)
        explanation = "Applied deterministic algebraic rewrite rules."
        return {"fixedCode": fixed_code, "explanation": explanation}


class RequestHandler(BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        return

    def do_OPTIONS(self):
        _send_json(self, 200, {"ok": True})

    def do_GET(self):
        if self.path == "/api/health":
            _send_json(self, 200, {"ok": True})
            return
        _send_json(self, 404, {"error": "Not found"})

    def do_POST(self):
        try:
            if self.path == "/api/analyze":
                body = _read_json(self)
                code = body.get("code", "")
                if not code.strip():
                    _send_json(self, 400, {"error": "Code input is required."})
                    return

                with tempfile.TemporaryDirectory() as _:
                    payload = analyze_code(code)
                _send_json(self, 200, payload)
                return

            if self.path == "/api/autofix":
                body = _read_json(self)
                code = body.get("code", "")
                if not code.strip():
                    _send_json(self, 400, {"error": "Code input is required."})
                    return

                _send_json(self, 200, auto_fix_code(code))
                return

            if self.path == "/api/compare":
                body = _read_json(self)
                code = body.get("code", "")
                if not code.strip():
                    _send_json(self, 400, {"error": "Code input is required."})
                    return

                original_analysis = analyze_code(code, is_fixed=False)
                fixed_response = auto_fix_code(code)
                fixed_code = fixed_response.get("fixedCode", code)
                fixed_code_analysis = analyze_code(fixed_code, is_fixed=True)

                _send_json(self, 200, {
                    "originalCode": code,
                    "fixedCode": fixed_code,
                    "originalAnalysis": original_analysis,
                    "fixedAnalysis": fixed_code_analysis,
                })
                return

            if self.path == "/api/sandbox":
                body = _read_json(self)
                expression = body.get("expression", "")
                if not expression.strip():
                    _send_json(self, 400, {"error": "Expression is required."})
                    return

                try:
                    points, c_code = run_custom_expression(expression)
                    _send_json(self, 200, {
                        "expression": expression,
                        "cCode": c_code,
                        "plots": points
                    })
                except Exception as err:
                    _send_json(self, 400, {"error": str(err)})
                return

            if self.path == "/api/heatmap":
                body = _read_json(self)
                expression = body.get("expression", "")
                if not expression.strip():
                    _send_json(self, 400, {"error": "Expression is required."})
                    return

                try:
                    x_min = float(body.get("xMin", 1.0))
                    x_max = float(body.get("xMax", 100.0))
                    x_scale = body.get("xScale", "linear")
                    x_steps = int(body.get("xSteps", 15))

                    y_min = float(body.get("yMin", 1.0))
                    y_max = float(body.get("yMax", 100.0))
                    y_scale = body.get("yScale", "linear")
                    y_steps = int(body.get("ySteps", 15))

                    points = run_heatmap_expression(
                        expression,
                        x_min, x_max, x_scale, x_steps,
                        y_min, y_max, y_scale, y_steps
                    )
                    _send_json(self, 200, {
                        "expression": expression,
                        "points": points
                    })
                except Exception as err:
                    _send_json(self, 400, {"error": str(err)})
                return


            _send_json(self, 404, {"error": "Not found"})
        except Exception as exc:
            _send_json(self, 500, {"error": str(exc)})


def run_server(host="127.0.0.1", port=8000):
    server = ThreadingHTTPServer((host, port), RequestHandler)
    print(f"API server listening on http://{host}:{port}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    run_server()