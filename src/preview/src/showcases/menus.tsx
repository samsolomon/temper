import React from "react";

const menuCard: React.CSSProperties = {
  background: "var(--popover)",
  color: "var(--popover-foreground)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius)",
  padding: "0.25rem",
  minWidth: "200px",
  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
};

const menuItem: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.375rem 0.5rem",
  fontSize: "0.8125rem",
  borderRadius: "calc(var(--radius) - 2px)",
  cursor: "default",
};

const menuItemHover: React.CSSProperties = {
  ...menuItem,
  background: "var(--accent)",
  color: "var(--accent-foreground)",
};

const menuSep: React.CSSProperties = {
  height: "1px",
  background: "var(--border)",
  margin: "0.25rem 0",
};

const shortcut: React.CSSProperties = {
  fontSize: "0.6875rem",
  color: "var(--muted-foreground)",
  fontFamily: "var(--font-mono)",
};

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

export function DropdownMenuShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Dropdown Menu</div>
      <div className="example-box">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.5rem" }}>
          <button style={btnPrimary}>Open Menu</button>
          <div style={menuCard}>
            <div style={menuItemHover}>
              <span>New Tab</span>
              <span style={shortcut}>Ctrl+T</span>
            </div>
            <div style={menuItem}>
              <span>New Window</span>
              <span style={shortcut}>Ctrl+N</span>
            </div>
            <div style={{ ...menuItem, opacity: 0.5 }}>
              <span>New Incognito</span>
            </div>
            <div style={menuSep} />
            <div style={menuItem}>
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ width: "1rem", textAlign: "center" }}>&#10003;</span>
                Show Bookmarks
              </span>
            </div>
            <div style={menuItem}>
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ width: "1rem" }} />
                Show URLs
              </span>
            </div>
            <div style={menuSep} />
            <div style={{ ...menuItem, color: "var(--destructive)" }}>
              <span>Delete All</span>
              <span style={{ ...shortcut, color: "var(--destructive)" }}>Ctrl+D</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContextMenuShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Context Menu</div>
      <div className="example-box">
        <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <div
            style={{
              width: "200px",
              height: "120px",
              border: "2px dashed var(--border)",
              borderRadius: "var(--radius)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.8125rem",
              color: "var(--muted-foreground)",
            }}
          >
            Right-click here
          </div>
          <div style={menuCard}>
            <div style={menuItemHover}>
              <span>Back</span>
              <span style={shortcut}>Alt+&#8592;</span>
            </div>
            <div style={menuItem}>
              <span>Forward</span>
            </div>
            <div style={menuItem}>
              <span>Reload</span>
              <span style={shortcut}>Ctrl+R</span>
            </div>
            <div style={menuSep} />
            <div style={menuItem}>
              <span>Save As...</span>
              <span style={shortcut}>Ctrl+S</span>
            </div>
            <div style={menuItem}>
              <span>Print</span>
              <span style={shortcut}>Ctrl+P</span>
            </div>
            <div style={menuSep} />
            <div style={menuItem}>
              <span>View Source</span>
            </div>
            <div style={menuItem}>
              <span>Inspect</span>
              <span style={shortcut}>F12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MenubarShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Menubar</div>
      <div className="example-box">
        <div style={{ position: "relative" }}>
          <div
            style={{
              display: "inline-flex",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              padding: "0.125rem",
              gap: "0.125rem",
            }}
          >
            {["File", "Edit", "View"].map((label, i) => (
              <button
                key={label}
                style={{
                  padding: "0.375rem 0.75rem",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  fontFamily: "var(--font-sans)",
                  border: "none",
                  borderRadius: "calc(var(--radius) - 2px)",
                  cursor: "default",
                  background: i === 0 ? "var(--accent)" : "transparent",
                  color: i === 0 ? "var(--accent-foreground)" : "var(--foreground)",
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <div style={{ ...menuCard, position: "absolute", top: "calc(100% + 0.25rem)", left: 0, zIndex: 10 }}>
            <div style={menuItemHover}>
              <span>New File</span>
              <span style={shortcut}>Ctrl+N</span>
            </div>
            <div style={menuItem}>
              <span>Open</span>
              <span style={shortcut}>Ctrl+O</span>
            </div>
            <div style={menuItem}>
              <span>Save</span>
              <span style={shortcut}>Ctrl+S</span>
            </div>
            <div style={menuSep} />
            <div style={menuItem}>
              <span>Export</span>
            </div>
            <div style={menuSep} />
            <div style={menuItem}>
              <span>Quit</span>
              <span style={shortcut}>Ctrl+Q</span>
            </div>
          </div>
        </div>
        <div style={{ height: "200px" }} />
      </div>
    </div>
  );
}

export function NavigationMenuShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Navigation Menu</div>
      <div className="example-box">
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", gap: "0.25rem" }}>
            {["Getting Started", "Components", "Docs"].map((label, i) => (
              <button
                key={label}
                style={{
                  padding: "0.5rem 0.75rem",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  fontFamily: "var(--font-sans)",
                  border: "none",
                  borderRadius: "var(--radius)",
                  cursor: "default",
                  background: i === 0 ? "var(--accent)" : "transparent",
                  color: i === 0 ? "var(--accent-foreground)" : "var(--foreground)",
                }}
              >
                {label} &#9662;
              </button>
            ))}
          </div>
          <div
            style={{
              ...menuCard,
              marginTop: "0.25rem",
              padding: "1rem",
              minWidth: "auto",
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
              {[
                { title: "Introduction", desc: "Re-usable components built with Radix UI and Tailwind." },
                { title: "Installation", desc: "How to install dependencies and structure your app." },
                { title: "Typography", desc: "Styles for headings, paragraphs, lists, and more." },
                { title: "CLI", desc: "Use the CLI to add components to your project." },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: "0.75rem",
                    borderRadius: "var(--radius)",
                    cursor: "default",
                  }}
                >
                  <p style={{ fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.25rem" }}>
                    {item.title}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CommandShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Command Palette</div>
      <div className="example-box">
        <div
          style={{
            ...menuCard,
            maxWidth: "420px",
            padding: 0,
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "0.75rem", borderBottom: "1px solid var(--border)" }}>
            <input
              type="text"
              placeholder="Type a command or search..."
              readOnly
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                fontSize: "0.875rem",
                fontFamily: "var(--font-sans)",
                color: "var(--foreground)",
              }}
            />
          </div>
          <div style={{ padding: "0.25rem" }}>
            <p style={{ fontSize: "0.6875rem", fontWeight: 500, color: "var(--muted-foreground)", padding: "0.375rem 0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Suggestions
            </p>
            <div style={menuItemHover}>
              <span>Calendar</span>
            </div>
            <div style={menuItem}>
              <span>Search Emoji</span>
            </div>
            <div style={menuItem}>
              <span>Calculator</span>
            </div>
          </div>
          <div style={menuSep} />
          <div style={{ padding: "0.25rem" }}>
            <p style={{ fontSize: "0.6875rem", fontWeight: 500, color: "var(--muted-foreground)", padding: "0.375rem 0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Settings
            </p>
            <div style={menuItem}>
              <span>Profile</span>
              <span style={shortcut}>Ctrl+P</span>
            </div>
            <div style={menuItem}>
              <span>Billing</span>
              <span style={shortcut}>Ctrl+B</span>
            </div>
            <div style={menuItem}>
              <span>Settings</span>
              <span style={shortcut}>Ctrl+,</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
