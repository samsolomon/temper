import * as p from "@clack/prompts";
import pc from "picocolors";
import { isInitialized } from "../lib/config.js";
import { listSnapshots } from "../lib/version.js";

export async function history() {
  const cwd = process.cwd();

  if (!isInitialized(cwd)) {
    p.log.error(
      `No .temper/ directory found. Run ${pc.cyan("temper init")} first.`,
    );
    process.exit(1);
  }

  const snapshots = listSnapshots(cwd);

  if (snapshots.length === 0) {
    p.log.info("No versions found.");
    return;
  }

  p.intro(pc.bold("temper history"));

  // Print header
  const versionWidth = 10;
  const dateWidth = 20;
  const promptWidth = 35;

  console.log(
    pc.dim(
      `${"VERSION".padEnd(versionWidth)}${"DATE".padEnd(dateWidth)}${"PROMPT".padEnd(promptWidth)}CHANGELOG`,
    ),
  );
  console.log(pc.dim("─".repeat(90)));

  for (const snap of snapshots) {
    const date = new Date(snap.timestamp).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const promptSummary =
      snap.prompt.length > 32
        ? snap.prompt.substring(0, 32) + "..."
        : snap.prompt;

    const changelogSummary =
      snap.changelog.length > 40
        ? snap.changelog.substring(0, 40) + "..."
        : snap.changelog;

    console.log(
      `${pc.cyan(snap.version.padEnd(versionWidth))}${date.padEnd(dateWidth)}${promptSummary.padEnd(promptWidth)}${pc.dim(changelogSummary)}`,
    );
  }

  console.log();
  p.outro(
    `${snapshots.length} version${snapshots.length === 1 ? "" : "s"}. Run ${pc.cyan("temper rollback <version>")} to revert.`,
  );
}
