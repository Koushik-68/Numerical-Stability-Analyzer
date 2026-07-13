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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        .stApp {
            background:
                radial-gradient(circle at top, rgba(94, 164, 214, 0.08), transparent 32%),
                linear-gradient(180deg, #07090d 0%, #040506 100%) !important;
            font-family: 'Inter', system-ui, sans-serif !important;
        }

        section[data-testid="stSidebar"] {
            background: linear-gradient(180deg, #0b0f14 0%, #080b10 100%) !important;
            border-right: 1px solid rgba(255,255,255,0.06) !important;
            box-shadow: 8px 0 30px rgba(0, 0, 0, 0.35);
        }

        div[role="radiogroup"] > label > div:first-child {
            display: none !important;
        }

        div[role="radiogroup"] {
            display: flex !important;
            flex-direction: column !important;
            gap: 12px !important;
            width: 100% !important;
            padding: 0 !important;
        }

        div[role="radiogroup"] label {
            background: rgba(255, 255, 255, 0.02) !important;
            border: 1px solid rgba(255, 255, 255, 0.08) !important;
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
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }

        div[role="radiogroup"] label:hover {
            transform: translateX(4px);
            background: rgba(255, 255, 255, 0.04) !important;
            border-color: rgba(94, 164, 214, 0.30) !important;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.18) !important;
        }

        div[role="radiogroup"] label:has(input:checked) {
            background: linear-gradient(180deg, rgba(20, 26, 33, 0.98) 0%, rgba(13, 18, 24, 0.98) 100%) !important;
            border-color: rgba(94, 164, 214, 0.65) !important;
            box-shadow: 0 0 0 1px rgba(94, 164, 214, 0.12), 0 10px 24px rgba(0, 0, 0, 0.26) !important;
        }

        div[role="radiogroup"] label p {
            font-family: 'Inter', system-ui, sans-serif !important;
            font-size: 14.5px !important;
            font-weight: 500 !important;
            color: #a0a8b3 !important;
            letter-spacing: 0.01em !important;
            margin: 0 !important;
            transition: color 0.2s ease !important;
        }

        div[role="radiogroup"] label:has(input:checked) p {
            color: #f4f7fb !important;
            font-weight: 600 !important;
        }

        div[role="radiogroup"] label:hover p {
            color: #d8e7f4 !important;
        }

        .logo-card {
            background: linear-gradient(180deg, rgba(18, 23, 29, 0.98) 0%, rgba(11, 15, 19, 0.98) 100%) !important;
            border: 1px solid rgba(255, 255, 255, 0.08) !important;
            border-left: 3px solid rgba(94, 164, 214, 0.75) !important;
            border-radius: 16px !important;
            box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35) !important;
        }

        .main .block-container {
            padding-top: 2.5rem !important;
            padding-bottom: 3rem !important;
            max-width: 1200px !important;
        }

        div[data-testid="stTextArea"] textarea {
            background: linear-gradient(180deg, #0a0d12 0%, #080b0f 100%) !important;
            color: #f3f4f6 !important;
            border: 1px solid rgba(255,255,255,0.10) !important;
            border-radius: 14px !important;
            font-family: 'JetBrains Mono', monospace !important;
            font-size: 13.5px !important;
            line-height: 1.6 !important;
            padding: 18px !important;
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.03), inset 0 12px 24px rgba(0,0,0,0.45) !important;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        div[data-testid="stTextArea"] textarea:focus {
            border-color: rgba(94, 164, 214, 0.75) !important;
            box-shadow: 0 0 0 1px rgba(94, 164, 214, 0.18), inset 0 12px 24px rgba(0,0,0,0.45) !important;
        }

        .glass-premium-card {
            background: linear-gradient(180deg, rgba(16, 20, 26, 0.96) 0%, rgba(10, 13, 17, 0.96) 100%);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255,255,255,0.08);
            border-left: 3px solid rgba(94, 164, 214, 0.75);
            padding: 28px;
            border-radius: 16px;
            margin-top: 24px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.32);
        }

        div.stButton > button {
            background: linear-gradient(180deg, #12161c 0%, #0b0f14 100%) !important;
            color: #f1f5f9 !important;
            border: 1px solid rgba(255,255,255,0.08) !important;
            border-radius: 12px !important;
            padding: 12px 28px !important;
            font-size: 14px !important;
            font-weight: 600 !important;
            letter-spacing: -0.01em !important;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.28) !important;
        }
        
        div.stButton > button:hover {
            border-color: rgba(94, 164, 214, 0.55) !important;
            color: #d8e7f4 !important;
            background: linear-gradient(180deg, #0f1318 0%, #12171d 100%) !important;
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.35) !important;
            transform: translateY(-1px);
        }

        div[data-testid="metric-container"] {
            background: linear-gradient(180deg, #0d1117 0%, #090c10 100%) !important;
            border: 1px solid rgba(255,255,255,0.08) !important;
            padding: 20px !important;
            border-radius: 14px !important;
            box-shadow: 0 10px 22px rgba(0,0,0,0.24) !important;
        }

        h1, h2, h3, h4 {
            font-family: 'Inter', system-ui, sans-serif !important;
            letter-spacing: -0.02em !important;
        }

        hr {
            border: 0 !important;
            height: 1px !important;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent) !important;
            margin: 2rem 0 !important;
        }

        div.stAlert {
            background-color: rgba(10, 13, 17, 0.96) !important;
            border: 1px solid rgba(255,255,255,0.08) !important;
            backdrop-filter: blur(10px);
            border-radius: 12px !important;
        }

        .dashboard-topline {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 0.9rem;
            margin: 1rem 0 1.25rem 0;
        }

        .dashboard-stat {
            background: linear-gradient(180deg, rgba(16, 20, 26, 0.96) 0%, rgba(9, 12, 16, 0.96) 100%);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 16px;
            padding: 0.95rem 1rem;
            box-shadow: 0 14px 28px rgba(0,0,0,0.24);
        }

        .dashboard-stat-label {
            color: #9aa3ad;
            font-size: 0.78rem;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            margin-bottom: 0.35rem;
        }

        .dashboard-stat-value {
            color: #f8fafc;
            font-size: 1.35rem;
            font-weight: 700;
            letter-spacing: -0.04em;
        }

        .dashboard-stat-note {
            color: #c7d0d8;
            font-size: 0.82rem;
            margin-top: 0.25rem;
        }

        @media (max-width: 900px) {
            .dashboard-topline {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }

        @media (max-width: 640px) {
            .dashboard-topline {
                grid-template-columns: 1fr;
            }
        }
        </style>
        """,
        unsafe_allow_html=True
    )

    # Header Panel Rendering
    render_header('Numerical Stability Analyzer', 'Advanced Hybrid Floating-Point Verification Platform')

    top_metrics = [
        ("Static findings", len(state.get('key_findings', [])), "pattern scan output"),
        ("Runtime groups", len(state.get('runtime_summary', [])), "parsed C results"),
        ("Saved plots", len(state.get('plots', {})), "error progression views"),
        ("AI notes", 1 if state.get('ai_explanation') else 0, "optimization context"),
    ]

    st.markdown("<div class='dashboard-topline ui-animate-in'>", unsafe_allow_html=True)
    for label, value, note in top_metrics:
        st.markdown(
            f"""
            <div class='dashboard-stat'>
                <div class='dashboard-stat-label'>{label}</div>
                <div class='dashboard-stat-value'>{value}</div>
                <div class='dashboard-stat-note'>{note}</div>
            </div>
            """,
            unsafe_allow_html=True,
        )
    st.markdown("</div>", unsafe_allow_html=True)

    # =====================================================
    # SECTION 1: ANALYZER MAIN PANEL (MODERNIZED SPLIT VIEW)
    # =====================================================
    if selected == 'Analyzer':
        st.markdown('---')
        
        # Check if an optimized version has been generated by the API engine
        ai_explanation = state.get('ai_explanation', '')
        
        if ai_explanation:
            st.markdown(
                "<h3 style='color: #f8fafc; font-size: 1.35rem; font-weight: 700; margin-bottom: 10px; letter-spacing: -0.03em;'>AI code optimization studio</h3>", 
                unsafe_allow_html=True
            )
            st.info("Clear the workspace by running analysis on a fresh code block to return to the standard editor view.")
            
            # Create a premium side-by-side twin IDE code comparison grid layout
            code_col1, code_col2 = st.columns(2)
            
            with code_col1:
                st.markdown("<div class='ui-section-title'>Original code</div>", unsafe_allow_html=True)
                st.text_area(
                    "Original Input View",
                    value=state.get('original_backup_code', state.get('code', '')),
                    height=450,
                    disabled=True,
                    key="original_view_disabled",
                    label_visibility="collapsed"
                )
                
            with code_col2:
                st.markdown("<div class='ui-section-title'>Working copy</div>", unsafe_allow_html=True)
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
            if btn_col1.button("Run analysis", key="analyze_btn", use_container_width=True):
                state['analyze_pressed'] = True
                st.rerun()
            if btn_col2.button("Reset", key="reset_editor_btn", use_container_width=True):
                state['code'] = state.get('original_backup_code', state['code'])
                state['ai_explanation'] = ''
                if "code_textarea" in st.session_state:
                    st.session_state["code_textarea"] = state['code']
                st.rerun()
                
            # =====================================================
            # DEEP ACADEMIC REASONING CARD (RENDERED IMMEDIATELY BELOW)
            # =====================================================
            st.markdown("<br>", unsafe_allow_html=True)
            st.markdown("<div class='ui-section-title'>Deep mathematical justification</div>", unsafe_allow_html=True)
            
            st.markdown(
                f"""
                <div class="glass-premium-card">
                    <h5 style="color: #dce8f2; font-size: 1rem; margin-top: 0; margin-bottom: 12px; font-weight: 600; letter-spacing: -0.02em;">Automated engineering summary</h5>
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
        st.markdown("<div class='ui-section-title'>Pipeline telemetry states</div>", unsafe_allow_html=True)
        render_result_cards(state.get('runtime_summary', []))

    # =====================================================
    # SECTION 2: INTERACTIVE VISUALIZATION MATRIX
    # =====================================================
    elif selected == 'Visualization':
        st.markdown("<div class='ui-section-title'>Error vector visualization</div>", unsafe_allow_html=True)
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
                
                st.markdown(f"<div class='ui-section-title'>Dynamic convergence profile: <span style='color:#d8e7f4;'>{selected_display_name}</span></div>", unsafe_allow_html=True)
                st.pyplot(plots[selected_key])
            else:
                st.warning("No functional error profiles match current analyzer telemetry arrays.")
        else:
            st.info('💡 No analytical trends cached yet. Execute standard parsing sweeps in the **Analyzer** layout view first.')

    # =====================================================
    # SECTION 3: ACADEMIC EVALUATION REPORT SCREENS
    # =====================================================
    elif selected == 'Report':
        st.markdown("<div class='ui-section-title'>Analytical compilation report</div>", unsafe_allow_html=True)
        st.markdown('---')
        render_report_block('Key Findings', state.get('key_findings', []))
        render_report_block('Suggestions', state.get('suggestions', []))
        render_report_block('Conclusion', state.get('conclusion', []))

    else:
        st.markdown('### Settings')
        st.info('No user runtime overrides configured yet.')

    return state