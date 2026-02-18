import React from "react";

export function TypographyShowcase() {
  return (
    <>
      {/* Headings */}
      <div className="example-section">
        <div className="example-label">Headings</div>
        <div className="example-box">
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h1 style={{ fontSize: "2.25rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.2 }}>
              Heading 1 — The quick brown fox
            </h1>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.3 }}>
              Heading 2 — The quick brown fox
            </h2>
            <h3 style={{ fontSize: "1.375rem", fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.4 }}>
              Heading 3 — The quick brown fox
            </h3>
            <h4 style={{ fontSize: "1.125rem", fontWeight: 600, lineHeight: 1.5 }}>
              Heading 4 — The quick brown fox
            </h4>
          </div>
        </div>
      </div>

      {/* Body & Prose */}
      <div className="example-section">
        <div className="example-label">Body &amp; Prose</div>
        <div className="example-box">
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "640px" }}>
            <p style={{ fontSize: "1.125rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>
              A modal dialog that interrupts the user with important content and expects
              a response. Use sparingly and only for critical actions.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.7 }}>
              The king, seeing how much happier his subjects were, realized the error of
              his ways and decided to change. He began to listen to the people and make
              decisions that truly benefited the kingdom.
            </p>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
              Small body text for supplementary information, form descriptions, and
              helper text that accompanies primary content.
            </p>
            <p style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)" }}>
              Muted text used for timestamps, metadata, and secondary information
              that shouldn't draw attention away from primary content.
            </p>
          </div>
        </div>
      </div>

      {/* Inline Elements */}
      <div className="example-section">
        <div className="example-label">Inline Elements</div>
        <div className="example-box">
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "640px" }}>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.8 }}>
              Use the{" "}
              <code
                style={{
                  background: "var(--muted)",
                  color: "var(--foreground)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8125em",
                  padding: "0.2em 0.4em",
                  borderRadius: "calc(var(--radius) - 2px)",
                }}
              >
                @apply
              </code>{" "}
              directive to inline any existing utility classes into your own custom CSS. The{" "}
              <code
                style={{
                  background: "var(--muted)",
                  color: "var(--foreground)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8125em",
                  padding: "0.2em 0.4em",
                  borderRadius: "calc(var(--radius) - 2px)",
                }}
              >
                config()
              </code>{" "}
              function gives you access to your Tailwind config values.
            </p>
            <p style={{ fontSize: "0.875rem" }}>
              Visit the{" "}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  color: "var(--primary)",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  cursor: "pointer",
                }}
              >
                documentation
              </a>{" "}
              to learn more about theming, or check the{" "}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  color: "var(--primary)",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  cursor: "pointer",
                }}
              >
                API reference
              </a>{" "}
              for details.
            </p>
          </div>
        </div>
      </div>

      {/* Kbd */}
      <div className="example-section">
        <div className="example-label">Keyboard Shortcuts</div>
        <div className="example-box">
          <div className="example-row">
            {[
              ["Ctrl", "C"],
              ["Cmd", "K"],
              ["Shift", "Enter"],
              ["Alt", "Tab"],
            ].map((keys, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", fontSize: "0.8125rem" }}>
                {keys.map((key, j) => (
                  <React.Fragment key={j}>
                    {j > 0 && <span style={{ color: "var(--muted-foreground)" }}>+</span>}
                    <kbd
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "1.5rem",
                        height: "1.375rem",
                        padding: "0 0.375rem",
                        fontSize: "0.6875rem",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 500,
                        background: "var(--muted)",
                        color: "var(--foreground)",
                        border: "1px solid var(--border)",
                        borderRadius: "calc(var(--radius) - 2px)",
                        boxShadow: "0 1px 0 var(--border)",
                      }}
                    >
                      {key}
                    </kbd>
                  </React.Fragment>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Blockquote */}
      <div className="example-section">
        <div className="example-label">Blockquote</div>
        <div className="example-box">
          <blockquote
            style={{
              borderLeft: "3px solid var(--accent)",
              paddingLeft: "1rem",
              fontStyle: "italic",
              color: "var(--muted-foreground)",
              maxWidth: "540px",
              lineHeight: 1.7,
              fontSize: "0.9375rem",
            }}
          >
            "After all," he said, "everyone enjoys a good joke, so it's only fair that
            they should pay for the privilege."
          </blockquote>
        </div>
      </div>

      {/* Lists */}
      <div className="example-section">
        <div className="example-label">Lists</div>
        <div className="example-box">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", maxWidth: "540px" }}>
            <div>
              <p style={{ fontSize: "0.8125rem", fontWeight: 600, marginBottom: "0.5rem" }}>Unordered</p>
              <ul style={{ paddingLeft: "1.25rem", fontSize: "0.875rem", lineHeight: 1.8, listStyleType: "disc" }}>
                <li>First item in the list</li>
                <li>Second item in the list</li>
                <li>Third item in the list</li>
              </ul>
            </div>
            <div>
              <p style={{ fontSize: "0.8125rem", fontWeight: 600, marginBottom: "0.5rem" }}>Ordered</p>
              <ol style={{ paddingLeft: "1.25rem", fontSize: "0.875rem", lineHeight: 1.8 }}>
                <li>First item in the list</li>
                <li>Second item in the list</li>
                <li>Third item in the list</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function LabelShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Label</div>
      <div className="example-box">
        <div className="example-row">
          <label style={{ fontSize: "0.875rem", fontWeight: 500 }}>
            Default label
          </label>
          <label style={{ fontSize: "0.875rem", fontWeight: 500 }}>
            Required label <span style={{ color: "var(--destructive)" }}>*</span>
          </label>
          <label style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--muted-foreground)", opacity: 0.7 }}>
            Disabled label
          </label>
        </div>
      </div>
    </div>
  );
}

export function SeparatorShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Separator</div>
      <div className="example-box">
        <div style={{ maxWidth: "400px" }}>
          <p style={{ fontSize: "0.875rem", fontWeight: 600 }}>Temper Design System</p>
          <p style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)" }}>
            An open-source theming tool.
          </p>
          {/* Horizontal separator */}
          <div style={{ height: "1px", background: "var(--border)", margin: "1rem 0" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem" }}>
            <span>Blog</span>
            {/* Vertical separator */}
            <div style={{ width: "1px", height: "1rem", background: "var(--border)" }} />
            <span>Docs</span>
            <div style={{ width: "1px", height: "1rem", background: "var(--border)" }} />
            <span>Source</span>
          </div>
        </div>
      </div>
    </div>
  );
}
