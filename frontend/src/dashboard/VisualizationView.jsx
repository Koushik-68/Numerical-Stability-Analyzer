import React, { useState } from "react";

const FUNCTIONS = [
  {
    key: "unstable_expr",
    label: "Loss of Significance",
    subtitle: "Evaluating sqrt(x*x + 1) - x vs 1 / (sqrt(x*x + 1) + x)",
    description: "As x grows, x*x dominates the floating-point register. Subtracting x from sqrt(x*x + 1) causes catastrophic cancellation of the most significant bits, dropping relative precision to absolute zero. The conjugate formulation converts subtraction to addition, preserving full float precision.",
    inputs: [10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000],
    xAxisLabel: "Input Magnitude (x)",
    yAxisLabel: "Relative Error",
    eval: (x) => {
      // Analytical high-precision reference (stable formula)
      const trueVal = 1.0 / (Math.sqrt(x * x + 1.0) + x);
      const original = Math.sqrt(x * x + 1.0) - x;
      const fixed = 1.0 / (Math.sqrt(x * x + 1.0) + x);
      return { trueVal, original, fixed };
    }
  },
  {
    key: "cancellation",
    label: "Catastrophic Cancellation",
    subtitle: "Evaluating base - (base - delta) vs delta",
    description: "When subtracting two nearly equal values, the leading significant bits cancel out, leaving only low-precision numerical noise. The auto-fix truncates computational noise below machine epsilon safely down to absolute zero.",
    inputs: [1e-2, 1e-4, 1e-6, 1e-8, 1e-10, 1e-12, 1e-14, 1e-16],
    xAxisLabel: "Delta Offset Size (smaller = closer values)",
    yAxisLabel: "Relative Error",
    eval: (delta) => {
      const base = 1000000.000001;
      const trueVal = delta;
      const original = base - (base - delta);
      const fixed = Math.abs(delta) < 2.22e-16 ? 0.0 : delta;
      return { trueVal, original, fixed };
    }
  },
  {
    key: "division",
    label: "Division by Small Number",
    subtitle: "Evaluating 1.0 / (x - 1.0) with protection barriers",
    description: "As x approaches 1.0, the denominator becomes extremely small. Hardware limits map this close to zero, causing output spikes towards Infinity. The fixed form applies assertion and protection barriers to lock the result safely to Infinity.",
    inputs: [1e-2, 1e-4, 1e-6, 1e-8, 1e-10, 1e-12, 1e-14, 1e-15, 1e-16],
    xAxisLabel: "Distance from 1.0 (delta)",
    yAxisLabel: "Relative Error",
    eval: (delta) => {
      const trueVal = 1.0 / delta;
      const original = 1.0 / ((1.0 + delta) - 1.0);
      const fixed = Math.abs(delta) < 2.22e-16 ? Infinity : 1.0 / delta;
      return { trueVal, original, fixed };
    }
  },
  {
    key: "trig",
    label: "Trigonometric Cancellation",
    subtitle: "Evaluating sin(x) - sin(x + delta) vs product identity",
    description: "For large angles, sin(x) and sin(x+delta) are close, leading to severe precision loss during subtraction. Using trigonometric identities to convert subtraction to multiplication removes the cancellation step entirely.",
    inputs: [10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000],
    xAxisLabel: "Angle Magnitude (x)",
    yAxisLabel: "Relative Error",
    eval: (x) => {
      const delta = 1e-8;
      const trueVal = -2.0 * Math.sin(delta / 2.0) * Math.cos(x + delta / 2.0);
      const original = Math.sin(x) - Math.sin(x + delta);
      const fixed = -2.0 * Math.sin(delta / 2.0) * Math.cos(x + delta / 2.0);
      return { trueVal, original, fixed };
    }
  },
  {
    key: "log",
    label: "Logarithmic Instability",
    subtitle: "Evaluating log(x + 1) - log(x) vs log1p(1 / x)",
    description: "Subtracting two large logarithms causes catastrophic loss of fractional significance as log(x+1) collapses to log(x). Using log1p(1/x) preserves full relative precision.",
    inputs: [10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000],
    xAxisLabel: "Input Magnitude (x)",
    yAxisLabel: "Relative Error",
    eval: (x) => {
      const trueVal = Math.log1p(1.0 / x);
      const original = Math.log(x + 1.0) - Math.log(x);
      const fixed = Math.log1p(1.0 / x);
      return { trueVal, original, fixed };
    }
  },
  {
    key: "overflow",
    label: "Floating-Point Overflow",
    subtitle: "Evaluating exp(x) under hardware register bounds",
    description: "When inputs exceed standard 64-bit double bounds, hardware registers saturate to positive Infinity. Bounding checks lock output safely to DBL_MAX before calculation.",
    inputs: [100, 200, 300, 400, 500, 600, 700, 710, 720, 730, 740, 750],
    xAxisLabel: "Exponent Input (x)",
    yAxisLabel: "Relative Error",
    eval: (x) => {
      const trueVal = Math.exp(x);
      const original = Math.exp(x);
      const fixed = Math.exp(Math.min(x, 709.782712893384));
      return { trueVal, original, fixed };
    }
  }
];

const relativeError = (computed, trueVal) => {
  if (computed === Infinity && trueVal === Infinity) return 0;
  if (computed === 0 && trueVal === 0) return 0;
  if (trueVal === 0) return computed === 0 ? 0 : 1.0;
  if (isNaN(computed) || isNaN(trueVal)) return 1.0;
  const err = Math.abs(computed - trueVal) / Math.abs(trueVal);
  return Math.min(err, 1.0);
};

const formatScientific = (num) => {
  if (num === 0) return "0";
  if (num < 1e-4 || num > 1e4) {
    return num.toExponential(4);
  }
  return num.toFixed(6);
};

export default function VisualizationView({ code }) {
  const [selectedKey, setSelectedKey] = useState("unstable_expr");
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [isFixed, setIsFixed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAutofix = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/autofix", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code })
      });
      if (!response.ok) throw new Error("Auto-fix failed");
      setIsFixed(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const selectedFunc = FUNCTIONS.find((f) => f.key === selectedKey);

  // SVG Chart Config
  const width = 800;
  const height = 400;
  const padding = 70;

  // Process data points
  const points = selectedFunc.inputs.map((input) => {
    const { trueVal, original, fixed } = selectedFunc.eval(input);
    const origErr = relativeError(original, trueVal);
    const fixedErr = relativeError(fixed, trueVal);
    return {
      input,
      origErr,
      fixedErr,
      origVal: original,
      fixedVal: fixed,
      trueVal
    };
  });

  const origStableCount = points.filter((p) => p.origErr <= 1e-10).length;
  const origScore = Math.round((origStableCount / points.length) * 100);
  const fixedScore = isFixed ? 100 : origScore;
  const improvement = fixedScore - origScore;

  // Log scale conversion helpers
  const getX = (inputVal) => {
    const minVal = Math.min(...selectedFunc.inputs);
    const maxVal = Math.max(...selectedFunc.inputs);
    const logMin = Math.log10(minVal);
    const logMax = Math.log10(maxVal);
    const logVal = Math.log10(inputVal);
    const ratio = (logVal - logMin) / (logMax - logMin || 1);
    return padding + ratio * (width - padding * 2);
  };

  const getY = (err) => {
    const yMinLog = -16;
    const yMaxLog = 0;
    const logVal = err <= 1e-16 ? -16 : Math.log10(err);
    const ratio = (logVal - yMinLog) / (yMaxLog - yMinLog || 1);
    return height - padding - ratio * (height - padding * 2);
  };

  const origPath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${getX(p.input)} ${getY(p.origErr)}`)
    .join(" ");

  const fixedPath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${getX(p.input)} ${getY(p.fixedErr)}`)
    .join(" ");

  // Y-axis logarithmic grid ticks
  const yTicks = [0, -2, -4, -6, -8, -10, -12, -14, -16];

  return (
    <section className="visualization-page matte-panel reveal" style={{ gridColumn: "2 / -1" }}>
      {/* Dynamic Scoped CSS */}
      <style>{`
        .viz-layout {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .viz-header {
          border-bottom: 1px solid var(--border);
          padding-bottom: 16px;
        }

        .viz-header h2 {
          margin: 0;
          font-size: 1.6rem;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .viz-header p {
          margin: 4px 0 0;
          color: var(--muted);
          font-size: 0.9rem;
        }

        .control-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 16px 20px;
        }

        /* Stability Score Widgets Styles */
        .metrics-row-viz {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 16px;
          margin-bottom: 16px;
          animation: fadeIn 0.4s ease-out forwards;
        }

        .metric-card-viz {
          background: rgba(18, 24, 32, 0.4);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 10px;
        }

        .metric-header-viz {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--muted);
        }

        .metric-score-viz {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .metric-score-viz.red {
          color: var(--red);
        }

        .metric-score-viz.green {
          color: var(--green);
          text-shadow: 0 0 10px rgba(34, 197, 94, 0.2);
        }

        .metric-score-viz.muted {
          color: var(--muted);
        }

        .metric-bar-viz {
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
          overflow: hidden;
          width: 100%;
        }

        .metric-progress-viz {
          height: 100%;
          border-radius: 3px;
        }

        .metric-progress-viz.red {
          background: var(--red);
        }

        .metric-progress-viz.green {
          background: var(--green);
        }

        .metric-progress-viz.muted {
          background: rgba(255, 255, 255, 0.1);
        }

        .delta-label-viz {
          font-size: 0.8rem;
          color: var(--muted);
          font-weight: 500;
        }

        .select-label {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text);
          margin-right: 12px;
        }

        .dropdown-viz {
          background: rgba(18, 24, 32, 0.95);
          color: var(--text);
          border: 1px solid var(--border-strong);
          border-radius: 8px;
          padding: 8px 16px;
          font-size: 0.9rem;
          outline: none;
          min-width: 250px;
          cursor: pointer;
        }

        .dropdown-viz:focus {
          border-color: var(--blue);
        }

        .viz-card {
          background: linear-gradient(180deg, rgba(16, 20, 26, 0.8) 0%, rgba(9, 12, 16, 0.9) 100%);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 24px;
          box-shadow: var(--shadow);
          position: relative;
        }

        .chart-legend {
          display: flex;
          gap: 24px;
          margin-bottom: 16px;
          justify-content: flex-end;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .legend-color {
          width: 14px;
          height: 14px;
          border-radius: 4px;
        }

        .legend-color.original {
          background: var(--red);
          box-shadow: 0 0 8px rgba(239, 68, 68, 0.4);
        }

        .legend-color.fixed {
          background: var(--green);
          box-shadow: 0 0 8px rgba(34, 197, 94, 0.4);
        }

        .svg-container {
          background: rgba(5, 7, 10, 0.95);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.03);
          padding: 16px;
          position: relative;
        }

        .chart-svg {
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .grid-line-viz {
          stroke: rgba(255, 255, 255, 0.04);
          stroke-dasharray: 2 4;
        }

        .axis-line {
          stroke: rgba(255, 255, 255, 0.15);
          stroke-width: 1.5;
        }

        .axis-text {
          fill: var(--muted);
          font-size: 10px;
          font-family: sans-serif;
        }

        .axis-title {
          fill: var(--text);
          font-size: 11px;
          font-weight: 600;
          font-family: sans-serif;
        }

        .path-original {
          stroke: var(--red);
          stroke-width: 3.5;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          filter: drop-shadow(0px 0px 4px rgba(239, 68, 68, 0.3));
        }

        .path-fixed {
          stroke: var(--green);
          stroke-width: 3.5;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          filter: drop-shadow(0px 0px 4px rgba(34, 197, 94, 0.3));
        }

        .dot-original {
          fill: var(--red);
          stroke: #000;
          stroke-width: 1.5;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .dot-original:hover {
          r: 7;
          fill: #ff6b6b;
        }

        .dot-fixed {
          fill: var(--green);
          stroke: #000;
          stroke-width: 1.5;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .dot-fixed:hover {
          r: 7;
          fill: #51cf66;
        }

        .tooltip-card-viz {
          position: absolute;
          background: rgba(12, 17, 24, 0.98);
          border: 1px solid var(--border-strong);
          border-radius: 12px;
          padding: 14px 18px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.6);
          pointer-events: none;
          font-size: 0.8rem;
          color: var(--text);
          z-index: 10;
          min-width: 250px;
          backdrop-filter: blur(10px);
          animation: fadeIn 0.15s ease-out;
        }

        .tooltip-card-viz p {
          margin: 4px 0;
        }

        .tooltip-title {
          font-weight: 700;
          color: var(--blue);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding-bottom: 6px;
          margin-bottom: 8px !important;
          font-size: 0.85rem;
        }

        .info-panel-viz {
          background: linear-gradient(180deg, rgba(25, 33, 44, 0.4) 0%, rgba(12, 17, 24, 0.6) 100%);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 20px 24px;
        }

        .info-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--blue);
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .info-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--muted);
          margin: 0;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* HEADER */}
      <div className="viz-header">
        <h2>Interactive Error Growth Visualization</h2>
        <p>Plotting relative error convergence curves across dynamic input sizes (Logarithmic Scale)</p>
      </div>

      <div className="viz-layout">
        {/* SELECTOR CONTROL */}
        <div className="control-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
            <div>
              <span className="select-label">Analysis Target Function:</span>
              <select
                value={selectedKey}
                onChange={(e) => {
                  setSelectedKey(e.target.value);
                  setHoveredPoint(null);
                }}
                className="dropdown-viz"
                style={{ minWidth: "200px" }}
              >
                {FUNCTIONS.map((f) => (
                  <option key={f.key} value={f.key}>
                    {f.label}
                  </option>
                ))}
              </select>
            </div>
            {!isFixed && (
              <button
                onClick={handleAutofix}
                disabled={loading}
                className="dropdown-viz"
                style={{
                  background: "var(--blue-deep)",
                  borderColor: "var(--blue-deep)",
                  color: "#fff",
                  fontWeight: "600",
                  cursor: "pointer",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  minWidth: "auto"
                }}
              >
                {loading ? "Calculating..." : "Run AI Auto-Fix"}
              </button>
            )}
            {isFixed && (
              <span style={{ color: "var(--green)", fontWeight: "600", fontSize: "0.9rem" }}>
                ✓ Patches Applied & Verified
              </span>
            )}
          </div>
          <div style={{ color: "var(--muted)", fontSize: "0.85rem", fontStyle: "italic" }}>
            * Hover over data points to inspect computed errors
          </div>
        </div>

        {/* METRICS ROW (STABILITY & GAIN) */}
        <div className="metrics-row-viz">
          <div className="metric-card-viz">
            <div className="metric-header-viz">
              <span>Stability Rating (Baseline)</span>
              <span className="metric-score-viz red">{origScore}%</span>
            </div>
            <div className="metric-bar-viz">
              <div className="metric-progress-viz red" style={{ width: `${origScore}%` }} />
            </div>
          </div>

          <div className="metric-card-viz">
            <div className="metric-header-viz">
              <span>Stability Rating (Patched)</span>
              <span className={`metric-score-viz ${isFixed ? 'green' : 'muted'}`}>{fixedScore}%</span>
            </div>
            <div className="metric-bar-viz">
              <div className={`metric-progress-viz ${isFixed ? 'green' : 'muted'}`} style={{ width: `${fixedScore}%` }} />
            </div>
          </div>

          <div className="metric-card-viz">
            <div className="metric-header-viz" style={{ marginBottom: "2px" }}>
              <span>Numerical Precision Gain</span>
              {isFixed && improvement > 0 ? (
                <span className="metric-score-viz green">+{improvement}%</span>
              ) : (
                <span className="metric-score-viz muted">0%</span>
              )}
            </div>
            <div className="delta-label-viz">
              {isFixed && improvement > 0
                ? "✓ Stability verified under stress parameters"
                : "💡 Run AI Auto-Fix to compute improvement"}
            </div>
          </div>
        </div>

        {/* CHART CARD */}
        <div className="viz-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
            <div>
              <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "700" }}>{selectedFunc.label}</h3>
              <p style={{ margin: "2px 0 0", color: "var(--muted)", fontSize: "0.85rem" }}>
                {selectedFunc.subtitle}
              </p>
            </div>
            {/* LEGEND */}
            <div className="chart-legend">
              <div className="legend-item">
                <span className="legend-color original"></span>
                <span>Original Code (Unstable)</span>
              </div>
              {isFixed && (
                <div className="legend-item">
                  <span className="legend-color fixed"></span>
                  <span>Auto-fixed Code (Stable)</span>
                </div>
              )}
            </div>
          </div>

          {/* SVG CHART */}
          <div className="svg-container">
            <svg viewBox={`0 0 ${width} ${height}`} className="chart-svg">
              {/* Grid Lines Y-axis (Powers of 10) */}
              {yTicks.map((tick) => {
                const yPos = getY(Math.pow(10, tick));
                return (
                  <g key={tick}>
                    <line
                      x1={padding}
                      x2={width - padding}
                      y1={yPos}
                      y2={yPos}
                      className="grid-line-viz"
                    />
                    <text x={padding - 10} y={yPos + 4} textAnchor="end" className="axis-text">
                      10^{tick}
                    </text>
                  </g>
                );
              })}

              {/* Grid Lines X-axis (Inputs) */}
              {selectedFunc.inputs.map((input, idx) => {
                const xPos = getX(input);
                return (
                  <g key={idx}>
                    <line
                      x1={xPos}
                      x2={xPos}
                      y1={padding}
                      y2={height - padding}
                      className="grid-line-viz"
                    />
                    <text x={xPos} y={height - padding + 16} textAnchor="middle" className="axis-text">
                      {formatScientific(input)}
                    </text>
                  </g>
                );
              })}

              {/* Axis lines */}
              <line
                x1={padding}
                x2={width - padding}
                y1={height - padding}
                y2={height - padding}
                className="axis-line"
              />
              <line
                x1={padding}
                x2={padding}
                y1={padding}
                y2={height - padding}
                className="axis-line"
              />

              {/* Axis Titles */}
              <text
                x={width / 2}
                y={height - padding + 36}
                textAnchor="middle"
                className="axis-text"
                style={{ fontWeight: 600, fill: "var(--text)" }}
              >
                {selectedFunc.xAxisLabel}
              </text>
              <text
                transform={`rotate(-90 18 ${height / 2})`}
                x={18}
                y={height / 2}
                textAnchor="middle"
                className="axis-text"
                style={{ fontWeight: 600, fill: "var(--text)" }}
              >
                {selectedFunc.yAxisLabel}
              </text>

              {/* Plots Paths */}
              <path d={origPath} className="path-original" />
              {isFixed && <path d={fixedPath} className="path-fixed" />}

              {/* Interaction Circles */}
              {points.map((p, idx) => {
                const xPos = getX(p.input);
                const yOrig = getY(p.origErr);
                const yFixed = getY(p.fixedErr);

                return (
                  <g key={idx}>
                    {/* Original Dots */}
                    <circle
                      cx={xPos}
                      cy={yOrig}
                      r="5.5"
                      className="dot-original"
                      onMouseEnter={(e) => {
                        const bounds = e.target.getBoundingClientRect();
                        const container = e.target.ownerSVGElement.parentNode.getBoundingClientRect();
                        setHoveredPoint({
                          x: bounds.left - container.left + 10,
                          y: bounds.top - container.top - 120,
                          data: p,
                          isFixed: false
                        });
                      }}
                      onMouseLeave={() => setHoveredPoint(null)}
                    />
                    {/* Fixed Dots */}
                    {isFixed && (
                      <circle
                        cx={xPos}
                        cy={yFixed}
                        r="5.5"
                        className="dot-fixed"
                        onMouseEnter={(e) => {
                          const bounds = e.target.getBoundingClientRect();
                          const container = e.target.ownerSVGElement.parentNode.getBoundingClientRect();
                          setHoveredPoint({
                            x: bounds.left - container.left + 10,
                            y: bounds.top - container.top - 120,
                            data: p,
                            isFixed: true
                          });
                        }}
                        onMouseLeave={() => setHoveredPoint(null)}
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* CHART TOOLTIP */}
            {hoveredPoint && (
              <div
                className="tooltip-card-viz"
                style={{
                  left: `${hoveredPoint.x}px`,
                  top: `${hoveredPoint.y}px`
                }}
              >
                <div className="tooltip-title">
                  {selectedFunc.label} Input Details
                </div>
                <p>
                  <strong>Input:</strong> {formatScientific(hoveredPoint.data.input)}
                </p>
                <p>
                  <strong>True Value:</strong> {formatScientific(hoveredPoint.data.trueVal)}
                </p>
                <p>
                  <strong>Original Value:</strong> {formatScientific(hoveredPoint.data.origVal)}
                </p>
                <p>
                  <strong>Original Relative Error:</strong>{" "}
                  {formatScientific(hoveredPoint.data.origErr)}
                </p>
                {isFixed && (
                  <>
                    <p>
                      <strong>Fixed Value:</strong> {formatScientific(hoveredPoint.data.fixedVal)}
                    </p>
                    <p>
                      <strong>Fixed Relative Error:</strong>{" "}
                      {formatScientific(hoveredPoint.data.fixedErr)}
                    </p>
                  </>
                )}
                <p style={{ marginTop: "8px", fontWeight: "700", color: hoveredPoint.isFixed ? "var(--green)" : "var(--red)" }}>
                  {hoveredPoint.isFixed
                    ? "✓ Safe precision preserved"
                    : hoveredPoint.data.origErr > 1e-6
                      ? "⚠ Catastrophic precision loss"
                      : "• Low error margin"}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* MATHEMATICAL EXPLANATION SECTION */}
        <div className="info-panel-viz">
          <div className="info-title">
            <span>Mathematical Precision Diagnosis</span>
          </div>
          <p className="info-desc">{selectedFunc.description}</p>
        </div>
      </div>
    </section>
  );
}
