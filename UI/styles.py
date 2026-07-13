import streamlit as st

def inject_styles():
    css = """
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

    :root {
        --bg-app: #050608;
        --bg-panel: #0b0f14;
        --bg-panel-2: #10151c;
        --border-soft: rgba(255, 255, 255, 0.08);
        --border-strong: rgba(255, 255, 255, 0.14);
        --text-main: #e5e7eb;
        --text-muted: #9ca3af;
        --accent: #5ea4d6;
        --accent-soft: rgba(94, 164, 214, 0.12);
        --shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
    }

    .stApp {
        background:
            radial-gradient(circle at top, rgba(94, 164, 214, 0.08), transparent 34%),
            linear-gradient(180deg, #07090d 0%, #040506 100%) !important;
        font-family: 'Inter', system-ui, sans-serif !important;
        color: var(--text-main) !important;
        position: relative;
        overflow-x: hidden;
    }

    .stApp::before,
    .stApp::after {
        content: "";
        position: fixed;
        inset: auto;
        pointer-events: none;
        z-index: 0;
        filter: blur(20px);
        opacity: 0.55;
        animation: drift 16s ease-in-out infinite;
    }

    .stApp::before {
        width: 280px;
        height: 280px;
        left: -80px;
        top: 110px;
        background: radial-gradient(circle, rgba(94, 164, 214, 0.16) 0%, rgba(94, 164, 214, 0.02) 65%, transparent 75%);
    }

    .stApp::after {
        width: 340px;
        height: 340px;
        right: -120px;
        top: 40px;
        background: radial-gradient(circle, rgba(148, 163, 184, 0.08) 0%, rgba(148, 163, 184, 0.01) 62%, transparent 78%);
        animation-delay: -6s;
    }

    section[data-testid="stSidebar"] {
        background:
            linear-gradient(180deg, rgba(12, 16, 21, 0.96) 0%, rgba(7, 10, 14, 0.98) 100%) !important;
        border-right: 1px solid var(--border-soft) !important;
        box-shadow: 8px 0 30px rgba(0, 0, 0, 0.35) !important;
    }

    section[data-testid="stSidebar"]::before {
        content: "";
        position: absolute;
        inset: 0 auto 0 0;
        width: 1px;
        background: linear-gradient(180deg, rgba(94, 164, 214, 0.8), rgba(94, 164, 214, 0.15));
        opacity: 0.9;
    }

    .main .block-container {
        padding-top: 2.5rem !important;
        padding-bottom: 3rem !important;
        max-width: 1200px !important;
        position: relative;
        z-index: 1;
    }

    h1, h2, h3, h4, h5 {
        font-family: 'Inter', system-ui, sans-serif !important;
        letter-spacing: -0.03em !important;
        color: var(--text-main) !important;
    }

    p, span, label, div {
        color: var(--text-main);
    }

    hr {
        border: 0 !important;
        height: 1px !important;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent) !important;
        margin: 2rem 0 !important;
    }

    div[data-testid="stTextArea"] textarea {
        background: linear-gradient(180deg, #0a0d12 0%, #080b0f 100%) !important;
        color: #f3f4f6 !important;
        border: 1px solid rgba(255,255,255,0.10) !important;
        border-radius: 14px !important;
        font-family: 'JetBrains Mono', monospace !important;
        font-size: 13.5px !important;
        line-height: 1.65 !important;
        padding: 18px !important;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.03), inset 0 12px 24px rgba(0,0,0,0.45) !important;
        transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease !important;
    }

    div[data-testid="stTextArea"] textarea:focus {
        border-color: rgba(94, 164, 214, 0.75) !important;
        box-shadow: 0 0 0 1px rgba(94, 164, 214, 0.18), inset 0 12px 24px rgba(0,0,0,0.45) !important;
        transform: translateY(-1px);
    }

    div.stButton > button {
        background:
            linear-gradient(180deg, rgba(24, 29, 36, 0.98) 0%, rgba(12, 16, 22, 0.98) 100%) !important;
        color: var(--text-main) !important;
        border: 1px solid rgba(255,255,255,0.09) !important;
        border-radius: 12px !important;
        padding: 0.75rem 1.1rem !important;
        font-size: 14px !important;
        font-weight: 600 !important;
        box-shadow: 0 12px 26px rgba(0, 0, 0, 0.30) !important;
        transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease !important;
        position: relative;
        overflow: hidden;
    }

    div.stButton > button:hover {
        border-color: rgba(94, 164, 214, 0.55) !important;
        transform: translateY(-2px);
        box-shadow: 0 16px 32px rgba(0, 0, 0, 0.42) !important;
        background:
            linear-gradient(180deg, rgba(28, 34, 42, 0.98) 0%, rgba(14, 19, 25, 0.98) 100%) !important;
    }

    div.stButton > button::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.08) 40%, transparent 65%);
        transform: translateX(-120%);
        transition: transform 0.7s ease;
    }

    div.stButton > button:hover::after {
        transform: translateX(120%);
    }

    div[data-testid="metric-container"] {
        background: linear-gradient(180deg, #0d1117 0%, #090c10 100%) !important;
        border: 1px solid rgba(255,255,255,0.08) !important;
        border-radius: 14px !important;
        box-shadow: var(--shadow) !important;
        transition: transform 0.2s ease, border-color 0.2s ease;
    }

    div[data-testid="metric-container"]:hover {
        transform: translateY(-2px);
        border-color: rgba(94, 164, 214, 0.22) !important;
    }

    div.stAlert {
        background: rgba(10, 13, 17, 0.96) !important;
        border: 1px solid var(--border-soft) !important;
        border-radius: 12px !important;
        color: var(--text-main) !important;
    }

    .ui-hero {
        position: relative;
        padding: 1.4rem 1.4rem 1.2rem 1.4rem;
        border: 1px solid rgba(255,255,255,0.08);
        background:
            linear-gradient(180deg, rgba(16, 20, 26, 0.96) 0%, rgba(10, 13, 17, 0.96) 100%);
        border-radius: 18px;
        box-shadow: 0 18px 40px rgba(0, 0, 0, 0.30);
        overflow: hidden;
        margin-bottom: 1.2rem;
    }

    .ui-hero::before {
        content: "";
        position: absolute;
        inset: -1px;
        border-radius: 18px;
        padding: 1px;
        background: linear-gradient(135deg, rgba(94,164,214,0.4), rgba(255,255,255,0.04), rgba(94,164,214,0.1));
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
    }

    .ui-hero-title {
        font-size: 1.9rem;
        font-weight: 700;
        letter-spacing: -0.05em;
        color: #f8fafc;
        margin-bottom: 0.35rem;
    }

    .ui-hero-subtitle {
        color: #a4adb7;
        font-size: 0.97rem;
        line-height: 1.6;
        max-width: 760px;
    }

    .ui-chip-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
        margin-top: 1rem;
    }

    .ui-chip {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        padding: 0.45rem 0.75rem;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(255,255,255,0.03);
        color: #d9e2ea;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.02em;
    }

    .ui-chip::before {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 999px;
        background: rgba(94,164,214,0.9);
        box-shadow: 0 0 10px rgba(94,164,214,0.35);
    }

    .ui-section-title {
        font-size: 1.05rem;
        color: #f8fafc;
        font-weight: 700;
        letter-spacing: -0.03em;
        margin: 1rem 0 0.85rem 0;
    }

    .ui-surface {
        background: linear-gradient(180deg, rgba(16, 20, 26, 0.96), rgba(9, 12, 16, 0.96));
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 16px;
        box-shadow: 0 18px 36px rgba(0,0,0,0.26);
        padding: 1rem;
    }

    @keyframes drift {
        0% { transform: translate3d(0, 0, 0) scale(1); }
        50% { transform: translate3d(0, 18px, 0) scale(1.05); }
        100% { transform: translate3d(0, 0, 0) scale(1); }
    }

    @keyframes floatIn {
        from {
            opacity: 0;
            transform: translateY(12px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .ui-animate-in {
        animation: floatIn 0.5s ease both;
    }

    button[data-testid="sidebar-toggle"] {
        background: #0e1319 !important;
        border: 1px solid var(--border-soft) !important;
        color: var(--text-main) !important;
        box-shadow: var(--shadow) !important;
    }

    button[data-testid="sidebar-toggle"]:hover {
        border-color: rgba(94, 164, 214, 0.45) !important;
    }

    </style>
    """

    st.markdown(css, unsafe_allow_html=True)