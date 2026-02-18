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
  { name: "Sofia Davis", email: "sofia@example.com", role: "Admin", status: "Active" },
];

export function DataDisplayShowcase() {
  return (
    <>
      {/* Avatars */}
      <div className="example-section">
        <div className="example-label">Avatar</div>
        <div className="example-box">
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Sizes */}
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
              {[
                { size: "2rem", fs: "0.625rem" },
                { size: "2.5rem", fs: "0.75rem" },
                { size: "3rem", fs: "0.875rem" },
                { size: "3.5rem", fs: "1rem" },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    width: s.size,
                    height: s.size,
                    borderRadius: "9999px",
                    background: "var(--primary)",
                    color: "var(--primary-foreground)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: s.fs,
                    fontWeight: 600,
                  }}
                >
                  OM
                </div>
              ))}
            </div>
            {/* Group with chart colors */}
            <div style={{ display: "flex", alignItems: "center" }}>
              {["OM", "JL", "IN", "WK", "SD"].map((initials, i) => (
                <div
                  key={i}
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "9999px",
                    background: `var(--chart-${i + 1})`,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    border: "2px solid var(--background)",
                    marginLeft: i > 0 ? "-0.5rem" : 0,
                  }}
                >
                  {initials}
                </div>
              ))}
              <div
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "9999px",
                  background: "var(--muted)",
                  color: "var(--muted-foreground)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  border: "2px solid var(--background)",
                  marginLeft: "-0.5rem",
                }}
              >
                +3
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="example-section">
        <div className="example-label">Table</div>
        <div className="example-box" style={{ padding: 0, overflow: "hidden" }}>
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
                <tr
                  key={i}
                  style={{
                    background: "var(--card)",
                    borderBottom:
                      i === tableData.length - 1
                        ? "none"
                        : "1px solid var(--border)",
                  }}
                >
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
    </>
  );
}
