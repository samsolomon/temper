import React, { useState, useEffect, useRef } from "react";

const btnPrimary: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  background: "var(--primary)",
  color: "var(--primary-foreground)",
  border: "none",
  padding: "0.5rem 1rem",
  borderRadius: "var(--radius)",
  fontSize: "0.875rem",
  fontWeight: 500,
  fontFamily: "var(--font-sans)",
  cursor: "pointer",
};

const btnOutline: React.CSSProperties = {
  ...btnPrimary,
  background: "transparent",
  color: "var(--foreground)",
  border: "1px solid var(--border)",
  fontWeight: 400,
};

export function OverlaysShowcase() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);

  return (
    <>
      {/* Dialog */}
      <div className="example-section">
        <div className="example-label">Dialog</div>
        <div className="example-box">
          <button style={btnPrimary} onClick={() => setDialogOpen(true)}>
            Open Dialog
          </button>

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
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                  Edit profile
                </h3>
                <p style={{ color: "var(--muted-foreground)", fontSize: "0.875rem", marginBottom: "1.25rem" }}>
                  Make changes to your profile here. Click save when you're done.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.25rem" }}>
                      Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      style={{
                        width: "100%",
                        height: "2.25rem",
                        padding: "0.5rem 0.75rem",
                        fontSize: "0.875rem",
                        fontFamily: "var(--font-sans)",
                        background: "var(--background)",
                        color: "var(--foreground)",
                        border: "1px solid var(--input)",
                        borderRadius: "var(--radius)",
                        outline: "none",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.25rem" }}>
                      Username
                    </label>
                    <input
                      type="text"
                      defaultValue="@johndoe"
                      style={{
                        width: "100%",
                        height: "2.25rem",
                        padding: "0.5rem 0.75rem",
                        fontSize: "0.875rem",
                        fontFamily: "var(--font-sans)",
                        background: "var(--background)",
                        color: "var(--foreground)",
                        border: "1px solid var(--input)",
                        borderRadius: "var(--radius)",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
                  <button style={btnOutline} onClick={() => setDialogOpen(false)}>
                    Cancel
                  </button>
                  <button style={btnPrimary} onClick={() => setDialogOpen(false)}>
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Alert Dialog */}
      <div className="example-section">
        <div className="example-label">Alert Dialog</div>
        <div className="example-box">
          <button
            style={{
              ...btnPrimary,
              background: "var(--destructive)",
              color: "var(--destructive-foreground)",
            }}
            onClick={() => setAlertDialogOpen(true)}
          >
            Delete Account
          </button>

          {alertDialogOpen && (
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
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                }}
              >
                <h3 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                  Are you absolutely sure?
                </h3>
                <p style={{ color: "var(--muted-foreground)", fontSize: "0.875rem", marginBottom: "1.25rem" }}>
                  This action cannot be undone. This will permanently delete your
                  account and remove all data from our servers.
                </p>
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
                  <button style={btnOutline} onClick={() => setAlertDialogOpen(false)}>
                    Cancel
                  </button>
                  <button
                    style={{
                      ...btnPrimary,
                      background: "var(--destructive)",
                      color: "var(--destructive-foreground)",
                    }}
                    onClick={() => setAlertDialogOpen(false)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Popover */}
      <div className="example-section">
        <div className="example-label">Popover</div>
        <div className="example-box">
          <PopoverDemo />
        </div>
      </div>
    </>
  );
}

function PopoverDemo() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!popoverOpen) return;
    function handleClick(e: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setPopoverOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [popoverOpen]);

  return (
          <div ref={popoverRef} style={{ position: "relative", display: "inline-block" }}>
            <button style={btnOutline} onClick={() => setPopoverOpen(!popoverOpen)}>
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
                  width: "280px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                }}
              >
                <p style={{ fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.25rem" }}>
                  Dimensions
                </p>
                <p style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)", marginBottom: "0.75rem" }}>
                  Set the dimensions for the layer.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {["Width", "Height"].map((label) => (
                    <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <label style={{ fontSize: "0.8125rem", width: "3.5rem" }}>{label}</label>
                      <input
                        type="text"
                        defaultValue={label === "Width" ? "100%" : "auto"}
                        style={{
                          flex: 1,
                          height: "2rem",
                          padding: "0.25rem 0.5rem",
                          fontSize: "0.8125rem",
                          fontFamily: "var(--font-sans)",
                          background: "var(--background)",
                          color: "var(--foreground)",
                          border: "1px solid var(--input)",
                          borderRadius: "var(--radius)",
                          outline: "none",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
  );
}
