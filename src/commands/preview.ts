import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer, type ViteDevServer } from "vite";
import react from "@vitejs/plugin-react";
import * as p from "@clack/prompts";
import pc from "picocolors";
import { isInitialized, readTheme, getTemperDir } from "../lib/config.js";
import type { ThemeTokens } from "../constants/shadcn.js";

export async function preview() {
  const cwd = process.cwd();

  if (!isInitialized(cwd)) {
    p.log.error(
      `No .temper/ directory found. Run ${pc.cyan("temper init")} first.`,
    );
    process.exit(1);
  }

  p.intro(pc.bold("temper preview"));

  const theme = readTheme(cwd);
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const previewDir = path.join(__dirname, "../preview");

  // Check if preview app exists
  if (!fs.existsSync(previewDir)) {
    p.log.error("Preview app not found. This may be a build issue.");
    process.exit(1);
  }

  let server: ViteDevServer;

  try {
    server = await createServer({
      configFile: false,
      root: previewDir,
      plugins: [react()],
      server: {
        port: 4567,
        open: true,
        host: "localhost",
      },
      define: {
        __INITIAL_THEME__: JSON.stringify(theme),
      },
      optimizeDeps: {
        include: ["react", "react-dom"],
      },
    });

    await server.listen();

    const address = server.httpServer?.address();
    const port =
      typeof address === "object" && address ? address.port : 4567;

    p.log.success(`Preview running at ${pc.cyan(`http://localhost:${port}`)}`);
    p.log.info(
      `Watching for theme changes in ${pc.dim(".temper/theme.json")}`,
    );
    p.log.info(`Press ${pc.bold("Ctrl+C")} to stop.`);

    // Send initial theme
    sendThemeUpdate(server, theme);

    // Watch for theme changes
    const themePath = path.join(getTemperDir(cwd), "theme.json");
    let debounceTimer: ReturnType<typeof setTimeout>;

    fs.watchFile(themePath, { interval: 300 }, () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        try {
          const updatedTheme = readTheme(cwd);
          sendThemeUpdate(server, updatedTheme);
          p.log.info(
            `${pc.green("↻")} Theme updated to v${updatedTheme.version}`,
          );
        } catch {
          // Ignore read errors during file writes
        }
      }, 100);
    });

    // Keep alive until Ctrl+C
    process.on("SIGINT", async () => {
      fs.unwatchFile(themePath);
      await server.close();
      p.outro("Preview stopped.");
      process.exit(0);
    });
  } catch (error) {
    if (error instanceof Error) {
      p.log.error(`Failed to start preview server: ${error.message}`);
    }
    process.exit(1);
  }
}

function sendThemeUpdate(server: ViteDevServer, theme: ThemeTokens) {
  server.ws.send({
    type: "custom",
    event: "temper:theme-update",
    data: theme,
  });
}
