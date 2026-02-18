import React from "react";

const cardStyle: React.CSSProperties = {
  background: "var(--card)",
  color: "var(--card-foreground)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius)",
  padding: "1.5rem",
};

export function CardsShowcase() {
  return (
    <div className="section">
      <h2 className="section-title">Cards</h2>
      <div className="grid grid-cols-2">
        {/* Standard card */}
        <div style={cardStyle}>
          <h3 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "0.25rem" }}>
            Card Title
          </h3>
          <p style={{ color: "var(--muted-foreground)", fontSize: "0.875rem", marginBottom: "1rem" }}>
            Card description goes here with some helpful context.
          </p>
          <p style={{ fontSize: "0.875rem" }}>
            This is the card content area. It can contain any kind of content
            including text, forms, and other components.
          </p>
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
            <button
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                border: "none",
                padding: "0.375rem 0.75rem",
                borderRadius: "var(--radius)",
                fontSize: "0.875rem",
                cursor: "pointer",
              }}
            >
              Action
            </button>
            <button
              style={{
                background: "transparent",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
                padding: "0.375rem 0.75rem",
                borderRadius: "var(--radius)",
                fontSize: "0.875rem",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Stats card */}
        <div style={cardStyle}>
          <p style={{ color: "var(--muted-foreground)", fontSize: "0.875rem" }}>
            Total Revenue
          </p>
          <p style={{ fontSize: "2rem", fontWeight: 700, marginTop: "0.25rem" }}>
            $45,231.89
          </p>
          <p style={{ color: "var(--muted-foreground)", fontSize: "0.8125rem", marginTop: "0.25rem" }}>
            +20.1% from last month
          </p>
        </div>

        {/* Muted card */}
        <div
          style={{
            ...cardStyle,
            background: "var(--muted)",
            border: "none",
          }}
        >
          <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem" }}>
            Muted Card
          </h3>
          <p style={{ color: "var(--muted-foreground)", fontSize: "0.875rem" }}>
            This card uses the muted background for less prominent content sections.
          </p>
        </div>

        {/* Accent card */}
        <div
          style={{
            ...cardStyle,
            background: "var(--accent)",
            color: "var(--accent-foreground)",
          }}
        >
          <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem" }}>
            Accent Card
          </h3>
          <p style={{ fontSize: "0.875rem", opacity: 0.8 }}>
            This card uses the accent color, commonly used for hover states and highlights.
          </p>
        </div>
      </div>
    </div>
  );
}
