import streamlit as st


def inject_styles():
    css = """
    <style>
    /* Root dark background */
    .stApp {
        background-color: #0f1115;
        color: #e6eef3;
    }

    /* Header strip */
    .app-header {
        background-color: #0c0d10;
        padding: 12px 20px;
        border-radius: 8px;
        margin-bottom: 12px;
        box-shadow: 0 1px 6px rgba(0,0,0,0.6);
    }

    .app-title { font-size:24px; font-weight:700; color: #e6eef3; }
    .app-subtitle { font-size:12px; color:#9fb0bd; margin-top:4px }

    /* Textarea styling */
    .code-input textarea { background:#0b0c0f; color:#e6eef3; border-radius:8px; font-family: monospace; }

    /* Card */
    .result-card { background:#0b0c0f; border:1px solid #202429; padding:12px; border-radius:8px; margin-bottom:8px }
    .card-title { font-weight:700; color:#e6eef3 }
    .card-reason { color:#9fb0bd; font-size:12px }

    /* Buttons */
    .primary-btn button { background:#2b616b !important; color:#f2fbff !important; border-radius:10px !important; padding:8px 14px !important }
    .secondary-btn button { background:#1a2428 !important; color:#dbe7ea !important; border-radius:10px !important; padding:6px 12px !important }

    /* Small helper */
    .muted { color:#8b9aa3; font-size:12px }
    </style>
    """
    st.markdown(css, unsafe_allow_html=True)
