import streamlit as st

def inject_styles():
    css = """
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

    /* =====================================================
    🌌 ULTRA PREMIUM SIDEBAR V2
    ===================================================== */

    section[data-testid="stSidebar"] {
        background: linear-gradient(
            180deg,
            rgba(248,250,252,0.92) 0%,
            rgba(241,245,249,0.88) 100%
        ) !important;

        backdrop-filter: blur(30px) saturate(180%) !important;
        -webkit-backdrop-filter: blur(30px) saturate(180%) !important;

        border-right: 1px solid rgba(148,163,184,0.15) !important;

        box-shadow:
            6px 0 40px rgba(15,23,42,0.06),
            inset -1px 0 rgba(255,255,255,0.8) !important;

        position: relative !important;
    }

    /* Premium Glow Strip */

    section[data-testid="stSidebar"]::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;

        background: linear-gradient(
            180deg,
            #2563eb,
            #3b82f6,
            #60a5fa
        );

        box-shadow: 0 0 25px rgba(37,99,235,0.35);
        z-index: 999;
    }

    /* Sidebar Content */

    section[data-testid="stSidebar"] .st-emotion-cache-6qob1r,
    section[data-testid="stSidebar"] > div:first-child {
        padding-top: 2rem !important;
        padding-left: 1.2rem !important;
        padding-right: 1.2rem !important;
    }

    /* =====================================================
    SIDEBAR BUTTONS
    ===================================================== */

    section[data-testid="stSidebar"] div.stButton {
        margin-bottom: 12px !important;
    }

    section[data-testid="stSidebar"] div.stButton > button {

        width: 100% !important;

        background: rgba(255,255,255,0.85) !important;

        border: 1px solid rgba(226,232,240,0.9) !important;

        border-radius: 16px !important;

        color: #334155 !important;

        height: 54px !important;

        padding-left: 18px !important;

        font-size: 14px !important;
        font-weight: 600 !important;

        text-align: left !important;

        transition: all .25s ease !important;

        box-shadow:
            0 2px 6px rgba(15,23,42,0.04),
            inset 0 1px rgba(255,255,255,0.8) !important;
    }

    /* Hover */

    section[data-testid="stSidebar"] div.stButton > button:hover {

        background: linear-gradient(
            135deg,
            #ffffff 0%,
            #f8fbff 100%
        ) !important;

        border-color: #2563eb !important;

        color: #2563eb !important;

        transform: translateY(-3px);

        box-shadow:
            0 12px 28px rgba(37,99,235,0.18),
            0 0 0 1px rgba(37,99,235,0.08);
    }

    /* Active / Selected */

    section[data-testid="stSidebar"] div.stButton > button:focus {

        background: linear-gradient(
            135deg,
            #eff6ff 0%,
            #dbeafe 100%
        ) !important;

        border: 1px solid rgba(37,99,235,0.25) !important;

        border-left: 5px solid #2563eb !important;

        color: #1d4ed8 !important;

        font-weight: 700 !important;

        box-shadow:
            0 10px 25px rgba(37,99,235,0.15),
            0 0 20px rgba(37,99,235,0.12);
    }

    /* =====================================================
    SIDEBAR TEXT
    ===================================================== */

    section[data-testid="stSidebar"] h1,
    section[data-testid="stSidebar"] h2,
    section[data-testid="stSidebar"] h3 {

        color: #0f172a !important;
        font-weight: 700 !important;
        letter-spacing: -0.03em;
    }

    section[data-testid="stSidebar"] p,
    section[data-testid="stSidebar"] span {

        color: #475569 !important;
        font-size: 14px !important;
    }

    /* Divider */

    section[data-testid="stSidebar"] hr {
        border: none !important;
        height: 1px !important;

        background: linear-gradient(
            90deg,
            transparent,
            rgba(148,163,184,0.4),
            transparent
        ) !important;

        margin: 20px 0 !important;
    }

    /* =====================================================
    SIDEBAR TOGGLE BUTTON
    ===================================================== */

    button[data-testid="sidebar-toggle"] {

        background: white !important;

        border: 1px solid rgba(226,232,240,0.8) !important;

        border-radius: 50% !important;

        width: 42px !important;
        height: 42px !important;

        color: #2563eb !important;

        box-shadow:
            0 4px 15px rgba(15,23,42,0.08) !important;

        transition: all .25s ease !important;
    }

    button[data-testid="sidebar-toggle"]:hover {

        transform: scale(1.08);

        box-shadow:
            0 8px 25px rgba(37,99,235,0.18) !important;

        color: #1d4ed8 !important;
    }

    /* =====================================================
    EXTRA PREMIUM EFFECTS
    ===================================================== */

    section[data-testid="stSidebar"] div.stButton > button::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 16px;
        opacity: 0;
        transition: opacity .25s ease;
        background: linear-gradient(
            135deg,
            rgba(37,99,235,0.05),
            rgba(59,130,246,0.05)
        );
    }

    section[data-testid="stSidebar"] div.stButton > button:hover::before {
        opacity: 1;
    }

    </style>
    """

    st.markdown(css, unsafe_allow_html=True)