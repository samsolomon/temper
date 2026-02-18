# Temper

CLI tool that uses Claude to iteratively reskin shadcn/ui components via CSS variables.

## Build & Dev

```bash
pnpm build          # Build CLI + copy preview app to dist/
pnpm dev            # Watch mode (tsup only, no preview copy)
pnpm typecheck      # TypeScript type checking
```

## Architecture

- **Entry**: `src/index.ts` — Commander.js CLI with 5 commands
- **Commands**: `src/commands/` — init, generate, preview, history, rollback
- **Lib**: `src/lib/` — claude (API), theme (CSS gen), version (semver), config (I/O)
- **Constants**: `src/constants/shadcn.ts` — 32 CSS variable names, default OKLCH values, all TypeScript types
- **Preview**: `src/preview/` — React + Vite app served via programmatic Vite API
  - Uses `@iconify/react` in API mode for icons (fetched from Iconify CDN, zero bundle cost)
  - Icons use `lucide:*` prefix by default (shadcn/ui convention), but any of 200+ Iconify sets work
  - Usage: `<Icon icon="lucide:chevron-left" width="16" height="16" />`

## Key Patterns

- All dependencies are external in the tsup bundle (resolved at runtime via node_modules)
- Preview app is copied to `dist/preview/` at build time (not bundled)
- Theme data flows: theme.json → CSS generation → globals.css output
- Preview gets live updates via Vite WebSocket custom events
- Preview icons require internet (Iconify CDN); they fail silently offline
- API key resolution: TEMPER_API_KEY → ANTHROPIC_API_KEY → ~/.config/temper/config.json → interactive prompt

## Testing

```bash
node dist/index.js --help         # Verify CLI works
node dist/index.js init           # Scaffold .temper/ directory
node dist/index.js "warm sunset"  # Generate theme (needs API key)
node dist/index.js preview        # Start preview server on :4567
node dist/index.js history        # Show version table
node dist/index.js rollback 0.1.0 # Revert to version
```

## Conventions

- ESM only (`"type": "module"`)
- All imports use `.js` extension (TypeScript ESM convention)
- OKLCH color space for all theme values
- Clack prompts for interactive CLI UI, picocolors for terminal formatting
