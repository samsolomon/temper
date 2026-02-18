import React from "react";

const tokenGroups: { label: string; tokens: string[] }[] = [
  {
    label: "Base",
    tokens: ["background", "foreground"],
  },
  {
    label: "Primary",
    tokens: ["primary", "primary-foreground"],
  },
  {
    label: "Secondary",
    tokens: ["secondary", "secondary-foreground"],
  },
  {
    label: "Muted",
    tokens: ["muted", "muted-foreground"],
  },
  {
    label: "Accent",
    tokens: ["accent", "accent-foreground"],
  },
  {
    label: "Destructive",
    tokens: ["destructive", "destructive-foreground"],
  },
  {
    label: "Card",
    tokens: ["card", "card-foreground"],
  },
  {
    label: "Popover",
    tokens: ["popover", "popover-foreground"],
  },
  {
    label: "Border / Input / Ring",
    tokens: ["border", "input", "ring"],
  },
  {
    label: "Charts",
    tokens: ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"],
  },
  {
    label: "Sidebar",
    tokens: [
      "sidebar-background",
      "sidebar-foreground",
      "sidebar-primary",
      "sidebar-primary-foreground",
      "sidebar-accent",
      "sidebar-accent-foreground",
      "sidebar-border",
      "sidebar-ring",
    ],
  },
];

function Swatch({ name }: { name: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        padding: "0.5rem 0",
      }}
    >
      <div
        style={{
          width: "2.5rem",
          height: "2.5rem",
          borderRadius: "calc(var(--radius) - 2px)",
          background: `var(--${name})`,
          border: "1px solid var(--border)",
          flexShrink: 0,
        }}
      />
      <div>
        <div
          style={{
            fontSize: "0.8125rem",
            fontWeight: 500,
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: "0.75rem",
            fontFamily: "var(--font-mono)",
            color: "var(--muted-foreground)",
          }}
        >
          --{name}
        </div>
      </div>
    </div>
  );
}

export function ColorsShowcase() {
  return (
    <>
      {tokenGroups.map((group) => (
        <div key={group.label} className="example-section">
          <div className="example-label">{group.label}</div>
          <div className="example-box">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${Math.min(group.tokens.length, 5)}, 1fr)`,
                gap: "0.5rem",
              }}
            >
              {group.tokens.map((token) => (
                <Swatch key={token} name={token} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
