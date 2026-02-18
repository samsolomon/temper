import Anthropic from "@anthropic-ai/sdk";
import {
  CSS_VARIABLE_NAMES,
  VARIABLE_DESCRIPTIONS,
  type ThemeTokens,
  type CSSVariableName,
} from "../constants/shadcn.js";
import type { VersionBump } from "./version.js";

export interface GenerateResult {
  theme: ThemeTokens;
  versionBump: VersionBump;
  changelog: string;
  brief: string;
}

const SYSTEM_PROMPT = `You are a UI theme designer for shadcn/ui components. You generate beautiful, cohesive color themes using the OKLCH color space.

## OKLCH Color Space Rules
- Format: oklch(L C H) where L=lightness(0-1), C=chroma(0-0.4), H=hue(0-360)
- Higher C = more saturated. Use C=0 for pure neutrals.
- Maintain accessible contrast ratios: foreground/background pairs need at least 4.5:1 contrast.
- Light themes: backgrounds L>0.9, foregrounds L<0.3
- Dark themes: backgrounds L<0.2, foregrounds L>0.8

## CSS Variables (32 total)
${CSS_VARIABLE_NAMES.map((name) => `- --${name}: ${VARIABLE_DESCRIPTIONS[name]}`).join("\n")}

## Design Guidelines
- Both light and dark variants must be generated for every theme
- Ensure destructive colors are clearly red/danger-toned
- Chart colors should be visually distinct from each other
- Sidebar colors should complement the main theme but can be slightly different
- Primary and accent should work together harmoniously
- Muted colors should be subtle versions of the background

## Font Guidelines
- Use Google Fonts when suggesting custom fonts
- Provide full @import URLs for any custom fonts
- Sans font is for body text, mono font is for code
- If no specific font is requested, keep the system defaults

## Version Bump Guidelines
- patch: Minor tweaks to individual values (e.g., "make primary slightly darker")
- minor: New color palette, font changes, multiple token groups changed
- major: Complete redesign, entirely different design language

Use the generate_theme tool to return your theme. Always generate all 32 CSS variables for both light and dark modes.`;

const TOOL_SCHEMA: Anthropic.Tool = {
  name: "generate_theme",
  description:
    "Generate a complete shadcn/ui theme with light and dark mode CSS variables in OKLCH color space",
  input_schema: {
    type: "object" as const,
    properties: {
      radius: {
        type: "string",
        description: "Border radius value (e.g., '0.625rem', '0.5rem', '1rem')",
      },
      fonts: {
        type: "object",
        properties: {
          sans: {
            type: "string",
            description: "Sans-serif font family stack",
          },
          mono: {
            type: "string",
            description: "Monospace font family stack",
          },
          imports: {
            type: "array",
            items: { type: "string" },
            description: "Google Fonts @import URLs",
          },
        },
        required: ["sans", "mono", "imports"],
      },
      light: {
        type: "object",
        description: "Light mode CSS variable values in OKLCH format",
        properties: Object.fromEntries(
          CSS_VARIABLE_NAMES.map((name) => [
            name,
            {
              type: "string",
              description: `Light mode value for --${name}: ${VARIABLE_DESCRIPTIONS[name]}`,
            },
          ]),
        ),
        required: [...CSS_VARIABLE_NAMES],
      },
      dark: {
        type: "object",
        description: "Dark mode CSS variable values in OKLCH format",
        properties: Object.fromEntries(
          CSS_VARIABLE_NAMES.map((name) => [
            name,
            {
              type: "string",
              description: `Dark mode value for --${name}: ${VARIABLE_DESCRIPTIONS[name]}`,
            },
          ]),
        ),
        required: [...CSS_VARIABLE_NAMES],
      },
      versionBump: {
        type: "string",
        enum: ["major", "minor", "patch"],
        description: "Suggested semver bump based on the scope of changes",
      },
      changelog: {
        type: "string",
        description:
          "Human-readable changelog entry describing what changed and why",
      },
      brief: {
        type: "string",
        description:
          "Short design brief summarizing the theme direction and key choices",
      },
    },
    required: [
      "radius",
      "fonts",
      "light",
      "dark",
      "versionBump",
      "changelog",
      "brief",
    ],
  },
};

export async function generateTheme(
  apiKey: string,
  prompt: string,
  currentTheme: ThemeTokens | null,
  model: string,
  onText?: (text: string) => void,
): Promise<GenerateResult> {
  const client = new Anthropic({ apiKey });

  const userContent = currentTheme
    ? `Current theme:\n\`\`\`json\n${JSON.stringify(currentTheme, null, 2)}\n\`\`\`\n\nUser request: ${prompt}`
    : `This is the first theme generation. User request: ${prompt}`;

  const stream = await client.messages.stream({
    model,
    max_tokens: 4096,
    system: SYSTEM_PROMPT,
    tools: [TOOL_SCHEMA],
    tool_choice: { type: "tool", name: "generate_theme" },
    messages: [{ role: "user", content: userContent }],
  });

  let toolInput: Record<string, unknown> = {};

  for await (const event of stream) {
    if (
      event.type === "content_block_delta" &&
      event.delta.type === "text_delta"
    ) {
      onText?.(event.delta.text);
    }
    if (
      event.type === "content_block_delta" &&
      event.delta.type === "input_json_delta"
    ) {
      onText?.(".");
    }
  }

  const finalMessage = await stream.finalMessage();

  for (const block of finalMessage.content) {
    if (block.type === "tool_use" && block.name === "generate_theme") {
      toolInput = block.input as Record<string, unknown>;
    }
  }

  if (
    !toolInput.light ||
    typeof toolInput.light !== "object" ||
    !toolInput.dark ||
    typeof toolInput.dark !== "object"
  ) {
    throw new Error("Claude did not return a valid theme. Please try again.");
  }

  const rawLight = toolInput.light as Record<string, unknown>;
  const rawDark = toolInput.dark as Record<string, unknown>;

  // Validate all variables are present and are strings
  const light: Record<string, string> = {};
  const dark: Record<string, string> = {};

  for (const name of CSS_VARIABLE_NAMES) {
    const lv = rawLight[name];
    if (typeof lv !== "string" || lv === "") {
      throw new Error(`Missing or invalid light mode value for --${name}`);
    }
    light[name] = lv;

    const dv = rawDark[name];
    if (typeof dv !== "string" || dv === "") {
      throw new Error(`Missing or invalid dark mode value for --${name}`);
    }
    dark[name] = dv;
  }

  // Validate fonts
  const rawFonts = toolInput.fonts as Record<string, unknown> | undefined;
  const fontSans =
    typeof rawFonts?.sans === "string"
      ? rawFonts.sans
      : "ui-sans-serif, system-ui, sans-serif";
  const fontMono =
    typeof rawFonts?.mono === "string"
      ? rawFonts.mono
      : "ui-monospace, monospace";
  const fontImports =
    Array.isArray(rawFonts?.imports) &&
    rawFonts.imports.every((v: unknown) => typeof v === "string")
      ? (rawFonts.imports as string[])
      : [];

  return {
    theme: {
      version: "", // Will be set by the caller
      radius:
        typeof toolInput.radius === "string"
          ? toolInput.radius
          : "0.625rem",
      fonts: {
        sans: fontSans,
        mono: fontMono,
        imports: fontImports,
      },
      light: light as Record<CSSVariableName, string>,
      dark: dark as Record<CSSVariableName, string>,
    },
    versionBump:
      typeof toolInput.versionBump === "string" &&
      ["major", "minor", "patch"].includes(toolInput.versionBump)
        ? (toolInput.versionBump as VersionBump)
        : "minor",
    changelog:
      typeof toolInput.changelog === "string"
        ? toolInput.changelog
        : "Theme updated",
    brief:
      typeof toolInput.brief === "string"
        ? toolInput.brief
        : "Theme changes applied",
  };
}
