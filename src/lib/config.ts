import fs from "node:fs";
import path from "node:path";
import envPaths from "env-paths";
import type {
  TemperConfig,
  GlobalConfig,
  ThemeTokens,
} from "../constants/shadcn.js";
import { DEFAULT_CONFIG, DEFAULT_THEME } from "../constants/shadcn.js";

const paths = envPaths("temper", { suffix: "" });

/** Safely parse JSON, returning null on failure */
function safeJsonParse<T>(raw: string): T | null {
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/** Resolve .temper/ directory from current working directory */
export function getTemperDir(cwd = process.cwd()): string {
  return path.join(cwd, ".temper");
}

/** Check if .temper/ directory exists */
export function isInitialized(cwd = process.cwd()): boolean {
  return fs.existsSync(getTemperDir(cwd));
}

// --- Project config ---

export function readConfig(cwd = process.cwd()): TemperConfig {
  const configPath = path.join(getTemperDir(cwd), "config.json");
  if (!fs.existsSync(configPath)) return { ...DEFAULT_CONFIG };
  const raw = fs.readFileSync(configPath, "utf-8");
  const parsed = safeJsonParse<Partial<TemperConfig>>(raw);
  if (!parsed) return { ...DEFAULT_CONFIG };
  return { ...DEFAULT_CONFIG, ...parsed };
}

export function writeConfig(config: TemperConfig, cwd = process.cwd()): void {
  const dir = getTemperDir(cwd);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, "config.json"),
    JSON.stringify(config, null, 2) + "\n",
  );
}

// --- Theme ---

export function readTheme(cwd = process.cwd()): ThemeTokens {
  const themePath = path.join(getTemperDir(cwd), "theme.json");
  if (!fs.existsSync(themePath)) return structuredClone(DEFAULT_THEME);
  const raw = fs.readFileSync(themePath, "utf-8");
  const parsed = safeJsonParse<ThemeTokens>(raw);
  if (!parsed) return structuredClone(DEFAULT_THEME);
  // Deep merge fonts to avoid missing nested properties
  return {
    ...DEFAULT_THEME,
    ...parsed,
    fonts: { ...DEFAULT_THEME.fonts, ...parsed.fonts },
  };
}

export function writeTheme(theme: ThemeTokens, cwd = process.cwd()): void {
  const dir = getTemperDir(cwd);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, "theme.json"),
    JSON.stringify(theme, null, 2) + "\n",
  );
}

// --- Global config ---

export function getGlobalConfigPath(): string {
  return path.join(paths.config, "config.json");
}

export function readGlobalConfig(): GlobalConfig {
  const configPath = getGlobalConfigPath();
  if (!fs.existsSync(configPath)) return {};
  const raw = fs.readFileSync(configPath, "utf-8");
  return safeJsonParse<GlobalConfig>(raw) ?? {};
}

export function writeGlobalConfig(config: GlobalConfig): void {
  const configDir = paths.config;
  fs.mkdirSync(configDir, { recursive: true, mode: 0o700 });
  fs.writeFileSync(
    path.join(configDir, "config.json"),
    JSON.stringify(config, null, 2) + "\n",
    { mode: 0o600 },
  );
}

/** Resolve API key from env vars or config */
export function resolveApiKey(): string | undefined {
  return (
    process.env.TEMPER_API_KEY ||
    process.env.ANTHROPIC_API_KEY ||
    readGlobalConfig().apiKey
  );
}
