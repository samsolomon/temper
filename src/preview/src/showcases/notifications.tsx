import React from "react";

/* ── Toast ── */
function Toast({
  title,
  description,
  variant = "default",
  action,
}: {
  title: string;
  description: string;
  variant?: "default" | "success" | "destructive";
  action?: string;
}) {
  const accentColor =
    variant === "destructive"
      ? "var(--destructive)"
      : variant === "success"
        ? "var(--chart-2)"
        : "var(--border)";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "0.75rem",
        padding: "1rem",
        background: "var(--card)",
        color: "var(--card-foreground)",
        border: "1px solid var(--border)",
        borderLeft: `3px solid ${accentColor}`,
        borderRadius: "var(--radius)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        maxWidth: "380px",
      }}
    >
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.125rem" }}>{title}</p>
        <p style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)" }}>{description}</p>
      </div>
      {action && (
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.25rem 0.625rem",
            fontSize: "0.75rem",
            fontWeight: 500,
            fontFamily: "var(--font-sans)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            background: "transparent",
            color: "var(--foreground)",
            cursor: "pointer",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {action}
        </button>
      )}
    </div>
  );
}

export function ToastShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Toast</div>
      <div className="example-box">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <Toast title="Scheduled" description="Your meeting has been scheduled for tomorrow at 3pm." />
          <Toast title="Success" description="Your changes have been saved successfully." variant="success" />
          <Toast title="Error" description="Something went wrong. Please try again." variant="destructive" />
          <Toast title="Undo" description="Message has been sent." action="Undo" />
        </div>
      </div>
    </div>
  );
}

/* ── Tooltip ── */
function TooltipDemo({ position }: { position: "top" | "right" | "bottom" | "left" }) {
  const tooltipStyle: React.CSSProperties = {
    position: "absolute",
    background: "var(--primary)",
    color: "var(--primary-foreground)",
    fontSize: "0.75rem",
    fontWeight: 500,
    padding: "0.25rem 0.625rem",
    borderRadius: "var(--radius)",
    whiteSpace: "nowrap",
    ...(position === "top" && { bottom: "calc(100% + 0.5rem)", left: "50%", transform: "translateX(-50%)" }),
    ...(position === "bottom" && { top: "calc(100% + 0.5rem)", left: "50%", transform: "translateX(-50%)" }),
    ...(position === "left" && { right: "calc(100% + 0.5rem)", top: "50%", transform: "translateY(-50%)" }),
    ...(position === "right" && { left: "calc(100% + 0.5rem)", top: "50%", transform: "translateY(-50%)" }),
  };

  return (
    <div style={{ position: "relative", display: "inline-flex" }}>
      <button
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.375rem 0.75rem",
          fontSize: "0.8125rem",
          fontFamily: "var(--font-sans)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
          background: "transparent",
          color: "var(--foreground)",
          cursor: "default",
        }}
      >
        {position}
      </button>
      <div style={tooltipStyle}>Tooltip {position}</div>
    </div>
  );
}

export function TooltipShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Tooltip</div>
      <div className="example-box">
        <div style={{ display: "flex", gap: "3rem", padding: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
          <TooltipDemo position="top" />
          <TooltipDemo position="right" />
          <TooltipDemo position="bottom" />
          <TooltipDemo position="left" />
        </div>
      </div>
    </div>
  );
}

/* ── Sidebar Component ── */
export function SidebarShowcase() {
  const items = [
    { label: "Dashboard", active: true, focused: false },
    { label: "Projects", active: false, focused: true },
    { label: "Team", active: false, focused: false },
    { label: "Settings", active: false, focused: false },
  ];

  return (
    <div className="example-section">
      <div className="example-label">Sidebar</div>
      <div className="example-box">
        <div
          style={{
            width: "220px",
            height: "320px",
            background: "var(--sidebar-background)",
            color: "var(--sidebar-foreground)",
            borderRight: "1px solid var(--sidebar-border)",
            borderRadius: "var(--radius)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "0.75rem 1rem",
              borderBottom: "1px solid var(--sidebar-border)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <div
              style={{
                width: "1.5rem",
                height: "1.5rem",
                borderRadius: "calc(var(--radius) - 2px)",
                background: "var(--sidebar-primary)",
                color: "var(--sidebar-primary-foreground)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.625rem",
                fontWeight: 700,
              }}
            >
              T
            </div>
            <span style={{ fontSize: "0.875rem", fontWeight: 600 }}>Acme Inc</span>
          </div>

          <div style={{ flex: 1, padding: "0.5rem", display: "flex", flexDirection: "column", gap: "0.125rem" }}>
            {items.map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "0.375rem 0.625rem",
                  fontSize: "0.8125rem",
                  borderRadius: "calc(var(--radius) - 2px)",
                  cursor: "default",
                  background: item.active ? "var(--sidebar-primary)" : "transparent",
                  color: item.active ? "var(--sidebar-primary-foreground)" : "var(--sidebar-foreground)",
                  fontWeight: item.active ? 500 : 400,
                  boxShadow: item.focused ? "0 0 0 2px var(--sidebar-ring)" : "none",
                }}
              >
                {item.label}
              </div>
            ))}
          </div>

          <div
            style={{
              padding: "0.625rem 0.75rem",
              borderTop: "1px solid var(--sidebar-border)",
              background: "var(--sidebar-accent)",
              color: "var(--sidebar-accent-foreground)",
              fontSize: "0.75rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <div
              style={{
                width: "1.75rem",
                height: "1.75rem",
                borderRadius: "9999px",
                background: "var(--sidebar-primary)",
                color: "var(--sidebar-primary-foreground)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.625rem",
                fontWeight: 600,
              }}
            >
              JD
            </div>
            <div>
              <p style={{ fontWeight: 500, fontSize: "0.8125rem" }}>John Doe</p>
              <p style={{ fontSize: "0.6875rem", opacity: 0.7 }}>john@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
