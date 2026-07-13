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
        :root {
            --sidebar-bg: linear-gradient(180deg, #0b0f14 0%, #080b10 100%);
            --button-idle-bg: rgba(255, 255, 255, 0.02);
            --button-idle-border: rgba(255, 255, 255, 0.08);
            --button-active-bg: linear-gradient(180deg, #151b22 0%, #10151b 100%);
            --button-active-border: rgba(94, 164, 214, 0.65);
            --glow-color: rgba(94, 164, 214, 0.18);
            --text-muted: #9aa3ad;
            --text-bright: #eef2f7;
        }

        section[data-testid="stSidebar"] {
            background: var(--sidebar-bg) !important;
            border-right: 1px solid rgba(255, 255, 255, 0.06) !important;
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
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }

        div[role="radiogroup"] label:hover {
            transform: translateX(4px);
            background: rgba(255, 255, 255, 0.04) !important;
            border-color: rgba(94, 164, 214, 0.32) !important;
            box-shadow: 0 10px 22px rgba(0, 0, 0, 0.18);
        }

        div[role="radiogroup"] label:has(input:checked) {
            background: linear-gradient(180deg, rgba(20, 26, 33, 0.98) 0%, rgba(13, 18, 24, 0.98) 100%) !important;
            border-color: var(--button-active-border) !important;
            box-shadow:
                0 0 0 1px rgba(94, 164, 214, 0.12),
                0 10px 26px rgba(0, 0, 0, 0.28),
                inset 0 1px 0 rgba(255, 255, 255, 0.04);
            animation: pulseGlow 3s infinite alternate;
        }

        div[role="radiogroup"] label p {
            font-size: 15px !important;
            font-weight: 500 !important;
            letter-spacing: 0.01em !important;
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

        .logo-card {
            background: linear-gradient(180deg, rgba(18, 23, 29, 0.98) 0%, rgba(11, 15, 19, 0.98) 100%);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 18px;
            padding: 22px;
            color: var(--text-bright);
            margin-bottom: 24px;
            box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
        }

        .logo-title {
            font-size: 20px;
            font-weight: 700;
            letter-spacing: -0.03em;
            color: #f8fafc;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .logo-sub {
            font-size: 11px;
            font-weight: 600;
            color: #97a3af;
            margin-top: 6px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
        }

        @keyframes pulseGlow {
            0% { box-shadow: 0 0 0 1px rgba(94, 164, 214, 0.08), 0 10px 22px rgba(0, 0, 0, 0.22); }
            100% { box-shadow: 0 0 0 1px rgba(94, 164, 214, 0.14), 0 12px 28px rgba(0, 0, 0, 0.30); }
        }
        </style>
        """, unsafe_allow_html=True)

        st.markdown("""
        <div class="logo-card ui-animate-in">
            <div class="logo-title">Numerical Stability</div>
            <div class="logo-sub">Floating-point analysis suite</div>
        </div>
        """, unsafe_allow_html=True)

        menu_items = [
            "Analyzer",
            "Visualization",
            "Report",
        ]

        page_map = {
            "Analyzer": "Analyzer",
            "Visualization": "Visualization",
            "Report": "Report",
            "Settings": "Settings"
        }

        reverse_map = {v: k for k, v in page_map.items()}

        selected = st.radio(
            "Navigation",
            menu_items,
            label_visibility="collapsed",
            index=menu_items.index(
                reverse_map.get(active_section, "Analyzer")
            )
        )

        return page_map[selected]


# =====================================================
# HEADER
# =====================================================

def render_header(title: str, subtitle: str):
    st.markdown(
        f"""
        <div class='ui-hero ui-animate-in'>
            <div class='ui-hero-title'>{title}</div>
            <div class='ui-hero-subtitle'>{subtitle}</div>
            <div class='ui-chip-row'>
                <span class='ui-chip'>Static scan</span>
                <span class='ui-chip'>Runtime trace</span>
                <span class='ui-chip'>Error growth</span>
                <span class='ui-chip'>AI remediation</span>
            </div>
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
        "C source code",
        height=height,
        key="code_textarea",
        label_visibility="collapsed"
    )

    col1, col2 = st.columns([1, 0.3])

    analyze = col1.button(
        "Analyze",
        key="analyze_btn",
        use_container_width=True
    )

    auto_fix = col2.button(
        "Auto-fix",
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
                border_color = "#d66a6a"
                glow_shadow = "rgba(214, 106, 106, 0.12)"
            elif "⚠️" in status:
                border_color = "#c89c4a"
                glow_shadow = "rgba(200, 156, 74, 0.12)"
            else:
                border_color = "#5ea4d6"
                glow_shadow = "rgba(94, 164, 214, 0.12)"

            # Injecting pure, isolated HTML directly to guarantee clean execution block rendering
            st.markdown(
                f"""
                <div class='premium-telemetry-card ui-animate-in' style='border-left: 3px solid {border_color};'>
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
                    background: linear-gradient(180deg, #0d1117 0%, #090c10 100%) !important;
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 12px !important;
                    padding: 22px !important;
                    box-shadow: inset 0 1px 0 rgba(255,255,255,0.03), 0 10px 22px rgba(0, 0, 0, 0.28) !important;
                    transition: all 0.2s ease !important;
                    margin-bottom: 15px;
                }}

                .premium-telemetry-card:hover {{
                    transform: translateY(-2px);
                    border-color: rgba(94, 164, 214, 0.22) !important;
                    box-shadow: inset 0 1px 0 rgba(255,255,255,0.03), 0 14px 28px {glow_shadow} !important;
                }}

                .telemetry-card-title {{
                    font-family: 'Inter', sans-serif !important;
                    color: #f8fafc !important;
                    font-size: 16px !important;
                    font-weight: 700 !important;
                    letter-spacing: -0.02em !important;
                    margin-bottom: 6px !important;
                }}

                .telemetry-muted {{
                    font-family: 'Inter', sans-serif !important;
                    font-size: 13px !important;
                    font-weight: 600 !important;
                    color: #9aa3ad !important;
                    margin-bottom: 12px !important;
                }}

                .telemetry-card-reason {{
                    font-family: 'Inter', sans-serif !important;
                    color: #c9d1d9 !important;
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

    st.markdown(f"<div class='ui-section-title'>{title}</div>", unsafe_allow_html=True)

    st.markdown("<div class='ui-surface ui-animate-in'>", unsafe_allow_html=True)
    st.pyplot(ax.figure)
    st.markdown("</div>", unsafe_allow_html=True)

    if description:
        st.markdown(
            f"<div class='muted'>{description}</div>",
            unsafe_allow_html=True
        )


# =====================================================
# REPORT BLOCK
# =====================================================

def render_report_block(title, body_lines):

    st.markdown(f"<div class='ui-section-title'>{title}</div>", unsafe_allow_html=True)

    st.markdown("<div class='ui-surface ui-animate-in'>", unsafe_allow_html=True)
    for line in body_lines:
        st.write(f"- {line}")
    st.markdown("</div>", unsafe_allow_html=True)