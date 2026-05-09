import streamlit as st
from .styles import inject_styles
from .components import render_sidebar, render_header, render_code_input, render_result_cards, render_graph, render_report_block


def render_app(state):
    # state is a dict carrying code, runtime_summary, plots, etc.
    inject_styles()

    # Sidebar
    active = state.get('active_section', 'Analyzer')
    selected = render_sidebar(active)

    # Header
    render_header('Numerical Stability Analyzer', 'Analyze floating-point errors and numerical instability')

    # Switch sections
    if selected == 'Analyzer':
        st.markdown('---')
        # Code input
        code, analyze, auto_fix = render_code_input(state.get('code',''))
        state['code'] = code
        if analyze:
            state['analyze_pressed'] = True
        if auto_fix:
            state['autofix_pressed'] = True

        st.markdown('---')
        st.markdown('### Results')
        render_result_cards(state.get('runtime_summary', []))

    elif selected == 'Visualization':
        st.markdown('### Visualization')
        # placeholder: graphs are rendered by app.py since they rely on analysis
        st.info('Select a detected function in Analyzer to see graphs here.')

    elif selected == 'Report':
        st.markdown('### Report')
        render_report_block('Key Findings', state.get('key_findings', []))
        render_report_block('Suggestions', state.get('suggestions', []))
        render_report_block('Conclusion', state.get('conclusion', []))

    else:
        st.markdown('### Settings')
        st.info('No settings yet')

    return state
