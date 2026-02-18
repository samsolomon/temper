import { Command } from "commander";
import { init } from "./commands/init.js";
import { generate } from "./commands/generate.js";
import { preview } from "./commands/preview.js";
import { history } from "./commands/history.js";
import { rollback } from "./commands/rollback.js";

const program = new Command();

program
  .name("temper")
  .description(
    "CLI tool that uses Claude to iteratively reskin shadcn/ui components via CSS variables",
  )
  .version("0.1.0");

// Default command: temper "<prompt>"
program
  .argument("[prompt]", "Theme prompt for Claude")
  .action((prompt: string | undefined) => {
    if (prompt) return generate(prompt);
    program.help();
  });

// temper init
program
  .command("init")
  .description("Initialize Temper in the current project")
  .action(() => init());

// temper preview
program
  .command("preview")
  .description("Start local preview server with component showcase")
  .action(() => preview());

// temper history
program
  .command("history")
  .description("Show version history of theme changes")
  .action(() => history());

// temper rollback <version>
program
  .command("rollback <version>")
  .description("Revert theme to a previous version")
  .action((version: string) => rollback(version));

program.parse();
