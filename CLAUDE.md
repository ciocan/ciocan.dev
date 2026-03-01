# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site for ciocan.dev, built with Astro 5, React 19, Tailwind CSS 4, and deployed on Vercel.

## Commands

```bash
bun dev          # Start dev server (localhost:4321)
bun run build    # Production build to ./dist/
bun run preview  # Preview production build
bun run lint     # Check code quality (Biome)
bun run lint:fix # Fix lint issues (biome check --write .)
bun run fmt      # Format code (biome format --write .)
```

## Architecture

**Framework:** Astro with MDX content collections, React integration, and Vercel adapter.

**Routing:** File-based via `src/pages/`.

**Content Collections:** Defined in `src/content/config.ts` with Zod schemas. One collection:
- `projects/` — Portfolio entries with name, title, url, year, type, order

**Layout:** Single `src/layouts/Layout.astro` handles SEO (OG tags, Twitter cards, canonical URLs), font preloading (Geist), dark mode init script, and Vercel analytics.

**Styling:** Tailwind CSS 4 with `@tailwindcss/vite` plugin. Custom utilities (`menu-item`, `menu-item-active`, `project-description`) in `src/styles/global.css`. Dark mode via class on `<html>` element.

**Path alias:** `@/` maps to `src/` (configured in tsconfig.json and astro.config.mjs).

**Icons:** astro-icon with Iconify packages (lucide, mdi).

**Markdown processing:** Custom `externalAnchorPlugin` in `src/lib/utils.ts` adds `target="_blank"` to external links. Shiki syntax highlighting with catppuccin themes.

## Key Files

- `astro.config.mjs` — Integrations, markdown plugins, Vercel adapter config
- `src/lib/constants.ts` — Site metadata and social links
- `src/lib/utils.ts` — `cn()` helper, remark plugin
- `src/content/config.ts` — Zod collection schemas

## Code Style

- **Formatter/Linter:** Biome (not ESLint/Prettier for JS/TS). Double quotes, 2-space indent, 100-char line width.
- **TypeScript:** Strict mode. All components use TypeScript.
- **Components:** Astro components (.astro) with props destructured in frontmatter.
- **After every code change**, run `bun run lint` and fix lint issues and `bun run fmt` to format.
