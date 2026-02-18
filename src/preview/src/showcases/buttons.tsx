import React from "react";

const buttonBase: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  whiteSpace: "nowrap",
  fontSize: "0.875rem",
  fontWeight: 500,
  fontFamily: "var(--font-sans)",
  borderRadius: "var(--radius)",
  padding: "0.5rem 1rem",
  border: "none",
  cursor: "pointer",
  transition: "all 0.15s",
  height: "2.25rem",
};

const variants: Record<string, React.CSSProperties> = {
  default: {
    ...buttonBase,
    background: "var(--primary)",
    color: "var(--primary-foreground)",
  },
  secondary: {
    ...buttonBase,
    background: "var(--secondary)",
    color: "var(--secondary-foreground)",
    border: "1px solid var(--border)",
  },
  destructive: {
    ...buttonBase,
    background: "var(--destructive)",
    color: "var(--destructive-foreground)",
  },
  outline: {
    ...buttonBase,
    background: "transparent",
    color: "var(--foreground)",
    border: "1px solid var(--border)",
  },
  ghost: {
    ...buttonBase,
    background: "transparent",
    color: "var(--foreground)",
    border: "1px solid transparent",
  },
};

export function ButtonsShowcase() {
  return (
    <div className="section">
      <h2 className="section-title">Buttons</h2>
      <div className="flex flex-wrap gap-3">
        {Object.entries(variants).map(([name, style]) => (
          <button key={name} style={style}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </button>
        ))}
        <button
          style={{
            ...buttonBase,
            background: "var(--primary)",
            color: "var(--primary-foreground)",
            opacity: 0.5,
            cursor: "not-allowed",
          }}
          disabled
        >
          Disabled
        </button>
      </div>
      <div className="flex flex-wrap gap-3" style={{ marginTop: "0.75rem" }}>
        <button
          style={{
            ...variants.default,
            height: "2rem",
            padding: "0.25rem 0.75rem",
            fontSize: "0.8125rem",
          }}
        >
          Small
        </button>
        <button style={variants.default}>Default</button>
        <button
          style={{
            ...variants.default,
            height: "2.75rem",
            padding: "0.5rem 2rem",
          }}
        >
          Large
        </button>
        <button
          style={{
            ...variants.default,
            width: "2.25rem",
            padding: 0,
            borderRadius: "var(--radius)",
          }}
        >
          ⚙
        </button>
      </div>
    </div>
  );
}
