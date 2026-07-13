import React from "react";

function Icon({ children }) {
  return (
    <span className="sidebar-icon" aria-hidden="true">
      {children}
    </span>
  );
}

export default function Sidebar({
  status,
  staticCount,
  runtimeCount,
  plotCount,
  activeView,
  onNavigate,
  onRunAnalysis,
  onAutoFix,
}) {
  const items = [
    { label: "Analyzer", icon: "◫", view: "analyzer" },
    { label: "Visualization", icon: "▣", view: "visualization" },
    { label: "Comparison", icon: "⇌", view: "comparison" }, // New item
    { label: "AST Visualizer", icon: "🌲", view: "ast_visualizer" },
    { label: "Playground", icon: "🎛️", view: "playground" },
    { label: "Stability Heatmap", icon: "🗺️", view: "heatmap" },
    // { label: "Report", icon: "▤", view: "report" },
  ];

  return (
    <aside className="sidebar-panel matte-panel reveal">
      <div className="sidebar-brand">
        <div className="brand-mark sidebar-mark">
          <span>NS</span>
        </div>

        <div>
          <div className="sidebar-title">Numerical Stability</div>
        </div>
      </div>

      <div className="sidebar-status">
        <span className="status-dot" />
        <span>{status}</span>
      </div>

      <div className="sidebar-section-label">Navigation</div>

      <div className="sidebar-nav">
        {items.map((item) => (
          <button
            key={item.label}
            className={`sidebar-nav-item ${activeView === item.view ? "active" : ""}`}
            type="button"
            onClick={() => onNavigate(item.view)}
          >
            <div className="nav-icon">
              <Icon>{item.icon}</Icon>
            </div>

            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <div className="sidebar-section-label">Quick Metrics</div>

      <div className="sidebar-metrics">
        <div className="sidebar-metric">
          <span>Static</span>
          <strong>{staticCount}</strong>
        </div>

        <div className="sidebar-metric">
          <span>Runtime</span>
          <strong>{runtimeCount}</strong>
        </div>

        <div className="sidebar-metric">
          <span>Plots</span>
          <strong>{plotCount}</strong>
        </div>
      </div>
    </aside>
  );
}
