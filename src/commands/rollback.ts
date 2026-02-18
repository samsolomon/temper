import * as p from "@clack/prompts";
import pc from "picocolors";
import { isInitialized, writeTheme } from "../lib/config.js";
import { readSnapshot, listSnapshots } from "../lib/version.js";
import { writeCSS } from "../lib/theme.js";

export async function rollback(version: string) {
  const cwd = process.cwd();

  if (!isInitialized(cwd)) {
    p.log.error(
      `No .temper/ directory found. Run ${pc.cyan("temper init")} first.`,
    );
    process.exit(1);
  }

  const snapshot = readSnapshot(version, cwd);

  if (!snapshot) {
    const available = listSnapshots(cwd);
    p.log.error(`Version ${pc.cyan(version)} not found.`);
    if (available.length > 0) {
      p.log.info(
        `Available versions: ${available.map((s) => pc.cyan(s.version)).join(", ")}`,
      );
    }
    process.exit(1);
  }

  p.intro(pc.bold(`temper rollback → v${version}`));

  p.log.info(pc.dim(snapshot.brief));

  const confirmed = await p.confirm({
    message: `Roll back to v${version}? This will overwrite the current theme.`,
    initialValue: true,
  });

  if (p.isCancel(confirmed) || !confirmed) {
    p.outro("Rollback cancelled.");
    return;
  }

  // Restore theme
  writeTheme(snapshot.theme, cwd);

  // Regenerate CSS
  const outputPath = writeCSS(snapshot.theme, cwd);

  p.log.success(`Restored theme to v${version}`);
  p.log.info(pc.dim(snapshot.brief));
  p.log.info(`CSS written to ${pc.cyan(outputPath)}`);

  p.outro("Theme rolled back successfully.");
}
