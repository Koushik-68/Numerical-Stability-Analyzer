import React, { useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import ComparisonView from "./ComparisonView";
import VisualizationView from "./VisualizationView";
import AstVisualizerView from "./AstVisualizerView";
import PlaygroundView from "./PlaygroundView";
import HeatmapView from "./HeatmapView";

const initialCode = `#include <stdio.h>
#include <math.h>

double compute(double x) {
    return sqrt(x*x + 1) - x;
}

int main() {
    double x = 1000000.0;
    double result = compute(x);
    printf("RESULT_UNSTABLE: %lf\n", result);
    return 0;
}`;

function Icon({ name }) {
  const icons = {
    analyzer: <path d="M6 18l4-4 3 3 6-8" />,
    code: <path d="M10 16l-4-4 4-4M14 8l4 4-4 4M12 6l-2 12" />,
    spark: (
      <path d="M12 2l1.2 4.2L17 7.4l-3.8 1.2L12 13l-1.2-4.4L7 7.4l3.8-1.2L12 2z" />
    ),
    shield: <path d="M12 3l7 3v5c0 4.8-3 8.6-7 10-4-1.4-7-5.2-7-10V6l7-3z" />,
    trend: <path d="M4 18h16M6 14l4-4 3 3 5-6" />,
    wrench: (
      <path d="M14 7a4 4 0 0 0-5.8 4.4L3 17l2 2 5.6-5.2A4 4 0 0 0 18 8l-2.1 2.1L14 7z" />
    ),
    report: <path d="M8 3h8l4 4v14H8zM9 3v5h5" />,
    circle: <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />,
    pulse: <path d="M3 12h4l2-5 3 10 2-5h7" />,
  };

  return (
    <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
      {icons[name] || icons.circle}
    </svg>
  );
}

function Card({ title, value, hint, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-head">
        <Icon name={icon} />
        <span>{title}</span>
      </div>
      <div className="stat-value">{value}</div>
      <div className="stat-hint">{hint}</div>
    </div>
  );
}

function Button({ children, onClick, secondary = false, busy = false }) {
  return (
    <button
      className={`action-button ${secondary ? "secondary" : ""}`}
      onClick={onClick}
      disabled={busy}
    >
      <span>{children}</span>
      <span className={`button-glow ${busy ? "busy" : ""}`} />
    </button>
  );
}

function SectionTitle({ icon, title, subtitle }) {
  return (
    <div className="section-title">
      <div className="section-title-row">
        <Icon name={icon} />
        <h2>{title}</h2>
      </div>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}

function MetricPill({ label, value }) {
  return (
    <div className="pill soft">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function StatusBadge({ status }) {
  const cls = status.includes("Unstable")
    ? "danger"
    : status.includes("Risky")
      ? "warn"
      : "stable";
  return <span className={`badge ${cls}`}>{status}</span>;
}

function LineChart({ title, points, variant = "relative" }) {
  const width = 720;
  const height = 280;
  const padding = 28;
  if (!points?.length) return null;

  const values = points.map((item) =>
    variant === "relative" ? item.relativeError : item.absoluteError,
  );
  const maxValue = Math.max(...values, 1e-12);
  const minValue = Math.min(...values);
  const xStep = (width - padding * 2) / Math.max(points.length - 1, 1);

  const yFor = (value) => {
    const normalized = (value - minValue) / (maxValue - minValue || 1);
    return height - padding - normalized * (height - padding * 2);
  };

  const path = points
    .map((item, index) => {
      const x = padding + index * xStep;
      const y = yFor(
        variant === "relative" ? item.relativeError : item.absoluteError,
      );
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  const area = `${path} L ${width - padding} ${height - padding} L ${padding} ${height - padding} Z`;

  return (
    <div className="chart-card">
      <div className="chart-head">
        <div>
          <h3>{title}</h3>
          <p>
            {variant === "relative"
              ? "Relative error progression"
              : "Absolute error progression"}
          </p>
        </div>
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="chart-svg"
        role="img"
        aria-label={title}
      >
        <defs>
          <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(94, 164, 214, 0.32)" />
            <stop offset="100%" stopColor="rgba(94, 164, 214, 0.02)" />
          </linearGradient>
          <linearGradient id="chartStroke" x1="0" x2="1">
            <stop offset="0%" stopColor="#8dc5e8" />
            <stop offset="100%" stopColor="#4f7f9e" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((tick) => (
          <line
            key={tick}
            x1={padding}
            x2={width - padding}
            y1={padding + (height - padding * 2) * tick}
            y2={padding + (height - padding * 2) * tick}
            className="grid-line"
          />
        ))}
        <path d={area} fill="url(#chartFill)" />
        <path
          d={path}
          fill="none"
          stroke="url(#chartStroke)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {points.map((item, index) => {
          const x = padding + index * xStep;
          const y = yFor(
            variant === "relative" ? item.relativeError : item.absoluteError,
          );
          return (
            <circle key={index} cx={x} cy={y} r="3.5" className="chart-dot" />
          );
        })}
      </svg>
    </div>
  );
}

export default function Dashboard() {
  const [activeView, setActiveView] = useState("analyzer");


  // Code Editor
  const [code, setCode] = useState(initialCode);

  // Status
  const [status, setStatus] = useState("Idle");
  const [error, setError] = useState("");

  // Loading
  const [busy, setBusy] = useState(false);

  // Analysis Results
  const [results, setResults] = useState(null);

  // Visualization
  const [selectedPlot, setSelectedPlot] = useState("");
  const [plotMode, setPlotMode] = useState("relative");

  // Auto Fix
  const [fixResult, setFixResult] = useState(null);
  const [originalCode, setOriginalCode] = useState("");

  // Notification
  const [showNotification, setShowNotification] = useState(false);

  const plotKeys = useMemo(() => {
    return Object.keys(results?.plots || {});
  }, [results]);

  const runAnalysis = async () => {
    setError("");
    setStatus("Analyzing");
    setBusy(true);
    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Analysis failed");
      setResults(payload);
      setSelectedPlot(Object.keys(payload.plots || {})[0] || "");
      setStatus(payload.overallStatus || "Done");
    } catch (err) {
      setError(err.message);
      setStatus("Error");
    } finally {
      setBusy(false);
    }
  };

  const runAutoFix = async () => {
    setError("");
    setStatus("Auto-fixing");
    setBusy(true);
    try {
      setOriginalCode(code);
      const response = await fetch("/api/autofix", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Auto-fix failed");
      setFixResult(payload);
      setStatus("Auto-fix ready");
    } catch (err) {
      setError(err.message);
      setStatus("Error");
    } finally {
      setBusy(false);
    }
  };

  const currentPlot = results?.plots?.[selectedPlot];
  const runtimeSummary = results?.runtimeSummary || [];
  const staticIssues = results?.staticIssues || [];
  const traces = results?.traces || [];

  const onNavigate = (view) => {
    setActiveView(view);
  };

  const renderAnalyzerView = () => (
    <>
      {/* HERO HEADER */}
      <section
        className="hero-panel matte-panel reveal"
        style={{ gridColumn: "2 / -1" }}
      >
        <div className="hero-copy">
          <div className="eyebrow">Analysis workspace</div>
          <h1>Numerical diagnostics</h1>
          <p>Paste code, run analysis, inspect results, and apply fixes.</p>
        </div>

        <div className="hero-actions">
          <Button onClick={runAnalysis} busy={busy}>
            Run analysis
          </Button>
          <Button onClick={runAutoFix} secondary busy={busy}>
            Auto-fix
          </Button>
        </div>
      </section>

      {/* METRICS CARDS */}
      <section className="stats-grid reveal" style={{ gridColumn: "2 / -1" }}>
        <Card
          title="Static findings"
          value={staticIssues.length}
          hint="Detected patterns"
          icon="analyzer"
        />
        <Card
          title="Runtime rows"
          value={runtimeSummary.length}
          hint="Parsed result groups"
          icon="trend"
        />
        <Card
          title="Traces"
          value={traces.length}
          hint="Execution variables"
          icon="pulse"
        />
        <Card
          title="Plots"
          value={plotKeys.length}
          hint="Error growth views"
          icon="report"
        />
      </section>

      {/* SOURCE CODE PANEL */}
      <section
        className="editor-panel matte-panel reveal"
        style={{ gridColumn: "2 / -1" }}
      >
        <SectionTitle icon="code" title="Source code" />
        <div className="editor-frame" style={{ width: "100%" }}>
          <textarea
            className="code-editor"
            value={code}
            onChange={(event) => {
              setCode(event.target.value);
              setOriginalCode("");
              setFixResult(null);
            }}
            spellCheck="false"
            style={{ width: "100%", minHeight: "300px" }}
          />
        </div>

        {/* CONTROL ACTION BUTTONS DIRECTLY BELOW CODE */}
        <div
          className="mini-actions"
          style={{ display: "flex", gap: "12px", marginTop: "16px" }}
        >
          <Button onClick={runAnalysis} busy={busy}>
            Analyze code
          </Button>
          <Button onClick={runAutoFix} secondary busy={busy}>
            Apply auto-fix
          </Button>
        </div>

        {error ? (
          <div className="error-banner" style={{ marginTop: "12px" }}>
            {error}
          </div>
        ) : null}
      </section>

      {/* SOURCE CODE VS AUTO-FIXED CODE SECTION */}
      {fixResult ? (
        <section
          className="compare-panel reveal"
          style={{ gridColumn: "2 / -1", marginTop: "8px" }}
        >
          <div className="compare-grid">
            <div className="matte-panel compare-card">
              <div className="report-card-head">
                <Icon name="code" />
                <span>Source code</span>
              </div>
              <textarea
                className="code-editor compare-textarea"
                value={originalCode || code}
                readOnly
                spellCheck="false"
              />
            </div>

            <div className="matte-panel compare-card">
              <div className="report-card-head">
                <Icon name="spark" />
                <span>Auto-fixed code</span>
              </div>
              <textarea
                className="code-editor compare-textarea"
                value={fixResult.fixedCode || code}
                readOnly
                spellCheck="false"
              />
            </div>
          </div>
        </section>
      ) : null}

      {/* POINTWISE VULNERABILITY & PATCH REPORT (AI EXPLANATION) */}
      {fixResult?.explanation ? (
        <section
          className="reveal"
          style={{ gridColumn: "2 / -1", marginTop: "16px" }}
        >
          <div style={{ marginBottom: "12px" }}>
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                margin: 0,
              }}
            >
              Pointwise Vulnerability & Patch Report
            </h3>
          </div>
          <div
            className="matte-panel report-card"
            style={{
              margin: 0,
              padding: "20px",
              borderLeft: "4px solid #3b82f6",
              animation: "slideUp 0.4s ease-out forwards",
            }}
          >
            <div className="report-card-head" style={{ marginBottom: "8px" }}>
              <Icon name="spark" />
              <span style={{ color: "#3b82f6", fontWeight: "600" }}>
                AI Fix Insights
              </span>
            </div>
            <div
              className="summary-reason"
              style={{
                opacity: 0.95,
                lineHeight: "1.6",
                whiteSpace: "pre-wrap",
                fontSize: "0.95rem",
              }}
            >
              {fixResult.explanation}
            </div>
          </div>
        </section>
      ) : null}

      {/* UNTOUCHED ORIGINAL FAULTS GRID */}
      <section
        className="reveal"
        style={{ gridColumn: "2 / -1", marginTop: "8px" }}
      >
        <div
          className="findings-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "20px",
          }}
        >
          {staticIssues.map((item, index) => (
            <div
              key={`static-${index}`}
              className="matte-panel report-card"
              style={{ height: "100%", margin: 0 }}
            >
              <div className="report-card-head">
                <Icon name="analyzer" />
                <span>Static fault</span>
              </div>
              <div className="summary-title">Pattern detected</div>
              <div className="summary-reason">{item}</div>
            </div>
          ))}

          {runtimeSummary.map((row, index) => (
            <div
              key={`runtime-${index}`}
              className="matte-panel report-card"
              style={{ height: "100%", margin: 0 }}
            >
              <div className="report-card-head">
                <Icon name="trend" />
                <span>Runtime fault</span>
              </div>
              <div className="summary-title">{row.function}</div>
              <div className="summary-reason">{row.reason}</div>
              <div
                className="summary-meta"
                style={{ alignItems: "flex-start", marginTop: "12px" }}
              >
                <StatusBadge status={row.status} />
                <span className="summary-error">{row.error}</span>
              </div>
            </div>
          ))}

          {!staticIssues.length && !runtimeSummary.length ? (
            <div
              className="matte-panel report-card"
              style={{ height: "100%", margin: 0, gridColumn: "1 / -1" }}
            >
              <div className="empty-state">
                No findings yet. Run analysis to populate faults below.
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );



  return (
    <div className="app-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="topbar matte-panel reveal">
        <div className="brand-block">
          <div className="brand-mark">
            <Icon name="spark" />
          </div>
          <div>
            <div className="brand-title">Numerical Stability Analyzer</div>
          </div>
        </div>
        <div className="topbar-status">
          <span className="status-dot" />
          <span>{status}</span>
        </div>
      </header>

      <main className="layout-grid">
        <Sidebar
          status={status}
          staticCount={staticIssues.length}
          runtimeCount={runtimeSummary.length}
          plotCount={plotKeys.length}
          activeView={activeView}
          onNavigate={onNavigate}
          onRunAnalysis={runAnalysis}
          onAutoFix={runAutoFix}
        />

        {showNotification && (
          <div className="notification success">
            Code auto-fixed successfully!
          </div>
        )}

        {activeView === "comparison" && (
          <ComparisonView
            code={originalCode || code}
            onApplyFixedCode={(fixedCode) => {
              setOriginalCode(code);
              setCode(fixedCode);
              setFixResult({ fixedCode, explanation: "Applied safety patches from Comparison view." });
              setActiveView("analyzer");
            }}
          />
        )}

        {activeView === "visualization" && <VisualizationView code={code} />}

        {activeView === "ast_visualizer" && <AstVisualizerView code={code} />}

        {activeView === "playground" && <PlaygroundView />}

        {activeView === "heatmap" && <HeatmapView />}

        {activeView !== "comparison" &&
          activeView !== "visualization" &&
          activeView !== "ast_visualizer" &&
          activeView !== "playground" &&
          activeView !== "heatmap" &&
          renderAnalyzerView()}
      </main>

      {/* Scoped Animations styling */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
