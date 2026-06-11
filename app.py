import os
import sys

# Absolute path correction injection - MUST RUN FIRST BEFORE SUB-PACKAGE IMPORTS
ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
if ROOT_DIR not in sys.path:
    sys.path.insert(0, ROOT_DIR)

import streamlit as st
import numpy as np
import matplotlib.pyplot as plt

# App architecture imports
from UI.dashboard import render_app
from analyzer.static_analyzer import detect_patterns
from analyzer.instrumentor import instrument_code
from analyzer.executor import compile_code, run_code
from analyzer.runtime_parser import summarize_results, extract_traces
from analyzer.dynamic_analyzer import FUNCTION_PROFILES, analyze_function
from analyzer.error_metrics import relative_error, absolute_error

# Import the Grok AI Engine features
from analyzer.ai_engine import ai_suggest_and_fix

# Initialize overall global Streamlit configurations
st.set_page_config(page_title="Numerical Stability Analyzer", layout="wide")

# Initialize global session state maps safely
if "state" not in st.session_state:
    st.session_state.state = {
        "active_section": "Analyzer",
        "code": """#include <stdio.h>
#include <math.h>

double compute(double x) {
    return sqrt(x*x + 1) - x;
}

int main() {
    double x = 1000000.0;
    double result = compute(x);
    printf("RESULT_UNSTABLE: %lf\\n", result);
    return 0;
}""",
        "runtime_summary": [],
        "key_findings": ["No analysis run yet. Paste C code and click 'Run Analysis'."],
        "suggestions": [],
        "conclusion": [],
        "plots": {},
        "ai_explanation": ""  # Stores Grok's engineering explanation pointwise
    }

state = st.session_state.state

# =====================================================
# PIPELINE ORCHESTRATION ENGINE (RUN ANALYSIS)
# =====================================================
if state.get("analyze_pressed"):
    state["analyze_pressed"] = False # Reset flag instantly
    
    # FIXED: Extract value from widget cache directly before starting file compilation pass
    if "code_textarea" in st.session_state:
        state["code"] = st.session_state["code_textarea"]
    
    # Ensure working directories exist safely
    os.makedirs("input_code", exist_ok=True)
    os.makedirs("instrumented_code", exist_ok=True)
    
    input_path = "input_code/temp_input.c"
    inst_path = "instrumented_code/temp_inst.c"
    
    # Save code buffer to storage disk
    with open(input_path, "w") as f:
        f.write(state["code"])
        
    try:
        # 1. Run Hybrid Pipeline
        static_issues = detect_patterns(state["code"])
        instrument_code(input_path, inst_path)
        exe_file = compile_code(inst_path)
        stdout_output = run_code(exe_file)
        
        # 2. Parse Metrics Maps
        summary = summarize_results(stdout_output)
        traces = extract_traces(stdout_output)
        state["runtime_summary"] = summary
        
        # 3. Generate Analytical Report Blocks
        state["key_findings"] = [f"Static issues caught: {len(static_issues)}"] + static_issues
        
        # Preserve structural AI updates in final reports
        if state["ai_explanation"]:
            state["conclusion"] = ["Analysis pass completed.", f"AI Optimization Note: {state['ai_explanation']}"]
        else:
            state["conclusion"] = ["Analysis pass completed successfully without crashes."]
            
        # 4. Generate Dynamic Evaluation Visualization Matrix
        trace_dict = dict(traces)
        x_val = trace_dict.get("x", 1000000.0)
        
        plots_dict = {}
        for row in summary:
            func_key = row["function_key"]
            if func_key in FUNCTION_PROFILES:
                prof = FUNCTION_PROFILES[func_key]
                inputs = prof["graph_values"]
                
                rel_errors = []
                abs_errors = []
                
                for inp in inputs:
                    f_res, ref_res = analyze_function(func_key, inp)
                    rel_errors.append(relative_error(f_res, ref_res))
                    abs_errors.append(absolute_error(f_res, ref_res))
                
                # Render Matplotlib Error Growth Plot
                fig, ax = plt.subplots(figsize=(6, 3.5))
                fig.patch.set_facecolor('#0b0c0f')
                ax.set_facecolor('#0b0c0f')
                
                ax.plot(inputs, rel_errors, color='#7b2b2b', marker='o', label='Relative Error', linewidth=2)
                ax.set_xscale('log')
                
                # Safety guard check to handle absolute optimized zero values
                if max(rel_errors) > 0.0:
                    ax.set_yscale('log')
                else:
                    ax.set_yscale('linear')
                    ax.set_ylim(-0.1, 1.1)
                
                ax.set_title(f"Error Growth Curve: {prof['label']}", color='#e6eef3', fontsize=10)
                ax.tick_params(colors='#9fb0bd', labelsize=8)
                ax.grid(True, linestyle='--', alpha=0.2, color='#e6eef3')
                
                for spine in ax.spines.values():
                    spine.set_color('#202429')
                    
                plt.tight_layout()
                plots_dict[func_key] = fig
                
        state["plots"] = plots_dict
        st.toast("Analysis Completed Successfully!", icon="🚀")

    except Exception as e:
        st.error(f"Pipeline Processing Error: {str(e)}")
    
    # Force state synchronization and page layout rerun
    st.rerun()

# =====================================================
# ADVANCED AI AUTO-FIX LAYER (GROK/GROQ API TRIGGER)
# =====================================================
if state.get("autofix_pressed"):
    state["autofix_pressed"] = False  # Reset flag instantly
    
    # Backup code buffer into storage arrays to drive side-by-side layout comparison channels
    state["original_backup_code"] = state["code"]
    
    with st.spinner("🧠 Re-engineering your math equations for optimal stability..."):
        ai_results = ai_suggest_and_fix(state["code"])
        
    if ai_results["fixed_code"] != state["code"]:
        state["code"] = ai_results["fixed_code"]
        st.session_state["code_textarea"] = ai_results["fixed_code"]
        state["ai_explanation"] = ai_results["explanation"]
        
        state["suggestions"] = [
            "AI Applied Patches Successfully.",
            f"Mathematical Justification: {ai_results['explanation']}"
        ]
        st.toast("Applied AI-optimized mathematical safety patches!", icon="🧠")
    else:
        st.toast("AI analyzed the code and found it structurally sound.", icon="ℹ️")
        
    st.rerun()

# =====================================================
# RENDERING PASS
# =====================================================
render_app(state)