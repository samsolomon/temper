import React from "react";

const cardStyle: React.CSSProperties = {
  background: "var(--card)",
  color: "var(--card-foreground)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius)",
  padding: "1.5rem",
};

const btnPrimary: React.CSSProperties = {
  background: "var(--primary)",
  color: "var(--primary-foreground)",
  border: "none",
  padding: "0.375rem 0.75rem",
  borderRadius: "var(--radius)",
  fontSize: "0.875rem",
  fontWeight: 500,
  cursor: "pointer",
};

const btnOutline: React.CSSProperties = {
  background: "transparent",
  color: "var(--foreground)",
  border: "1px solid var(--border)",
  padding: "0.375rem 0.75rem",
  borderRadius: "var(--radius)",
  fontSize: "0.875rem",
  cursor: "pointer",
};

export function CardsShowcase() {
  return (
    <>
      {/* Default */}
      <div className="example-section">
        <div className="example-label">Default</div>
        <div className="example-box">
          <div style={{ maxWidth: "420px" }}>
            <div style={cardStyle}>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                Card Title
              </h3>
              <p style={{ color: "var(--muted-foreground)", fontSize: "0.875rem", marginBottom: "1rem" }}>
                Card description with helpful context.
              </p>
              <p style={{ fontSize: "0.875rem", marginBottom: "1.25rem" }}>
                This is the card content area. It supports any kind of content including text,
                forms, images, and nested components.
              </p>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <button style={btnPrimary}>Save</button>
                <button style={btnOutline}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="example-section">
        <div className="example-label">Stats</div>
        <div className="example-box">
          <div className="example-grid example-grid-3">
            {[
              { label: "Total Revenue", value: "$45,231.89", change: "+20.1% from last month" },
              { label: "Subscriptions", value: "+2,350", change: "+180.1% from last month" },
              { label: "Active Now", value: "+573", change: "+201 since last hour" },
            ].map((stat) => (
              <div key={stat.label} style={cardStyle}>
                <p style={{ color: "var(--muted-foreground)", fontSize: "0.875rem" }}>
                  {stat.label}
                </p>
                <p style={{ fontSize: "1.75rem", fontWeight: 700, marginTop: "0.25rem", letterSpacing: "-0.02em" }}>
                  {stat.value}
                </p>
                <p style={{ color: "var(--muted-foreground)", fontSize: "0.8125rem", marginTop: "0.25rem" }}>
                  {stat.change}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background variants */}
      <div className="example-section">
        <div className="example-label">Background variants</div>
        <div className="example-box">
          <div className="example-grid example-grid-2">
            <div style={{ ...cardStyle, background: "var(--muted)", border: "none" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.375rem" }}>
                Muted
              </h3>
              <p style={{ color: "var(--muted-foreground)", fontSize: "0.875rem" }}>
                Uses --muted background for less prominent sections.
              </p>
            </div>
            <div style={{ ...cardStyle, background: "var(--accent)", color: "var(--accent-foreground)" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.375rem" }}>
                Accent
              </h3>
              <p style={{ fontSize: "0.875rem", opacity: 0.8 }}>
                Uses --accent for highlighted or hovered items.
              </p>
            </div>
            <div style={{ ...cardStyle, background: "var(--primary)", color: "var(--primary-foreground)" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.375rem" }}>
                Primary
              </h3>
              <p style={{ fontSize: "0.875rem", opacity: 0.85 }}>
                Uses --primary for high-impact areas.
              </p>
            </div>
            <div style={{ ...cardStyle, background: "var(--secondary)", color: "var(--secondary-foreground)" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.375rem" }}>
                Secondary
              </h3>
              <p style={{ fontSize: "0.875rem", opacity: 0.85 }}>
                Uses --secondary as an alternative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
