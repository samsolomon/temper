/**
 * All 32 shadcn/ui CSS variable names and their semantic roles.
 * Values are OKLCH color strings: oklch(L C H)
 * L: lightness 0-1, C: chroma 0-0.4, H: hue 0-360
 */

export const CSS_VARIABLE_NAMES = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "destructive-foreground",
  "border",
  "input",
  "ring",
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
  "sidebar-background",
  "sidebar-foreground",
  "sidebar-primary",
  "sidebar-primary-foreground",
  "sidebar-accent",
  "sidebar-accent-foreground",
  "sidebar-border",
  "sidebar-ring",
] as const;

export type CSSVariableName = (typeof CSS_VARIABLE_NAMES)[number];

export const VARIABLE_DESCRIPTIONS: Record<CSSVariableName, string> = {
  background: "Default page/app background color",
  foreground: "Default text color on background",
  card: "Card component background",
  "card-foreground": "Text color inside cards",
  popover: "Popover/dropdown background",
  "popover-foreground": "Text inside popovers",
  primary: "Primary brand color for buttons, links, focus rings",
  "primary-foreground": "Text on primary-colored elements",
  secondary: "Secondary button/badge background",
  "secondary-foreground": "Text on secondary elements",
  muted: "Muted backgrounds (disabled states, subtle areas)",
  "muted-foreground": "Text on muted backgrounds (placeholders, captions)",
  accent: "Accent for hover states, highlighted items",
  "accent-foreground": "Text on accent-colored elements",
  destructive: "Destructive/danger actions (delete buttons, error states)",
  "destructive-foreground": "Text on destructive elements",
  border: "Default border color for cards, inputs, dividers",
  input: "Input field border color",
  ring: "Focus ring color",
  "chart-1": "First chart/data visualization color",
  "chart-2": "Second chart color",
  "chart-3": "Third chart color",
  "chart-4": "Fourth chart color",
  "chart-5": "Fifth chart color",
  "sidebar-background": "Sidebar background",
  "sidebar-foreground": "Text in sidebar",
  "sidebar-primary": "Primary action color in sidebar",
  "sidebar-primary-foreground": "Text on sidebar primary elements",
  "sidebar-accent": "Accent/hover color in sidebar",
  "sidebar-accent-foreground": "Text on sidebar accent elements",
  "sidebar-border": "Border color in sidebar",
  "sidebar-ring": "Focus ring color in sidebar",
};

/** Default light theme — neutral base, shadcn defaults in OKLCH */
export const DEFAULT_LIGHT_TOKENS: Record<CSSVariableName, string> = {
  background: "oklch(1 0 0)",
  foreground: "oklch(0.145 0 0)",
  card: "oklch(1 0 0)",
  "card-foreground": "oklch(0.145 0 0)",
  popover: "oklch(1 0 0)",
  "popover-foreground": "oklch(0.145 0 0)",
  primary: "oklch(0.205 0 0)",
  "primary-foreground": "oklch(0.985 0 0)",
  secondary: "oklch(0.965 0 0)",
  "secondary-foreground": "oklch(0.205 0 0)",
  muted: "oklch(0.965 0 0)",
  "muted-foreground": "oklch(0.556 0 0)",
  accent: "oklch(0.965 0 0)",
  "accent-foreground": "oklch(0.205 0 0)",
  destructive: "oklch(0.577 0.245 27.325)",
  "destructive-foreground": "oklch(0.985 0 0)",
  border: "oklch(0.922 0 0)",
  input: "oklch(0.922 0 0)",
  ring: "oklch(0.708 0 0)",
  "chart-1": "oklch(0.646 0.222 41.116)",
  "chart-2": "oklch(0.6 0.118 184.704)",
  "chart-3": "oklch(0.398 0.07 227.392)",
  "chart-4": "oklch(0.828 0.189 84.429)",
  "chart-5": "oklch(0.769 0.188 70.08)",
  "sidebar-background": "oklch(0.985 0 0)",
  "sidebar-foreground": "oklch(0.145 0 0)",
  "sidebar-primary": "oklch(0.205 0 0)",
  "sidebar-primary-foreground": "oklch(0.985 0 0)",
  "sidebar-accent": "oklch(0.965 0 0)",
  "sidebar-accent-foreground": "oklch(0.205 0 0)",
  "sidebar-border": "oklch(0.922 0 0)",
  "sidebar-ring": "oklch(0.708 0 0)",
};

/** Default dark theme — neutral base, shadcn defaults in OKLCH */
export const DEFAULT_DARK_TOKENS: Record<CSSVariableName, string> = {
  background: "oklch(0.145 0 0)",
  foreground: "oklch(0.985 0 0)",
  card: "oklch(0.145 0 0)",
  "card-foreground": "oklch(0.985 0 0)",
  popover: "oklch(0.145 0 0)",
  "popover-foreground": "oklch(0.985 0 0)",
  primary: "oklch(0.985 0 0)",
  "primary-foreground": "oklch(0.205 0 0)",
  secondary: "oklch(0.269 0 0)",
  "secondary-foreground": "oklch(0.985 0 0)",
  muted: "oklch(0.269 0 0)",
  "muted-foreground": "oklch(0.708 0 0)",
  accent: "oklch(0.269 0 0)",
  "accent-foreground": "oklch(0.985 0 0)",
  destructive: "oklch(0.704 0.191 22.216)",
  "destructive-foreground": "oklch(0.205 0 0)",
  border: "oklch(0.269 0 0)",
  input: "oklch(0.269 0 0)",
  ring: "oklch(0.439 0 0)",
  "chart-1": "oklch(0.488 0.243 264.376)",
  "chart-2": "oklch(0.696 0.17 162.48)",
  "chart-3": "oklch(0.769 0.188 70.08)",
  "chart-4": "oklch(0.627 0.265 303.9)",
  "chart-5": "oklch(0.645 0.246 16.439)",
  "sidebar-background": "oklch(0.205 0 0)",
  "sidebar-foreground": "oklch(0.985 0 0)",
  "sidebar-primary": "oklch(0.488 0.243 264.376)",
  "sidebar-primary-foreground": "oklch(0.985 0 0)",
  "sidebar-accent": "oklch(0.269 0 0)",
  "sidebar-accent-foreground": "oklch(0.985 0 0)",
  "sidebar-border": "oklch(0.269 0 0)",
  "sidebar-ring": "oklch(0.439 0 0)",
};

/** ThemeTokens — the full theme data model */
export interface ThemeTokens {
  version: string;
  radius: string;
  fonts: {
    sans: string;
    mono: string;
    imports: string[];
  };
  light: Record<CSSVariableName, string>;
  dark: Record<CSSVariableName, string>;
}

/** Default theme */
export const DEFAULT_THEME: ThemeTokens = {
  version: "0.1.0",
  radius: "0.625rem",
  fonts: {
    sans: "ui-sans-serif, system-ui, sans-serif",
    mono: "ui-monospace, monospace",
    imports: [],
  },
  light: DEFAULT_LIGHT_TOKENS,
  dark: DEFAULT_DARK_TOKENS,
};

/** Version snapshot stored in .temper/versions/ */
export interface VersionSnapshot {
  version: string;
  timestamp: string;
  prompt: string;
  brief: string;
  changelog: string;
  theme: ThemeTokens;
}

/** Project config stored in .temper/config.json */
export interface TemperConfig {
  outputPath: string;
  model: string;
  baseColor: string;
}

/** Global config stored at ~/.config/temper/config.json */
export interface GlobalConfig {
  apiKey?: string;
}

export const DEFAULT_CONFIG: TemperConfig = {
  outputPath: "./src/app/globals.css",
  model: "claude-sonnet-4-5-20250929",
  baseColor: "neutral",
};
