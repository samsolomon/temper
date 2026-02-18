import fs from "node:fs";
import path from "node:path";
import * as p from "@clack/prompts";
import pc from "picocolors";
import {
  getTemperDir,
  isInitialized,
  writeConfig,
  writeTheme,
  resolveApiKey,
  writeGlobalConfig,
  readGlobalConfig,
} from "../lib/config.js";
import { DEFAULT_CONFIG, DEFAULT_THEME } from "../constants/shadcn.js";
import { saveSnapshot } from "../lib/version.js";
import { generateCSS } from "../lib/theme.js";

export async function init() {
  p.intro(pc.bold("temper init"));

  const cwd = process.cwd();

  if (isInitialized(cwd)) {
    const shouldContinue = await p.confirm({
      message: ".temper/ already exists. Reinitialize?",
      initialValue: false,
    });
    if (p.isCancel(shouldContinue) || !shouldContinue) {
      p.outro("Init cancelled.");
      return;
    }
  }

  // Detect existing shadcn setup
  const possiblePaths = [
    "./src/app/globals.css",
    "./app/globals.css",
    "./src/globals.css",
    "./globals.css",
    "./src/index.css",
  ];

  let detectedPath: string | undefined;
  for (const candidate of possiblePaths) {
    if (fs.existsSync(path.resolve(cwd, candidate))) {
      detectedPath = candidate;
      break;
    }
  }

  const outputPath = await p.text({
    message: "Where should Temper write your CSS variables?",
    placeholder: DEFAULT_CONFIG.outputPath,
    initialValue: detectedPath || DEFAULT_CONFIG.outputPath,
  });

  if (p.isCancel(outputPath)) {
    p.outro("Init cancelled.");
    return;
  }

  // API key setup
  let apiKey = resolveApiKey();
  if (!apiKey) {
    const keyInput = await p.text({
      message: "Enter your Anthropic API key (or set ANTHROPIC_API_KEY env var):",
      placeholder: "sk-ant-...",
      validate: (val) => {
        if (!val) return "API key is required to generate themes";
      },
    });

    if (p.isCancel(keyInput)) {
      p.outro("Init cancelled.");
      return;
    }

    const shouldPersist = await p.confirm({
      message: "Save API key to global config (~/.config/temper/)?",
      initialValue: true,
    });

    if (!p.isCancel(shouldPersist) && shouldPersist) {
      const globalConfig = readGlobalConfig();
      globalConfig.apiKey = keyInput as string;
      writeGlobalConfig(globalConfig);
      p.log.success("API key saved to global config.");
    }

    apiKey = keyInput as string;
  } else {
    p.log.success("API key found.");
  }

  // Create .temper/ directory
  const temperDir = getTemperDir(cwd);
  fs.mkdirSync(temperDir, { recursive: true });
  fs.mkdirSync(path.join(temperDir, "versions"), { recursive: true });

  // Write config
  const config = {
    ...DEFAULT_CONFIG,
    outputPath: outputPath as string,
  };
  writeConfig(config, cwd);

  // Write default theme
  const defaultTheme = structuredClone(DEFAULT_THEME);
  writeTheme(defaultTheme, cwd);

  // Save initial version snapshot
  saveSnapshot(
    {
      version: defaultTheme.version,
      timestamp: new Date().toISOString(),
      prompt: "Initial default theme",
      brief: "Default shadcn/ui neutral theme with OKLCH colors",
      changelog: "Initialized with default shadcn/ui theme",
      theme: structuredClone(defaultTheme),
    },
    cwd,
  );

  // Write .gitignore for .temper/
  fs.writeFileSync(
    path.join(temperDir, ".gitignore"),
    "# All theme data is committable by default\n",
  );

  // Write initial CSS if output file doesn't exist
  const fullOutputPath = path.resolve(cwd, outputPath as string);
  if (!fs.existsSync(fullOutputPath)) {
    const dir = path.dirname(fullOutputPath);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(fullOutputPath, generateCSS(DEFAULT_THEME));
    p.log.info(`Created ${outputPath}`);
  }

  p.outro(
    `${pc.green("✓")} Temper initialized! Run ${pc.cyan("temper")} ${pc.dim('"make it warmer"')} to start designing.`,
  );
}
