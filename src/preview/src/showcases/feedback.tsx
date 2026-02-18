import React from "react";
import { Icon } from "@iconify/react";

const badgeBase: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  fontSize: "0.75rem",
  fontWeight: 600,
  padding: "0.125rem 0.625rem",
  borderRadius: "9999px",
  lineHeight: 1.5,
};

export function BadgeShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Badge</div>
      <div className="example-box">
        <div className="example-row">
          <span style={{ ...badgeBase, background: "var(--primary)", color: "var(--primary-foreground)" }}>
            Default
          </span>
          <span style={{ ...badgeBase, background: "var(--secondary)", color: "var(--secondary-foreground)", border: "1px solid var(--border)" }}>
            Secondary
          </span>
          <span style={{ ...badgeBase, background: "var(--destructive)", color: "var(--destructive-foreground)" }}>
            Destructive
          </span>
          <span style={{ ...badgeBase, background: "transparent", color: "var(--foreground)", border: "1px solid var(--border)" }}>
            Outline
          </span>
        </div>
      </div>
    </div>
  );
}

export function AlertShowcase() {
  return (
    <>
      <div className="example-section">
        <div className="example-label">Alert — Default</div>
        <div className="example-box">
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              padding: "1rem",
              maxWidth: "520px",
            }}
          >
            <Icon icon="lucide:terminal" width="16" height="16" style={{ flexShrink: 0, marginTop: "0.125rem" }} />
            <div>
              <p style={{ fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.25rem" }}>
                Heads up!
              </p>
              <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
                You can add components to your app using the CLI.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="example-section">
        <div className="example-label">Alert — Destructive</div>
        <div className="example-box">
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              border: "1px solid var(--destructive)",
              borderRadius: "var(--radius)",
              padding: "1rem",
              color: "var(--destructive)",
              maxWidth: "520px",
            }}
          >
            <Icon icon="lucide:circle-alert" width="16" height="16" style={{ flexShrink: 0, marginTop: "0.125rem" }} />
            <div>
              <p style={{ fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.25rem" }}>
                Error
              </p>
              <p style={{ fontSize: "0.875rem", opacity: 0.9 }}>
                Your session has expired. Please log in again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function SkeletonShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Skeleton</div>
      <div className="example-box">
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "400px" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "9999px", background: "var(--muted)", animation: "pulse 2s ease-in-out infinite", flexShrink: 0 }} />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <div style={{ height: "0.875rem", width: "55%", borderRadius: "var(--radius)", background: "var(--muted)", animation: "pulse 2s ease-in-out infinite" }} />
              <div style={{ height: "0.875rem", width: "80%", borderRadius: "var(--radius)", background: "var(--muted)", animation: "pulse 2s ease-in-out infinite" }} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div style={{ height: "0.75rem", width: "100%", borderRadius: "var(--radius)", background: "var(--muted)", animation: "pulse 2s ease-in-out infinite" }} />
            <div style={{ height: "0.75rem", width: "90%", borderRadius: "var(--radius)", background: "var(--muted)", animation: "pulse 2s ease-in-out infinite" }} />
            <div style={{ height: "0.75rem", width: "70%", borderRadius: "var(--radius)", background: "var(--muted)", animation: "pulse 2s ease-in-out infinite" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
