import streamlit as st
from .styles import inject_styles
from .components import render_sidebar, render_header, render_code_input, render_result_cards, render_graph, render_report_block


def render_app(state):
    # Apply global custom styles and dark-theme configurations
    inject_styles()

    # Sidebar Navigation Component
    active = state.get('active_section', 'Analyzer')
    selected = render_sidebar(active)

    # Force instant refresh upon sidebar navigation change
    if selected != active:
        state['active_section'] = selected
        st.rerun()

    # =====================================================
    # 🌌 GLOBAL ENTERPRISE-GRADE UI INJECTION (THE COMPLETE OVERHAUL)
    # =====================================================
    st.markdown(
        """
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        /* 1. Global Application Canvas Reset */
        .stApp {
            background: radial-gradient(circle at 50% -20%, #0f1524 0%, #05070c 70%) !important;
            font-family: 'Plus Jakarta Sans', system-ui, sans-serif !important;
        }

        /* PREMIUM SIDEBAR OVERHAUL MATCHING MAIN CANVAS */
        section[data-testid="stSidebar"] {
            background: linear-gradient(180deg, #090d16 0%, #05070c 100%) !important;
            border-right: 1px solid #1e293b !important;
            box-shadow: 10px 0 30px rgba(0, 0, 0, 0.6);
        }

        /* Hide Default Radio Selection Glyphs */
        div[role="radiogroup"] > label > div:first-child {
            display: none !important;
        }

        /* Force Sidebar Radio List to fill layout uniformly */
        div[role="radiogroup"] {
            display: flex !important;
            flex-direction: column !important;
            gap: 12px !important;
            width: 100% !important;
            padding: 0 !important;
        }

        /* High-End Navigation Cards Match */
        div[role="radiogroup"] label {
            background: rgba(15, 23, 42, 0.4) !important;
            border: 1px solid #1e293b !important;
            border-radius: 14px !important;
            padding: 14px 20px !important;
            margin: 0 !important;
            width: 100% !important;
            min-width: 100% !important;
            box-sizing: border-box !important;
            display: flex !important;
            align-items: center !important;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
            cursor: pointer !important;
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
        }

        /* Sidebar Item Hover Micro-Transitions */
        div[role="radiogroup"] label:hover {
            transform: translateX(4px);
            background: rgba(30, 41, 59, 0.6) !important;
            border-color: #38bdf8 !important;
            box-shadow: 0 0 20px rgba(56, 189, 248, 0.1) !important;
        }

        /* Active Navigation Tab matching Studio Accents */
        div[role="radiogroup"] label:has(input:checked) {
            background: linear-gradient(135deg, #1e3a8a 0%, #0284c7 100%) !important;
            border-color: #38bdf8 !important;
            box-shadow: 0 0 24px rgba(56, 189, 248, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.15) !important;
        }

        /* Typography Formatting Elements inside Sidebar Components */
        div[role="radiogroup"] label p {
            font-family: 'Plus Jakarta Sans', system-ui, sans-serif !important;
            font-size: 14.5px !important;
            font-weight: 500 !important;
            color: #94a3b8 !important;
            letter-spacing: -0.01em !important;
            margin: 0 !important;
            transition: color 0.2s ease !important;
        }

        div[role="radiogroup"] label:has(input:checked) p {
            color: #f8fafc !important;
            font-weight: 600 !important;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        div[role="radiogroup"] label:hover p {
            color: #38bdf8 !important;
        }

        /* Premium Logo Card Adjustments for Sidebar Space */
        .logo-card {
            background: linear-gradient(145deg, rgba(15, 23, 42, 0.8) 0%, rgba(8, 12, 21, 0.9) 100%) !important;
            border: 1px solid #1e293b !important;
            border-left: 5px solid #38bdf8 !important;
            border-radius: 16px !important;
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5) !important;
        }

        /* 2. Overwriting Default Main Content Frame */
        .main .block-container {
            padding-top: 3.5rem !important;
            padding-bottom: 4rem !important;
            max-width: 1200px !important;
        }

        /* 3. Advanced Monospace Text-Area Editor Customization (VS-Code Obsidian Variant) */
        div[data-testid="stTextArea"] textarea {
            background-color: #080c14 !important;
            color: #f1f5f9 !important;
            border: 1px solid #1e293b !important;
            border-radius: 14px !important;
            font-family: 'JetBrains Mono', 'Fira Code', monospace !important;
            font-size: 13.5px !important;
            line-height: 1.6 !important;
            padding: 18px !important;
            box-shadow: inset 0 8px 24px rgba(0, 0, 0, 0.7) !important;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        /* Focus Ring Glow on Active Text Area Selection */
        div[data-testid="stTextArea"] textarea:focus {
            border-color: #38bdf8 !important;
            box-shadow: 0 0 20px rgba(56, 189, 248, 0.12), inset 0 4px 12px rgba(0,0,0,0.7) !important;
        }

        /* 4. Glassmorphism Design Pattern for the AI Reasoning Canvas */
        .glass-premium-card {
            background: linear-gradient(145deg, rgba(15, 23, 42, 0.6) 0%, rgba(8, 12, 21, 0.8) 100%);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(56, 189, 248, 0.2);
            border-left: 6px solid #38bdf8;
            padding: 28px;
            border-radius: 16px;
            margin-top: 24px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(56, 189, 248, 0.02);
        }

        /* 5. Custom Button Engine Ruleset (High Contrast Premium Controls) */
        div.stButton > button {
            background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%) !important;
            color: #f1f5f9 !important;
            border: 1px solid #334155 !important;
            border-radius: 12px !important;
            padding: 12px 28px !important;
            font-size: 14px !important;
            font-weight: 600 !important;
            letter-spacing: -0.01em !important;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4) !important;
        }
        
        /* Distinctive Hover Feedback Transitions */
        div.stButton > button:hover {
            border-color: #38bdf8 !important;
            color: #38bdf8 !important;
            background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%) !important;
            box-shadow: 0 0 24px rgba(56, 189, 248, 0.18) !important;
            transform: translateY(-1px);
        }

        /* Dynamic Visual Overwrites for Metric Cards Structure */
        div[data-testid="metric-container"] {
            background: linear-gradient(180deg, #0b0f19 0%, #070a10 100%) !important;
            border: 1px solid #1e293b !important;
            padding: 20px !important;
            border-radius: 14px !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
        }

        /* 6. Typography Formatting Elements */
        h1, h2, h3, h4 {
            font-family: 'Plus Jakarta Sans', system-ui, sans-serif !important;
            letter-spacing: -0.02em !important;
        }

        /* Gradient Visual Border Rules */
        hr {
            border: 0 !important;
            height: 1px !important;
            background: linear-gradient(90deg, transparent, #1e293b, transparent) !important;
            margin: 2.5rem 0 !important;
        }

        /* Custom Alert Container Strip Fixes */
        div.stAlert {
            background-color: rgba(15, 23, 42, 0.4) !important;
            border: 1px solid #1e293b !important;
            backdrop-filter: blur(8px);
            border-radius: 12px !important;
        }
        </style>
        """,
        unsafe_allow_html=True
    )

    # Header Panel Rendering
    render_header('Numerical Stability Analyzer', 'Advanced Hybrid Floating-Point Verification Platform')

    # =====================================================
    # SECTION 1: ANALYZER MAIN PANEL (MODERNIZED SPLIT VIEW)
    # =====================================================
    if selected == 'Analyzer':
        st.markdown('---')
        
        # Check if an optimized version has been generated by the API engine
        ai_explanation = state.get('ai_explanation', '')
        
        if ai_explanation:
            st.markdown(
                "<h3 style='color: #f8fafc; font-size: 1.55rem; font-weight: 700; margin-bottom: 5px;'>🛠️ AI Code Optimization Studio</h3>", 
                unsafe_allow_html=True
            )
            st.info("💡 Clear your workspace by hitting 'Run Analysis' on a new segment to drop back to standard editor view.")
            
            # Create a premium side-by-side twin IDE code comparison grid layout
            code_col1, code_col2 = st.columns(2)
            
            with code_col1:
                st.markdown("<h4 style='color: #ef4444; font-size: 1.05rem; font-weight: 600; margin-bottom: 14px; letter-spacing: -0.01em;'>🟥 Original Vulnerable Code</h4>", unsafe_allow_html=True)
                st.text_area(
                    "Original Input View",
                    value=state.get('original_backup_code', state.get('code', '')),
                    height=450,
                    disabled=True,
                    key="original_view_disabled",
                    label_visibility="collapsed"
                )
                
            with code_col2:
                st.markdown("<h4 style='color: #34d399; font-size: 1.05rem; font-weight: 600; margin-bottom: 14px; letter-spacing: -0.01em;'>🟩 AI Stabilized Code</h4>", unsafe_allow_html=True)
                updated_code = st.text_area(
                    "AI Optimized View",
                    height=450,
                    key="code_textarea",
                    label_visibility="collapsed"
                )
                state['code'] = updated_code
                
            # Render actions panel below the comparison matrix
            st.markdown("<div style='margin-top: 10px;'></div>", unsafe_allow_html=True)
            btn_col1, btn_col2 = st.columns([1, 0.3])
            if btn_col1.button("🚀 Analyze Optimized Code", key="analyze_btn", use_container_width=True):
                state['analyze_pressed'] = True
                st.rerun()
            if btn_col2.button("↩️ Reset Editor", key="reset_editor_btn", use_container_width=True):
                state['code'] = state.get('original_backup_code', state['code'])
                state['ai_explanation'] = ''
                if "code_textarea" in st.session_state:
                    st.session_state["code_textarea"] = state['code']
                st.rerun()
                
            # =====================================================
            # DEEP ACADEMIC REASONING CARD (RENDERED IMMEDIATELY BELOW)
            # =====================================================
            st.markdown("<br>", unsafe_allow_html=True)
            st.markdown("<h3 style='color: #f8fafc; font-size: 1.35rem; font-weight: 700;'>🧠 Deep Mathematical Justification</h3>", unsafe_allow_html=True)
            
            st.markdown(
                f"""
                <div class="glass-premium-card">
                    <h5 style="color: #38bdf8; font-size: 1.1rem; margin-top: 0; margin-bottom: 12px; font-weight: 600;">Automated Engineering Summary:</h5>
                    <div style="color: #cbd5e1; line-height: 1.8; font-size: 14px; font-family: 'Plus Jakarta Sans', sans-serif;">
                        {ai_explanation}
                    </div>
                </div>
                """, 
                unsafe_allow_html=True
            )
            
        else:
            # Fallback layout to standard text input panel if no active patches are applied
            code, analyze, auto_fix = render_code_input(state.get('code',''))
            state['code'] = code
            if analyze:
                state['analyze_pressed'] = True
                st.rerun()
            if auto_fix:
                state['autofix_pressed'] = True
                st.rerun()

        st.markdown('---')
        st.markdown("<h3 style='color: #f8fafc; font-size: 1.45rem; font-weight: 700; margin-bottom: 22px;'>📊 Pipeline Telemetry States</h3>", unsafe_allow_html=True)
        render_result_cards(state.get('runtime_summary', []))

    # =====================================================
    # SECTION 2: INTERACTIVE VISUALIZATION MATRIX
    # =====================================================
    elif selected == 'Visualization':
        st.markdown("<h2 style='color: #f8fafc; font-size: 1.75rem; font-weight: 700;'>📊 Error Vector Visualization</h2>", unsafe_allow_html=True)
        st.markdown('---')
        
        plots = state.get('plots', {})
        summary = state.get('runtime_summary', [])
        
        if plots and summary:
            available_functions = {row['function_key']: row['function'] for row in summary if row['function_key'] in plots}
            
            if available_functions:
                selected_display_name = st.selectbox(
                    "Select a detected function to view error progression curves:",
                    options=list(available_functions.values()),
                    key="visualization_dropdown"
                )
                selected_key = [k for k, v in available_functions.items() if v == selected_display_name][0]
                
                st.markdown(f"<h3 style='color: #cbd5e1; font-size: 1.15rem; font-weight: 600; margin-top: 22px; margin-bottom: 16px;'>Dynamic Convergence Profile: <span style='color: #38bdf8;'>{selected_display_name}</span></h3>", unsafe_allow_html=True)
                st.pyplot(plots[selected_key])
            else:
                st.warning("No functional error profiles match current analyzer telemetry arrays.")
        else:
            st.info('💡 No analytical trends cached yet. Execute standard parsing sweeps in the **Analyzer** layout view first.')

    # =====================================================
    # SECTION 3: ACADEMIC EVALUATION REPORT SCREENS
    # =====================================================
    elif selected == 'Report':
        st.markdown("<h2 style='color: #f8fafc; font-size: 1.75rem; font-weight: 700;'>📑 Analytical Compilation Report</h2>", unsafe_allow_html=True)
        st.markdown('---')
        render_report_block('Key Findings', state.get('key_findings', []))
        render_report_block('Suggestions', state.get('suggestions', []))
        render_report_block('Conclusion', state.get('conclusion', []))

    else:
        st.markdown('### Settings')
        st.info('No user runtime overrides configured yet.')

    return state