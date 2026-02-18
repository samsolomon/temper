import React, { useState } from "react";
import { Icon } from "@iconify/react";

/* ── Switch ── */
function Switch({ defaultOn = false, disabled = false, label }: { defaultOn?: boolean; disabled?: boolean; label: string }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <button
        role="switch"
        aria-checked={on}
        disabled={disabled}
        onClick={() => !disabled && setOn(!on)}
        style={{
          position: "relative",
          width: "2.75rem",
          height: "1.5rem",
          borderRadius: "9999px",
          border: "none",
          background: on ? "var(--primary)" : "var(--input)",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.5 : 1,
          transition: "background 0.2s",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "2px",
            left: on ? "calc(100% - 1.25rem - 2px)" : "2px",
            width: "1.25rem",
            height: "1.25rem",
            borderRadius: "9999px",
            background: "var(--background)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
            transition: "left 0.2s",
          }}
        />
      </button>
      <span style={{ fontSize: "0.875rem", color: disabled ? "var(--muted-foreground)" : "var(--foreground)" }}>
        {label}
      </span>
    </div>
  );
}

export function SwitchShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Switch</div>
      <div className="example-box">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <Switch label="Airplane Mode" />
          <Switch label="Notifications" defaultOn />
          <Switch label="Disabled" disabled />
        </div>
      </div>
    </div>
  );
}

/* ── Slider ── */
function Slider({ value, disabled = false, label }: { value: number; disabled?: boolean; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8125rem" }}>
        <span>{label}</span>
        <span style={{ color: "var(--muted-foreground)" }}>{value}%</span>
      </div>
      <div
        style={{
          position: "relative",
          height: "0.5rem",
          borderRadius: "9999px",
          background: "var(--muted)",
          opacity: disabled ? 0.5 : 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: `${value}%`,
            borderRadius: "9999px",
            background: "var(--primary)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: `${value}%`,
            transform: "translate(-50%, -50%)",
            width: "1.125rem",
            height: "1.125rem",
            borderRadius: "9999px",
            background: "var(--background)",
            border: "2px solid var(--primary)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
          }}
        />
      </div>
    </div>
  );
}

export function SliderShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Slider</div>
      <div className="example-box">
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: "400px" }}>
          <Slider value={30} label="Volume" />
          <Slider value={60} label="Brightness" />
          <Slider value={50} label="Disabled" disabled />
        </div>
      </div>
    </div>
  );
}

/* ── Toggle ── */
function Toggle({ label, pressed = false, variant = "default" }: { label: React.ReactNode; pressed?: boolean; variant?: "default" | "outline" }) {
  const [isPressed, setIsPressed] = useState(pressed);
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: "2.25rem",
    padding: "0 0.625rem",
    fontSize: "0.875rem",
    fontWeight: 500,
    fontFamily: "var(--font-sans)",
    borderRadius: "var(--radius)",
    cursor: "pointer",
    transition: "all 0.15s",
    border: variant === "outline" ? "1px solid var(--border)" : "none",
    background: isPressed ? "var(--accent)" : "transparent",
    color: isPressed ? "var(--accent-foreground)" : "var(--muted-foreground)",
  };
  return (
    <button style={base} onClick={() => setIsPressed(!isPressed)}>
      {label}
    </button>
  );
}

export function ToggleShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Toggle</div>
      <div className="example-box">
        <div className="example-row">
          <Toggle label={<Icon icon="lucide:bold" width="16" height="16" />} pressed />
          <Toggle label={<Icon icon="lucide:italic" width="16" height="16" />} />
          <Toggle label={<Icon icon="lucide:underline" width="16" height="16" />} />
          <Toggle label="Outline" variant="outline" />
        </div>
      </div>
    </div>
  );
}

/* ── Toggle Group ── */
function ToggleGroupControl({ items, defaultActive = 0 }: { items: string[]; defaultActive?: number }) {
  const [active, setActive] = useState(defaultActive);
  return (
    <div
      style={{
        display: "inline-flex",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        overflow: "hidden",
      }}
    >
      {items.map((item, i) => (
        <button
          key={item}
          onClick={() => setActive(i)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "2.25rem",
            padding: "0 0.75rem",
            fontSize: "0.8125rem",
            fontWeight: 500,
            fontFamily: "var(--font-sans)",
            cursor: "pointer",
            border: "none",
            borderRight: i < items.length - 1 ? "1px solid var(--border)" : "none",
            background: i === active ? "var(--accent)" : "transparent",
            color: i === active ? "var(--accent-foreground)" : "var(--muted-foreground)",
            transition: "all 0.15s",
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export function ToggleGroupShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Toggle Group</div>
      <div className="example-box">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <ToggleGroupControl items={["List", "Grid", "Board"]} defaultActive={0} />
          <ToggleGroupControl items={["Left", "Center", "Right"]} defaultActive={1} />
        </div>
      </div>
    </div>
  );
}

/* ── Progress ── */
function Progress({ value, color = "var(--primary)", label }: { value: number; color?: string; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8125rem" }}>
        <span>{label}</span>
        <span style={{ color: "var(--muted-foreground)" }}>{value}%</span>
      </div>
      <div
        style={{
          height: "0.5rem",
          borderRadius: "9999px",
          background: "var(--muted)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${value}%`,
            borderRadius: "9999px",
            background: color,
            transition: "width 0.3s",
          }}
        />
      </div>
    </div>
  );
}

export function ProgressShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Progress</div>
      <div className="example-box">
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: "400px" }}>
          <Progress value={0} label="Not started" />
          <Progress value={25} label="Quarter" />
          <Progress value={50} label="Half" />
          <Progress value={75} label="Three-quarters" />
          <Progress value={100} label="Complete" />
          <Progress value={60} color="var(--destructive)" label="Destructive" />
          <Progress value={45} color="var(--chart-2)" label="Chart color" />
        </div>
      </div>
    </div>
  );
}

/* ── Spinner ── */
function Spinner({ size = "1.25rem" }: { size?: string }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        border: "2px solid var(--muted)",
        borderTopColor: "var(--primary)",
        borderRadius: "9999px",
        animation: "spin 0.8s linear infinite",
      }}
    />
  );
}

export function SpinnerShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Spinner</div>
      <div className="example-box">
        <div className="example-row">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Spinner size="1rem" />
            <span style={{ fontSize: "0.8125rem" }}>Small</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Spinner size="1.5rem" />
            <span style={{ fontSize: "0.8125rem" }}>Medium</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Spinner size="2rem" />
            <span style={{ fontSize: "0.8125rem" }}>Large</span>
          </div>
        </div>
      </div>
    </div>
  );
}
