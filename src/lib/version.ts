import fs from "node:fs";
import path from "node:path";
import { getTemperDir } from "./config.js";
import type { VersionSnapshot } from "../constants/shadcn.js";

export type VersionBump = "major" | "minor" | "patch";

/** Parse semver string into [major, minor, patch] */
export function parseSemver(version: string): [number, number, number] {
  const parts = version.split(".").map(Number);
  return [parts[0] || 0, parts[1] || 0, parts[2] || 0];
}

/** Bump a semver string */
export function bumpVersion(current: string, bump: VersionBump): string {
  const [major, minor, patch] = parseSemver(current);
  switch (bump) {
    case "major":
      return `${major + 1}.0.0`;
    case "minor":
      return `${major}.${minor + 1}.0`;
    case "patch":
      return `${major}.${minor}.${patch + 1}`;
  }
}

/** Get the versions directory path */
export function getVersionsDir(cwd = process.cwd()): string {
  return path.join(getTemperDir(cwd), "versions");
}

/** Save a version snapshot */
export function saveSnapshot(
  snapshot: VersionSnapshot,
  cwd = process.cwd(),
): void {
  const dir = getVersionsDir(cwd);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, `${snapshot.version}.json`),
    JSON.stringify(snapshot, null, 2) + "\n",
  );
}

const SEMVER_RE = /^\d+\.\d+\.\d+$/;

/** Read a specific version snapshot */
export function readSnapshot(
  version: string,
  cwd = process.cwd(),
): VersionSnapshot | null {
  if (!SEMVER_RE.test(version)) return null;
  const filePath = path.join(getVersionsDir(cwd), `${version}.json`);
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return null;
  }
}

/** List all version snapshots sorted by version */
export function listSnapshots(cwd = process.cwd()): VersionSnapshot[] {
  const dir = getVersionsDir(cwd);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
  const snapshots: VersionSnapshot[] = [];

  for (const f of files) {
    try {
      const data = JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8"));
      snapshots.push(data);
    } catch {
      // Skip corrupted snapshot files
    }
  }

  return snapshots.sort((a, b) => {
    const [aMaj, aMin, aPat] = parseSemver(a.version);
    const [bMaj, bMin, bPat] = parseSemver(b.version);
    if (aMaj !== bMaj) return aMaj - bMaj;
    if (aMin !== bMin) return aMin - bMin;
    return aPat - bPat;
  });
}
