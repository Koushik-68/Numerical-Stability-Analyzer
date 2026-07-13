import React, { useState, useEffect, useMemo } from "react";

function Icon({ name }) {
  const icons = {
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    alert: <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01" />,
    check: <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3" />,
    cross: <path d="M18 6L6 18M6 6l12 12" />,
    spark: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />,
    arrowRight: <path d="M5 12h14M12 5l7 7-7 7" />,
    print: <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z" />
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="comp-icon"
      style={{ width: "20px", height: "20px" }}
    >
      {icons[name]}
    </svg>
  );
}

// LCS-based Diff lines algorithm
function diffLines(oldStr, newStr) {
  const oldLines = oldStr ? oldStr.split("\n") : [];
  const newLines = newStr ? newStr.split("\n") : [];
  
  const dp = Array(oldLines.length + 1)
    .fill(null)
    .map(() => Array(newLines.length + 1).fill(0));

  for (let i = 1; i <= oldLines.length; i++) {
    for (let j = 1; j <= newLines.length; j++) {
      if (oldLines[i - 1] === newLines[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let i = oldLines.length;
  let j = newLines.length;
  const result = [];

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && oldLines[i - 1] === newLines[j - 1]) {
      result.unshift({ type: "unchanged", value: oldLines[i - 1], oldLine: i, newLine: j });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      result.unshift({ type: "added", value: newLines[j - 1], oldLine: null, newLine: j });
      j--;
    } else {
      result.unshift({ type: "removed", value: oldLines[i - 1], oldLine: i, newLine: null });
      i--;
    }
  }

  return result;
}

function getSideBySideDiff(oldStr, newStr) {
  const diffs = diffLines(oldStr, newStr);
  const sideBySide = [];
  
  const leftCol = [];
  const rightCol = [];
  
  diffs.forEach((item) => {
    if (item.type === "unchanged") {
      flushQueue(leftCol, rightCol, sideBySide);
      sideBySide.push({
        left: { type: "unchanged", value: item.value, lineNum: item.oldLine },
        right: { type: "unchanged", value: item.value, lineNum: item.newLine }
      });
    } else if (item.type === "removed") {
      leftCol.push({ type: "removed", value: item.value, lineNum: item.oldLine });
    } else if (item.type === "added") {
      rightCol.push({ type: "added", value: item.value, lineNum: item.newLine });
    }
  });
  
  flushQueue(leftCol, rightCol, sideBySide);
  return sideBySide;
}

function flushQueue(leftCol, rightCol, sideBySide) {
  const max = Math.max(leftCol.length, rightCol.length);
  for (let k = 0; k < max; k++) {
    sideBySide.push({
      left: leftCol[k] || { type: "empty", value: "", lineNum: "" },
      right: rightCol[k] || { type: "empty", value: "", lineNum: "" }
    });
  }
  leftCol.length = 0;
  rightCol.length = 0;
}

// Score formula
const calculateStabilityScore = (analysis) => {
  if (!analysis) return 0;
  let score = 100;
  
  const staticIssuesCount = analysis.staticIssues?.length || 0;
  score -= staticIssuesCount * 15;
  
  const summary = analysis.runtimeSummary || [];
  summary.forEach((row) => {
    const status = row.status || "";
    if (status.includes("Unstable") || status.includes("❌")) {
      score -= 25;
    } else if (status.includes("Risky") || status.includes("⚠️")) {
      score -= 10;
    } else if (status.includes("Potentially")) {
      score -= 5;
    }
  });
  
  return Math.max(0, Math.min(100, score));
};

const getMaxRelativeError = (analysis) => {
  if (!analysis) return 0;
  let maxErr = 0;
  const plots = analysis.plots || {};
  Object.values(plots).forEach((plot) => {
    const points = plot.points || [];
    points.forEach((pt) => {
      const err = parseFloat(pt.relativeError);
      if (!isNaN(err) && err > maxErr) {
        maxErr = err;
      }
    });
  });
  return maxErr;
};

const getRuntimeWarningsCount = (analysis) => {
  if (!analysis) return 0;
  const summary = analysis.runtimeSummary || [];
  return summary.filter((row) => !row.status.includes("✅")).length;
};

const formatScientific = (num) => {
  if (num === 0) return "0";
  if (num < 1e-4 || num > 1e4) {
    return num.toExponential(4);
  }
  return num.toFixed(6);
};

export default function ComparisonView({ code, onApplyFixedCode }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const fetchComparison = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Failed to compile comparison.");
      setData(payload);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComparison();
  }, [code]);

  const originalScore = data ? calculateStabilityScore(data.originalAnalysis) : 0;
  const fixedScore = data ? calculateStabilityScore(data.fixedAnalysis) : 0;

  const originalError = data ? getMaxRelativeError(data.originalAnalysis) : 0;
  const fixedError = data ? getMaxRelativeError(data.fixedAnalysis) : 0;

  const originalWarnings = data ? getRuntimeWarningsCount(data.originalAnalysis) : 0;
  const fixedWarnings = data ? getRuntimeWarningsCount(data.fixedAnalysis) : 0;

  const staticReduced = data
    ? Math.max(
        0,
        (data.originalAnalysis?.staticIssues?.length || 0) -
          (data.fixedAnalysis?.staticIssues?.length || 0)
      )
    : 0;

  const sideBySideLines = data ? getSideBySideDiff(data.originalCode, data.fixedCode) : [];



  return (
    <section className="comparison-page matte-panel reveal" style={{ gridColumn: "2 / -1" }}>
      {/* Scope Style Injections */}
      <style>{`
        .comparison-layout {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: 16px;
        }

        .header-comp {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border);
          padding-bottom: 16px;
        }

        .header-comp h2 {
          margin: 0;
          font-size: 1.6rem;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .header-comp p {
          margin: 4px 0 0;
          color: var(--muted);
          font-size: 0.9rem;
        }

        .metrics-grid-comp {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .metric-card-comp {
          background: linear-gradient(180deg, rgba(25, 33, 44, 0.4) 0%, rgba(12, 17, 24, 0.6) 100%);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 20px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }

        .metric-card-comp:hover {
          border-color: var(--blue-soft);
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
        }

        .metric-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          color: var(--muted);
          font-weight: 500;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .metric-comparison {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .val-original {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--red);
          text-decoration: line-through;
          opacity: 0.7;
        }

        .val-arrow {
          display: flex;
          align-items: center;
          color: var(--muted);
        }

        .val-fixed {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--green);
          text-shadow: 0 0 10px rgba(63, 185, 80, 0.25);
        }

        .metric-label-comp {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text);
        }

        .delta-badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 8px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          margin-top: 8px;
        }

        .delta-badge.positive {
          background-color: rgba(34, 197, 94, 0.15);
          color: var(--green);
          border: 1px solid rgba(34, 197, 94, 0.25);
        }

        .delta-badge.negative {
          background-color: rgba(239, 68, 68, 0.15);
          color: var(--red);
          border: 1px solid rgba(239, 68, 68, 0.25);
        }

        .delta-badge.neutral {
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--muted);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Side by Side Diff Viewer */
        .diff-viewer-panel {
          border: 1px solid var(--border);
          background: rgba(10, 15, 22, 0.9);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow);
        }

        .diff-header-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid var(--border);
          background: rgba(18, 24, 32, 0.95);
          padding: 12px 24px;
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: 0.02em;
        }

        .diff-header-col {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .diff-header-col.original {
          color: var(--muted);
        }

        .diff-header-col.fixed {
          color: var(--blue);
        }

        .diff-content {
          max-height: 500px;
          overflow-y: auto;
          font-family: "JetBrains Mono", "Courier New", Courier, monospace;
          font-size: 0.85rem;
        }

        .diff-line-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid rgba(255, 255, 255, 0.02);
        }

        .diff-half-pane {
          display: flex;
          width: 100%;
          min-width: 0;
          white-space: pre-wrap;
          word-break: break-all;
        }

        .diff-pane-ln {
          width: 42px;
          min-width: 42px;
          text-align: right;
          padding-right: 12px;
          color: #4b5563;
          user-select: none;
          background: rgba(10, 14, 20, 0.4);
          border-right: 1px solid rgba(255, 255, 255, 0.03);
          font-size: 0.75rem;
          padding-top: 4px;
          padding-bottom: 4px;
        }

        .diff-pane-content {
          padding: 4px 12px;
          width: 100%;
          min-height: 22px;
          display: flex;
          align-items: center;
          font-size: 0.8rem;
          line-height: 1.4;
        }

        /* Code states highlights */
        .diff-half-pane.removed {
          background-color: rgba(248, 81, 73, 0.12);
        }

        .diff-half-pane.removed .diff-pane-ln {
          background-color: rgba(248, 81, 73, 0.22);
          color: #f85149;
        }

        .diff-half-pane.removed .diff-pane-content {
          color: #ff8585;
          text-decoration: line-through;
          opacity: 0.95;
        }

        .diff-half-pane.added {
          background-color: rgba(56, 244, 129, 0.08);
        }

        .diff-half-pane.added .diff-pane-ln {
          background-color: rgba(56, 244, 129, 0.18);
          color: #3fb950;
        }

        .diff-half-pane.added .diff-pane-content {
          color: #a3f7b5;
          font-weight: 500;
        }

        .diff-half-pane.empty {
          background-color: rgba(0, 0, 0, 0.15);
        }

        .diff-half-pane.empty .diff-pane-ln {
          color: transparent;
        }

        .apply-fixed-container {
          display: flex;
          justify-content: flex-end;
          gap: 16px;
          margin-top: 8px;
        }

        .spinner-container-comp {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 350px;
          color: var(--muted);
          gap: 16px;
        }

        .spinner-comp {
          width: 48px;
          height: 48px;
          border: 4px solid var(--border);
          border-top-color: var(--blue);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        /* Comparative Chart Styles */
        .chart-viz-card-comp {
          background: linear-gradient(180deg, rgba(16, 20, 26, 0.8) 0%, rgba(9, 12, 16, 0.9) 100%);
          border: 1px solid var(--border);
          border-radius: 16px;
          position: relative;
          padding: 24px;
          margin-top: 24px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }
        .viz-title-row-comp {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .viz-title-row-comp h3 {
          margin: 0;
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        .viz-select-comp {
          background: rgba(18, 24, 32, 0.95);
          color: var(--text);
          border: 1px solid var(--border-strong);
          border-radius: 8px;
          padding: 6px 12px;
          font-size: 0.85rem;
          outline: none;
          cursor: pointer;
        }
        .chart-legend-comp {
          display: flex;
          gap: 16px;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .legend-item-comp {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .legend-color-comp {
          width: 14px;
          height: 14px;
          border-radius: 4px;
        }
        .legend-color-comp.original {
          background: var(--red);
          box-shadow: 0 0 8px rgba(239, 68, 68, 0.4);
        }
        .legend-color-comp.fixed {
          background: var(--green);
          box-shadow: 0 0 8px rgba(34, 197, 94, 0.4);
        }
        .svg-container-comp {
          background: rgba(5, 7, 10, 0.95);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.03);
          padding: 16px;
          position: relative;
        }
        .chart-svg-comp {
          width: 100%;
          height: auto;
          overflow: visible;
        }
        .grid-line-viz-comp {
          stroke: rgba(255, 255, 255, 0.04);
          stroke-dasharray: 2 4;
        }
        .axis-line-comp {
          stroke: rgba(255, 255, 255, 0.15);
          stroke-width: 1.5;
        }
        .axis-text-comp {
          fill: var(--muted);
          font-size: 10px;
          font-family: sans-serif;
        }
        .path-original-comp {
          stroke: var(--red);
          stroke-width: 3.5;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          filter: drop-shadow(0px 0px 4px rgba(239, 68, 68, 0.3));
        }
        .path-fixed-comp {
          stroke: var(--green);
          stroke-width: 3.5;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          filter: drop-shadow(0px 0px 4px rgba(34, 197, 94, 0.3));
        }
        .dot-original-comp {
          fill: var(--red);
          stroke: #000;
          stroke-width: 1.5;
        }
        .dot-fixed-comp {
          fill: var(--green);
          stroke: #000;
          stroke-width: 1.5;
        }

        /* Standard & Professional PDF Print Styles */
        @media print {
          @page {
            size: A4 portrait;
            margin: 15mm 15mm;
          }

          body, html, #root, .app-shell, .layout-grid {
            background: #ffffff !important;
            color: #0f172a !important;
            box-shadow: none !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          /* Hide all UI layout elements */
          aside,
          .sidebar-panel,
          .topbar,
          .apply-fixed-container,
          .action-button,
          .viz-select-comp,
          button,
          header {
            display: none !important;
          }

          /* Expand layout container to span A4 pages */
          .comparison-page,
          .comparison-layout {
            grid-column: 1 / -1 !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            display: block !important;
          }

          .header-comp {
            border-bottom: 2px solid #cbd5e1 !important;
            padding-bottom: 8px !important;
            margin-bottom: 24px !important;
          }

          .header-comp h2 {
            color: #0f172a !important;
            font-size: 26px !important;
            margin: 0 0 6px 0 !important;
          }

          .header-comp p {
            color: #475569 !important;
            font-size: 0.95rem !important;
          }

          /* Metrics layout in PDF */
          .metrics-grid-comp {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 16px !important;
            margin-bottom: 24px !important;
            page-break-inside: avoid;
          }

          .metric-card-comp {
            background: #f8fafc !important;
            border: 1px solid #cbd5e1 !important;
            color: #0f172a !important;
            box-shadow: none !important;
            transform: none !important;
            padding: 16px !important;
            page-break-inside: avoid;
          }

          .metric-header {
            color: #475569 !important;
          }

          .val-original {
            color: #dc2626 !important;
          }

          .val-fixed {
            color: #16a34a !important;
            text-shadow: none !important;
          }

          .metric-label-comp {
            color: #334155 !important;
          }

          .delta-badge {
            font-size: 0.75rem !important;
          }

          .delta-badge.positive {
            background-color: #f0fdf4 !important;
            color: #16a34a !important;
            border: 1px solid #bbf7d0 !important;
          }

          .delta-badge.neutral {
            background-color: #f1f5f9 !important;
            color: #64748b !important;
            border: 1px solid #e2e8f0 !important;
          }

          /* SVG Chart Print Styles */
          .chart-viz-card-comp {
            background: #f8fafc !important;
            border: 1px solid #cbd5e1 !important;
            color: #0f172a !important;
            box-shadow: none !important;
            padding: 20px !important;
            margin-top: 24px !important;
            margin-bottom: 24px !important;
            page-break-inside: avoid;
          }

          .svg-container-comp {
            background: #ffffff !important;
            border: 1px solid #cbd5e1 !important;
            padding: 8px !important;
          }

          .grid-line-viz-comp {
            stroke: #e2e8f0 !important;
          }

          .axis-line-comp {
            stroke: #475569 !important;
          }

          .axis-text-comp {
            fill: #475569 !important;
          }

          .path-original-comp {
            stroke: #dc2626 !important;
            filter: none !important;
          }

          .path-fixed-comp {
            stroke: #16a34a !important;
            filter: none !important;
          }

          .dot-original-comp {
            fill: #dc2626 !important;
          }

          .dot-fixed-comp {
            fill: #16a34a !important;
          }

          /* Code Diff Block Print Styles */
          .diff-viewer-panel {
            background: #ffffff !important;
            border: 1px solid #cbd5e1 !important;
            color: #0f172a !important;
            box-shadow: none !important;
            margin-top: 24px !important;
            page-break-inside: auto;
          }

          .diff-header-row {
            background: #f1f5f9 !important;
            border-bottom: 1px solid #cbd5e1 !important;
            color: #0f172a !important;
          }

          .diff-content {
            max-height: none !important;
            overflow: visible !important;
          }

          .diff-line-row {
            page-break-inside: avoid;
          }

          .diff-half-pane {
            background: #ffffff !important;
          }

          .diff-pane-ln {
            background: #f8fafc !important;
            color: #64748b !important;
            border-right: 1px solid #cbd5e1 !important;
          }

          .diff-pane-content {
            color: #0f172a !important;
            white-space: pre-wrap !important;
          }

          .diff-half-pane.removed {
            background-color: #fee2e2 !important;
          }

          .diff-half-pane.removed .diff-pane-ln {
            background-color: #fecaca !important;
            color: #dc2626 !important;
          }

          .diff-half-pane.removed .diff-pane-content {
            color: #991b1b !important;
          }

          .diff-half-pane.added {
            background-color: #dcfce7 !important;
          }

          .diff-half-pane.added .diff-pane-ln {
            background-color: #bbf7d0 !important;
            color: #16a34a !important;
          }

          .diff-half-pane.added .diff-pane-content {
            color: #166534 !important;
          }

          .diff-half-pane.empty {
            background-color: #f8fafc !important;
          }
        }
      `}</style>

      {/* HEADER SECTION */}
      <div className="header-comp">
        <div>
          <h2>Baseline vs Improved Comparison</h2>
          <p>Analyzing side-by-side numerical verification and structural changes</p>
        </div>
        <div className="apply-fixed-container" style={{ display: "flex", gap: "12px" }}>
          <button
            className="action-button secondary"
            onClick={fetchComparison}
            disabled={loading}
            style={{ padding: "10px 18px" }}
          >
            Re-run Comparison
          </button>
          <button
            className="action-button"
            onClick={() => window.print()}
            disabled={loading}
            style={{
              padding: "10px 18px",
              background: "var(--blue-deep)",
              borderColor: "var(--blue-deep)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Icon name="print" />
            <span>Export PDF Report</span>
          </button>
        </div>
      </div>

      {loading ? (
        <div className="spinner-container-comp">
          <div className="spinner-comp"></div>
          <p>Running pipeline compilation and compiling high-precision verification matrices...</p>
        </div>
      ) : error ? (
        <div className="error-banner" style={{ marginTop: "20px", padding: "16px" }}>
          <p style={{ fontWeight: 600, margin: "0 0 8px" }}>Pipeline execution error</p>
          <p style={{ margin: 0, opacity: 0.9 }}>{error}</p>
        </div>
      ) : !data ? (
        <div className="empty-state large">
          No comparison analysis cached. Click "Re-run Comparison" to load data.
        </div>
      ) : (
        <div className="comparison-layout">
          {/* METRICS GRID */}
          <div className="metrics-grid-comp">
            {/* Card 1: Stability Score */}
            <div className="metric-card-comp">
              <div className="metric-header">
                <span>Stability Score</span>
                <Icon name="shield" />
              </div>
              <div className="metric-comparison">
                <span className="val-original">{originalScore}</span>
                <span className="val-arrow"><Icon name="arrowRight" /></span>
                <span className="val-fixed">{fixedScore}</span>
              </div>
              <div className="metric-label-comp">Numerical Stability Rating</div>
              {fixedScore > originalScore ? (
                <div className="delta-badge positive">
                  +{fixedScore - originalScore}% Improvement
                </div>
              ) : (
                <div className="delta-badge neutral">No Rating Change</div>
              )}
            </div>

            {/* Card 2: Max Relative Error */}
            <div className="metric-card-comp">
              <div className="metric-header">
                <span>Max Relative Error</span>
                <Icon name="spark" />
              </div>
              <div className="metric-comparison">
                <span className="val-original" style={{ fontSize: "1.2rem" }}>
                  {formatScientific(originalError)}
                </span>
                <span className="val-arrow"><Icon name="arrowRight" /></span>
                <span className="val-fixed" style={{ fontSize: "1.3rem" }}>
                  {formatScientific(fixedError)}
                </span>
              </div>
              <div className="metric-label-comp">Mathematical Deviation</div>
              {originalError > fixedError ? (
                <div className="delta-badge positive">
                  Precision Stabilized
                </div>
              ) : originalError === 0 && fixedError === 0 ? (
                <div className="delta-badge positive">
                  Zero Error Convergence
                </div>
              ) : (
                <div className="delta-badge neutral">No Precision Change</div>
              )}
            </div>

            {/* Card 3: Runtime Warnings */}
            <div className="metric-card-comp">
              <div className="metric-header">
                <span>Runtime Warnings</span>
                <Icon name="alert" />
              </div>
              <div className="metric-comparison">
                <span className="val-original">{originalWarnings}</span>
                <span className="val-arrow"><Icon name="arrowRight" /></span>
                <span className="val-fixed" style={{ color: fixedWarnings > 0 ? "var(--amber)" : "var(--green)" }}>
                  {fixedWarnings}
                </span>
              </div>
              <div className="metric-label-comp">Numerical Pipeline Alert States</div>
              {originalWarnings > fixedWarnings ? (
                <div className="delta-badge positive">
                  -{originalWarnings - fixedWarnings} Alerts Resolved
                </div>
              ) : (
                <div className="delta-badge neutral">0 Warnings Triggered</div>
              )}
            </div>

            {/* Card 4: Unstable Patterns Reduced */}
            <div className="metric-card-comp">
              <div className="metric-header">
                <span>Patterns Reduced</span>
                <Icon name="check" />
              </div>
              <div className="metric-comparison" style={{ padding: "6px 0" }}>
                <span className="val-fixed" style={{ fontSize: "2rem" }}>
                  {staticReduced}
                </span>
              </div>
              <div className="metric-label-comp">Removed AST Vulnerabilities</div>
              {staticReduced > 0 ? (
                <div className="delta-badge positive">
                  {staticReduced} Potential Failures Avoided
                </div>
              ) : (
                <div className="delta-badge neutral">No Patterns Flagged</div>
              )}
            </div>
          </div>



          {/* CODE DIFF VIEWER */}
          <div className="diff-viewer-panel">
            <div className="diff-header-row">
              <div className="diff-header-col original">
                <Icon name="cross" />
                <span>Original Code (Baseline)</span>
              </div>
              <div className="diff-header-col fixed">
                <Icon name="check" />
                <span>Auto-Fixed Code (Optimized)</span>
              </div>
            </div>

            <div className="diff-content">
              {sideBySideLines.map((row, index) => {
                const leftClass =
                  row.left.type === "removed"
                    ? "removed"
                    : row.left.type === "empty"
                    ? "empty"
                    : "";
                const rightClass =
                  row.right.type === "added"
                    ? "added"
                    : row.right.type === "empty"
                    ? "empty"
                    : "";

                return (
                  <div className="diff-line-row" key={index}>
                    {/* Left Pane (Original) */}
                    <div className={`diff-half-pane ${leftClass}`}>
                      <div className="diff-pane-ln">{row.left.lineNum}</div>
                      <div className="diff-pane-content">{row.left.value}</div>
                    </div>
                    {/* Right Pane (Fixed) */}
                    <div className={`diff-half-pane ${rightClass}`}>
                      <div className="diff-pane-ln">{row.right.lineNum}</div>
                      <div className="diff-pane-content">{row.right.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ACTION FOOTER */}
          <div className="apply-fixed-container" style={{ borderTop: "1px solid var(--border)", paddingTop: "20px" }}>
            <p style={{ alignSelf: "center", margin: 0, color: "var(--muted)", fontSize: "0.9rem" }}>
              Would you like to import this auto-fixed safety patched code into your active workspace?
            </p>
            <button
              className="action-button"
              onClick={() => onApplyFixedCode(data.fixedCode)}
              style={{ padding: "12px 24px" }}
            >
              Apply Patches to Workspace
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
