import React, { useState } from "react";
import { Icon } from "@iconify/react";

export function AccordionShowcase() {
  const [open, setOpen] = useState(0);
  const items = [
    { title: "Is it accessible?", content: "Yes. It adheres to the WAI-ARIA design pattern." },
    { title: "Is it styled?", content: "Yes. It comes with default styles that match the other components' aesthetic." },
    { title: "Is it animated?", content: "Yes. It's animated by default, but you can disable it if you prefer." },
  ];
  return (
    <div className="example-section">
      <div className="example-label">Accordion</div>
      <div className="example-box">
        <div style={{ maxWidth: "480px" }}>
          {items.map((item, i) => (
            <div key={i} style={{ borderBottom: "1px solid var(--border)" }}>
              <button
                id={`accordion-trigger-${i}`}
                aria-expanded={open === i}
                aria-controls={`accordion-panel-${i}`}
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 0",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  fontFamily: "var(--font-sans)",
                  color: "var(--foreground)",
                  textAlign: "left",
                }}
              >
                {item.title}
                <Icon
                  icon="lucide:chevron-down"
                  width="16"
                  height="16"
                  style={{
                    transition: "transform 0.2s",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {open === i && (
                <div id={`accordion-panel-${i}`} role="region" aria-labelledby={`accordion-trigger-${i}`} style={{ paddingBottom: "1rem", fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CollapsibleShowcase() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="example-section">
      <div className="example-label">Collapsible</div>
      <div className="example-box">
        <div style={{ maxWidth: "360px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: "0.875rem", fontWeight: 600 }}>@peduarte starred 3 repositories</span>
            <button
              onClick={() => setExpanded(!expanded)}
              style={{
                background: "transparent",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "0.25rem 0.5rem",
                fontSize: "0.75rem",
                fontFamily: "var(--font-sans)",
                cursor: "pointer",
                color: "var(--foreground)",
              }}
            >
              {expanded ? "Hide" : "Show"}
            </button>
          </div>
          <div
            style={{
              marginTop: "0.5rem",
              padding: "0.5rem 0.75rem",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              fontSize: "0.8125rem",
              fontFamily: "var(--font-mono)",
            }}
          >
            @radix-ui/primitives
          </div>
          {expanded && (
            <>
              <div
                style={{
                  marginTop: "0.25rem",
                  padding: "0.5rem 0.75rem",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                  fontSize: "0.8125rem",
                  fontFamily: "var(--font-mono)",
                }}
              >
                @radix-ui/colors
              </div>
              <div
                style={{
                  marginTop: "0.25rem",
                  padding: "0.5rem 0.75rem",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                  fontSize: "0.8125rem",
                  fontFamily: "var(--font-mono)",
                }}
              >
                @stitches/react
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function SheetShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Sheet</div>
      <div className="example-box">
        <div
          style={{
            position: "relative",
            height: "240px",
            borderRadius: "var(--radius)",
            overflow: "hidden",
            background: "var(--muted)",
          }}
        >
          <div style={{ padding: "1rem", fontSize: "0.8125rem", color: "var(--muted-foreground)" }}>
            Page content behind the sheet...
          </div>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)" }} />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "60%",
              background: "var(--card)",
              borderLeft: "1px solid var(--border)",
              padding: "1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <h4 style={{ fontSize: "1rem", fontWeight: 600 }}>Edit Profile</h4>
            <p style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)" }}>
              Make changes to your profile here.
            </p>
            <div style={{ marginTop: "auto", display: "flex", justifyContent: "flex-end" }}>
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                  border: "none",
                  padding: "0.375rem 0.75rem",
                  borderRadius: "var(--radius)",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  fontFamily: "var(--font-sans)",
                  cursor: "default",
                }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DrawerShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Drawer</div>
      <div className="example-box">
        <div
          style={{
            position: "relative",
            height: "280px",
            borderRadius: "var(--radius)",
            overflow: "hidden",
            background: "var(--muted)",
          }}
        >
          <div style={{ padding: "1rem", fontSize: "0.8125rem", color: "var(--muted-foreground)" }}>
            Page content behind the drawer...
          </div>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)" }} />
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "55%",
              background: "var(--card)",
              borderTop: "1px solid var(--border)",
              borderRadius: "var(--radius) var(--radius) 0 0",
              padding: "0.75rem 1.25rem 1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: "2.5rem",
                  height: "0.25rem",
                  borderRadius: "9999px",
                  background: "var(--muted)",
                }}
              />
            </div>
            <h4 style={{ fontSize: "1rem", fontWeight: 600 }}>Move Goal</h4>
            <p style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)" }}>
              Set your daily activity goal.
            </p>
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                fontWeight: 700,
              }}
            >
              350{" "}
              <span style={{ fontSize: "0.875rem", fontWeight: 400, color: "var(--muted-foreground)", marginLeft: "0.25rem" }}>
                cal/day
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HoverCardShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Hover Card</div>
      <div className="example-box">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.5rem" }}>
          <span
            style={{
              color: "var(--primary)",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              fontSize: "0.875rem",
              cursor: "pointer",
            }}
          >
            @nextjs
          </span>
          <div
            style={{
              background: "var(--popover)",
              color: "var(--popover-foreground)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              padding: "1rem",
              width: "320px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "9999px",
                  background: "var(--muted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                NJ
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: "0.875rem" }}>@nextjs</p>
                <p style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)", lineHeight: 1.5, marginTop: "0.25rem" }}>
                  The React Framework — created and maintained by @vercel.
                </p>
                <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", fontSize: "0.75rem", color: "var(--muted-foreground)" }}>
                  <span>Joined December 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ScrollAreaShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Scroll Area</div>
      <div className="example-box">
        <div
          style={{
            position: "relative",
            height: "200px",
            width: "280px",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              overflowY: "auto",
              padding: "1rem",
            }}
          >
            <p style={{ fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.75rem" }}>Tags</p>
            {[
              "v1.2.0-beta.1",
              "v1.1.4",
              "v1.1.3",
              "v1.1.2",
              "v1.1.1",
              "v1.1.0",
              "v1.0.4",
              "v1.0.3",
              "v1.0.2",
              "v1.0.1",
              "v1.0.0",
              "v0.9.0",
            ].map((tag, i) => (
              <React.Fragment key={tag}>
                {i > 0 && <div style={{ height: "1px", background: "var(--border)", margin: "0.25rem 0" }} />}
                <div
                  style={{
                    padding: "0.375rem 0",
                    fontSize: "0.8125rem",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {tag}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "0.5rem",
              height: "100%",
              background: "var(--muted)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "40%",
                borderRadius: "9999px",
                background: "var(--border)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
