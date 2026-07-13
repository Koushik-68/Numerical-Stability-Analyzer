import React, { useState, useEffect } from "react";

// Arithmetic parser for generating AST structures dynamically in JavaScript
function parseExpression(str) {
  str = str.replace(/\s+/g, "");
  let pos = 0;

  function peek() {
    return str[pos] || null;
  }

  function consume(char) {
    if (str[pos] === char) {
      pos++;
      return true;
    }
    return false;
  }

  function parsePrimary() {
    const char = peek();
    if (!char) return null;

    if (char === "(") {
      consume("(");
      const node = parseExpr();
      consume(")");
      return node;
    }

    if (/[0-9.]/.test(char)) {
      let val = "";
      while (peek() && /[0-9.eE-]/.test(peek())) {
        if ((peek() === "-" || peek() === "+") && !/[eE]/.test(val[val.length - 1])) {
          break;
        }
        val += str[pos++];
      }
      return { type: "literal", value: val, expr: val, desc: `Constant literal numeric value: ${val}` };
    }

    if (/[a-zA-Z]/.test(char)) {
      let name = "";
      while (peek() && /[a-zA-Z0-9_]/.test(peek())) {
        name += str[pos++];
      }
      if (peek() === "(") {
        consume("(");
        const arg = parseExpr();
        consume(")");
        return {
          type: "function",
          value: name,
          left: arg,
          expr: `${name}(${arg ? arg.expr : ""})`,
          desc: `Standard math library function call: ${name}()`
        };
      }
      return { type: "variable", value: name, expr: name, desc: `Double-precision input variable parameter: "${name}"` };
    }

    return null;
  }

  function parseFactor() {
    let node = parsePrimary();
    while (peek() === "^") {
      consume("^");
      const right = parsePrimary();
      node = {
        type: "operator",
        value: "^",
        left: node,
        right,
        expr: `${node ? node.expr : ""}^${right ? right.expr : ""}`,
        desc: "Exponentiation operator. Handled via CPU library power registers."
      };
    }
    return node;
  }

  function parseTerm() {
    let node = parseFactor();
    while (peek() === "*" || peek() === "/") {
      const op = str[pos++];
      const right = parseFactor();
      node = {
        type: "operator",
        value: op,
        left: node,
        right,
        expr: `${node ? node.expr : ""}${op}${right ? right.expr : ""}`,
        desc: op === "*" ? "Multiplication node. Multiplies register operands." : "Division node. Performs floating-point register division."
      };
    }
    return node;
  }

  function parseExpr() {
    let node = parseTerm();
    while (peek() === "+" || peek() === "-") {
      const op = str[pos++];
      const right = parseTerm();
      node = {
        type: "operator",
        value: op,
        left: node,
        right,
        expr: `${node ? node.expr : ""}${op}${right ? right.expr : ""}`,
        desc: op === "+" ? "Addition node. Adds register inputs." : "Subtraction node. Prone to catastrophic cancellation."
      };
    }
    return node;
  }

  return parseExpr();
}

function scanVulnerabilities(node) {
  if (!node) return;

  if (node.type === "operator") {
    if (node.value === "-") {
      node.isVulnerable = true;
      node.vulnType = "Catastrophic Cancellation Risk";
      node.vulnDesc = `Subtractive cancellation node in expression "${node.expr}". Subtracting near-identical float values destroys floating-point mantissa resolution.`;
    } else if (node.value === "/") {
      const den = node.right;
      if (den && (den.value === "-" || den.type === "variable")) {
        den.isVulnerable = true;
        den.vulnType = "Division Near-Zero Risk";
        den.vulnDesc = `Unbounded division node denominator: "${den.expr}". If subtraction cancels, values explode towards infinity.`;
      }
    }
  }

  scanVulnerabilities(node.left);
  scanVulnerabilities(node.right);
}

export default function PlaygroundView() {
  const [expression, setExpression] = useState("sqrt(x * x + 1.0) - x");
  const [astTree, setAstTree] = useState(null);
  const [plotData, setPlotData] = useState([]);
  const [generatedC, setGeneratedC] = useState("");
  const [compError, setCompError] = useState("");
  const [loading, setLoading] = useState(false);
  const [hoveredNode, setHoveredNode] = useState(null);

  const presets = [
    { label: "Loss of Significance", expr: "sqrt(x * x + 1.0) - x" },
    { label: "Logarithmic Instability", expr: "log(x + 1.0) - log(x)" },
    { label: "Wave Phase Erasure", expr: "sin(x) - sin(x + 1e-8)" },
    { label: "Division Near-Zero", expr: "1.0 / (x - 1.0)" },
    { label: "Taylor Series Cancellation", expr: "(x - sin(x)) / (x * x * x)" }
  ];

  const handleAnalyze = async (exprToRun = expression) => {
    setLoading(true);
    setCompError("");
    setPlotData([]);
    
    // 1. Dynamic Client-Side Parsing
    try {
      const parsed = parseExpression(exprToRun);
      if (parsed) {
        scanVulnerabilities(parsed);
        setAstTree(parsed);
      } else {
        throw new Error("Unable to parse expression structure.");
      }
    } catch (err) {
      setCompError(`Syntax Parsing Error: ${err.message}`);
      setLoading(false);
      return;
    }

    // 2. Real-Time Compilation & Sandboxed Execution
    try {
      const response = await fetch("/api/sandbox", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ expression: exprToRun })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Execution failed.");
      }
      setPlotData(data.plots || []);
      setGeneratedC(data.cCode || "");
    } catch (err) {
      setCompError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleAnalyze();
  }, []);

  // Recursive tree node visualizer
  const renderAstNode = (node) => {
    if (!node) return null;

    const getNodeClass = () => {
      if (node.isVulnerable) return "node-box vulnerable";
      return `node-box ${node.type}`;
    };

    const hasChildren = node.left || node.right;

    return (
      <div className="ast-tree-branch">
        <div
          className={getNodeClass()}
          onMouseEnter={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const isRightSide = rect.left + rect.width / 2 > window.innerWidth / 2;
            
            let xPos = rect.left + rect.width / 2;
            let yPos = rect.top + rect.height / 2;
            
            const tooltipWidth = 280;
            const tooltipHeight = 160;
            const padding = 16;
            
            if (isRightSide) {
              xPos = rect.left - 12;
              transformStyle = "translate(-100%, -50%)";
            } else {
              xPos = rect.right + 12;
              transformStyle = "translate(0, -50%)";
            }
            
            if (yPos - tooltipHeight / 2 < padding) {
              yPos = tooltipHeight / 2 + padding;
            } else if (yPos + tooltipHeight / 2 > window.innerHeight - padding) {
              yPos = window.innerHeight - tooltipHeight / 2 - padding;
            }

            var transformStyle = isRightSide ? "translate(-100%, -50%)" : "translate(0, -50%)";

            setHoveredNode({
              node,
              x: xPos,
              y: yPos,
              transform: transformStyle
            });
          }}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <span className="node-type-label">{node.type}</span>
          <span className="node-value">{node.value}</span>
        </div>
        {hasChildren && (
          <div className="ast-tree-children">
            {node.left && renderAstNode(node.left)}
            {node.right && renderAstNode(node.right)}
          </div>
        )}
      </div>
    );
  };

  // SVG Chart sizing
  const width = 1000;
  const height = 400;
  const padding = 65;

  const getX = (val) => {
    const logMin = -8;
    const logMax = 8;
    const logVal = Math.log10(val);
    const ratio = (logVal - logMin) / (logMax - logMin);
    return padding + ratio * (width - padding * 2);
  };

  const getY = (err) => {
    const yMinLog = -16;
    const yMaxLog = 0;
    const logVal = err <= 1e-16 ? -16 : Math.log10(err);
    const ratio = (logVal - yMinLog) / (yMaxLog - yMinLog);
    return height - padding - ratio * (height - padding * 2);
  };

  const pathD = plotData.length > 0
    ? plotData.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${getX(pt.input)} ${getY(pt.relativeError)}`).join(' ')
    : "";

  return (
    <section className="playground-page matte-panel reveal" style={{ gridColumn: "2 / -1" }}>
      <style>{`
        .playground-page {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .pg-header {
          border-bottom: 1px solid var(--border);
          padding-bottom: 16px;
        }

        .pg-header h2 {
          margin: 0;
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--text);
        }

        .pg-header p {
          margin: 4px 0 0;
          color: var(--muted);
          font-size: 0.9rem;
        }

        .pg-control-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .pg-presets {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
        }

        .preset-badge {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 6px 14px;
          font-size: 0.8rem;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .preset-badge:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--blue-deep);
          color: var(--text);
        }

        .pg-input-row {
          display: flex;
          gap: 12px;
        }

        .pg-input {
          flex: 1;
          background: rgba(18, 24, 32, 0.95);
          border: 1px solid var(--border-strong);
          border-radius: 8px;
          padding: 12px 16px;
          color: var(--text);
          font-family: var(--font-mono);
          font-size: 1rem;
          outline: none;
        }

        .pg-input:focus {
          border-color: var(--blue);
        }

        .btn-run {
          background: var(--blue-deep);
          border: none;
          color: #fff;
          font-weight: 600;
          border-radius: 8px;
          padding: 12px 24px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .btn-run:hover {
          background: var(--blue);
        }

        .btn-run:disabled {
          background: var(--border-strong);
          cursor: not-allowed;
        }

        /* Error output console style */
        .error-console {
          background: rgba(239, 68, 68, 0.05);
          border: 1px solid var(--red);
          border-radius: 12px;
          padding: 16px 20px;
          color: var(--red);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          white-space: pre-wrap;
          line-height: 1.5;
          box-shadow: 0 0 15px rgba(239, 68, 68, 0.1);
        }

        .pg-visualizer-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .pg-panel {
          background: linear-gradient(180deg, rgba(16, 20, 26, 0.8) 0%, rgba(9, 12, 16, 0.9) 100%);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 24px;
          min-height: 460px;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: var(--shadow);
          overflow: auto;
        }

        .pg-panel-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 24px;
          color: var(--text);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* AST Visualizer connections styling */
        .pg-ast-canvas {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          width: 100%;
          padding-top: 10px;
        }

        .node-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(30, 41, 59, 0.45);
          border: 1.5px solid var(--border-strong);
          border-radius: 8px;
          padding: 6px 12px;
          min-width: 75px;
          z-index: 10;
          transition: all 0.2s ease;
          cursor: help;
        }

        .node-box.variable { border-color: #c084fc; background: rgba(192, 132, 252, 0.05); }
        .node-box.literal { border-color: #60a5fa; background: rgba(96, 165, 250, 0.05); }
        .node-box.function { border-color: #fb7185; background: rgba(251, 113, 133, 0.05); }

        .node-box.vulnerable {
          border-color: var(--red);
          background: rgba(239, 68, 68, 0.12);
          box-shadow: 0 0 10px rgba(239, 68, 68, 0.2);
        }

        .ast-tree-children {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
          position: relative;
        }

        .ast-tree-children::before {
          content: "";
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 10px;
          background: var(--border-strong);
        }

        .ast-tree-branch > .node-box + .ast-tree-children::after {
          content: "";
          position: absolute;
          top: -10px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--border-strong);
          margin: 0 auto;
          width: calc(100% - 75px);
        }

        .ast-tree-branch::before {
          content: "";
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 10px;
          background: var(--border-strong);
        }

        .pg-ast-canvas > .ast-tree-branch::before {
          display: none !important;
        }

        /* Tooltip style */
        .ast-tooltip {
          position: fixed;
          background: rgba(15, 23, 42, 0.98);
          border: 1px solid var(--border-strong);
          border-radius: 8px;
          padding: 12px 16px;
          width: 280px;
          z-index: 9999;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
          pointer-events: none;
          animation: tooltipFade 0.15s ease-out;
        }

        .ast-tooltip-title {
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .ast-tooltip-desc {
          font-size: 0.78rem;
          color: var(--muted);
          line-height: 1.4;
          margin: 0;
        }

        @keyframes tooltipFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Embedded C Code Panel */
        .c-source-panel {
          background: rgba(18, 24, 32, 0.4);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 20px;
        }

        .c-source-title {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: var(--muted);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .c-code-block {
          background: rgba(9, 12, 16, 0.95);
          border: 1px solid var(--border-strong);
          border-radius: 8px;
          padding: 16px;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: #e2e8f0;
          overflow-x: auto;
          white-space: pre;
          margin: 0;
          line-height: 1.5;
        }

        .chart-svg {
          background: rgba(255, 255, 255, 0.01);
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.02);
          width: 100%;
          height: auto;
          flex: 1;
          min-height: 450px;
        }

        .grid-line {
          stroke: rgba(255, 255, 255, 0.05);
          stroke-dasharray: 4 4;
        }

        .axis-line {
          stroke: var(--border-strong);
          stroke-width: 1.5;
        }

        .axis-text {
          fill: var(--muted);
          font-size: 0.72rem;
          font-family: var(--font-mono);
        }

        .path-error {
          stroke: var(--red);
          stroke-width: 2.5;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .chart-dot {
          fill: var(--red);
          stroke: var(--bg-deep);
          stroke-width: 1.5;
          cursor: pointer;
        }
      `}</style>

      {/* HEADER */}
      <div className="pg-header">
        <h2>Numerical Optimization & Expression Sandbox</h2>
        <p>Compile custom mathematical expressions and evaluate float precision boundaries in real-time</p>
      </div>

      {/* CONTROLS */}
      <div className="pg-control-box">
        <div className="pg-presets">
          <span style={{ fontSize: "0.85rem", color: "var(--muted)", fontWeight: "600", marginRight: "8px" }}>Presets:</span>
          {presets.map((preset) => (
            <button
              key={preset.label}
              onClick={() => {
                setExpression(preset.expr);
                handleAnalyze(preset.expr);
              }}
              className="preset-badge"
            >
              {preset.label}
            </button>
          ))}
        </div>

        <div className="pg-input-row">
          <input
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            placeholder="Type any math expression in terms of x... e.g., (x - sin(x)) / (x * x * x)"
            className="pg-input"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAnalyze();
            }}
          />
          <button
            onClick={() => handleAnalyze()}
            disabled={loading}
            className="btn-run"
          >
            {loading ? "Compiling..." : "Compile & Run"}
          </button>
        </div>
      </div>

      {/* GCC COMPILER ERROR PANEL */}
      {compError && (
        <div className="error-console">
          <strong>💻 Terminal Compilation/Execution Log:</strong>
          <div style={{ marginTop: "8px", color: "#fca5a5" }}>{compError}</div>
        </div>
      )}

      {/* VISUALIZER GRID */}
      <div className="pg-visualizer-grid">
        {/* DYNAMIC AST PANEL */}
        <div className="pg-panel">
          <div className="pg-panel-title">
            <span>🌲 Abstract Syntax Tree (Dynamic AST)</span>
            <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>* Hover nodes to inspect syntax</span>
          </div>
          <div className="pg-ast-canvas">
            {astTree ? renderAstNode(astTree) : (
              <div style={{ margin: "auto", color: "var(--muted)" }}>Enter an expression to parse AST</div>
            )}
          </div>
        </div>

        {/* ERROR CONVERGENCE CHART PANEL */}
        <div className="pg-panel">
          <div className="pg-panel-title">
            <span>📈 Precision Deviation Chart</span>
            <span style={{ fontSize: "0.85rem", color: "var(--red)" }}>C Double vs 60-digit mpmath</span>
          </div>

          {plotData.length > 0 ? (
            <svg viewBox={`0 0 ${width} ${height}`} className="chart-svg">
              {/* Y Axis ticks */}
              {[-16, -12, -8, -4, 0].map((tick) => {
                const yPos = getY(Math.pow(10, tick));
                return (
                  <g key={tick}>
                    <line x1={padding} x2={width - padding} y1={yPos} y2={yPos} className="grid-line" />
                    <text x={padding - 10} y={yPos + 4} textAnchor="end" className="axis-text">
                      10^{tick}
                    </text>
                  </g>
                );
              })}

              {/* X Axis ticks */}
              {[1e-6, 1e-4, 1e-2, 1.0, 1e2, 1e4, 1e6].map((input, idx) => {
                const xPos = getX(input);
                return (
                  <g key={idx}>
                    <line x1={xPos} x2={xPos} y1={padding} y2={height - padding} className="grid-line" />
                    <text x={xPos} y={height - padding + 16} textAnchor="middle" className="axis-text">
                      10^{Math.round(Math.log10(input))}
                    </text>
                  </g>
                );
              })}

              {/* Axis lines */}
              <line x1={padding} x2={width - padding} y1={height - padding} y2={height - padding} className="axis-line" />
              <line x1={padding} x2={padding} y1={padding} y2={height - padding} className="axis-line" />

              {/* Path line */}
              {pathD && <path d={pathD} className="path-error" />}

              {/* Dots */}
              {plotData.map((pt, idx) => (
                <circle
                  key={idx}
                  cx={getX(pt.input)}
                  cy={getY(pt.relativeError)}
                  r="5"
                  className="chart-dot"
                />
              ))}

              {/* Axis Labels */}
              <text x={width / 2} y={height - 10} textAnchor="middle" className="axis-text" style={{ fill: "var(--text)", fontWeight: "600" }}>
                Input Magnitude (x)
              </text>
            </svg>
          ) : (
            <div style={{ margin: "auto", color: "var(--muted)" }}>Run compilation to plot accuracy</div>
          )}
        </div>
      </div>

      {/* GENERATED C CODE PREVIEW PANEL */}
      {generatedC && (
        <div className="c-source-panel">
          <div className="c-source-title">
            <span>💻 GCC Sandbox Compiler Generated C Source</span>
          </div>
          <pre className="c-code-block">{generatedC}</pre>
        </div>
      )}

      {/* DYNAMIC TOOLTIP */}
      {hoveredNode && (
        <div
          className="ast-tooltip"
          style={{
            left: `${hoveredNode.x}px`,
            top: `${hoveredNode.y}px`,
            transform: hoveredNode.transform
          }}
        >
          <div
            className="ast-tooltip-title"
            style={{
              color: hoveredNode.node.isVulnerable ? "var(--red)" : "var(--text)"
            }}
          >
            {hoveredNode.node.isVulnerable ? `⚠ ${hoveredNode.node.vulnType}` : `AST Node: ${hoveredNode.node.type.toUpperCase()}`}
          </div>
          <div style={{ fontSize: "0.78rem", color: "var(--blue)", fontFamily: "monospace", margin: "2px 0 6px", fontWeight: "600" }}>
            Expression: {hoveredNode.node.expr}
          </div>
          <p className="ast-tooltip-desc">
            {hoveredNode.node.isVulnerable ? hoveredNode.node.vulnDesc : hoveredNode.node.desc}
          </p>
        </div>
      )}
    </section>
  );
}
