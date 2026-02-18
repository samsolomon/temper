import fs from "node:fs";
import path from "node:path";
import { CSS_VARIABLE_NAMES, type ThemeTokens } from "../constants/shadcn.js";
import { readConfig } from "./config.js";

/** Validate that a font import URL is a safe Google Fonts URL */
function isSafeFontUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return (
      parsed.protocol === "https:" &&
      parsed.hostname === "fonts.googleapis.com" &&
      !url.includes('"') &&
      !url.includes("'") &&
      !url.includes(")")
    );
  } catch {
    return false;
  }
}

export function generateCSS(theme: ThemeTokens): string {
  const lines: string[] = [];
  const safeImports = theme.fonts.imports.filter(isSafeFontUrl);

  // Font imports
  if (safeImports.length > 0) {
    lines.push('@import "tailwindcss";');
    for (const url of safeImports) {
      lines.push(`@import url("${url}");`);
    }
    lines.push("");
  } else {
    lines.push('@import "tailwindcss";');
    lines.push("");
  }

  // Custom theme inline
  lines.push("@theme inline {");
  lines.push("  --font-sans: var(--font-sans);");
  lines.push("  --font-mono: var(--font-mono);");
  lines.push("  --radius-sm: calc(var(--radius) - 4px);");
  lines.push("  --radius-md: calc(var(--radius) - 2px);");
  lines.push("  --radius-lg: var(--radius);");
  lines.push("  --radius-xl: calc(var(--radius) + 4px);");

  // Color references
  for (const name of CSS_VARIABLE_NAMES) {
    lines.push(`  --color-${name}: var(--${name});`);
  }
  lines.push("}");
  lines.push("");

  // @layer base
  lines.push("@layer base {");

  // :root (light)
  lines.push("  :root {");
  lines.push(`    --radius: ${theme.radius};`);
  lines.push(`    --font-sans: ${theme.fonts.sans};`);
  lines.push(`    --font-mono: ${theme.fonts.mono};`);
  for (const name of CSS_VARIABLE_NAMES) {
    lines.push(`    --${name}: ${theme.light[name]};`);
  }
  lines.push("  }");
  lines.push("");

  // .dark
  lines.push("  .dark {");
  for (const name of CSS_VARIABLE_NAMES) {
    lines.push(`    --${name}: ${theme.dark[name]};`);
  }
  lines.push("  }");

  lines.push("}");
  lines.push("");

  return lines.join("\n");
}

/**
 * Write theme CSS to the configured output path.
 * If the file already exists, only replaces :root {} and .dark {} blocks.
 */
export function writeCSS(theme: ThemeTokens, cwd = process.cwd()): string {
  const config = readConfig(cwd);
  const outputPath = path.resolve(cwd, config.outputPath);
  const dir = path.dirname(outputPath);

  fs.mkdirSync(dir, { recursive: true });

  if (fs.existsSync(outputPath)) {
    const existing = fs.readFileSync(outputPath, "utf-8");
    const updated = replaceThemeBlocks(existing, theme);
    fs.writeFileSync(outputPath, updated);
  } else {
    fs.writeFileSync(outputPath, generateCSS(theme));
  }

  return outputPath;
}

/**
 * Replace :root and .dark blocks in existing CSS, preserving everything else.
 * Also updates font @import statements.
 *
 * Uses a brace-counting approach to handle blocks nested inside @layer base.
 */
function replaceThemeBlocks(css: string, theme: ThemeTokens): string {
  let result = replaceBlock(css, ":root", (indent) => generateRootBlock(theme, indent));
  result = replaceBlock(result, ".dark", (indent) => generateDarkBlock(theme, indent));

  // Update font imports: remove old Google Fonts imports and add new ones
  const fontImportRegex = /@import\s+url\(["'][^"']*fonts\.googleapis\.com[^"']*["']\);?\n?/g;
  result = result.replace(fontImportRegex, "");

  const safeImports = theme.fonts.imports.filter(isSafeFontUrl);
  if (safeImports.length > 0) {
    // Insert font imports after @import "tailwindcss"
    const tailwindImport = '@import "tailwindcss";';
    const fontImports = safeImports
      .map((url) => `@import url("${url}");`)
      .join("\n");
    result = result.replace(
      tailwindImport,
      `${tailwindImport}\n${fontImports}`,
    );
  }

  return result;
}

/**
 * Replace a CSS block by selector, counting braces to handle nesting.
 * Preserves the leading whitespace (indentation) of the matched selector.
 */
function replaceBlock(css: string, selector: string, indentedReplacement: (indent: string) => string): string {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const startRegex = new RegExp(`(^|\\n)([ \\t]*)${escapedSelector}\\s*\\{`);
  const match = startRegex.exec(css);
  if (!match) return css;

  // match[2] is the leading whitespace before the selector
  const indent = match[2] || "";
  // Start of the selector (skip the captured newline/start-of-string)
  const startIdx = match.index + match[1].length;
  let braceCount = 0;
  let endIdx = -1;

  // Start scanning from the opening brace
  const braceSearchStart = match.index + match[0].length - 1;
  for (let i = braceSearchStart; i < css.length; i++) {
    if (css[i] === "{") braceCount++;
    if (css[i] === "}") {
      braceCount--;
      if (braceCount === 0) {
        endIdx = i + 1;
        break;
      }
    }
  }

  // If no closing brace found, leave CSS unchanged
  if (endIdx === -1) return css;

  return css.slice(0, startIdx) + indentedReplacement(indent) + css.slice(endIdx);
}

function generateRootBlock(theme: ThemeTokens, indent = ""): string {
  const inner = indent + "  ";
  const lines: string[] = [];
  lines.push(`${indent}:root {`);
  lines.push(`${inner}--radius: ${theme.radius};`);
  lines.push(`${inner}--font-sans: ${theme.fonts.sans};`);
  lines.push(`${inner}--font-mono: ${theme.fonts.mono};`);
  for (const name of CSS_VARIABLE_NAMES) {
    lines.push(`${inner}--${name}: ${theme.light[name]};`);
  }
  lines.push(`${indent}}`);
  return lines.join("\n");
}

function generateDarkBlock(theme: ThemeTokens, indent = ""): string {
  const inner = indent + "  ";
  const lines: string[] = [];
  lines.push(`${indent}.dark {`);
  for (const name of CSS_VARIABLE_NAMES) {
    lines.push(`${inner}--${name}: ${theme.dark[name]};`);
  }
  lines.push(`${indent}}`);
  return lines.join("\n");
}
