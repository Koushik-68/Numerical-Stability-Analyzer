import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt


# =====================================================
# PREMIUM SIDEBAR
# =====================================================

def render_sidebar(active_section):
    with st.sidebar:

        st.markdown("""
        <style>
        /* Modern Premium Palette & CSS Variables */
        :root {
            --sidebar-bg: linear-gradient(180deg, #0b0f19 0%, #111827 100%);
            --button-idle-bg: rgba(255, 255, 255, 0.03);
            --button-idle-border: rgba(255, 255, 255, 0.08);
            --button-active-bg: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            --button-active-border: #3b82f6;
            --glow-color: rgba(37, 99, 235, 0.45);
            --text-muted: #9ca3af;
            --text-bright: #f9fafb;
        }

        /* Sidebar Main Container */
        section[data-testid="stSidebar"] {
            background: var(--sidebar-bg) !important;
            border-right: 1px solid rgba(255, 255, 255, 0.05) !important;
            box-shadow: 10px 0 30px rgba(0, 0, 0, 0.5);
        }

        /* Hide default streamlit radio circles */
        div[role="radiogroup"] > label > div:first-child {
            display: none !important;
        }

        /* Force Radio Group Layout to handle uniform widths */
        div[role="radiogroup"] {
            display: flex !important;
            flex-direction: column !important;
            gap: 12px !important;
            width: 100% !important;
            padding: 0 !important;
        }

        /* Uniform, Sized Navigation Cards */
        div[role="radiogroup"] label {
            background: var(--button-idle-bg) !important;
            border: 1px solid var(--button-idle-border) !important;
            border-radius: 14px !important;
            padding: 14px 20px !important;
            margin: 0 !important;
            width: 100% !important;
            min-width: 100% !important;
            box-sizing: border-box !important;
            display: flex !important;
            align-items: center !important;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            cursor: pointer !important;
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
        }

        /* High-End Hover Effects */
        div[role="radiogroup"] label:hover {
            transform: translateX(4px);
            background: rgba(255, 255, 255, 0.08) !important;
            border-color: rgba(59, 130, 246, 0.5) !important;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        /* Active Navigation Tab with Dynamic Pulsing Glow */
        div[role="radiogroup"] label:has(input:checked) {
            background: var(--button-active-bg) !important;
            border-color: var(--button-active-border) !important;
            box-shadow: 
                0 0 20px var(--glow-color),
                inset 0 1px 1px rgba(255, 255, 255, 0.2);
            animation: pulseGlow 2.5s infinite alternate;
        }

        /* Text & Icon Typography Adjustments */
        div[role="radiogroup"] label p {
            font-size: 15px !important;
            font-weight: 500 !important;
            letter-spacing: 0.5px !important;
            color: var(--text-muted) !important;
            margin: 0 !important;
            padding: 0 !important;
            transition: color 0.2s ease;
        }

        div[role="radiogroup"] label:has(input:checked) p {
            color: var(--text-bright) !important;
            font-weight: 600 !important;
        }

        div[role="radiogroup"] label:hover p {
            color: var(--text-bright) !important;
        }

        /* Professional Header Logo Card */
        .logo-card {
            background: linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(31, 41, 55, 0.8) 100%);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 18px;
            padding: 22px;
            color: var(--text-bright);
            margin-bottom: 24px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }

        .logo-title {
            font-size: 22px;
            font-weight: 700;
            letter-spacing: -0.5px;
            color: #ffffff;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .logo-sub {
            font-size: 11px;
            font-weight: 600;
            color: #6b7280;
            margin-top: 6px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
        }

        /* Breathing Pulse Keyframes */
        @keyframes pulseGlow {
            0% { box-shadow: 0 0 15px rgba(37, 99, 235, 0.4); }
            100% { box-shadow: 0 0 25px rgba(37, 99, 235, 0.7); }
        }
        </style>
        """, unsafe_allow_html=True)

        st.markdown("""
        <div class="logo-card">
            <div class="logo-title"> Analyzer</div>
            <div class="logo-sub">
                Numerical Stability Platform
            </div>
        </div>
        """, unsafe_allow_html=True)

        # Standard clean professional UI symbol icons 
        menu_items = [
            "⚡  Analyzer",
            "📈  Visualization",
            "📋  Report",
            # "⚙  Settings"
        ]

        page_map = {
            "⚡  Analyzer": "Analyzer",
            "📈  Visualization": "Visualization",
            "📋  Report": "Report",
            "⚙  Settings": "Settings"
        }

        reverse_map = {v: k for k, v in page_map.items()}

        selected = st.radio(
            "Navigation",
            menu_items,
            label_visibility="collapsed",
            index=menu_items.index(
                reverse_map.get(active_section, "⚡  Analyzer")
            )
        )

        return page_map[selected]


# =====================================================
# HEADER
# =====================================================

def render_header(title: str, subtitle: str):
    st.markdown(
        f"""
        <div class='app-header'>
            <div class='app-title'>{title}</div>
            <div class='app-subtitle'>{subtitle}</div>
        </div>
        """,
        unsafe_allow_html=True
    )


# =====================================================
# CODE INPUT
# =====================================================

def render_code_input(code_value: str, height=300):

    if "code_textarea" not in st.session_state:
        st.session_state["code_textarea"] = code_value

    code = st.text_area(
        "C Source Code Input Window",
        height=height,
        key="code_textarea",
        label_visibility="collapsed"
    )

    col1, col2 = st.columns([1, 0.3])

    analyze = col1.button(
        "🚀 Analyze Code",
        key="analyze_btn",
        use_container_width=True
    )

    auto_fix = col2.button(
        "🛠 Auto Fix",
        key="autofix_btn",
        use_container_width=True
    )

    return code, analyze, auto_fix


# =====================================================
# RESULT CARDS
# =====================================================

def render_result_cards(summary_rows):

    if not summary_rows:
        st.info("No runtime-labeled results found.")
        return

    cols = st.columns(3)

    for i, row in enumerate(summary_rows):

        with cols[i % 3]:

            status = row.get("status", "")
            
            # Dynamic Left Accent Border Color Picker
            if "❌" in status or "Unstable" in status:
                border_color = "#ef4444"    # Alert Red
                glow_shadow = "rgba(239, 68, 68, 0.15)"
            elif "⚠️" in status:
                border_color = "#f59e0b"    # Warning Amber
                glow_shadow = "rgba(245, 158, 11, 0.15)"
            else:
                border_color = "#38bdf8"    # Stable Cyan Blue
                glow_shadow = "rgba(56, 189, 248, 0.15)"

            # Injecting pure, isolated HTML directly to guarantee clean execution block rendering
            st.markdown(
                f"""
                <div class='premium-telemetry-card' style='border-left: 4px solid {border_color};'>
                    <div class='telemetry-card-title'>
                        {row.get('function')}
                    </div>
                    <div class='telemetry-muted'>
                        {status}
                    </div>
                    <div class='telemetry-card-reason'>
                        {row.get('reason','')}
                    </div>
                </div>

                <style>
                .premium-telemetry-card {{
                    background: #080c14 !important;
                    border: 1px solid #1e293b;
                    border-radius: 12px !important;
                    padding: 22px !important;
                    box-shadow: inset 0 4px 12px rgba(0, 0, 0, 0.6), 0 8px 16px rgba(0, 0, 0, 0.4) !important;
                    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    margin-bottom: 15px;
                }}

                .premium-telemetry-card:hover {{
                    transform: translateY(-3px);
                    border-color: rgba(56, 189, 248, 0.3) !important;
                    box-shadow: inset 0 4px 12px rgba(0, 0, 0, 0.6), 0 12px 24px {glow_shadow} !important;
                }}

                .telemetry-card-title {{
                    font-family: 'Plus Jakarta Sans', sans-serif !important;
                    color: #f8fafc !important;
                    font-size: 16px !important;
                    font-weight: 700 !important;
                    letter-spacing: -0.01em !important;
                    margin-bottom: 6px !important;
                }}

                .telemetry-muted {{
                    font-family: 'Plus Jakarta Sans', sans-serif !important;
                    font-size: 13px !important;
                    font-weight: 600 !important;
                    color: #94a3b8 !important;
                    margin-bottom: 12px !important;
                }}

                .telemetry-card-reason {{
                    font-family: 'Plus Jakarta Sans', sans-serif !important;
                    color: #cbd5e1 !important;
                    font-size: 13.5px !important;
                    line-height: 1.6 !important;
                }}
                </style>
                """,
                unsafe_allow_html=True
            )


# =====================================================
# GRAPH
# =====================================================

def render_graph(ax, title, description):

    st.markdown(f"**{title}**")

    st.pyplot(ax.figure)

    if description:
        st.markdown(
            f"<div class='muted'>{description}</div>",
            unsafe_allow_html=True
        )


# =====================================================
# REPORT BLOCK
# =====================================================

def render_report_block(title, body_lines):

    st.markdown(f"### {title}")

    for line in body_lines:
        st.write(f"- {line}")