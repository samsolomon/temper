import React from "react";
import { Icon } from "@iconify/react";

const base: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  whiteSpace: "nowrap",
  fontSize: "0.875rem",
  fontWeight: 500,
  fontFamily: "var(--font-sans)",
  borderRadius: "var(--radius)",
  padding: "0.5rem 1rem",
  border: "none",
  cursor: "pointer",
  transition: "opacity 0.15s",
  height: "2.25rem",
};

function Btn({
  label,
  style,
  disabled,
}: {
  label: React.ReactNode;
  style: React.CSSProperties;
  disabled?: boolean;
}) {
  return (
    <button style={style} disabled={disabled}>
      {label}
    </button>
  );
}

export function ButtonsShowcase() {
  return (
    <>
      {/* Variants */}
      <div className="example-section">
        <div className="example-label">Variants</div>
        <div className="example-box">
          <div className="example-row">
            <Btn
              label="Primary"
              style={{
                ...base,
                background: "var(--primary)",
                color: "var(--primary-foreground)",
              }}
            />
            <Btn
              label="Secondary"
              style={{
                ...base,
                background: "var(--secondary)",
                color: "var(--secondary-foreground)",
                border: "1px solid var(--border)",
              }}
            />
            <Btn
              label="Destructive"
              style={{
                ...base,
                background: "var(--destructive)",
                color: "var(--destructive-foreground)",
              }}
            />
            <Btn
              label="Outline"
              style={{
                ...base,
                background: "transparent",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
              }}
            />
            <Btn
              label="Ghost"
              style={{
                ...base,
                background: "transparent",
                color: "var(--foreground)",
              }}
            />
            <Btn
              label="Link"
              style={{
                ...base,
                background: "transparent",
                color: "var(--primary)",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="example-section">
        <div className="example-label">Sizes</div>
        <div className="example-box">
          <div className="example-row" style={{ alignItems: "center" }}>
            <Btn
              label="Small"
              style={{
                ...base,
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                height: "2rem",
                padding: "0 0.75rem",
                fontSize: "0.8125rem",
              }}
            />
            <Btn
              label="Default"
              style={{
                ...base,
                background: "var(--primary)",
                color: "var(--primary-foreground)",
              }}
            />
            <Btn
              label="Large"
              style={{
                ...base,
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                height: "2.75rem",
                padding: "0 2rem",
              }}
            />
            <Btn
              label={<Icon icon="lucide:settings" width="16" height="16" />}
              style={{
                ...base,
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                width: "2.25rem",
                padding: 0,
              }}
            />
          </div>
        </div>
      </div>

      {/* States */}
      <div className="example-section">
        <div className="example-label">States</div>
        <div className="example-box">
          <div className="example-row">
            <Btn
              label="Default"
              style={{
                ...base,
                background: "var(--primary)",
                color: "var(--primary-foreground)",
              }}
            />
            <Btn
              label="Disabled"
              disabled
              style={{
                ...base,
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                opacity: 0.5,
                cursor: "not-allowed",
              }}
            />
            <Btn
              label="With Ring"
              style={{
                ...base,
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                boxShadow: "0 0 0 2px var(--background), 0 0 0 4px var(--ring)",
              }}
            />
          </div>
        </div>
      </div>

      {/* All on secondary background */}
      <div className="example-section">
        <div className="example-label">On muted background</div>
        <div
          className="example-box"
          style={{ background: "var(--muted)" }}
        >
          <div className="example-row">
            <Btn
              label="Primary"
              style={{
                ...base,
                background: "var(--primary)",
                color: "var(--primary-foreground)",
              }}
            />
            <Btn
              label="Secondary"
              style={{
                ...base,
                background: "var(--secondary)",
                color: "var(--secondary-foreground)",
                border: "1px solid var(--border)",
              }}
            />
            <Btn
              label="Outline"
              style={{
                ...base,
                background: "transparent",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
              }}
            />
            <Btn
              label="Destructive"
              style={{
                ...base,
                background: "var(--destructive)",
                color: "var(--destructive-foreground)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
