# Dark Mode — Design Spec

## Overview

Add a dark mode theme to the Rapid Loyalty Design System. The dark palette uses warm-tinted darks that echo the light mode's warm `--l-paper` character, maintaining Swiss-style sharpness (zero radius, Barlow typeface, uppercase micro-type).

## Activation Mechanism

Both `prefers-color-scheme` media query AND `.dark` class toggle:

```css
/* Auto: follows OS preference */
@media (prefers-color-scheme: dark) {
  :root { /* dark token overrides */ }
}

/* Manual: class on <html> overrides media query.
   MUST appear AFTER the @media block in source order.
   Both selectors have specificity (0,1,0), so cascade
   order determines precedence. */
.dark { /* same dark token overrides */ }
```

Consumers can rely on OS preference alone, or toggle `.dark` on the document element for manual control.

## Dark Palette — Warm Tinted

All `--l-*` primitives are reassigned in dark mode. Accent colours (orange, red, green) stay unchanged — they already have sufficient contrast on dark backgrounds.

| Token         | Light Value | Dark Value | Role in Dark Mode              |
|---------------|-------------|------------|--------------------------------|
| `--l-white`   | `#FFFFFF`   | `#12110F`  | Main background                |
| `--l-paper`   | `#F7F6F2`   | `#1A1816`  | Sidebar, secondary surface     |
| `--l-light`   | `#EFEFEB`   | `#23211E`  | Hover fills, accent background |
| `--l-rule`    | `#D8D8D4`   | `#33302C`  | Borders, dividers              |
| `--l-mid`     | `#6B6B6B`   | `#8A8785`  | Secondary text, labels         |
| `--l-black`   | `#0D0D0D`   | `#F0EEEB`  | Primary text                   |
| `--l-dark`    | `#1A1A1A`   | `#E5E3DF`  | Distinct from `--l-black` — used for surfaces that were dark in light mode |
| `--l-orange`  | `#FE561A`   | `#FE561A`  | Unchanged                      |
| `--l-red`     | `#D91C18`   | `#D91C18`  | Unchanged                      |
| `--l-blue`    | `#F4FCFF`   | `#0F1A1F`  | Info tint (darkened)           |
| `--l-green`   | `#55C251`   | `#55C251`  | Unchanged                      |

Tailwind aliases (`--color-*`) mirror the same reassignments, including `--color-ink` → `#F0EEEB`. Note: there is no `--color-white` alias in the current system — this is unchanged.

All semantic tokens (`--primary`, `--background`, `--border`, `--sidebar-*`, etc.) continue to reference the `--l-*` primitives, so they inherit dark values automatically. This includes sidebar tokens like `--sidebar-primary-foreground` (references `--l-white` → becomes `#12110F` in dark mode, correct since sidebar active items use `--l-light` bg which is `#23211E`).

## Component Adaptations

### Buttons Requiring Explicit Dark Overrides

Three button variants need explicit dark-mode overrides because they use hardcoded values or need adjusted opacity:

**`.btn-default`** — Light mode uses `--l-black` bg which becomes `#F0EEEB` (light) in dark mode. Instead, override to warm light gray:
- Dark bg: `#E0DEDA`, dark text: `#12110F`
- Dark hover: `#F0EEEB` (hardcoded, consistent with light-mode approach of hardcoded hover)

**`.btn-outline`** — Light mode uses `background: var(--l-white)` which becomes `#12110F` in dark mode (same as page bg). Override to `transparent` so the outline button has no fill on dark surfaces.
- Dark hover: `var(--l-light)` (`#23211E`)

**`.btn-destructive`** — Light mode uses `rgba(217,28,24,0.1)`. Increase to `rgba(217,28,24,0.15)` in dark mode for visibility on dark backgrounds.
- Dark hover: `rgba(217,28,24,0.25)`

### Variants That Work Automatically via Tokens

| Variant       | Dark Background             | Dark Text/Border              | Notes |
|---------------|-----------------------------|-------------------------------|-------|
| secondary     | `--l-paper` (`#1A1816`)     | `--l-black` (`#F0EEEB`)      | Auto  |
| ghost         | transparent                 | `--l-black` (`#F0EEEB`)      | Auto  |
| link          | transparent                 | `--l-black` (`#F0EEEB`)      | Auto  |

Hover states for ghost (`var(--l-paper)` → `#1A1816`) and secondary (`var(--l-light)` → `#23211E`) are subtle but intentional — matches the Swiss understated aesthetic. These have sufficient contrast against `#12110F` main bg.

### Shell Layout

Two-tone preserved: sidebar `#1A1816` (paper) vs main area `#12110F` (white). Border between them uses `#33302C` (rule).

### Badges, Inputs, Tables, Cards, Charts

These all reference `--l-*` tokens, so they inherit dark values automatically. No component-level overrides needed.

## File Changes

### `tokens/colors.css`
Add dark mode block reassigning all `--l-*` primitives and `--color-*` aliases. Structure:
1. `@media (prefers-color-scheme: dark) { :root { ... } }` — first
2. `.dark { ... }` — after, so it wins in cascade

### `components/buttons.css`
Add dark overrides for three variants:
- `.btn-default` — bg, color, hover
- `.btn-outline` — bg, hover
- `.btn-destructive` — bg, hover

Use `@media (prefers-color-scheme: dark)` + `.dark` pattern matching `colors.css`.

### `reference.html`
- Duplicate dark token values in inline `<style>` (same media query + `.dark` pattern)
- Add a small inline `<script>` for a dark/light toggle button (exception to the "no JS" rule — this is the reference page only, not the consumable CSS package)
- Add dark mode component showcase section

## What Does NOT Change

- Zero radius — unchanged
- Typography classes — unchanged (they don't reference colours)
- Spacing tokens — unchanged
- File structure — no new files, only modifications to existing ones
