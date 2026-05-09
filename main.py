from analyzer.static_analyzer import analyze_file
from analyzer.dynamic_analyzer import run_dynamic_analysis
from analyzer.error_metrics import relative_error, absolute_error

from analyzer.instrumentor import instrument_code
from analyzer.executor import compile_code, run_code
from analyzer.runtime_parser import (
    extract_results,
    extract_traces,
    summarize_results,
    overall_status_from_summary,
)

from analyzer.fixer import suggest_fix


def main():
    print("=== Numerical Stability Analyzer ===\n")

    input_file = "input_code/test1.c"
    instrumented_file = "instrumented_code/test1_inst.c"

    # ==============================
    # STEP 1: Static Analysis
    # ==============================
    print(">> Running Static Analysis...")
    issues = analyze_file(input_file)

    # ==============================
    # STEP 2: Suggest Fixes
    # ==============================
    print("\n>> Suggested Fixes...")
    with open(input_file, 'r') as f:
        code = f.read()

    fixes = suggest_fix(code)

    if fixes:
        for fix in fixes:
            print("💡", fix)
    else:
        print("✓ No suggestions needed")

    # ==============================
    # STEP 3: Instrument Code
    # ==============================
    print("\n>> Instrumenting Code...")
    instrument_code(input_file, instrumented_file)

    # ==============================
    # STEP 4: Compile Code
    # ==============================
    print("\n>> Compiling Instrumented Code...")
    exe_file = compile_code(instrumented_file)

    # ==============================
    # STEP 5: Execute Code
    # ==============================
    print("\n>> Running Program...")
    program_output = run_code(exe_file)

    # ==============================
    # STEP 6: Parse Runtime Output
    # ==============================
    print("\n>> Parsing Runtime Output...")
    result_entries = extract_results(program_output)

    if not result_entries:
        print("❌ Could not extract result from C program")
        return

    print("\n[Parsed Results]")
    if len(result_entries) > 1 or any(label != "RESULT" for label, _ in result_entries):
        summary = summarize_results(program_output)
        print(f"{'Function':<18} {'Error':<8} {'Status':<20} Reason")
        print("-" * 80)

        for row in summary:
            print(f"{row['function']:<18} {row['error']:<8} {row['status']:<20} {row.get('reason','')}")
    else:
        c_result = result_entries[0][1]
        print("C Program Result:", c_result)

    # ==============================
    # STEP 7: Extract Execution Trace
    # ==============================
    print("\n>> Extracting Execution Trace...")
    traces = extract_traces(program_output)

    if traces:
        print("\n[Execution Trace]")
        for var, val in traces:
            print(f"{var} = {val}")
    else:
        print("No trace data found")

    # ==============================
    # STEP 8: High Precision Comparison
    # ==============================
    print("\n>> Running High Precision Comparison...")

    if len(result_entries) == 1 and result_entries[0][0] == "RESULT":
        c_result = result_entries[0][1]
        x = 1000000.0
        float_res, high_res = run_dynamic_analysis(x)

        rel_err = relative_error(c_result, float(high_res))
        abs_err = absolute_error(c_result, float(high_res))

        print("\n[Comparison Results]")
        print("C Result:", c_result)
        print("High Precision:", high_res)

        print("\n[Error Metrics]")
        print("Relative Error:", rel_err)
        print("Absolute Error:", abs_err)
    else:
        print("Multi-result output detected; per-function status is shown above.")

    # ==============================
    # STEP 9: Final Report
    # ==============================
    print("\n========== FINAL REPORT ==========")

    if issues:
        print("⚠️ Static Issues Detected:")
        for issue in issues:
            print(" -", issue)
    else:
        print("✓ No major static issues detected")

    if len(result_entries) == 1 and result_entries[0][0] == "RESULT":
        if rel_err > 1e-6:
            print("\n🔥 Numerical Instability Detected!")
        else:
            print("\n✓ Computation is stable")
    else:
        summary = summarize_results(program_output)
        overall_status = overall_status_from_summary(summary)

        if overall_status == "❌ Unstable":
            print("\n🔥 Numerical Instability Detected in one or more results!")
        elif overall_status == "⚠️ Risky":
            print("\n⚠️ Risky computations detected in one or more results")
        else:
            print("\n✓ All parsed results appear stable")

    print("=================================")


if __name__ == "__main__":
    main()