import React from "react";
import { Icon } from "@iconify/react";

/* ─── Shared brand sub-components ─── */

const BrandLogo = ({ size = 80, gap = 3 }: { size?: number; gap?: number }) => {
  const tileSize = (size - gap * 2) / 3;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${r}-${col}`}
            x={col * (tileSize + gap)}
            y={r * (tileSize + gap)}
            width={tileSize}
            height={tileSize}
            rx={1}
            fill="var(--primary)"
          />
        ))
      )}
    </svg>
  );
};

const VoiceExample = ({ wrong, right }: { wrong: string; right: string }) => (
  <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
    <div
      style={{
        flex: "1 1 250px",
        padding: "1rem",
        borderRadius: "var(--radius)",
        background: "color-mix(in oklch, var(--destructive) 8%, transparent)",
        border: "1px solid color-mix(in oklch, var(--destructive) 20%, transparent)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.625rem",
          color: "var(--destructive)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom: "0.5rem",
        }}
      >
        Don't
      </div>
      <div
        style={{
          fontSize: "0.875rem",
          color: "var(--muted-foreground)",
          lineHeight: 1.5,
        }}
      >
        {wrong}
      </div>
    </div>
    <div
      style={{
        flex: "1 1 250px",
        padding: "1rem",
        borderRadius: "var(--radius)",
        background: "color-mix(in oklch, var(--chart-2) 8%, transparent)",
        border: "1px solid color-mix(in oklch, var(--chart-2) 20%, transparent)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.625rem",
          color: "var(--chart-2)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom: "0.5rem",
        }}
      >
        Do
      </div>
      <div
        style={{
          fontSize: "0.875rem",
          color: "var(--foreground)",
          lineHeight: 1.5,
        }}
      >
        {right}
      </div>
    </div>
  </div>
);

/* ─── Main brand showcase ─── */

export function BrandShowcase() {
  return (
    <>
      {/* ═══ ESSENCE ═══ */}
      <div className="example-section">
        <div className="example-label">Essence</div>
        <div className="example-box">
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "var(--muted-foreground)",
              maxWidth: 600,
              marginBottom: "1rem",
            }}
          >
            Tesara lives in the space between precision and warmth. It's the
            productive calm of 11pm — machines working quietly on your behalf, a
            single coral glow in a dark room. The name comes from tessera, a
            single tile in a mosaic. Many small agents composing something
            bigger.
          </p>
          <div
            style={{
              padding: "1.5rem",
              background: "var(--card)",
              borderRadius: "var(--radius)",
              border: "1px solid var(--border)",
              fontSize: "1.25rem",
              fontWeight: 300,
              lineHeight: 1.6,
              fontStyle: "italic",
              color: "var(--foreground)",
            }}
          >
            "Your agents are working. Everything is fine. Look when you're
            ready."
          </div>
        </div>
      </div>

      {/* Decision Principles */}
      <div className="example-section">
        <div className="example-label">Decision Principles</div>
        <div className="example-box">
          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--muted-foreground)",
              marginBottom: "1rem",
            }}
          >
            When you're unsure whether something is Tesara, run it through
            these:
          </p>
          {[
            {
              q: "Does it respect attention?",
              d: "If it demands focus rather than earning it, simplify. Tesara never shouts.",
            },
            {
              q: "Could it exist at 11pm?",
              d: "If it's too bright, too loud, or too eager, it breaks the mood.",
            },
            {
              q: "Does it feel made, not generated?",
              d: "Every element should look like someone chose it on purpose. If it feels default, it's wrong.",
            },
            {
              q: "Is the craft in the restraint?",
              d: "Adding less is harder than adding more. If you're unsure whether to add something, don't.",
            },
            {
              q: "Would it age well?",
              d: "Avoid trends. Tesara's references are 40 years old and still look good.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "0.75rem 0",
                borderBottom: "1px solid var(--border)",
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  width: 260,
                  flexShrink: 0,
                  color: "var(--foreground)",
                }}
              >
                {item.q}
              </span>
              <span
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--muted-foreground)",
                  flex: 1,
                  minWidth: 200,
                }}
              >
                {item.d}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Is / Is Not Grid */}
      <div className="example-section">
        <div className="example-label">Identity</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 1,
            background: "var(--border)",
            borderRadius: "var(--radius)",
            overflow: "hidden",
          }}
        >
          {[
            {
              label: "Is",
              values: "Precise \u00b7 Warm \u00b7 Confident \u00b7 Crafted \u00b7 Quiet",
            },
            {
              label: "Is not",
              values: "Cold \u00b7 Cute \u00b7 Loud \u00b7 Generic \u00b7 Urgent",
            },
            {
              label: "Feels like",
              values: "11pm flow state \u00b7 Mission control \u00b7 A good tool",
            },
            {
              label: "Sounds like",
              values:
                "Analog synth pad \u00b7 A relay click \u00b7 Calm breathing",
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{ padding: "1.25rem", background: "var(--card)" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                  color: "var(--primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "0.75rem",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                  color: "var(--foreground)",
                }}
              >
                {item.values}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ LOGO ═══ */}
      <div className="example-section">
        <div className="example-label">Logo — Nine Tiles</div>
        <div className="example-box">
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "var(--muted-foreground)",
              maxWidth: 600,
              marginBottom: "1.5rem",
            }}
          >
            The Tesara mark is a 3x3 grid of equal squares in a single color.
            No hierarchy, no variation — nine identical tiles forming a mosaic.
            The logo is the name made literal: tessera, tiles composing
            something whole.
          </p>

          {/* Logo at scale */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "1.5rem",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            {[96, 64, 48, 32, 24, 16].map((s) => (
              <div
                key={s}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <BrandLogo
                  size={s}
                  gap={s > 32 ? 3 : s > 20 ? 2 : 1.5}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.625rem",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {s}px
                </span>
              </div>
            ))}
          </div>

          {/* Wordmark lockups */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.625rem",
              color: "var(--muted-foreground)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "0.75rem",
            }}
          >
            Wordmark Lockup
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1.25rem 1.5rem",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
              }}
            >
              <BrandLogo size={36} gap={2} />
              <span
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 200,
                  letterSpacing: "-0.01em",
                  color: "var(--foreground)",
                }}
              >
                Tesara
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                  color: "var(--muted-foreground)",
                  marginLeft: "auto",
                }}
              >
                Primary
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 1.5rem",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
              }}
            >
              <BrandLogo size={24} gap={1.5} />
              <span
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 300,
                  color: "var(--foreground)",
                }}
              >
                Tesara
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                  color: "var(--muted-foreground)",
                  marginLeft: "auto",
                }}
              >
                Compact
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Logo rules */}
      <div className="example-section">
        <div className="example-label">Logo Usage</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem",
          }}
        >
          <div className="example-box">
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.625rem",
                color: "var(--chart-2)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "0.75rem",
              }}
            >
              Do
            </div>
            <div
              style={{
                fontSize: "0.8125rem",
                color: "var(--muted-foreground)",
                lineHeight: 1.7,
              }}
            >
              Use the primary accent as the logo color on dark backgrounds.
              Maintain the gap proportionally when scaling. Give the mark
              generous clear space — minimum equal to one tile width on all
              sides.
            </div>
          </div>
          <div className="example-box">
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.625rem",
                color: "var(--destructive)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "0.75rem",
              }}
            >
              Don't
            </div>
            <div
              style={{
                fontSize: "0.8125rem",
                color: "var(--muted-foreground)",
                lineHeight: 1.7,
              }}
            >
              Don't rotate, skew, or add effects to the mark. Don't use
              different colors for individual tiles. Don't reduce the gap to
              zero — the grid structure is the identity.
            </div>
          </div>
        </div>
      </div>

      {/* ═══ COLOR ═══ */}
      <div className="example-section">
        <div className="example-label">Color Palette</div>
        <div className="example-box">
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "var(--muted-foreground)",
              maxWidth: 600,
              marginBottom: "1.5rem",
            }}
          >
            Tesara supports both dark and light modes as first-class
            experiences. Both modes share the same accent identity. All colors
            below reflect the currently active theme.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                var: "--background",
                name: "Background",
                role: "Base canvas",
              },
              { var: "--card", name: "Surface", role: "Panels, cards" },
              {
                var: "--popover",
                name: "Elevated",
                role: "Modals, dropdowns",
              },
              { var: "--border", name: "Border", role: "Edges, dividers" },
              {
                var: "--foreground",
                name: "Text Primary",
                role: "Headings, body",
              },
              {
                var: "--muted-foreground",
                name: "Text Secondary",
                role: "Labels, meta",
              },
            ].map((token) => (
              <div
                key={token.var}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1",
                    borderRadius: "var(--radius)",
                    background: `var(${token.var})`,
                    border: "1px solid var(--border)",
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      color: "var(--foreground)",
                    }}
                  >
                    {token.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6875rem",
                      color: "var(--muted-foreground)",
                      marginTop: "0.125rem",
                    }}
                  >
                    {token.var}
                  </div>
                  <div
                    style={{
                      fontSize: "0.6875rem",
                      color: "var(--muted-foreground)",
                      marginTop: "0.125rem",
                    }}
                  >
                    {token.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accent Colors */}
      <div className="example-section">
        <div className="example-label">Accent Colors</div>
        <div className="example-box">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              { var: "--primary", name: "Primary", role: "Main accent" },
              { var: "--secondary", name: "Secondary", role: "Subtle accent" },
              { var: "--accent", name: "Accent", role: "Highlight" },
              {
                var: "--destructive",
                name: "Destructive",
                role: "Error, danger",
              },
              { var: "--ring", name: "Ring", role: "Focus indicator" },
            ].map((token) => (
              <div
                key={token.var}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1",
                    borderRadius: "var(--radius)",
                    background: `var(${token.var})`,
                    border: "1px solid var(--border)",
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      color: "var(--foreground)",
                    }}
                  >
                    {token.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6875rem",
                      color: "var(--muted-foreground)",
                      marginTop: "0.125rem",
                    }}
                  >
                    {token.var}
                  </div>
                  <div
                    style={{
                      fontSize: "0.6875rem",
                      color: "var(--muted-foreground)",
                      marginTop: "0.125rem",
                    }}
                  >
                    {token.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ TYPOGRAPHY ═══ */}
      <div className="example-section">
        <div className="example-label">Typography</div>
        <div className="example-box">
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "var(--muted-foreground)",
              maxWidth: 600,
              marginBottom: "2rem",
            }}
          >
            IBM Plex bridges mid-century technical drawing with modern screen
            clarity. It carries the heritage of computing as craft. The mono
            variant gives agent output and system text a terminal warmth without
            cosplay.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                  color: "var(--muted-foreground)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: "0.75rem",
                }}
              >
                Display — Light / 48px
              </div>
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: 200,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.15,
                  color: "var(--foreground)",
                }}
              >
                The future already
                <br />
                arrived. It's quiet.
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                  color: "var(--muted-foreground)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: "0.75rem",
                }}
              >
                Heading — Regular / 24px
              </div>
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  lineHeight: 1.3,
                  color: "var(--foreground)",
                }}
              >
                Orchestrate your agents with clarity
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                  color: "var(--muted-foreground)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: "0.75rem",
                }}
              >
                Body — Regular / 15px
              </div>
              <div
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "var(--muted-foreground)",
                  maxWidth: 520,
                }}
              >
                Each agent runs as a tile in your workspace. You can see at a
                glance what's working, what's done, and what needs your
                attention.
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                  color: "var(--muted-foreground)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: "0.75rem",
                }}
              >
                System / Code — Mono / 13px
              </div>
              <div
                style={{
                  padding: "1.25rem",
                  background: "var(--card)",
                  borderRadius: "var(--radius)",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8125rem",
                    lineHeight: 1.7,
                    color: "var(--primary)",
                  }}
                >
                  agent-04 &rarr; refactoring auth module
                  <br />
                  <span style={{ color: "var(--chart-2)" }}>
                    agent-02 &rarr; complete
                  </span>
                  <br />
                  <span style={{ color: "var(--muted-foreground)" }}>
                    agent-07 &rarr; waiting for review
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Type Scale */}
      <div className="example-section">
        <div className="example-label">Type Scale</div>
        <div className="example-box">
          {[
            { label: "Display", size: "3rem", weight: 200 },
            { label: "H1", size: "2.25rem", weight: 300 },
            { label: "H2", size: "1.5rem", weight: 400 },
            { label: "H3", size: "1.125rem", weight: 500 },
            { label: "Body", size: "0.9375rem", weight: 400 },
            { label: "Small", size: "0.8125rem", weight: 400 },
            { label: "Micro", size: "0.6875rem", weight: 400 },
          ].map((t) => (
            <div
              key={t.label}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "1rem",
                padding: "0.75rem 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                  color: "var(--muted-foreground)",
                  width: 60,
                  flexShrink: 0,
                }}
              >
                {t.label}
              </span>
              <span
                style={{
                  fontSize: t.size,
                  fontWeight: t.weight,
                  lineHeight: 1.2,
                  color: "var(--foreground)",
                }}
              >
                Tesara
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                  color: "var(--muted-foreground)",
                  marginLeft: "auto",
                }}
              >
                {t.size} / {t.weight}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ SPACING ═══ */}
      <div className="example-section">
        <div className="example-label">Spacing — 4px Grid</div>
        <div className="example-box">
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "var(--muted-foreground)",
              maxWidth: 600,
              marginBottom: "1.5rem",
            }}
          >
            All spacing derives from a 4px base unit. Generous spacing is a core
            principle — the interface should always feel like there's room to
            breathe.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "flex-end",
              flexWrap: "wrap",
            }}
          >
            {[
              { v: 4, t: "1" },
              { v: 8, t: "2" },
              { v: 12, t: "3" },
              { v: 16, t: "4" },
              { v: 20, t: "5" },
              { v: 24, t: "6" },
              { v: 32, t: "8" },
              { v: 40, t: "10" },
              { v: 48, t: "12" },
              { v: 64, t: "16" },
            ].map((s) => (
              <div
                key={s.v}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    width: s.v,
                    height: s.v,
                    background:
                      "color-mix(in oklch, var(--primary) 30%, transparent)",
                    border:
                      "1px solid color-mix(in oklch, var(--primary) 50%, transparent)",
                    borderRadius: "var(--radius)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.625rem",
                    color: "var(--foreground)",
                  }}
                >
                  {s.v}px
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.5625rem",
                    color: "var(--muted-foreground)",
                  }}
                >
                  space-{s.t}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spacing details */}
      <div className="example-section">
        <div className="example-label">Spacing Details</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem",
          }}
        >
          <div className="example-box">
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.625rem",
                color: "var(--primary)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "0.75rem",
              }}
            >
              Component Internal
            </div>
            <div
              style={{
                fontSize: "0.8125rem",
                color: "var(--muted-foreground)",
                lineHeight: 1.7,
              }}
            >
              Card padding: 16-24px. Button padding: 8x16px. Input padding:
              8x12px. Icon-to-label gap: 8px.
            </div>
          </div>
          <div className="example-box">
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.625rem",
                color: "var(--primary)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "0.75rem",
              }}
            >
              Layout
            </div>
            <div
              style={{
                fontSize: "0.8125rem",
                color: "var(--muted-foreground)",
                lineHeight: 1.7,
              }}
            >
              Section gap: 32-48px. Card grid gap: 16px. Page margin:
              16-48px responsive. Content max-width: 960px.
            </div>
          </div>
        </div>
      </div>

      {/* Border Radius */}
      <div className="example-section">
        <div className="example-label">Border Radius</div>
        <div className="example-box">
          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--muted-foreground)",
              lineHeight: 1.7,
              marginBottom: "1rem",
              maxWidth: 600,
            }}
          >
            Tesara uses a near-zero radius across the board: 2px (0.125rem).
            This is enough to remove the harsh pixel edge without introducing
            any perceived roundness. One value, no exceptions.
          </p>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              { r: "0px", label: "0px — Too sharp" },
              {
                r: "var(--radius)",
                label: "var(--radius) — Current theme",
                active: true,
              },
              { r: "8px", label: "8px — Too soft" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    border: `1.5px solid ${item.active ? "var(--primary)" : "var(--muted-foreground)"}`,
                    borderRadius: item.r,
                    opacity: item.active ? 1 : 0.4,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6875rem",
                    color: item.active
                      ? "var(--foreground)"
                      : "var(--muted-foreground)",
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ VOICE ═══ */}
      <div className="example-section">
        <div className="example-label">Voice — Plain, Dry, Confident</div>
        <div className="example-box">
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "var(--muted-foreground)",
              maxWidth: 600,
              marginBottom: "1.5rem",
            }}
          >
            When Tesara speaks it sounds like a smart colleague, not a brand. It
            never exclaims. It states things plainly. There's occasional quiet
            wit, but never forced.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <VoiceExample
              wrong="Your agent successfully completed the task! Great job!"
              right="Done."
            />
            <VoiceExample
              wrong="Oops! Something went wrong. Please try again later."
              right="That didn't work. Here's what happened."
            />
            <VoiceExample
              wrong="Get started by creating your first AI agent! It's easy!"
              right="Create an agent."
            />
            <VoiceExample
              wrong="No results found. Try adjusting your search criteria."
              right="Nothing here yet."
            />
          </div>
        </div>
      </div>

      {/* Word Ban List */}
      <div className="example-section">
        <div className="example-label">Word Ban List</div>
        <div className="example-box">
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8125rem",
              color: "var(--destructive)",
              lineHeight: 2,
            }}
          >
            supercharge &middot; unleash &middot; revolutionize &middot;
            leverage &middot; synergy &middot; empower &middot; seamless &middot;
            cutting-edge &middot; game-changing &middot; next-level &middot;
            unlock &middot; turbocharge &middot; disrupt &middot; reimagine
          </div>
        </div>
      </div>
    </>
  );
}
