import math
import re
from analyzer.dynamic_analyzer import FUNCTION_PROFILES, analyze_function

RESULT_PATTERN = re.compile(
    r'(?:^|\s)(RESULT(?:_[A-Z0-9]+)?):\s*([+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?|inf|infinity|nan)',
    re.IGNORECASE,
)

TRACE_PATTERN = re.compile(
    r'(?:^|\s)TRACE:(\w+)\s*=\s*([+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?|inf|infinity|nan)',
    re.IGNORECASE,
)

RESULT_LABEL_ALIASES = {
    "RESULT_CANCELLATION": ("cancellation", "Cancellation"),
    "RESULT_DIVISION": ("division", "Division"),
    "RESULT_UNSTABLE": ("unstable_expr", "Unstable Expr"),
    "RESULT_STABLE": ("stable_expr", "Stable Expr"),
    "RESULT_TRIG": ("trig", "Trig"),
    "RESULT_LOG": ("log", "Log"),
    "RESULT_OVERFLOW": ("overflow", "Overflow"),
    "RESULT_UNDERFLOW": ("underflow", "Underflow"),
    "RESULT_MIXED": ("mixed", "Mixed"),
}


def _parse_numeric(value):
    value = value.strip().lower()
    if value in {"inf", "+inf", "infinity", "+infinity"}:
        return float("inf")
    if value in {"-inf", "-infinity"}:
        return float("-inf")
    if value in {"nan", "+nan", "-nan"}:
        return float("nan")
    return float(value)


def format_result_label(label):
    label_upper = label.upper()
    if label_upper in RESULT_LABEL_ALIASES:
        return RESULT_LABEL_ALIASES[label_upper][1]
    if label_upper == "RESULT":
        return "Result"
    if label.startswith("RESULT_"):
        return label.removeprefix("RESULT_").replace("_", " ").title()
    return label.replace("_", " ").title()


def result_function_key(label):
    label_upper = label.upper()
    if label_upper in RESULT_LABEL_ALIASES:
        return RESULT_LABEL_ALIASES[label_upper][0]
    if label_upper == "RESULT":
        return "single_result"
    if label_upper.startswith("RESULT_"):
        return label_upper.removeprefix("RESULT_").lower()
    return label.lower()


def classify_result(label, value, dynamic_reference=None):
    """
    Classifies the numerical stability of a value.
    Prioritizes actual mathematical deviation over string token labels.
    """
    label_upper = label.upper()

    # 1. Hardware/IEEE-754 Faults take absolute precedence
    if math.isinf(value):
        return "High", "❌ Unstable", "Infinite result (hardware overflow)"

    if math.isnan(value):
        return "High", "❌ Unstable", "Non-numeric result (NaN encountered)"

    # 2. Mathematical Delta Evaluation against High-Precision Reference
    if dynamic_reference is not None:
        # Avoid division by zero issues in relative error computation
        if abs(dynamic_reference) == 0.0:
            error_amt = abs(value - dynamic_reference)
            metric_type = "absolute deviation"
        else:
            error_amt = abs(value - dynamic_reference) / abs(dynamic_reference)
            metric_type = "relative error"

        if error_amt > 1e-6:
            return "High", "❌ Unstable", f"Critical precision loss ({error_amt:.2e} {metric_type})"
        if error_amt > 1e-10:
            return "Medium", "⚠️ Risky", f"Significant precision degradation ({error_amt:.2e} {metric_type})"
        
        # Mathematical verification passed, but check if code structure matches an instability pattern
        if any(tok in label_upper for tok in ["CANCELLATION", "UNSTABLE", "DIVISION", "TRIG", "LOG", "MIXED"]):
            return "Low", "⚠️ Potentially Unstable", f"Pattern matches structural risk; well-behaved for this specific input."
            
        return "Low", "✅ Stable", "Matches high-precision reference baseline"

    # 3. Fallback to Strict Static Token Labels only if no Reference Engine exists
    if "OVERFLOW" in label_upper:
        return "High", "❌ Unstable", "Overflow structural pattern caught"

    if "UNDERFLOW" in label_upper:
        return "High", "❌ Unstable", "Underflow structural pattern caught"

    if "CANCELLATION" in label_upper:
        return "High", "❌ Unstable", "Catastrophic cancellation structural pattern caught"

    return "Medium", "⚠️ Risky", "No analytical high-precision engine available to check math"


def extract_results(output):
    results = []
    for label, value in RESULT_PATTERN.findall(output):
        results.append((label.strip(), _parse_numeric(value)))
    return results


def summarize_results(output):
    results = extract_results(output)
    traces = extract_traces(output)
    
    # Dynamically locate input 'x' from execution logs; fallback to 1000000.0 if missing
    trace_dict = dict(traces)
    extracted_x = trace_dict.get("x", 1000000.0)
    
    summary = []

    for label, value in results:
        func_key = result_function_key(label)
        dynamic_ref = None
        
        # Fix Bug B & A: Query python dynamic_analyzer engines directly for the true reference value
        if func_key in FUNCTION_PROFILES:
            try:
                _, dynamic_ref = analyze_function(func_key, extracted_x)
            except Exception:
                dynamic_ref = None

        # Pass the calculated high-precision truth value directly into classifer
        error_level, status, reason = classify_result(label, value, dynamic_reference=dynamic_ref)

        summary.append(
            {
                "label": label,
                "function": format_result_label(label),
                "function_key": func_key,
                "value": value,
                "error": error_level,
                "status": status,
                "reason": reason,
            }
        )

    return summary


def overall_status_from_summary(summary):
    if any(row["status"].startswith("❌") for row in summary):
        return "❌ Unstable"
    if any(row["status"].startswith("⚠️") for row in summary):
        return "⚠️ Risky"
    if summary:
        return "✅ Stable"
    return "Unknown"


def extract_result(output):
    results = extract_results(output)
    if results:
        return results[0][1]
    return None


def extract_traces(output):
    matches = TRACE_PATTERN.findall(output)
    return [(var, _parse_numeric(val)) for var, val in matches]