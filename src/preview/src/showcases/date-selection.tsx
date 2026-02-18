import React from "react";

const navBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1.75rem",
  height: "1.75rem",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius)",
  background: "transparent",
  color: "var(--foreground)",
  cursor: "pointer",
  fontSize: "1rem",
  fontFamily: "var(--font-sans)",
};

/* ── Calendar ── */
function CalendarGrid() {
  const today = 17;
  const selected = 24;
  const daysInMonth = 28;
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const cells: { day: number; outside: boolean }[] = [];
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, outside: false });
  }

  return (
    <div style={{ width: "280px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
        <button style={navBtn} aria-label="Previous month">&lsaquo;</button>
        <span style={{ fontSize: "0.875rem", fontWeight: 600 }}>February 2026</span>
        <button style={navBtn} aria-label="Next month">&rsaquo;</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", textAlign: "center", marginBottom: "0.25rem" }}>
        {dayNames.map((d) => (
          <span key={d} style={{ fontSize: "0.6875rem", color: "var(--muted-foreground)", padding: "0.25rem 0" }}>
            {d}
          </span>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", textAlign: "center" }}>
        {cells.map((cell, i) => {
          const isToday = cell.day === today;
          const isSelected = cell.day === selected;
          return (
            <div
              key={i}
              style={{
                padding: "0.375rem",
                fontSize: "0.8125rem",
                borderRadius: "var(--radius)",
                cursor: "pointer",
                color: isSelected ? "var(--primary-foreground)" : "var(--foreground)",
                background: isSelected
                  ? "var(--primary)"
                  : isToday
                    ? "var(--accent)"
                    : "transparent",
                fontWeight: isToday || isSelected ? 600 : 400,
              }}
            >
              {cell.day}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function CalendarShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Calendar</div>
      <div className="example-box">
        <CalendarGrid />
      </div>
    </div>
  );
}

export function DatePickerShowcase() {
  return (
    <div className="example-section">
      <div className="example-label">Date Picker</div>
      <div className="example-box">
        <div style={{ position: "relative", maxWidth: "280px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "2.25rem",
              padding: "0 0.75rem",
              border: "1px solid var(--input)",
              borderRadius: "var(--radius)",
              background: "var(--background)",
              gap: "0.5rem",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", flex: 1 }}>Pick a date</span>
            <span style={{ fontSize: "1rem" }}>&#128197;</span>
          </div>
          <div
            style={{
              marginTop: "0.5rem",
              background: "var(--popover)",
              color: "var(--popover-foreground)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              padding: "0.75rem",
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
            }}
          >
            <CalendarGrid />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ComboboxShowcase() {
  const frameworks = [
    { label: "Next.js", value: "nextjs" },
    { label: "SvelteKit", value: "sveltekit" },
    { label: "Nuxt.js", value: "nuxtjs" },
    { label: "Remix", value: "remix" },
    { label: "Astro", value: "astro" },
  ];
  const selected = "nextjs";

  return (
    <div className="example-section">
      <div className="example-label">Combobox</div>
      <div className="example-box">
        <div style={{ maxWidth: "280px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "2.25rem",
              padding: "0 0.75rem",
              border: "1px solid var(--input)",
              borderRadius: "var(--radius)",
              background: "var(--background)",
              fontSize: "0.875rem",
              cursor: "pointer",
            }}
          >
            <span>Next.js</span>
            <span style={{ fontSize: "0.625rem", color: "var(--muted-foreground)" }}>&#9660;</span>
          </div>
          <div
            style={{
              marginTop: "0.25rem",
              background: "var(--popover)",
              color: "var(--popover-foreground)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "0.5rem", borderBottom: "1px solid var(--border)" }}>
              <input
                type="text"
                placeholder="Search framework..."
                readOnly
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  fontSize: "0.8125rem",
                  fontFamily: "var(--font-sans)",
                  color: "var(--foreground)",
                }}
              />
            </div>
            <div style={{ padding: "0.25rem" }}>
              {frameworks.map((fw) => (
                <div
                  key={fw.value}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.375rem 0.5rem",
                    fontSize: "0.8125rem",
                    borderRadius: "calc(var(--radius) - 2px)",
                    background: fw.value === selected ? "var(--accent)" : "transparent",
                    color: fw.value === selected ? "var(--accent-foreground)" : "var(--popover-foreground)",
                    cursor: "default",
                  }}
                >
                  <span style={{ width: "1rem", textAlign: "center", fontSize: "0.75rem" }}>
                    {fw.value === selected ? "\u2713" : ""}
                  </span>
                  {fw.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PaginationShowcase() {
  const current = 3;
  const total = 10;
  const pages = [1, 2, 3, 4, 5];

  const pageBtn = (active = false, disabled = false): React.CSSProperties => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "2rem",
    height: "2rem",
    padding: "0 0.5rem",
    fontSize: "0.8125rem",
    fontWeight: active ? 600 : 400,
    fontFamily: "var(--font-sans)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius)",
    background: active ? "var(--primary)" : "transparent",
    color: active ? "var(--primary-foreground)" : disabled ? "var(--muted-foreground)" : "var(--foreground)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
  });

  return (
    <div className="example-section">
      <div className="example-label">Pagination</div>
      <div className="example-box">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <button style={pageBtn(false, current === 1)} aria-label="Previous page">&#8249;</button>
            {pages.map((p) => (
              <button key={p} style={pageBtn(p === current)}>
                {p}
              </button>
            ))}
            <span style={{ padding: "0 0.25rem", fontSize: "0.8125rem", color: "var(--muted-foreground)" }}>...</span>
            <button style={pageBtn()}>{total}</button>
            <button style={pageBtn()} aria-label="Next page">&rsaquo;</button>
          </div>
          <p style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>
            Showing 21–30 of 100 results
          </p>
        </div>
      </div>
    </div>
  );
}

export function InputOTPShowcase() {
  const digits = ["4", "8", "1", "", "", ""];
  const focusedIndex = 3;

  return (
    <div className="example-section">
      <div className="example-label">Input OTP</div>
      <div className="example-box">
        <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
          {digits.map((d, i) => (
            <React.Fragment key={i}>
              {i === 3 && (
                <span style={{ fontSize: "1.25rem", color: "var(--muted-foreground)", padding: "0 0.25rem" }}>
                  –
                </span>
              )}
              <div
                style={{
                  width: "2.5rem",
                  height: "2.75rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: i === focusedIndex ? "2px solid var(--ring)" : "1px solid var(--input)",
                  borderRadius: "var(--radius)",
                  background: "var(--background)",
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-mono)",
                  color: "var(--foreground)",
                }}
              >
                {d}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CarouselShowcase() {
  const cards = [1, 2, 3];
  return (
    <div className="example-section">
      <div className="example-label">Carousel</div>
      <div className="example-box">
        <div style={{ maxWidth: "480px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <button
              aria-label="Previous slide"
              style={{
                ...navBtn,
                width: "2rem",
                height: "2rem",
                borderRadius: "9999px",
                flexShrink: 0,
              }}
            >
              &#8249;
            </button>
            <div style={{ display: "flex", gap: "0.75rem", flex: 1, overflow: "hidden" }}>
              {cards.map((n) => (
                <div
                  key={n}
                  style={{
                    flex: "0 0 calc(33.333% - 0.5rem)",
                    height: "120px",
                    background: "var(--muted)",
                    borderRadius: "var(--radius)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "var(--muted-foreground)",
                  }}
                >
                  {n}
                </div>
              ))}
            </div>
            <button
              aria-label="Next slide"
              style={{
                ...navBtn,
                width: "2rem",
                height: "2rem",
                borderRadius: "9999px",
                flexShrink: 0,
              }}
            >
              &#8250;
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "0.375rem", marginTop: "0.75rem" }}>
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  width: i === 0 ? "1.25rem" : "0.5rem",
                  height: "0.5rem",
                  borderRadius: "9999px",
                  background: i === 0 ? "var(--primary)" : "var(--muted)",
                  transition: "all 0.2s",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
