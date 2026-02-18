import React from "react";

const badgeBase: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  fontSize: "0.75rem",
  fontWeight: 600,
  padding: "0.125rem 0.625rem",
  borderRadius: "9999px",
  lineHeight: 1.5,
};

export function FeedbackShowcase() {
  return (
    <div className="section">
      <h2 className="section-title">Feedback</h2>

      {/* Badges */}
      <div style={{ marginBottom: "1.5rem" }}>
        <p style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>
          Badges
        </p>
        <div className="flex flex-wrap gap-2">
          <span
            style={{
              ...badgeBase,
              background: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
          >
            Default
          </span>
          <span
            style={{
              ...badgeBase,
              background: "var(--secondary)",
              color: "var(--secondary-foreground)",
              border: "1px solid var(--border)",
            }}
          >
            Secondary
          </span>
          <span
            style={{
              ...badgeBase,
              background: "var(--destructive)",
              color: "var(--destructive-foreground)",
            }}
          >
            Destructive
          </span>
          <span
            style={{
              ...badgeBase,
              background: "transparent",
              color: "var(--foreground)",
              border: "1px solid var(--border)",
            }}
          >
            Outline
          </span>
        </div>
      </div>

      {/* Alerts */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
        <p style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)" }}>
          Alerts
        </p>
        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            padding: "1rem",
            background: "var(--background)",
          }}
        >
          <p style={{ fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.25rem" }}>
            Heads up!
          </p>
          <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
            You can add components to your app using the CLI.
          </p>
        </div>

        <div
          style={{
            border: "1px solid var(--destructive)",
            borderRadius: "var(--radius)",
            padding: "1rem",
            background: "var(--background)",
            color: "var(--destructive)",
          }}
        >
          <p style={{ fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.25rem" }}>
            Error
          </p>
          <p style={{ fontSize: "0.875rem", opacity: 0.9 }}>
            Your session has expired. Please log in again.
          </p>
        </div>
      </div>

      {/* Skeleton */}
      <div>
        <p style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>
          Skeleton
        </p>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <div
            style={{
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "9999px",
              background: "var(--muted)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div
              style={{
                height: "0.875rem",
                width: "60%",
                borderRadius: "var(--radius)",
                background: "var(--muted)",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            <div
              style={{
                height: "0.875rem",
                width: "40%",
                borderRadius: "var(--radius)",
                background: "var(--muted)",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>
        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
      </div>
    </div>
  );
}
