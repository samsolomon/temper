import React from "react";

const thStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "0.75rem",
  fontSize: "0.8125rem",
  fontWeight: 500,
  color: "var(--muted-foreground)",
  borderBottom: "1px solid var(--border)",
};

const tdStyle: React.CSSProperties = {
  padding: "0.75rem",
  fontSize: "0.875rem",
  borderBottom: "1px solid var(--border)",
};

const tableData = [
  { name: "Olivia Martin", email: "olivia@example.com", role: "Admin", status: "Active" },
  { name: "Jackson Lee", email: "jackson@example.com", role: "Editor", status: "Active" },
  { name: "Isabella Nguyen", email: "isabella@example.com", role: "Viewer", status: "Inactive" },
  { name: "William Kim", email: "william@example.com", role: "Editor", status: "Active" },
];

export function DataDisplayShowcase() {
  return (
    <div className="section">
      <h2 className="section-title">Data Display</h2>

      {/* Avatars */}
      <div style={{ marginBottom: "1.5rem" }}>
        <p style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>
          Avatars
        </p>
        <div className="flex gap-3 items-center">
          {["OM", "JL", "IN", "WK"].map((initials, i) => (
            <div
              key={i}
              style={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "9999px",
                background: `var(--chart-${i + 1})`,
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.75rem",
                fontWeight: 600,
              }}
            >
              {initials}
            </div>
          ))}
          <div
            style={{
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "9999px",
              background: "var(--muted)",
              color: "var(--muted-foreground)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.75rem",
              fontWeight: 600,
            }}
          >
            +3
          </div>
        </div>
      </div>

      {/* Table */}
      <div>
        <p style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>
          Table
        </p>
        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            overflow: "hidden",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "var(--muted)" }}>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Role</th>
                <th style={thStyle}>Status</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={i} style={{ background: "var(--card)" }}>
                  <td style={{ ...tdStyle, fontWeight: 500 }}>{row.name}</td>
                  <td style={{ ...tdStyle, color: "var(--muted-foreground)" }}>
                    {row.email}
                  </td>
                  <td style={tdStyle}>{row.role}</td>
                  <td style={tdStyle}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        padding: "0.125rem 0.5rem",
                        borderRadius: "9999px",
                        background:
                          row.status === "Active"
                            ? "var(--primary)"
                            : "var(--muted)",
                        color:
                          row.status === "Active"
                            ? "var(--primary-foreground)"
                            : "var(--muted-foreground)",
                      }}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
