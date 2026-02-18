# Temper

CLI tool that uses Claude to iteratively reskin [shadcn/ui](https://ui.shadcn.com) components via CSS variables.

Describe a theme in plain English — Temper generates a complete set of OKLCH color tokens, applies them to your project, and lets you preview the result instantly.

## How It Works

1. **Describe** — Run `temper "warm sunset with earthy tones"` and Claude generates all 32 CSS variables for both light and dark modes
2. **Preview** — Run `temper preview` to see every shadcn/ui component rendered with your theme in a local browser app
3. **Iterate** — Run it again with a new prompt. Temper versions every change, so you can always roll back

Theme data flows through a simple pipeline:

```
prompt → Claude API → theme.json → globals.css
```

Every generation is stored as a versioned snapshot with a changelog, so your full design history is preserved.

## Install

```bash
# Install globally
npm install -g temper

# Or run directly
npx temper
```

Requires Node.js 18+ and an [Anthropic API key](https://console.anthropic.com/).

## Quick Start

```bash
# 1. Initialize in your shadcn/ui project
temper init

# 2. Generate a theme
temper "minimal dark academia with muted greens"

# 3. Preview it
temper preview
```

`temper init` will:
- Create a `.temper/` directory for config, theme data, and version history
- Detect your existing CSS file (or ask where to write output)
- Prompt for your Anthropic API key (or set `ANTHROPIC_API_KEY` / `TEMPER_API_KEY` as env vars)

## Commands

### `temper "<prompt>"`

Generate a theme from a natural language description.

```bash
temper "ocean blue with high contrast"
temper "make the primary color warmer"
temper "brutalist monochrome, sharp corners"
```

Claude generates all color tokens, suggests fonts, picks a border radius, and determines the appropriate version bump (patch/minor/major) based on the scope of changes.

### `temper init`

Scaffold the `.temper/` directory in your project. Detects common CSS file locations (`src/app/globals.css`, `app/globals.css`, etc.) and sets up the output path.

### `temper preview`

Start a local preview server at `http://localhost:4567` with 45+ shadcn/ui component showcases. The preview updates in real-time as you generate new themes — no refresh needed.

### `temper history`

Display a table of all theme versions with timestamps, prompts, and changelogs.

```
VERSION   DATE         PROMPT                    CHANGELOG
0.1.0     2025-01-15   warm sunset               Initial theme with warm orange...
0.2.0     2025-01-15   make it more muted         Reduced chroma across all...
```

### `temper rollback <version>`

Revert your theme to any previous version.

```bash
temper rollback 0.1.0
```

## API Key

Temper resolves your Anthropic API key in this order:

1. `TEMPER_API_KEY` environment variable
2. `ANTHROPIC_API_KEY` environment variable
3. Saved key in `~/.config/temper/config.json`
4. Interactive prompt (with option to save)

## CSS Variables

Temper generates values for all 32 shadcn/ui CSS variables in [OKLCH](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch) color space, plus border radius and font configuration.

<details>
<summary>Full variable list</summary>

| Variable | Description |
|----------|-------------|
| `--background` | Page background |
| `--foreground` | Default text color |
| `--card` | Card background |
| `--card-foreground` | Card text |
| `--popover` | Popover/dropdown background |
| `--popover-foreground` | Popover text |
| `--primary` | Primary brand color |
| `--primary-foreground` | Text on primary |
| `--secondary` | Secondary backgrounds |
| `--secondary-foreground` | Text on secondary |
| `--muted` | Muted/disabled backgrounds |
| `--muted-foreground` | Text on muted |
| `--accent` | Accent/hover states |
| `--accent-foreground` | Text on accent |
| `--destructive` | Danger/destructive actions |
| `--destructive-foreground` | Text on destructive |
| `--border` | Default borders |
| `--input` | Input field borders |
| `--ring` | Focus ring color |
| `--chart-1` through `--chart-5` | Data visualization colors |
| `--sidebar-background` | Sidebar background |
| `--sidebar-foreground` | Sidebar text |
| `--sidebar-primary` | Sidebar primary color |
| `--sidebar-primary-foreground` | Text on sidebar primary |
| `--sidebar-accent` | Sidebar accent/hover |
| `--sidebar-accent-foreground` | Text on sidebar accent |
| `--sidebar-border` | Sidebar borders |
| `--sidebar-ring` | Sidebar focus ring |

</details>

## Piped Input

For automation or integration with other tools, you can pipe theme JSON directly into temper, bypassing the Claude API:

```bash
cat theme.json | temper
```

The JSON should match the shape of Claude's tool output (`light`, `dark`, `versionBump`, `changelog`, `brief`, `radius`, `fonts`). Status output goes to stderr, keeping stdout clean.

## Project Structure

Running `temper init` creates:

```
your-project/
├── .temper/
│   ├── config.json          # Output path, model preference
│   ├── theme.json           # Current theme tokens
│   └── versions/            # Version snapshots
│       ├── 0.1.0.json
│       └── 0.2.0.json
└── src/app/globals.css      # Generated CSS output
```

## License

MIT
