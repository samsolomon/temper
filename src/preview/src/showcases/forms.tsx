import React from "react";

const inputStyle: React.CSSProperties = {
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
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.875rem",
  fontWeight: 500,
  marginBottom: "0.375rem",
};

export function FormsShowcase() {
  return (
    <div className="section">
      <h2 className="section-title">Forms</h2>
      <div
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
          padding: "1.5rem",
          maxWidth: "500px",
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            placeholder="name@example.com"
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={labelStyle}>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={labelStyle}>Bio</label>
          <textarea
            placeholder="Tell us about yourself..."
            rows={3}
            style={{
              ...inputStyle,
              height: "auto",
              resize: "vertical",
              lineHeight: 1.5,
            }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={labelStyle}>Country</label>
          <select
            style={{
              ...inputStyle,
              appearance: "auto",
              cursor: "pointer",
            }}
          >
            <option>Select a country</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Canada</option>
          </select>
        </div>

        <div style={{ marginBottom: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem" }}>
            <input
              type="checkbox"
              style={{
                width: "1rem",
                height: "1rem",
                accentColor: "var(--primary)",
              }}
            />
            Accept terms and conditions
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem" }}>
            <input
              type="checkbox"
              defaultChecked
              style={{
                width: "1rem",
                height: "1rem",
                accentColor: "var(--primary)",
              }}
            />
            Subscribe to newsletter
          </label>
        </div>

        <div style={{ marginBottom: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label style={{ ...labelStyle, marginBottom: 0 }}>Preference</label>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem" }}>
            <input
              type="radio"
              name="pref"
              defaultChecked
              style={{ accentColor: "var(--primary)" }}
            />
            Option A
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem" }}>
            <input
              type="radio"
              name="pref"
              style={{ accentColor: "var(--primary)" }}
            />
            Option B
          </label>
        </div>

        <button
          style={{
            width: "100%",
            height: "2.25rem",
            background: "var(--primary)",
            color: "var(--primary-foreground)",
            border: "none",
            borderRadius: "var(--radius)",
            fontSize: "0.875rem",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
