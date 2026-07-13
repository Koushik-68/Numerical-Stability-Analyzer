import React, { useState, useEffect } from "react";

// Predefined AST Database for standard numerical stability vulnerabilities
const AST_PATTERNS = {
  unstable_expr: {
    label: "Loss of Significance (Conjugate Rewrite)",
    description: "Evaluates sqrt(x*x + 1.0) - x. At high magnitudes, floating-point subtraction cancels out precision.",
    before: {
      type: "operator",
      value: "-",
      isVulnerable: true,
      vulnType: "Loss of Significance",
      vulnDesc: "Critical subtraction of nearly equal terms. Since sqrt(x^2 + 1) ≈ x for large x, the difference collapses to 0.0, wiping out all trailing bits.",
      left: {
        type: "function",
        value: "sqrt",
        desc: "Calls standard square root function. Suffers from high-precision rounding on square inputs.",
        left: {
          type: "operator",
          value: "+",
          desc: "Floating-point addition node. Adds huge squared input to constant literal.",
          left: {
            type: "operator",
            value: "*",
            desc: "Multiplication node. Squares the variable 'x' which rapidly scales register exponent bits.",
            left: { type: "variable", value: "x", desc: "Double-precision input variable scaling to high magnitudes." },
            right: { type: "variable", value: "x", desc: "Double-precision input variable scaling to high magnitudes." }
          },
          right: { type: "literal", value: "1.0", desc: "Constant literal. Becomes insignificant when added to x^2." }
        }
      },
      right: { type: "variable", value: "x", desc: "Original double-precision variable input term." }
    },
    after: {
      type: "operator",
      value: "/",
      isOptimized: true,
      optDesc: "Conjugate division node. Transforms subtractive cancellation into addition, preserving subnormal precision.",
      left: { type: "literal", value: "1.0", desc: "Constant numerator. Avoids subtractive precision loss." },
      right: {
        type: "operator",
        value: "+",
        desc: "Addition operator. Adding positive terms prevents cancellation.",
        left: {
          type: "function",
          value: "sqrt",
          desc: "Square root evaluating positive sums safely.",
          left: {
            type: "operator",
            value: "+",
            desc: "Inner addition node.",
            left: {
              type: "operator",
              value: "*",
              desc: "Squaring input x safely.",
              left: { type: "variable", value: "x", desc: "Double-precision variable input." },
              right: { type: "variable", value: "x", desc: "Double-precision variable input." }
            },
            right: { type: "literal", value: "1.0", desc: "Constant literal addend." }
          }
        },
        right: { type: "variable", value: "x", desc: "Positive addend term." }
      }
    }
  },
  cancellation: {
    label: "Catastrophic Cancellation (Epsilon Guard)",
    description: "Evaluates (12345678.0 + 1.23e-9) - 12345678.0. Large constant addends shift precision window beyond small delta limits.",
    before: {
      type: "operator",
      value: "-",
      isVulnerable: true,
      vulnType: "Catastrophic Cancellation",
      vulnDesc: "Catastrophic subtraction node. Discards small trailing bits (1.23e-9) completely because they fall outside the 53-bit mantissa window of the large float.",
      left: {
        type: "operator",
        value: "+",
        desc: "Addition of extreme scale differences. Causes immediate truncation of the smaller term.",
        left: { type: "literal", value: "12345678.0", desc: "Large constant offset occupying significant bits in registers." },
        right: { type: "literal", value: "1.23e-9", desc: "Highly precise subnormal delta value. Will be truncated." }
      },
      right: { type: "literal", value: "12345678.0", desc: "Large constant offset subtracted from the offset summation." }
    },
    after: {
      type: "function",
      value: "epsilon_guard",
      isOptimized: true,
      optDesc: "Numerical truncation guard. Intercepts subtraction. If difference is within machine epsilon noise, resolves result safely to 0.0.",
      left: {
        type: "operator",
        value: "-",
        desc: "Safe subtraction. Guarded by the parent threshold check.",
        left: {
          type: "operator",
          value: "+",
          desc: "Unstable sum of terms.",
          left: { type: "literal", value: "12345678.0", desc: "Large constant numeric literal." },
          right: { type: "literal", value: "1.23e-9", desc: "Small numeric literal delta." }
        },
        right: { type: "literal", value: "12345678.0", desc: "Large constant offset subtracted." }
      }
    }
  },
  division: {
    label: "Division by Zero (DBL_MIN assert)",
    description: "Evaluates 1.0 / (denominator). Near-zero denominator triggers explosive floating-point spike to infinity.",
    before: {
      type: "operator",
      value: "/",
      desc: "Floating-point division operator.",
      left: { type: "literal", value: "1.0", desc: "Numerator value." },
      right: {
        type: "operator",
        value: "-",
        isVulnerable: true,
        vulnType: "Division by Zero / Near-Zero",
        vulnDesc: "Unbounded subtraction. If denominator approaches zero (underflow), this division spikes to infinity and triggers CPU exception registers.",
        left: { type: "variable", value: "denominator", desc: "Input double variable subject to underflow limits." },
        right: { type: "literal", value: "1.0", desc: "Subtraction offset parameter." }
      }
    },
    after: {
      type: "operator",
      value: "/",
      desc: "Guarded division operator.",
      left: { type: "literal", value: "1.0", desc: "Numerator constant." },
      right: {
        type: "function",
        value: "assert_min_guard",
        isOptimized: true,
        optDesc: "Checks if denominator is below machine DBL_MIN threshold. Replaces near-zero values with safe bounds.",
        left: {
          type: "operator",
          value: "-",
          desc: "Guarded subtraction operation.",
          left: { type: "variable", value: "denominator", desc: "Input variable." },
          right: { type: "literal", value: "1.0", desc: "Constant offset." }
        }
      }
    }
  },
  trig: {
    label: "Trigonometric Cancellation (Product Rewrite)",
    description: "Evaluates sin(x) - sin(x + delta). High scale waves trigger phase erasure under subtractive differences.",
    before: {
      type: "operator",
      value: "-",
      isVulnerable: true,
      vulnType: "Trigonometric Phase Erasure",
      vulnDesc: "Subtraction of sine waves. High values of x compress wave frequencies, making sin(x) and sin(x+delta) identical, erasing phase difference information.",
      left: {
        type: "function",
        value: "sin",
        desc: "Sine evaluation of first coordinate.",
        left: { type: "variable", value: "x", desc: "Variable representing wave phase argument." }
      },
      right: {
        type: "function",
        value: "sin",
        desc: "Sine evaluation of shifted coordinate.",
        left: {
          type: "operator",
          value: "+",
          desc: "Shifted phase summation.",
          left: { type: "variable", value: "x", desc: "Variable phase argument." },
          right: { type: "variable", value: "delta", desc: "Tiny wave shift delta." }
        }
      }
    },
    after: {
      type: "operator",
      value: "*",
      isOptimized: true,
      optDesc: "Trigonometric sum-to-product rewrite. Replaces cancellation-prone subtraction with stable multiplication.",
      left: {
        type: "operator",
        value: "*",
        desc: "Constant product scaling factor.",
        left: { type: "literal", value: "-2.0", desc: "Multiplication scalar from trig identity." },
        right: {
          type: "function",
          value: "sin",
          desc: "Sine of half the shift delta. Highly stable for tiny values.",
          left: {
            type: "operator",
            value: "/",
            desc: "Half-delta scale computation.",
            left: { type: "variable", value: "delta", desc: "Tiny shift input." },
            right: { type: "literal", value: "2.0", desc: "Division constant." }
          }
        }
      },
      right: {
        type: "function",
        value: "cos",
        desc: "Cosine of mid-phase coordinate. Safe from subtractive cancellation.",
        left: {
          type: "operator",
          value: "+",
          desc: "Mid-phase calculation.",
          left: { type: "variable", value: "x", desc: "Phase parameter." },
          right: {
            type: "operator",
            value: "/",
            desc: "Half-shift addend.",
            left: { type: "variable", value: "delta", desc: "Tiny shift input." },
            right: { type: "literal", value: "2.0", desc: "Division constant." }
          }
        }
      }
    }
  },
  log: {
    label: "Logarithmic Instability (log1p Rewrite)",
    description: "Evaluates log(x + 1) - log(x). Subtraction at extreme scale loses precision.",
    before: {
      type: "operator",
      value: "-",
      isVulnerable: true,
      vulnType: "Logarithmic Precision Loss",
      vulnDesc: "Subtraction of natural log coordinates. Discards fractional mantissa parts for large values of x as log(x+1) converges to log(x) in registers.",
      left: {
        type: "function",
        value: "log",
        desc: "Logarithmic call for offset value.",
        left: {
          type: "operator",
          value: "+",
          desc: "Offset addition node.",
          left: { type: "variable", value: "x", desc: "Double-precision variable subject to scale issues." },
          right: { type: "literal", value: "1.0", desc: "Constant literal unit." }
        }
      },
      right: {
        type: "function",
        value: "log",
        desc: "Logarithmic call for baseline value.",
        left: { type: "variable", value: "x", desc: "Double-precision variable." }
      }
    },
    after: {
      type: "function",
      value: "log1p",
      isOptimized: true,
      optDesc: "Invokes specialized hardware implementation log1p(x) which evaluates ln(1 + x) without losing subnormal bits.",
      left: {
        type: "operator",
        value: "/",
        desc: "Reciprocal division. Safe from logarithmic underflow.",
        left: { type: "literal", value: "1.0", desc: "Constant numerator." },
        right: { type: "variable", value: "x", desc: "Large variable input." }
      }
    }
  }
};

export default function AstVisualizerView({ code }) {
  const [selectedKey, setSelectedKey] = useState("unstable_expr");
  const [hoveredNode, setHoveredNode] = useState(null);

  // Auto-detect matching pattern based on compiler input code
  useEffect(() => {
    if (!code) return;
    const lowerCode = code.toLowerCase();
    if (lowerCode.includes("log1p") || (lowerCode.includes("log(") && lowerCode.includes("- log"))) {
      setSelectedKey("log");
    } else if (lowerCode.includes("sin") && lowerCode.includes("cos") && lowerCode.includes("-")) {
      setSelectedKey("trig");
    } else if (lowerCode.includes("dbl_min") || lowerCode.includes("denominator")) {
      setSelectedKey("division");
    } else if (lowerCode.includes("dbl_epsilon") || lowerCode.includes("12345678")) {
      setSelectedKey("cancellation");
    } else if (lowerCode.includes("sqrt") && lowerCode.includes("- x")) {
      setSelectedKey("unstable_expr");
    }
  }, [code]);

  const pattern = AST_PATTERNS[selectedKey] || AST_PATTERNS.unstable_expr;

  // Recursive tree renderer component
  const renderAstNode = (node, isBefore = true) => {
    if (!node) return null;

    const getNodeClass = () => {
      if (node.isVulnerable) return "node-box vulnerable";
      if (node.isOptimized) return "node-box optimized";
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
            
            let xPos, yPos, transformStyle;
            const tooltipHeight = 150;
            const padding = 16;
            
            if (isRightSide) {
              // Place to the left of the node
              xPos = rect.left - 12;
              yPos = rect.top + rect.height / 2;
              transformStyle = "translate(-100%, -50%)";
            } else {
              // Place to the right of the node
              xPos = rect.right + 12;
              yPos = rect.top + rect.height / 2;
              transformStyle = "translate(0, -50%)";
            }
            
            // Adjust yPos if it would push tooltip off-screen vertically
            if (yPos - tooltipHeight / 2 < padding) {
              yPos = tooltipHeight / 2 + padding;
            } else if (yPos + tooltipHeight / 2 > window.innerHeight - padding) {
              yPos = window.innerHeight - tooltipHeight / 2 - padding;
            }

            setHoveredNode({
              node,
              isBefore,
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
            {node.left && renderAstNode(node.left, isBefore)}
            {node.right && renderAstNode(node.right, isBefore)}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="ast-visualizer-page matte-panel reveal" style={{ gridColumn: "2 / -1" }}>
      <style>{`
        .ast-visualizer-page {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .ast-header {
          border-bottom: 1px solid var(--border);
          padding-bottom: 16px;
        }

        .ast-header h2 {
          margin: 0;
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--text);
        }

        .ast-header p {
          margin: 4px 0 0;
          color: var(--muted);
          font-size: 0.9rem;
        }

        .ast-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 16px 20px;
        }

        .select-label {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text);
          margin-right: 12px;
        }

        .dropdown-ast {
          background: rgba(18, 24, 32, 0.95);
          color: var(--text);
          border: 1px solid var(--border-strong);
          border-radius: 8px;
          padding: 8px 16px;
          font-size: 0.9rem;
          outline: none;
          min-width: 280px;
          cursor: pointer;
        }

        .dropdown-ast:focus {
          border-color: var(--blue);
        }

        .ast-desc-box {
          font-size: 0.9rem;
          color: var(--muted);
          max-width: 50%;
          line-height: 1.5;
        }

        .ast-comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 10px;
        }

        .ast-pane {
          background: linear-gradient(180deg, rgba(16, 20, 26, 0.8) 0%, rgba(9, 12, 16, 0.9) 100%);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 24px;
          min-height: 520px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          box-shadow: var(--shadow);
          overflow: auto;
        }

        .ast-pane-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 40px;
          align-self: flex-start;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ast-pane-title.red { color: var(--red); }
        .ast-pane-title.green { color: var(--green); }

        /* AST Tree Connector Layout */
        .ast-tree-canvas {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          width: 100%;
          padding-top: 10px;
        }

        .ast-tree-branch {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .node-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(30, 41, 59, 0.45);
          border: 1.5px solid var(--border-strong);
          border-radius: 8px;
          padding: 8px 16px;
          min-width: 100px;
          z-index: 10;
          transition: all 0.2s ease;
          cursor: help;
        }

        .node-box:hover {
          transform: scale(1.05);
          background: rgba(30, 41, 59, 0.7);
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.1);
        }

        .node-box.variable {
          border-color: #c084fc;
          background: rgba(192, 132, 252, 0.05);
        }
        .node-box.literal {
          border-color: #60a5fa;
          background: rgba(96, 165, 250, 0.05);
        }
        .node-box.function {
          border-color: #fb7185;
          background: rgba(251, 113, 133, 0.05);
        }

        .node-box.vulnerable {
          border-color: var(--red);
          background: rgba(239, 68, 68, 0.12);
          box-shadow: 0 0 10px rgba(239, 68, 68, 0.2);
        }

        .node-box.vulnerable:hover {
          background: rgba(239, 68, 68, 0.22);
          box-shadow: 0 0 16px rgba(239, 68, 68, 0.4);
        }

        .node-box.optimized {
          border-color: var(--green);
          background: rgba(34, 197, 94, 0.12);
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.2);
        }

        .node-box.optimized:hover {
          background: rgba(34, 197, 94, 0.22);
          box-shadow: 0 0 16px rgba(34, 197, 94, 0.4);
        }

        .node-type-label {
          font-size: 0.65rem;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 2px;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .node-value {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text);
        }

        .ast-tree-children {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-top: 32px;
          position: relative;
          width: 100%;
        }

        /* Connecting Lines */
        .ast-tree-children::before {
          content: "";
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 16px;
          background: var(--border-strong);
          z-index: 1;
        }

        .ast-tree-branch > .node-box + .ast-tree-children::after {
          content: "";
          position: absolute;
          top: -16px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--border-strong);
          z-index: 1;
          margin: 0 auto;
          width: calc(100% - 100px);
        }

        .ast-tree-branch::before {
          content: "";
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 16px;
          background: var(--border-strong);
          z-index: 1;
        }

        .ast-tree-canvas > .ast-tree-branch::before {
          display: none !important;
        }

        /* Hover Tooltip Widget */
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
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 6px;
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

        .ast-legend-panel {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 16px 20px;
          display: flex;
          gap: 32px;
          align-items: center;
          justify-content: flex-start;
          font-size: 0.85rem;
        }

        .ast-legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
        }

        .legend-indicator {
          width: 12px;
          height: 12px;
          border-radius: 3px;
          border: 1px solid var(--border);
        }

        .legend-indicator.vulnerable { background: rgba(239, 68, 68, 0.2); border-color: var(--red); }
        .legend-indicator.optimized { background: rgba(34, 197, 94, 0.2); border-color: var(--green); }
        .legend-indicator.variable { border-color: #c084fc; background: rgba(192, 132, 252, 0.1); }
        .legend-indicator.literal { border-color: #60a5fa; background: rgba(96, 165, 250, 0.1); }
        .legend-indicator.function { border-color: #fb7185; background: rgba(251, 113, 133, 0.1); }
      `}</style>

      {/* HEADER */}
      <div className="ast-header">
        <h2>AST Expression Vulnerability Visualizer</h2>
        <p>Analyzing compiler Abstract Syntax Trees to identify and rewrite floating-point vulnerabilities</p>
      </div>

      {/* CONTROLS */}
      <div className="ast-controls">
        <div>
          <span className="select-label">Select AST Pattern:</span>
          <select
            value={selectedKey}
            onChange={(e) => setSelectedKey(e.target.value)}
            className="dropdown-ast"
          >
            {Object.keys(AST_PATTERNS).map((key) => (
              <option key={key} value={key}>
                {AST_PATTERNS[key].label}
              </option>
            ))}
          </select>
        </div>
        <div className="ast-desc-box">
          <strong>Pattern Context:</strong> {pattern.description}
        </div>
      </div>

      {/* AST COMPARISON VIEW */}
      <div className="ast-comparison-grid">
        {/* BEFORE TREE */}
        <div className="ast-pane">
          <div className="ast-pane-title red">
            ❌ Original C AST (Baseline Unstable)
          </div>
          <div className="ast-tree-canvas">
            {renderAstNode(pattern.before, true)}
          </div>
        </div>

        {/* AFTER TREE */}
        <div className="ast-pane">
          <div className="ast-pane-title green">
            ✅ Rewritten C AST (Optimized Stable)
          </div>
          <div className="ast-tree-canvas">
            {renderAstNode(pattern.after, false)}
          </div>
        </div>
      </div>

      {/* LEGEND */}
      <div className="ast-legend-panel">
        <span style={{ color: "var(--muted)", fontWeight: "600", marginRight: "8px" }}>AST Legend:</span>
        <div className="ast-legend-item">
          <div className="legend-indicator vulnerable" />
          <span style={{ color: "var(--red)" }}>Vulnerable Node</span>
        </div>
        <div className="ast-legend-item">
          <div className="legend-indicator optimized" />
          <span style={{ color: "var(--green)" }}>Optimized Node</span>
        </div>
        <div className="ast-legend-item">
          <div className="legend-indicator function" />
          <span style={{ color: "#fb7185" }}>Function Call</span>
        </div>
        <div className="ast-legend-item">
          <div className="legend-indicator variable" />
          <span style={{ color: "#c084fc" }}>Variable Term</span>
        </div>
        <div className="ast-legend-item">
          <div className="legend-indicator literal" />
          <span style={{ color: "#60a5fa" }}>Literal Value</span>
        </div>
      </div>

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
              color: hoveredNode.node.isVulnerable
                ? "var(--red)"
                : hoveredNode.node.isOptimized
                ? "var(--green)"
                : "var(--text)"
            }}
          >
            {hoveredNode.node.isVulnerable
              ? `⚠ ${hoveredNode.node.vulnType}`
              : hoveredNode.node.isOptimized
              ? "✓ Precision Rewrite"
              : `AST Node: ${hoveredNode.node.type.toUpperCase()}`}
          </div>
          <p className="ast-tooltip-desc">
            {hoveredNode.node.isVulnerable
              ? hoveredNode.node.vulnDesc
              : hoveredNode.node.isOptimized
              ? hoveredNode.node.optDesc
              : hoveredNode.node.desc || `Value: "${hoveredNode.node.value}". Represents a standard C compiler structural element.`}
          </p>
        </div>
      )}
    </section>
  );
}
