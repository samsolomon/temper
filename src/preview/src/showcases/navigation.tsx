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

export function NavigationShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Account", "Security", "Notifications", "Billing"];

  return (
    <div className="section">
      <h2 className="section-title">Navigation</h2>

      {/* Tabs */}
      <div style={{ marginBottom: "1.5rem" }}>
        <p style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>
          Tabs
        </p>
        <div style={{ borderBottom: "1px solid var(--border)", marginBottom: "1rem" }}>
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
            borderRadius: "var(--radius)",
            padding: "1rem",
          }}
        >
          <p style={{ fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.25rem" }}>
            {tabs[activeTab]}
          </p>
          <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
            Manage your {tabs[activeTab].toLowerCase()} settings and preferences.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div>
        <p style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>
          Breadcrumb
        </p>
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
