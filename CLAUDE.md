# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project Overview

**ARS Design System** — a Swiss-inspired, zero-radius, Barlow-typeface design system. Two packages live in this repo as `pnpm` workspaces:

1. **`@ars/design-system`** (root) — pure CSS package. Tokens + components + bundled font + a self-contained `reference.html` spec. No build step, no JavaScript. Framework-agnostic; works in Vue/Svelte/Astro/HTML/email/anywhere.
2. **`@ars/design-system-react`** (`react/`) — thin Radix UI wrappers (`React.forwardRef`) that apply matching ARS CSS classes. Built with `tsup` (ESM + CJS + d.ts). Radix is a peer dep so consumers control versions and avoid duplicate React contexts.

A docs site lives in **`site/`** (Astro Starlight) for browsable documentation + interactive React playgrounds via Astro islands.

## Architecture

```
package.json                ← @ars/design-system root manifest
pnpm-workspace.yaml         ← lists root + react/ + site/
index.css                   ← Main CSS entry; @imports tokens then components

tokens/                     ← Design tokens as CSS custom properties on :root
  fonts.css                 ← @font-face for the bundled Barlow weights (imported FIRST)
  colors.css                ← 11 primitives (--l-*) + semantic aliases + Tailwind aliases (--color-*) + dark-mode block
  typography.css            ← Barlow type scale classes (.ds-*)
  spacing.css               ← Tailwind 4px grid + named rhythms (--space-row/stack/shell/page/section)
  radius.css                ← All --radius-* set to 0px — no exceptions
  motion.css                ← --motion-fast/base/slow + --ease-standard/emphasized + reduced-motion guard
  elevation.css             ← --shadow-popover/overlay/modal — overlay-only doctrine
  z-index.css               ← --z-dropdown < sticky < overlay < modal < popover < toast

components/                 ← Component CSS (18 files, all theme-aware via semantic aliases)
  buttons.css               ← .btn + 6 variants + 4 sizes + states (focus/disabled/active/loading)
  badges.css                ← .badge + 5 status variants
  inputs.css                ← .input-underline / .input-bordered + .field wrapper + .input--error
  forms.css                 ← .textarea, .select, .checkbox, .radio, .switch, .file-input (Radix data-state interop)
  cards.css                 ← .card patterns
  tables.css                ← .table styles
  layout.css                ← Shell: .sidebar / .topbar / .page-header
  charts.css                ← Chart container + axis tokens
  dialog.css                ← .dialog-overlay / -content / -title / -description / -close / -actions (Radix Dialog)
  dropdown.css              ← .dropdown-content / -item (+ --danger) / -label / -separator / -shortcut (Radix DropdownMenu)
  tooltip.css               ← .tooltip-content / -arrow (Radix Tooltip — inverted contrast)
  toast.css                 ← .toast-viewport / .toast (+ --success/warning/danger/info) / -title / -description / -action / -close (Radix Toast)
  tabs.css                  ← .tabs / -list / -trigger / -content (Radix Tabs)
  pagination.css            ← .pagination / -item / -prev / -next / -ellipsis ([aria-current="page"])
  breadcrumb.css            ← .breadcrumb / -item / -separator / -current
  alert.css                 ← .alert + 4 variants + -title / -description / -close
  empty-state.css           ← .empty-state + -icon / -title / -description / -action
  skeleton.css              ← .skeleton + --text/rect/circle (pulse, prefers-reduced-motion guard)

fonts/                      ← Bundled Barlow woff2 (300/400/500/600/700) + OFL.txt
examples/                   ← tailwind-v4-setup.css + README — canonical Tailwind v4 @theme example
reference.html              ← Self-contained visual spec (inlines ALL CSS + dark-mode toggle)

react/                      ← @ars/design-system-react workspace
  src/
    cn.ts                   ← 5-line className helper
    index.ts                ← Barrel re-exports
    primitives/
      Dialog.tsx, DropdownMenu.tsx, Tooltip.tsx, Toast.tsx,
      Switch.tsx, Checkbox.tsx, RadioGroup.tsx, Select.tsx, Tabs.tsx
  package.json              ← peerDependencies: react, react-dom, @ars/design-system, 9 @radix-ui/* packages
  tsup.config.ts            ← ESM + CJS + d.ts; React/Radix marked external
  tsconfig.json

site/                       ← @ars/design-system-docs workspace (Astro Starlight)
  src/content/docs/         ← MDX content (index, install, dark-mode, tokens/*, components/*)
  src/components/           ← React playground islands (e.g. DialogDemo.tsx)
  src/styles/ars-theme.css  ← Re-points Starlight's --sl-color-* to ARS tokens
  astro.config.mjs
```

## Design Principles

- **Zero radius everywhere** — every `--radius-*` is `0px`. The only exceptions are genuine circles (radio dot, switch thumb, skeleton circle) which use `border-radius: 50%`.
- **Barlow only** — hierarchy comes from weight and scale, never from font family. Five woff2 weights (300/400/500/600/700) ship with the package; no Google Fonts `<link>` required.
- **11 colour primitives** — `--l-*` prefix. Semantic aliases (`--background`, `--border`, `--ring`, `--primary`, etc.) layer on top. **In component CSS, prefer aliases over primitives** — primitives bypass dark-mode theme switching.
- **Hierarchy through surface contrast** — white → paper → light → rule layers do the boundary work, not colour variety.
- **Overlay-only shadows** — `--shadow-popover/overlay/modal` are reserved for floating surfaces (dropdown, toast, dialog, tooltip). Static surfaces (cards, sidebars, tables) get borders, not shadows.
- **Uppercase bold micro-type** — buttons (11px / 700 / 0.06em tracking) and labels (9px / 700 / 0.16em tracking).
- **Vertical-agnostic** — never reference "Travel", "Loyalty", or "Platform" in any DS material. ARS is a generic design system, not tied to any vertical.

## Conventions

### Naming

- **Typography classes**: `ds-` prefix (`.ds-display`, `.ds-heading`, `.ds-label`).
- **Component classes**: flat kebab-case (`.btn-default`, `.badge-success`, `.sidebar-item`, `.dialog-content`).
- **Modifiers**: BEM-like double-dash (`.toast--success`, `.alert--danger`, `.input--error`, `.skeleton--circle`).
- **Colour tokens**:
  - Primitives: `--l-*` prefix (`--l-rule`, `--l-orange`).
  - Semantic aliases: unprefixed (`--background`, `--border`, `--ring`, `--primary`).
  - Tailwind aliases: `--color-*` prefix (`--color-paper`, `--color-orange`).

### Primitives vs semantic aliases (LOAD-BEARING)

In component CSS, the rule is:

> Use the **primitive** when the *value* matters (a status dot that must be specifically `--l-green`, a chart stroke that's the brand orange, a swatch demonstrating the primitive itself).
>
> Use the **semantic alias** when the *role* matters (a border, a background, a foreground, a focus ring).

Concretely:

| Wrong (bypasses dark mode) | Right (theme-aware) |
|---|---|
| `border-color: var(--l-rule)` | `border-color: var(--border)` |
| `background: var(--l-white)` | `background: var(--background)` |
| `color: var(--l-black)` | `color: var(--foreground)` |
| `outline: 2px solid var(--l-black)` (focus) | `outline: 2px solid var(--ring)` |
| `background: var(--l-paper)` (hover surface) | `background: var(--secondary)` or `var(--muted)` |

Primitives are still correct in `reference.html`'s swatch demos (those literally show the primitive's value) and for brand-colour fills (orange, red, green, blue) where there's no semantic equivalent.

### Theme switching

- Light mode is the default `:root`.
- Dark mode is opt-in via `<html data-theme="dark">`.
- Only **semantic aliases** re-point inside `:root[data-theme="dark"]`. Primitives never re-point.
- Tailwind aliases (`--color-*`) intentionally don't re-point — Tailwind users use `dark:` variants for utilities.

### Dark-mode border doctrine

In dark mode, `--border` collapses to `var(--l-dark)` (= `#1A1A1A`, ~1.4:1 on `--l-black`). Borders are ornamental hairlines that vanish inside cards/popovers; the surface contrast (`--l-dark` vs `--l-black`) carries the boundary work. `--input` is held slightly stronger (`#2A2A2A`, ~1.9:1) so input controls retain touch-affordance. If you find yourself tempted to bump these values back up, revisit the comment block in `tokens/colors.css` first.

### File header comments

Each CSS file has a header block documenting its tokens and intent. Keep them in sync when modifying. Where comments document specific contrast ratios or design decisions, update both the comment and any cross-references in `reference.html` and `tokens/colors.css`.

## `reference.html` is the living visual contract

`reference.html` inlines every token and component sample so it opens standalone in any browser (no `index.css` import). It includes a `[data-theme="dark"]` toggle (the only `<script>` in the file). Every PR that adds a token, component, or state must update `reference.html` to demo it.

## Workspace scripts

```sh
pnpm install                                  # install all workspaces
pnpm --filter @ars/design-system-react build  # tsup build for React package
pnpm --filter @ars/design-system-docs dev     # Astro Starlight docs dev server
pnpm --filter @ars/design-system-docs build   # static docs site build
```

## Versioning

- `@ars/design-system` — `1.0.0` (UNLICENSED; bundled Barlow under SIL OFL 1.1)
- `@ars/design-system-react` — `0.1.0` (UNLICENSED)
- `@ars/design-system-docs` — `0.1.0` (private workspace, not published)

The package is not yet on a public registry. Local consumers use `file:` linking; published distribution will be GitHub Packages or npm public — TBD.
