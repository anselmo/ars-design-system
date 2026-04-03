# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**@ars/design-system** — A CSS-only design system for the Rapid Loyalty platform. Swiss-inspired, zero-radius, Barlow typeface. Built to pair with shadcn/ui + Tailwind CSS v4.

This is a **pure CSS package** — no build step, no JavaScript, no framework. The entry point is `index.css` which imports all tokens and components via `@import`.

## Architecture

```
index.css              ← Main entry, imports everything + base reset
tokens/                ← Design tokens as CSS custom properties on :root
  colors.css           ← 11 primitives (--l-*) + semantic aliases + Tailwind aliases (--color-*)
  typography.css       ← Barlow type scale classes (.ds-display, .ds-heading, .ds-label, etc.)
  spacing.css          ← Spacing documentation (uses Tailwind's 4px grid, no custom properties)
  radius.css           ← All radii forced to 0px — no exceptions
components/            ← Component CSS classes
  buttons.css          ← .btn + 6 variants + 4 sizes
  badges.css           ← .badge + 5 status variants (default/success/warning/danger/muted)
  inputs.css           ← Form input styles
  cards.css            ← Card patterns
  tables.css           ← Data table styles
  layout.css           ← Shell layout: sidebar, topbar, page-header
  charts.css           ← Chart styling
reference.html         ← Self-contained visual reference page (all tokens inlined, not importing index.css)
```

## Design Principles

- **Zero radius everywhere** — all `--radius-*` tokens are `0px`, no rounded corners
- **Barlow is the only typeface** — hierarchy comes from weight and scale, never from font family
- **11 colour primitives** — prefixed `--l-*` (e.g. `--l-paper`, `--l-rule`, `--l-orange`); semantic tokens alias these
- **Hierarchy through surface contrast** — white/paper/light/rule layers, not colour variety
- **Uppercase bold micro-type** for buttons (11px, 0.06em tracking) and labels (9px, 0.16em tracking)

## Conventions

- CSS class names use `ds-` prefix for typography (`.ds-display`, `.ds-heading`, `.ds-label`) and flat names for components (`.btn-default`, `.badge-success`, `.sidebar-item`)
- Colour tokens: primitives use `--l-` prefix, Tailwind aliases use `--color-` prefix, semantic tokens are unprefixed (`--primary`, `--border`, etc.)
- Each CSS file has a header comment block documenting usage guidelines and token references — keep these updated when modifying tokens
- `reference.html` is a standalone visual spec — it duplicates all styles inline and does NOT import from the CSS files
