import { defineConfig } from "tsup";
import { dependencies } from "./package.json";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  target: "node18",
  outDir: "dist",
  clean: true,
  splitting: false,
  sourcemap: true,
  dts: false,
  // Mark all dependencies as external — they'll be resolved at runtime via node_modules
  external: Object.keys(dependencies),
  banner: {
    js: "#!/usr/bin/env node",
  },
});
