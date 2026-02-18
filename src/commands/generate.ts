import * as p from "@clack/prompts";
import pc from "picocolors";
import { isInitialized, readConfig, readTheme, writeTheme, resolveApiKey, writeGlobalConfig, readGlobalConfig } from "../lib/config.js";
import { generateTheme, type GenerateResult } from "../lib/claude.js";
import { readStdinTheme } from "../lib/stdin.js";
import { bumpVersion, saveSnapshot } from "../lib/version.js";
import { writeCSS } from "../lib/theme.js";

export async function generate(prompt?: string) {
  const cwd = process.cwd();
  const piped = !process.stdin.isTTY;

  if (!isInitialized(cwd)) {
    if (piped) {
      process.stderr.write("Error: No .temper/ directory found. Run temper init first.\n");
    } else {
      p.log.error(
        `No .temper/ directory found. Run ${pc.cyan("temper init")} first.`,
      );
    }
    process.exit(1);
  }

  let result: GenerateResult;

  if (piped) {
    // --- Piped path: read theme JSON from stdin ---
    try {
      process.stderr.write("Reading theme from stdin...\n");
      result = await readStdinTheme();
      process.stderr.write("Theme parsed successfully.\n");
    } catch (error) {
      process.stderr.write(
        `Error: ${error instanceof Error ? error.message : "Failed to read stdin."}\n`,
      );
      process.exit(1);
    }
  } else {
    // --- Interactive path: resolve API key and call Claude ---
    if (!prompt) {
      p.log.error("Please provide a theme prompt.");
      process.exit(1);
    }

    let apiKey = resolveApiKey();
    if (!apiKey) {
      const keyInput = await p.text({
        message: "Enter your Anthropic API key:",
        placeholder: "sk-ant-...",
        validate: (val) => {
          if (!val) return "API key is required";
        },
      });

      if (p.isCancel(keyInput)) {
        p.outro("Cancelled.");
        return;
      }

      const shouldPersist = await p.confirm({
        message: "Save API key to global config?",
        initialValue: true,
      });

      if (!p.isCancel(shouldPersist) && shouldPersist) {
        const globalConfig = readGlobalConfig();
        globalConfig.apiKey = keyInput as string;
        writeGlobalConfig(globalConfig);
      }

      apiKey = keyInput as string;
    }

    const config = readConfig(cwd);
    const currentTheme = readTheme(cwd);

    p.intro(pc.bold(`temper — "${prompt}"`));

    const spinner = p.spinner();
    spinner.start("Generating theme with Claude...");

    try {
      result = await generateTheme(
        apiKey,
        prompt,
        currentTheme,
        config.model,
        () => {
          // Progress indicator already handled by spinner
        },
      );

      spinner.stop("Theme generated.");
    } catch (error) {
      spinner.stop("Failed.");
      if (error instanceof Error) {
        p.log.error(error.message);
      } else {
        p.log.error("An unexpected error occurred.");
      }
      process.exit(1);
    }
  }

  // --- Shared pipeline: version bump → snapshot → write theme → write CSS ---
  const currentTheme = readTheme(cwd);
  const newVersion = bumpVersion(currentTheme.version, result.versionBump);
  result.theme.version = newVersion;

  const snapshotPrompt = prompt || result.brief;

  saveSnapshot(
    {
      version: newVersion,
      timestamp: new Date().toISOString(),
      prompt: snapshotPrompt,
      brief: result.brief,
      changelog: result.changelog,
      theme: result.theme,
    },
    cwd,
  );

  writeTheme(result.theme, cwd);

  const outputPath = writeCSS(result.theme, cwd);

  if (piped) {
    process.stderr.write(`v${newVersion} (${result.versionBump} bump)\n`);
    process.stderr.write(`${result.brief}\n`);
    process.stderr.write(`${result.changelog}\n`);
    process.stderr.write(`CSS written to ${outputPath}\n`);
  } else {
    p.log.success(`${pc.bold(`v${newVersion}`)} (${result.versionBump} bump)`);
    p.log.info(pc.dim(result.brief));
    p.log.message(result.changelog);
    p.log.info(`CSS written to ${pc.cyan(outputPath)}`);

    p.outro(
      `Run ${pc.cyan("temper preview")} to see your theme in action.`,
    );
  }
}
