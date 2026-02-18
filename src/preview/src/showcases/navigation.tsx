import React, { useState } from "react";

const tabStyle: React.CSSProperties = {
  padding: "0.5rem 0.75rem",
  fontSize: "0.875rem",
  fontWeight: 500,
  fontFamily: "var(--font-sans)",
  cursor: "pointer",
  border: "none",
  borderBottom: "2px solid transparent",
  background: "transparent",
  color: "var(--muted-foreground)",
  transition: "all 0.15s",
};

const activeTabStyle: React.CSSProperties = {
  ...tabStyle,
  color: "var(--foreground)",
  borderBottomColor: "var(--primary)",
};

export function TabsShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [activePill, setActivePill] = useState(0);
  const tabs = ["Account", "Security", "Notifications", "Billing"];

  return (
    <>
      <div className="example-section">
        <div className="example-label">Tabs</div>
        <div className="example-box">
          <div style={{ borderBottom: "1px solid var(--border)" }}>
            <div style={{ display: "flex", gap: "0.25rem" }}>
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  style={i === activeTab ? activeTabStyle : tabStyle}
                  onClick={() => setActiveTab(i)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderTop: "none",
              borderRadius: "0 0 var(--radius) var(--radius)",
              padding: "1.25rem",
            }}
          >
            <p style={{ fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.25rem" }}>
              {tabs[activeTab]}
            </p>
            <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
              Manage your {tabs[activeTab].toLowerCase()} settings and preferences here.
            </p>
          </div>
        </div>
      </div>

      <div className="example-section">
        <div className="example-label">Pill tabs</div>
        <div className="example-box">
          <div
            style={{
              display: "inline-flex",
              background: "var(--muted)",
              borderRadius: "var(--radius)",
              padding: "0.25rem",
              gap: "0.125rem",
            }}
          >
            {["Overview", "Analytics", "Reports"].map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActivePill(i)}
                style={{
                  padding: "0.375rem 0.75rem",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  fontFamily: "var(--font-sans)",
                  borderRadius: "calc(var(--radius) - 2px)",
                  border: "none",
                  cursor: "pointer",
                  background: i === activePill ? "var(--background)" : "transparent",
                  color: i === activePill ? "var(--foreground)" : "var(--muted-foreground)",
                  boxShadow: i === activePill ? "0 1px 2px rgba(0,0,0,0.06)" : "none",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export function BreadcrumbShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Breadcrumb</div>
      <div className="example-box">
        <nav style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.875rem" }}>
          <a
            href="#"
            style={{ color: "var(--muted-foreground)", textDecoration: "none" }}
            onClick={(e) => e.preventDefault()}
          >
            Home
          </a>
          <span style={{ color: "var(--muted-foreground)" }}>/</span>
          <a
            href="#"
            style={{ color: "var(--muted-foreground)", textDecoration: "none" }}
            onClick={(e) => e.preventDefault()}
          >
            Settings
          </a>
          <span style={{ color: "var(--muted-foreground)" }}>/</span>
          <span style={{ color: "var(--foreground)", fontWeight: 500 }}>
            Profile
          </span>
        </nav>
      </div>
    </div>
  );
}
