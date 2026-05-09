import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt


def render_sidebar(active_section):
    with st.sidebar:
        st.markdown("# 🧠 Analyzer")
        sections = ["Analyzer", "Visualization", "Report", "Settings"]
        selection = st.radio("Navigation", sections, index=sections.index(active_section) if active_section in sections else 0)
        return selection


def render_header(title: str, subtitle: str):
    st.markdown(f"<div class='app-header'><div class='app-title'>{title}</div><div class='app-subtitle'>{subtitle}</div></div>", unsafe_allow_html=True)


def render_code_input(code_value: str, height=300):
    st.markdown("### Paste your C code")
    code = st.text_area("", value=code_value, height=height, key="code_textarea")
    col1, col2 = st.columns([1, 0.3])
    analyze = col1.button("🚀 Analyze Code", key="analyze_btn", help="Run analysis on the code")
    auto_fix = col2.button("🛠 Auto Fix", key="autofix_btn")
    return code, analyze, auto_fix


def render_result_cards(summary_rows):
    if not summary_rows:
        st.info("No runtime-labeled results found.")
        return

    cols = st.columns(3)
    i = 0
    for row in summary_rows:
        with cols[i % 3]:
            status = row.get('status', '')
            color = '#2b616b'
            if status.startswith('❌'):
                color = '#7b2b2b'
            elif status.startswith('⚠️'):
                color = '#7b6b2b'
            st.markdown(f"<div class='result-card'><div class='card-title' style='color:{color}'>{row.get('function')}</div><div class='muted'>{status}</div><div class='card-reason'>{row.get('reason','')}</div></div>", unsafe_allow_html=True)
        i += 1


def render_graph(ax, title, description):
    st.markdown(f"**{title}**")
    st.pyplot(ax.figure)
    if description:
        st.markdown(f"<div class='muted'>{description}</div>", unsafe_allow_html=True)


def render_report_block(title, body_lines):
    st.markdown(f"### {title}")
    for line in body_lines:
        st.write(f"- {line}")
