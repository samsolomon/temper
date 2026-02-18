import React, { useState } from "react";

export function OverlaysShowcase() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <div className="section">
      <h2 className="section-title">Overlays</h2>

      <div className="flex gap-3">
        {/* Dialog trigger */}
        <button
          onClick={() => setDialogOpen(true)}
          style={{
            background: "var(--primary)",
            color: "var(--primary-foreground)",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "var(--radius)",
            fontSize: "0.875rem",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Open Dialog
        </button>

        {/* Popover trigger */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setPopoverOpen(!popoverOpen)}
            style={{
              background: "transparent",
              color: "var(--foreground)",
              border: "1px solid var(--border)",
              padding: "0.5rem 1rem",
              borderRadius: "var(--radius)",
              fontSize: "0.875rem",
              cursor: "pointer",
            }}
          >
            Open Popover
          </button>

          {popoverOpen && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 0.5rem)",
                left: 0,
                zIndex: 50,
                background: "var(--popover)",
                color: "var(--popover-foreground)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "1rem",
                minWidth: "200px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              }}
            >
              <p style={{ fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.25rem" }}>
                Popover Title
              </p>
              <p style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)" }}>
                This is a popover with some content inside.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Dialog */}
      {dialogOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.5)",
          }}
          onClick={() => setDialogOpen(false)}
        >
          <div
            style={{
              background: "var(--card)",
              color: "var(--card-foreground)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              padding: "1.5rem",
              maxWidth: "425px",
              width: "90%",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "0.25rem" }}>
              Are you sure?
            </h3>
            <p style={{ color: "var(--muted-foreground)", fontSize: "0.875rem", marginBottom: "1.25rem" }}>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </p>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
              <button
                onClick={() => setDialogOpen(false)}
                style={{
                  background: "transparent",
                  color: "var(--foreground)",
                  border: "1px solid var(--border)",
                  padding: "0.5rem 1rem",
                  borderRadius: "var(--radius)",
                  fontSize: "0.875rem",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => setDialogOpen(false)}
                style={{
                  background: "var(--destructive)",
                  color: "var(--destructive-foreground)",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "var(--radius)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
