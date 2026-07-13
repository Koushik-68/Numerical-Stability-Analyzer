import React, { useState, useEffect, useRef } from "react";

const PRESETS = [
  {
    name: "Catastrophic Cancellation",
    description: "Subtraction of nearly equal variables: (x + y) - x",
    original: "(x + y) - x",
    remediated: "y",
    xMin: 1e5,
    xMax: 1e12,
    xScale: "log",
    yMin: 1e-15,
    yMax: 1e-1,
    yScale: "log",
    xLabel: "Base Offset (x)",
    yLabel: "Delta Addend (y)"
  },
  {
    name: "Loss of Significance",
    description: "Square root subtraction: sqrt(x * x + y) - x",
    original: "sqrt(x * x + y) - x",
    remediated: "y / (sqrt(x * x + y) + x)",
    xMin: 1e2,
    xMax: 1e8,
    xScale: "log",
    yMin: 1e-3,
    yMax: 1e3,
    yScale: "log",
    xLabel: "Variable (x)",
    yLabel: "Constant Addend (y)"
  },
  {
    name: "Trigonometric Phase Erasure",
    description: "Sine wave difference: sin(x) - sin(x + y)",
    original: "sin(x) - sin(x + y)",
    remediated: "-2.0 * sin(y / 2.0) * cos(x + y / 2.0)",
    xMin: 10,
    xMax: 1e8,
    xScale: "log",
    yMin: 1e-12,
    yMax: 1e-2,
    yScale: "log",
    xLabel: "Angle (x)",
    yLabel: "Phase Delta (y)"
  },
  {
    name: "Logarithmic Instability",
    description: "Log subtraction: log(x + y) - log(x)",
    original: "log(x + y) - log(x)",
    remediated: "log1p(y / x)",
    xMin: 1e1,
    xMax: 1e9,
    xScale: "log",
    yMin: 1e-15,
    yMax: 1e-1,
    yScale: "log",
    xLabel: "Scale (x)",
    yLabel: "Offset (y)"
  }
];

function Icon({ name }) {
  const icons = {
    spark: <path d="M12 2l1.2 4.2L17 7.4l-3.8 1.2L12 13l-1.2-4.4L7 7.4l3.8-1.2L12 2z" />,
    gear: <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  };

  return (
    <svg viewBox="0 0 24 24" className="icon" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px" }}>
      {icons[name]}
    </svg>
  );
}

export default function HeatmapView() {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const [expression, setExpression] = useState(PRESETS[0].original);
  const [isRemediated, setIsRemediated] = useState(false);

  // Range and scaling parameters
  const [xMin, setXMin] = useState(PRESETS[0].xMin);
  const [xMax, setXMax] = useState(PRESETS[0].xMax);
  const [xScale, setXScale] = useState(PRESETS[0].xScale);
  const [xSteps, setXSteps] = useState(15);

  const [yMin, setYMin] = useState(PRESETS[0].yMin);
  const [yMax, setYMax] = useState(PRESETS[0].yMax);
  const [yScale, setYScale] = useState(PRESETS[0].yScale);
  const [ySteps, setYSteps] = useState(15);

  const [loading, setLoading] = useState(false);
  const [points, setPoints] = useState([]);
  const [error, setError] = useState("");

  const [hoveredCell, setHoveredCell] = useState(null);

  const canvasRef = useRef(null);

  // Synchronize inputs with chosen preset
  const applyPreset = (index) => {
    setSelectedPresetIndex(index);
    const preset = PRESETS[index];
    setExpression(isRemediated ? preset.remediated : preset.original);
    setXMin(preset.xMin);
    setXMax(preset.xMax);
    setXScale(preset.xScale);
    setYMin(preset.yMin);
    setYMax(preset.yMax);
    setYScale(preset.yScale);
  };

  // Toggle remediation formula
  const toggleRemediation = (checked) => {
    setIsRemediated(checked);
    const preset = PRESETS[selectedPresetIndex];
    if (preset) {
      setExpression(checked ? preset.remediated : preset.original);
    }
  };

  const fetchHeatmap = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/heatmap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          expression,
          xMin,
          xMax,
          xScale,
          xSteps,
          yMin,
          yMax,
          yScale,
          ySteps
        })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to generate heatmap.");
      }
      setPoints(data.points || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHeatmap();
  }, [expression, xMin, xMax, xScale, xSteps, yMin, yMax, yScale, ySteps]);

  // Draw Heatmap Canvas
  useEffect(() => {
    if (!canvasRef.current || !points.length) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    ctx.clearRect(0, 0, width, height);

    const cellW = width / xSteps;
    const cellH = height / ySteps;

    // Relative error color assignment function
    const getCellColor = (error) => {
      if (error === null || isNaN(error)) return "#7c3aed"; // Violet for NaN/Inf
      if (error < 1e-12) return "#10b981"; // Stable green
      if (error < 1e-5) return "#f59e0b"; // Warning amber
      if (error < 0.1) return "#f97316"; // High error orange
      return "#ef4444"; // Catastrophic red
    };

    points.forEach((pt, index) => {
      // Points come ordered as nested loop: x values (outer), y values (inner)
      // i = x index, j = y index
      const i = Math.floor(index / ySteps);
      const j = index % ySteps;

      const color = getCellColor(pt.relativeError);
      
      // Flip Y axis so smaller values or custom ranges start at bottom
      const rx = i * cellW;
      const ry = height - (j + 1) * cellH;

      ctx.fillStyle = color;
      ctx.fillRect(rx, ry, cellW - 1, cellH - 1);

      // Add a subtle inner border for grid cell structure
      ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
      ctx.strokeRect(rx, ry, cellW - 1, cellH - 1);
    });

  }, [points, xSteps, ySteps]);

  const handleMouseMove = (e) => {
    if (!canvasRef.current || !points.length) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cellW = rect.width / xSteps;
    const cellH = rect.height / ySteps;

    const i = Math.floor(x / cellW);
    // Flip Y back to match index
    const j = Math.floor((rect.height - y) / cellH);

    if (i >= 0 && i < xSteps && j >= 0 && j < ySteps) {
      const idx = i * ySteps + j;
      const cellData = points[idx];
      if (cellData) {
        setHoveredCell({
          ...cellData,
          cellX: i * cellW + cellW/2,
          cellY: rect.height - (j * cellH + cellH/2),
          i, j
        });
      }
    } else {
      setHoveredCell(null);
    }
  };

  const handleMouseLeave = () => {
    setHoveredCell(null);
  };

  // Human readable error bounds helper
  const getRating = (err) => {
    if (err === null || isNaN(err)) return { label: "NaN / Exception", color: "purple" };
    if (err < 1e-12) return { label: "Stable (Full Precision)", color: "green" };
    if (err < 1e-5) return { label: "Risky (Loss of Precision)", color: "amber" };
    if (err < 0.1) return { label: "High Precision Loss", color: "orange" };
    return { label: "Catastrophic Cancellation", color: "red" };
  };

  const preset = PRESETS[selectedPresetIndex];

  return (
    <div className="heatmap-layout" style={{ gridColumn: "2 / -1", display: "flex", flexDirection: "column", gap: "24px", padding: "20px" }}>
      <style>{`
        .heatmap-container {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 24px;
        }
        .heatmap-main {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .heatmap-sidebar {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .canvas-wrapper {
          position: relative;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 28px 28px 48px 48px;
          aspect-ratio: 1;
        }
        .canvas-element {
          width: 100%;
          height: 100%;
          display: block;
          cursor: crosshair;
        }
        .axis-label-x {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.8rem;
          color: var(--muted);
          font-weight: 500;
        }
        .axis-label-y {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          transform-origin: left center;
          font-size: 0.8rem;
          color: var(--muted);
          font-weight: 500;
          white-space: nowrap;
        }
        .scale-tick-x-min {
          position: absolute;
          bottom: 28px;
          left: 48px;
          font-size: 0.75rem;
          color: var(--muted);
        }
        .scale-tick-x-max {
          position: absolute;
          bottom: 28px;
          right: 28px;
          font-size: 0.75rem;
          color: var(--muted);
        }
        .scale-tick-y-min {
          position: absolute;
          left: 36px;
          bottom: 48px;
          font-size: 0.75rem;
          color: var(--muted);
        }
        .scale-tick-y-max {
          position: absolute;
          left: 36px;
          top: 28px;
          font-size: 0.75rem;
          color: var(--muted);
        }
        .legend-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px;
          border-radius: 8px;
          background: var(--glass);
          border: 1px solid var(--border);
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
        }
        .legend-color {
          width: 12px;
          height: 12px;
          border-radius: 2px;
        }
        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 48px;
          height: 24px;
        }
        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: rgba(255,255,255,0.1);
          transition: .3s;
          border-radius: 24px;
          border: 1px solid var(--border-strong);
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 16px;
          width: 16px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: .3s;
          border-radius: 50%;
        }
        input:checked + .slider {
          background-color: var(--blue-deep);
        }
        input:checked + .slider:before {
          transform: translateX(24px);
        }
        .preset-pill {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 8px 12px;
          text-align: left;
          cursor: pointer;
          transition: 0.2s;
        }
        .preset-pill:hover {
          background: rgba(255,255,255,0.06);
        }
        .preset-pill.active {
          background: var(--blue-soft);
          border-color: var(--blue);
        }
        .badge-rating {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          display: inline-block;
        }
        .badge-rating.green { background: rgba(16, 185, 129, 0.15); color: #10b981; }
        .badge-rating.amber { background: rgba(245, 158, 11, 0.15); color: #f59e0b; }
        .badge-rating.orange { background: rgba(249, 115, 22, 0.15); color: #f97316; }
        .badge-rating.red { background: rgba(239, 68, 68, 0.15); color: #ef4444; }
        .badge-rating.purple { background: rgba(124, 58, 237, 0.15); color: #8b5cf6; }
      `}</style>

      {/* HEADER SECTION */}
      <section className="hero-panel matte-panel">
        <div className="hero-copy">
          <div className="eyebrow">Visual sensitivity mapping</div>
          <h1>Stability Heatmap</h1>
          <p>
            Analyse the sensitivity of mathematical code by rendering a 2D error propagation canvas.
            Compare original expressions with remediated safe alternatives to see stability limits.
          </p>
        </div>
      </section>

      {/* PRESETS GRID */}
      <section className="matte-panel" style={{ padding: "20px" }}>
        <h3 style={{ margin: "0 0 12px 0", fontSize: "1.05rem", fontWeight: "600" }}>Stability Category Presets</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
          {PRESETS.map((p, idx) => (
            <button
              key={idx}
              className={`preset-pill ${selectedPresetIndex === idx ? "active" : ""}`}
              onClick={() => applyPreset(idx)}
            >
              <div style={{ fontSize: "0.85rem", fontWeight: "600", color: selectedPresetIndex === idx ? "var(--blue)" : "var(--text)" }}>{p.name}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--muted)", marginTop: "4px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.description}</div>
            </button>
          ))}
        </div>
      </section>

      {/* HEATMAP INTERACTIVE INTERFACE */}
      <div className="heatmap-container">
        {/* MAIN PANEL */}
        <div className="heatmap-main">
          <div className="matte-panel" style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ margin: 0, fontSize: "1.1rem" }}>Interactive Canvas</h3>
              
              {/* Remediation Toggle */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: "500", color: isRemediated ? "var(--blue)" : "var(--text)" }}>
                  {isRemediated ? "Remediated Formula Active" : "Original Unstable Code"}
                </span>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={isRemediated}
                    onChange={(e) => toggleRemediation(e.target.checked)}
                  />
                  <span className="slider" />
                </label>
              </div>
            </div>

            {/* Canvas Wrapper */}
            <div className="canvas-wrapper">
              <div className="axis-label-x">{preset ? preset.xLabel : "X Axis"}</div>
              <div className="axis-label-y">{preset ? preset.yLabel : "Y Axis"}</div>
              
              <div className="scale-tick-x-min">{xMin.toExponential(1)}</div>
              <div className="scale-tick-x-max">{xMax.toExponential(1)}</div>
              
              <div className="scale-tick-y-min">{yMin.toExponential(1)}</div>
              <div className="scale-tick-y-max">{yMax.toExponential(1)}</div>

              <canvas
                ref={canvasRef}
                className="canvas-element"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              />
            </div>

            {/* COLOR LEGEND */}
            <div className="legend-row">
              <div className="legend-item">
                <span className="legend-color" style={{ background: "#10b981" }} />
                <span>Stable (&lt; 10⁻¹²)</span>
              </div>
              <div className="legend-item">
                <span className="legend-color" style={{ background: "#f59e0b" }} />
                <span>Risky (&lt; 10⁻⁵)</span>
              </div>
              <div className="legend-item">
                <span className="legend-color" style={{ background: "#f97316" }} />
                <span>High Loss (&lt; 0.1)</span>
              </div>
              <div className="legend-item">
                <span className="legend-color" style={{ background: "#ef4444" }} />
                <span>Cancellation (&ge; 0.1)</span>
              </div>
              <div className="legend-item">
                <span className="legend-color" style={{ background: "#7c3aed" }} />
                <span>NaN / Infinity</span>
              </div>
            </div>
          </div>
        </div>

        {/* SIDEBAR CONFIG & HOVER DETAILED CARDS */}
        <div className="heatmap-sidebar">
          {/* CONFIGURATION PANEL */}
          <div className="matte-panel" style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <h3 style={{ margin: 0, fontSize: "1rem", display: "flex", alignItems: "center", gap: "8px" }}>
              <Icon name="gear" /> Configuration
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "0.8rem", color: "var(--muted)" }}>Equation Formula</label>
              <input
                type="text"
                className="code-editor"
                style={{ width: "100%", padding: "8px", borderRadius: "6px", fontFamily: "Courier, monospace", fontSize: "0.85rem", background: "rgba(0,0,0,0.2)", border: "1px solid var(--border)" }}
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <div>
                <label style={{ fontSize: "0.8rem", color: "var(--muted)" }}>X Min</label>
                <input
                  type="number"
                  style={{ width: "100%", padding: "6px", borderRadius: "6px", background: "rgba(0,0,0,0.2)", border: "1px solid var(--border)", color: "var(--text)" }}
                  value={xMin}
                  onChange={(e) => setXMin(parseFloat(e.target.value))}
                />
              </div>
              <div>
                <label style={{ fontSize: "0.8rem", color: "var(--muted)" }}>X Max</label>
                <input
                  type="number"
                  style={{ width: "100%", padding: "6px", borderRadius: "6px", background: "rgba(0,0,0,0.2)", border: "1px solid var(--border)", color: "var(--text)" }}
                  value={xMax}
                  onChange={(e) => setXMax(parseFloat(e.target.value))}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <div>
                <label style={{ fontSize: "0.8rem", color: "var(--muted)" }}>Y Min</label>
                <input
                  type="number"
                  style={{ width: "100%", padding: "6px", borderRadius: "6px", background: "rgba(0,0,0,0.2)", border: "1px solid var(--border)", color: "var(--text)" }}
                  value={yMin}
                  onChange={(e) => setYMin(parseFloat(e.target.value))}
                />
              </div>
              <div>
                <label style={{ fontSize: "0.8rem", color: "var(--muted)" }}>Y Max</label>
                <input
                  type="number"
                  style={{ width: "100%", padding: "6px", borderRadius: "6px", background: "rgba(0,0,0,0.2)", border: "1px solid var(--border)", color: "var(--text)" }}
                  value={yMax}
                  onChange={(e) => setYMax(parseFloat(e.target.value))}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <div>
                <label style={{ fontSize: "0.8rem", color: "var(--muted)" }}>X Scale</label>
                <select
                  style={{ width: "100%", padding: "6px", borderRadius: "6px", background: "rgba(0,0,0,0.2)", border: "1px solid var(--border)", color: "var(--text)" }}
                  value={xScale}
                  onChange={(e) => setXScale(e.target.value)}
                >
                  <option value="linear">Linear</option>
                  <option value="log">Logarithmic</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: "0.8rem", color: "var(--muted)" }}>Y Scale</label>
                <select
                  style={{ width: "100%", padding: "6px", borderRadius: "6px", background: "rgba(0,0,0,0.2)", border: "1px solid var(--border)", color: "var(--text)" }}
                  value={yScale}
                  onChange={(e) => setYScale(e.target.value)}
                >
                  <option value="linear">Linear</option>
                  <option value="log">Logarithmic</option>
                </select>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <div>
                <label style={{ fontSize: "0.8rem", color: "var(--muted)" }}>Grid Columns</label>
                <input
                  type="number"
                  min="5"
                  max="40"
                  style={{ width: "100%", padding: "6px", borderRadius: "6px", background: "rgba(0,0,0,0.2)", border: "1px solid var(--border)", color: "var(--text)" }}
                  value={xSteps}
                  onChange={(e) => setXSteps(parseInt(e.target.value) || 15)}
                />
              </div>
              <div>
                <label style={{ fontSize: "0.8rem", color: "var(--muted)" }}>Grid Rows</label>
                <input
                  type="number"
                  min="5"
                  max="40"
                  style={{ width: "100%", padding: "6px", borderRadius: "6px", background: "rgba(0,0,0,0.2)", border: "1px solid var(--border)", color: "var(--text)" }}
                  value={ySteps}
                  onChange={(e) => setYSteps(parseInt(e.target.value) || 15)}
                />
              </div>
            </div>

            <button
              onClick={fetchHeatmap}
              disabled={loading}
              style={{ padding: "10px", marginTop: "8px", borderRadius: "6px", background: "var(--blue-deep)", border: "none", color: "#fff", fontWeight: "600", cursor: "pointer", transition: "0.2s" }}
            >
              {loading ? "Re-evaluating Grid..." : "Refresh Heatmap"}
            </button>
          </div>

          {/* INSPECTOR PANEL */}
          <div className="matte-panel" style={{ padding: "20px", flex: 1, minHeight: "260px", display: "flex", flexDirection: "column" }}>
            <h3 style={{ margin: "0 0 12px 0", fontSize: "1rem", display: "flex", alignItems: "center", gap: "8px" }}>
              <Icon name="spark" /> Pixel Inspector
            </h3>

            {hoveredCell ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div>
                  <span className={`badge-rating ${getRating(hoveredCell.relativeError).color}`}>
                    {getRating(hoveredCell.relativeError).label}
                  </span>
                </div>
                
                <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "6px 12px", fontSize: "0.8rem" }}>
                  <span style={{ color: "var(--muted)" }}>Cell Index:</span>
                  <span>({hoveredCell.i}, {hoveredCell.j})</span>
                  
                  <span style={{ color: "var(--muted)" }}>Value (x):</span>
                  <span style={{ fontFamily: "monospace" }}>{hoveredCell.x.toExponential(6)}</span>
                  
                  <span style={{ color: "var(--muted)" }}>Value (y):</span>
                  <span style={{ fontFamily: "monospace" }}>{hoveredCell.y.toExponential(6)}</span>
                  
                  <span style={{ color: "var(--muted)" }}>C double:</span>
                  <span style={{ fontFamily: "monospace" }}>{hoveredCell.cVal.toExponential(6)}</span>
                  
                  <span style={{ color: "var(--muted)" }}>mpmath ref:</span>
                  <span style={{ fontFamily: "monospace" }}>{hoveredCell.mpVal.toExponential(6)}</span>
                  
                  <span style={{ color: "var(--muted)" }}>Rel. Error:</span>
                  <span style={{ fontFamily: "monospace", color: hoveredCell.relativeError > 1e-5 ? "var(--red)" : "inherit" }}>
                    {hoveredCell.relativeError.toExponential(6)}
                  </span>
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center", color: "var(--muted)", fontSize: "0.85rem", textAlign: "center" }}>
                Hover over the heatmap canvas to inspect detailed floating point precision values at specific input coordinates.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
