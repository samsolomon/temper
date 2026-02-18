import * as p from "@clack/prompts";
import pc from "picocolors";
import { isInitialized, readConfig, readTheme, writeTheme, resolveApiKey, writeGlobalConfig, readGlobalConfig } from "../lib/config.js";
import { generateTheme } from "../lib/claude.js";
import { bumpVersion, saveSnapshot } from "../lib/version.js";
import { writeCSS } from "../lib/theme.js";

export async function generate(prompt: string) {
  const cwd = process.cwd();

  if (!isInitialized(cwd)) {
    p.log.error(
      `No .temper/ directory found. Run ${pc.cyan("temper init")} first.`,
    );
    process.exit(1);
  }

  // Resolve API key
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
    const result = await generateTheme(
      apiKey,
      prompt,
      currentTheme,
      config.model,
      () => {
        // Progress indicator already handled by spinner
      },
    );

    spinner.stop("Theme generated.");

    // Bump version
    const newVersion = bumpVersion(currentTheme.version, result.versionBump);
    result.theme.version = newVersion;

    // Save snapshot
    saveSnapshot(
      {
        version: newVersion,
        timestamp: new Date().toISOString(),
        prompt,
        brief: result.brief,
        changelog: result.changelog,
        theme: result.theme,
      },
      cwd,
    );

    // Update current theme
    writeTheme(result.theme, cwd);

    // Write CSS
    const outputPath = writeCSS(result.theme, cwd);

    // Display results
    p.log.success(`${pc.bold(`v${newVersion}`)} (${result.versionBump} bump)`);
    p.log.info(pc.dim(result.brief));
    p.log.message(result.changelog);
    p.log.info(`CSS written to ${pc.cyan(outputPath)}`);

    p.outro(
      `Run ${pc.cyan("temper preview")} to see your theme in action.`,
    );
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
