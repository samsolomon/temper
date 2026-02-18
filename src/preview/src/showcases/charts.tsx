import React from "react";

const chartData = [
  { month: "Jan", value: 186 },
  { month: "Feb", value: 305 },
  { month: "Mar", value: 237 },
  { month: "Apr", value: 273 },
  { month: "May", value: 209 },
  { month: "Jun", value: 314 },
];

const lineData = [
  { month: "Jan", a: 186, b: 120 },
  { month: "Feb", a: 305, b: 210 },
  { month: "Mar", a: 237, b: 280 },
  { month: "Apr", a: 273, b: 190 },
  { month: "May", a: 209, b: 250 },
  { month: "Jun", a: 314, b: 300 },
];

const maxValue = Math.max(...chartData.map((d) => d.value));

export function ChartsShowcase() {
  return (
    <div className="section">
      <h2 className="section-title">Charts</h2>

      <div className="grid grid-cols-2">
        {/* Bar chart */}
        <div
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            padding: "1.5rem",
          }}
        >
          <p style={{ fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.25rem" }}>
            Bar Chart
          </p>
          <p style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)", marginBottom: "1rem" }}>
            Monthly revenue overview
          </p>

          {/* Color swatches */}
          <div className="flex gap-3" style={{ marginBottom: "1rem" }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  style={{
                    width: "0.75rem",
                    height: "0.75rem",
                    borderRadius: "2px",
                    background: `var(--chart-${i})`,
                  }}
                />
                <span style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>
                  chart-{i}
                </span>
              </div>
            ))}
          </div>

          {/* Bar chart visualization */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "0.5rem",
              height: "160px",
              borderBottom: "1px solid var(--border)",
              paddingBottom: "0.25rem",
            }}
          >
            {chartData.map((d, i) => {
              const height = (d.value / maxValue) * 140;
              const chartColor = `var(--chart-${(i % 5) + 1})`;
              return (
                <div
                  key={d.month}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: `${height}px`,
                      background: chartColor,
                      borderRadius: "4px 4px 0 0",
                      transition: "height 0.3s ease",
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.375rem" }}>
            {chartData.map((d) => (
              <div
                key={d.month}
                style={{
                  flex: 1,
                  textAlign: "center",
                  fontSize: "0.6875rem",
                  color: "var(--muted-foreground)",
                }}
              >
                {d.month}
              </div>
            ))}
          </div>
        </div>

        {/* Line chart (SVG) */}
        <div
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            padding: "1.5rem",
          }}
        >
          <p style={{ fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.25rem" }}>
            Line Chart
          </p>
          <p style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)", marginBottom: "1rem" }}>
            Comparison over time
          </p>

          <div className="flex gap-4" style={{ marginBottom: "0.75rem" }}>
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: "1.5rem",
                  height: "2px",
                  background: "var(--chart-1)",
                }}
              />
              <span style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>
                Series A
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: "1.5rem",
                  height: "2px",
                  background: "var(--chart-2)",
                }}
              />
              <span style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>
                Series B
              </span>
            </div>
          </div>

          <svg viewBox="0 0 300 160" style={{ width: "100%", height: "160px" }}>
            {/* Grid lines */}
            {[0, 40, 80, 120].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y + 10}
                x2="300"
                y2={y + 10}
                stroke="var(--border)"
                strokeWidth="0.5"
              />
            ))}

            {/* Line A */}
            <polyline
              fill="none"
              stroke="var(--chart-1)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={lineData
                .map(
                  (d, i) =>
                    `${i * 55 + 25},${150 - (d.a / 350) * 130}`,
                )
                .join(" ")}
            />

            {/* Line B */}
            <polyline
              fill="none"
              stroke="var(--chart-2)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={lineData
                .map(
                  (d, i) =>
                    `${i * 55 + 25},${150 - (d.b / 350) * 130}`,
                )
                .join(" ")}
            />

            {/* Dots for Line A */}
            {lineData.map((d, i) => (
              <circle
                key={`a-${i}`}
                cx={i * 55 + 25}
                cy={150 - (d.a / 350) * 130}
                r="3"
                fill="var(--chart-1)"
              />
            ))}

            {/* Dots for Line B */}
            {lineData.map((d, i) => (
              <circle
                key={`b-${i}`}
                cx={i * 55 + 25}
                cy={150 - (d.b / 350) * 130}
                r="3"
                fill="var(--chart-2)"
              />
            ))}

            {/* X-axis labels */}
            {lineData.map((d, i) => (
              <text
                key={d.month}
                x={i * 55 + 25}
                y="158"
                textAnchor="middle"
                fill="var(--muted-foreground)"
                fontSize="9"
              >
                {d.month}
              </text>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}
