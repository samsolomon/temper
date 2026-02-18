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

const descStyle: React.CSSProperties = {
  fontSize: "0.8125rem",
  color: "var(--muted-foreground)",
  marginTop: "0.25rem",
};

export function InputShowcase() {
  return (
    <>
      <div className="example-section">
        <div className="example-label">Input</div>
        <div className="example-box">
          <div style={{ maxWidth: "380px", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <label style={labelStyle}>Default</label>
              <input type="text" placeholder="Enter text..." style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input type="email" placeholder="name@example.com" style={inputStyle} />
              <p style={descStyle}>We'll never share your email.</p>
            </div>
            <div>
              <label style={labelStyle}>Disabled</label>
              <input
                type="text"
                placeholder="Disabled"
                disabled
                style={{ ...inputStyle, opacity: 0.5, cursor: "not-allowed" }}
              />
            </div>
            <div>
              <label style={labelStyle}>With focus ring</label>
              <input
                type="text"
                placeholder="Focused"
                style={{
                  ...inputStyle,
                  borderColor: "var(--ring)",
                  boxShadow: "0 0 0 2px var(--background), 0 0 0 4px var(--ring)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Composed form */}
      <div className="example-section">
        <div className="example-label">Composed form</div>
        <div className="example-box">
          <div
            style={{
              maxWidth: "420px",
              background: "var(--card)",
              color: "var(--card-foreground)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              padding: "1.5rem",
            }}
          >
            <h3 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "0.25rem" }}>
              Create account
            </h3>
            <p style={{ ...descStyle, marginBottom: "1.25rem", marginTop: 0 }}>
              Enter your information to get started.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <div>
                <label style={labelStyle}>Name</label>
                <input type="text" placeholder="John Doe" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input type="email" placeholder="john@example.com" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Password</label>
                <input type="password" placeholder="Create a password" style={inputStyle} />
              </div>
              <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem" }}>
                <input
                  type="checkbox"
                  style={{ width: "0.875rem", height: "0.875rem", accentColor: "var(--primary)" }}
                />
                I agree to the terms of service
              </label>
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
                Create account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function TextareaShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Textarea</div>
      <div className="example-box">
        <div style={{ maxWidth: "380px" }}>
          <label style={labelStyle}>Bio</label>
          <textarea
            placeholder="Tell us about yourself..."
            rows={3}
            style={{ ...inputStyle, height: "auto", resize: "vertical", lineHeight: 1.5 }}
          />
          <p style={descStyle}>Max 160 characters.</p>
        </div>
      </div>
    </div>
  );
}

export function SelectShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Select</div>
      <div className="example-box">
        <div style={{ maxWidth: "380px" }}>
          <label style={labelStyle}>Country</label>
          <select style={{ ...inputStyle, appearance: "auto", cursor: "pointer" }}>
            <option>Select a country</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Canada</option>
            <option>Australia</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export function CheckboxShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Checkbox</div>
      <div className="example-box">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem" }}>
            <input
              type="checkbox"
              style={{ width: "1rem", height: "1rem", accentColor: "var(--primary)" }}
            />
            Accept terms and conditions
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem" }}>
            <input
              type="checkbox"
              defaultChecked
              style={{ width: "1rem", height: "1rem", accentColor: "var(--primary)" }}
            />
            Subscribe to newsletter
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", opacity: 0.5 }}>
            <input
              type="checkbox"
              disabled
              style={{ width: "1rem", height: "1rem" }}
            />
            Disabled option
          </label>
        </div>
      </div>
    </div>
  );
}

export function RadioGroupShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Radio Group</div>
      <div className="example-box">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
          {["Comfortable", "Compact", "Spacious"].map((option, i) => (
            <label
              key={option}
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem" }}
            >
              <input
                type="radio"
                name="density"
                defaultChecked={i === 0}
                style={{ accentColor: "var(--primary)" }}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
