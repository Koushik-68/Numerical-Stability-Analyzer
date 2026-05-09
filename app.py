import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt

from analyzer.static_analyzer import analyze_file
from analyzer.dynamic_analyzer import analyze_function, FUNCTION_PROFILES
from analyzer.error_metrics import relative_error, absolute_error
from analyzer.executor import compile_code, run_code
from analyzer.runtime_parser import summarize_results, overall_status_from_summary
from analyzer.fixer import suggest_fix, apply_fix
from UI.styles import inject_styles


st.set_page_config(page_title="Numerical Stability Analyzer", layout="wide")
inject_styles()


if "code" not in st.session_state:
    st.session_state.code = ""
if "runtime_summary" not in st.session_state:
    st.session_state.runtime_summary = []
if "runtime_output" not in st.session_state:
    st.session_state.runtime_output = ""
if "issues" not in st.session_state:
    st.session_state.issues = []
if "fixes" not in st.session_state:
    st.session_state.fixes = []
if "overall_status" not in st.session_state:
    st.session_state.overall_status = "Unknown"
if "selected_function_key" not in st.session_state:
    st.session_state.selected_function_key = None
if "selected_section" not in st.session_state:
    st.session_state.selected_section = "Analyzer"


with st.sidebar:
    st.markdown("# 🧠 Analyzer")
    st.session_state.selected_section = st.radio(
        "Navigation",
        ["Analyzer", "Visualization", "Report", "Settings"],
        index=["Analyzer", "Visualization", "Report", "Settings"].index(st.session_state.selected_section)
        if st.session_state.selected_section in ["Analyzer", "Visualization", "Report", "Settings"]
        else 0,
    )


st.markdown(
    """
    <div class="app-header">
        <div class="app-title">Numerical Stability Analyzer</div>
        <div class="app-subtitle">Analyze floating-point errors and numerical instability</div>
    </div>
    """,
    unsafe_allow_html=True,
)


placeholder = """#include <stdio.h>
#include <math.h>

double compute(double x) {
    return sqrt(x*x + 1) - x;
}

int main() {
    double x = 1000000.0;
    double result = compute(x);
    printf("RESULT:%lf\\n", result);
    return 0;
}
"""


page = st.session_state.selected_section


if page == "Analyzer":
    st.markdown("## Code Input")
    st.session_state.code = st.text_area(
        "Paste your C code",
        value=st.session_state.code,
        height=280,
        placeholder=placeholder,
    )

    analyze_col, fix_col = st.columns([1, 1])
    analyze_pressed = analyze_col.button("🚀 Run Analysis")
    autofix_pressed = fix_col.button("🛠 Auto Fix")

    if autofix_pressed:
        st.session_state.code = apply_fix(st.session_state.code)
        st.session_state.fixes = suggest_fix(st.session_state.code)
        st.success("Applied auto-fix to code")

    runtime_error = None
    if analyze_pressed and st.session_state.code.strip():
        try:
            with open("temp.c", "w", encoding="utf-8") as f:
                f.write(st.session_state.code)

            exe_file = compile_code("temp.c")
            output = run_code(exe_file)

            st.session_state.runtime_output = output
            st.session_state.runtime_summary = summarize_results(output)
            st.session_state.overall_status = overall_status_from_summary(st.session_state.runtime_summary)
            st.session_state.issues = analyze_file("temp.c")
            st.session_state.fixes = suggest_fix(st.session_state.code)

            detected_keys = [row.get("function_key") for row in st.session_state.runtime_summary if row.get("function_key") in FUNCTION_PROFILES]
            if detected_keys:
                st.session_state.selected_function_key = detected_keys[0]

        except Exception as exc:
            runtime_error = str(exc)

    st.markdown("---")
    st.markdown("## Runtime Summary")

    if runtime_error:
        st.error(f"Could not run the program: {runtime_error}")
    elif st.session_state.runtime_summary:
        runtime_df = pd.DataFrame(
            [
                {
                    "Function": row["function"],
                    "Error": row["error"],
                    "Status": row["status"],
                    "Reason": row.get("reason", ""),
                }
                for row in st.session_state.runtime_summary
            ]
        )
        st.dataframe(runtime_df, use_container_width=True, hide_index=True)
        st.markdown(f"**Overall status:** {st.session_state.overall_status}")

        detected = []
        label_map = {}
        for row in st.session_state.runtime_summary:
            key = row.get("function_key")
            if key in FUNCTION_PROFILES and key not in detected:
                detected.append(key)
                label_map[key] = row.get("function") or FUNCTION_PROFILES[key]["label"]

        if detected:
            default_key = st.session_state.selected_function_key if st.session_state.selected_function_key in detected else detected[0]
            st.session_state.selected_function_key = st.selectbox(
                "Detected functions",
                options=detected,
                index=detected.index(default_key),
                format_func=lambda k: label_map.get(k, FUNCTION_PROFILES[k]["label"]),
            )

        if st.session_state.selected_function_key:
            selected_profile = FUNCTION_PROFILES[st.session_state.selected_function_key]
            st.markdown("---")
            st.markdown("## Function Results")

            x = st.number_input(
                selected_profile["input_label"],
                min_value=selected_profile["min_input"],
                max_value=selected_profile["max_input"],
                value=selected_profile["default_input"],
                step=selected_profile["step"],
            )

            float_res, high_res = analyze_function(st.session_state.selected_function_key, x)
            float_res = float(float_res)
            high_res = float(high_res)
            abs_err = absolute_error(float_res, high_res)
            rel_err = relative_error(float_res, high_res) if high_res not in (0.0, -0.0) else abs_err

            metric1, metric2, metric3, metric4 = st.columns(4)
            metric1.metric("Delta", f"{abs_err:.12g}")
            metric2.metric("Float Result", f"{float_res:.10f}")
            metric3.metric("Reference", f"{high_res:.10f}")
            metric4.metric("Relative Error", f"{rel_err:.6e}")

            if rel_err > 1e-6:
                st.error("🔥 Numerical Instability Detected")
            else:
                st.success("✅ Computation is Stable for the selected input")
    else:
        st.info("Paste code and press Run Analysis.")

elif page == "Visualization":
    st.markdown("## Visualization")
    if not st.session_state.runtime_summary:
        st.info("Run analysis first in the Analyzer page to populate graphs.")
    else:
        detected = []
        label_map = {}
        for row in st.session_state.runtime_summary:
            key = row.get("function_key")
            if key in FUNCTION_PROFILES and key not in detected:
                detected.append(key)
                label_map[key] = row.get("function") or FUNCTION_PROFILES[key]["label"]

        if detected:
            default_key = st.session_state.selected_function_key if st.session_state.selected_function_key in detected else detected[0]
            selected_key = st.selectbox(
                "Detected functions",
                options=detected,
                index=detected.index(default_key),
                format_func=lambda k: label_map.get(k, FUNCTION_PROFILES[k]["label"]),
            )
            profile = FUNCTION_PROFILES[selected_key]

            x_vals = profile["graph_values"]
            errors = []
            gaps = []
            for val in x_vals:
                f_res, h_res = analyze_function(selected_key, val)
                f_res = float(f_res)
                h_res = float(h_res)
                errors.append(relative_error(f_res, h_res) if h_res not in (0.0, -0.0) else absolute_error(f_res, h_res))
                gaps.append(abs(f_res - h_res))

            graph_col1, graph_col2 = st.columns(2)

            with graph_col1:
                st.markdown("### Relative Error vs Input")
                fig1, ax1 = plt.subplots()
                ax1.plot(x_vals, errors, marker="o", color="#6ea8fe")
                ax1.set_xscale("log")
                ax1.set_xlabel(profile["input_label"])
                ax1.set_ylabel("Relative Error")
                ax1.set_title(f"Relative Error vs Input ({profile['label']})")
                st.pyplot(fig1)
                st.caption("Shows how the selected function's error changes as the input grows.")

            with graph_col2:
                st.markdown("### Absolute Difference Between Unstable and Stable Outputs")
                fig2, ax2 = plt.subplots()
                ax2.plot(x_vals, gaps, marker="o", color="#d1495b")
                ax2.set_xscale("log")
                ax2.set_xlabel(profile["input_label"])
                ax2.set_ylabel("Absolute Difference")
                ax2.set_title(f"Absolute Difference ({profile['label']})")
                st.pyplot(fig2)
                st.caption("Compares the unstable expression against its stable reference form.")
        else:
            st.info("No detected functions available for plotting.")

elif page == "Report":
    st.markdown("## Report")

    report_col1, report_col2 = st.columns(2)

    with report_col1:
        st.markdown("### Static Analysis")
        issues = st.session_state.issues or analyze_file("temp.c")
        if issues:
            for issue in issues:
                st.warning(issue)
        else:
            st.success("No major static issues detected")

        st.markdown("---")
        st.markdown("### Suggestions")
        fixes = st.session_state.fixes or suggest_fix(st.session_state.code)
        if fixes:
            for fix in fixes:
                st.info(fix)
        else:
            st.success("No suggestions")

    with report_col2:
        st.markdown("### Conclusion")
        st.write(f"Overall status: **{st.session_state.overall_status}**")

        if st.session_state.runtime_summary:
            st.markdown("---")
            st.markdown("### Per-function Analysis")
            for row in st.session_state.runtime_summary:
                st.write(f"- **{row.get('function')}** — {row.get('status')}. {row.get('reason', '')}")

        st.markdown("---")
        st.markdown("### Actions")
        if st.button("Apply Fix"):
            st.session_state.code = apply_fix(st.session_state.code)
            st.session_state.fixes = suggest_fix(st.session_state.code)
            st.success("Applied fix to code")

else:
    st.markdown("## Settings")
    st.info("No settings configured yet.")
