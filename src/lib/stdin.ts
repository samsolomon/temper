import { parseToolInput, type GenerateResult } from "./claude.js";

export async function readStdinTheme(): Promise<GenerateResult> {
  const chunks: Buffer[] = [];
  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }

  const raw = Buffer.concat(chunks).toString("utf-8").trim();
  if (!raw) {
    throw new Error("No input received on stdin.");
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error("Invalid JSON on stdin.");
  }

  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    throw new Error("Invalid JSON on stdin: expected an object.");
  }

  return parseToolInput(parsed as Record<string, unknown>);
}
