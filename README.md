# @ars/design-system

> Swiss-inspired, zero-radius, Barlow-only CSS. Pure CSS, no build step, no JS.

A flat stylesheet bundle: design tokens as CSS custom properties plus a small set of component classes. Pairs with Tailwind CSS v4 and shadcn/ui via `--color-*` and semantic aliases.

## What's inside

- **Tokens** — 11 colour primitives (`--l-*`) + semantic aliases + Tailwind aliases (`--color-*`) + dark-mode block; Barlow type scale; named spacing rhythms; zero-radius enforcement; motion, elevation, and z-index scales; bundled font faces
- **Components (18)** — buttons, badges, inputs, forms, cards, tables, layout shell, charts, dialog, dropdown, tooltip, toast, tabs, pagination, breadcrumb, alert, empty-state, skeleton
- **Icons (68)** — curated Iconoir SVG sprite with size variants and loading animation
- **`reference.html`** — self-contained visual spec with built-in dark-mode toggle, opens in any browser
- **React wrappers** (`@ars/design-system-react`) — thin Radix UI primitives styled with the CSS classes; opt-in via the sibling package
- **Docs site** (`site/`) — Astro Starlight site with searchable docs, token references, and live React playgrounds

## Install

The package is not yet on a public registry. Two paths:

**Local link (current workflow)**

```json
{
  "dependencies": {
    "@ars/design-system": "file:../ars-design-system"
  }
}
```

**Future registry**

```sh
npm install @ars/design-system
```

> Registry (npm or GitHub Packages) will be announced. Until then, use the `file:` link above.

## Usage

One import in your app's CSS entry brings in tokens, fonts, components, and base reset:

```css
@import "@ars/design-system";
```

That's the whole API. Apply classes in markup:

```html
<button class="btn btn-default">Save changes</button>
<span class="badge badge-success">Active</span>
<h1 class="ds-heading">Dashboard overview</h1>
```

## What ships

### Components

| Class root         | Variants                                                       | File                    |
| ------------------ | -------------------------------------------------------------- | ----------------------- |
| `.btn`             | `default`, `outline`, `secondary`, `ghost`, `destructive`, `link` (sizes: `xs`, `sm`, `lg`) | `components/buttons.css` |
| `.badge`           | `default`, `success`, `warning`, `danger`, `muted`             | `components/badges.css`  |
| inputs             | text inputs, labels, field groups                              | `components/inputs.css`  |
| cards              | card surfaces and patterns                                     | `components/cards.css`   |
| tables             | data table rules and cell styles                               | `components/tables.css`  |
| layout             | `.sidebar`, `.topbar`, `.page-header` shell                    | `components/layout.css`  |
| charts             | chart container and axis styling                               | `components/charts.css`  |
| `.tabs`            | `.tabs-list`, `.tabs-trigger`, `.tabs-content` — pair with `@radix-ui/react-tabs` | `components/tabs.css` |
| `.pagination`      | `.pagination-item`, `.pagination-prev`/`next`, `.pagination-ellipsis` — `[aria-current="page"]` marks active | `components/pagination.css` |
| `.breadcrumb`      | `.breadcrumb-item`, `.breadcrumb-separator`, `.breadcrumb-current` — plain markup | `components/breadcrumb.css` |
| `.alert`           | `--info`, `--success`, `--warning`, `--danger` + `.alert-title`/`description`/`close` — inline message banner | `components/alert.css` |
| `.empty-state`     | `.empty-state-icon`/`title`/`description`/`action` — centered panel | `components/empty-state.css` |
| `.skeleton`        | `--text`, `--rect`, `--circle` — pulse, honors `prefers-reduced-motion` | `components/skeleton.css` |
| `.icon`            | base class + size variants (`xs`, `sm`, `md`, `lg`, `xl`) + `.icon-loading` spinner — use with Iconoir sprite | `components/icons.css` |

### Typography classes

| Class                  | Use                                          |
| ---------------------- | -------------------------------------------- |
| `.ds-display`          | Hero numerals, landing display type          |
| `.ds-display-red`      | Same scale, red emphasis                     |
| `.ds-heading`          | Section headings (32px / 700)                |
| `.ds-subheading`       | Lede / supporting (20px / 400)               |
| `.ds-body`             | Body copy (16px / 400)                       |
| `.ds-body-light`       | Muted body (16px / 300, mid)                 |
| `.ds-label`            | Micro-labels (9px / 700 uppercase, 0.16em)   |
| `.ds-card-num`         | Card metric numerals (40px / 500)            |
| `.ds-card-num-orange`  | Same, orange accent                          |
| `.ds-card-num-red`     | Same, red                                    |

### Token families

| File                    | Provides                                                                    |
| ----------------------- | --------------------------------------------------------------------------- |
| `tokens/colors.css`     | 11 primitives (`--l-white/paper/light/rule/mid/black/dark/orange/red/blue/green`), semantic aliases (`--primary`, `--background`, `--foreground`, `--card`, `--popover`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`, `--sidebar-*`), Tailwind aliases (`--color-*`), and a `:root[data-theme="dark"]` block re-pointing the semantic aliases |
| `tokens/typography.css` | `--font-sans` and `.ds-*` type scale                                        |
| `tokens/spacing.css`    | Tailwind 4px grid documentation + named rhythms (`--space-row` 8, `--space-stack` 12, `--space-shell` 24, `--space-page` 40, `--space-section` 64) |
| `tokens/radius.css`     | `--radius-*` all set to `0px`                                               |
| `tokens/fonts.css`      | `@font-face` declarations for bundled Barlow weights                        |
| `tokens/motion.css`     | `--motion-fast` (120ms), `--motion-base` (180ms), `--motion-slow` (240ms), `--ease-standard`, `--ease-emphasized`; `prefers-reduced-motion` zeroes them |
| `tokens/elevation.css`  | `--shadow-popover/overlay/modal` — overlay-only doctrine, no shadows on static surfaces |
| `tokens/z-index.css`    | `--z-dropdown` (1000) < `--z-sticky` < `--z-overlay` < `--z-modal` < `--z-popover` < `--z-toast` (1500) |

### Bundled font

Barlow ships with the package — five weights (300, 400, 500, 600, 700) as `woff2` under `fonts/`. They register automatically via `@font-face` in `tokens/fonts.css`. **No Google Fonts `<link>` is needed.** Barlow is licensed under SIL OFL 1.1; see `fonts/OFL.txt`.

### Icons

68 curated Iconoir icons ship as an SVG sprite (`icons/sprite.svg`). Copy the sprite once into your HTML, then reference via `<use href="#icon-name"/>`:

```html
<!-- Copy icons/sprite.svg contents once into your HTML -->
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <!-- sprite symbols -->
</svg>

<!-- Use throughout your app -->
<svg class="icon icon-md"><use href="#icon-search"/></svg>
<button class="btn btn-default">
  <svg class="icon icon-sm"><use href="#icon-check"/></svg>
  Save
</button>
```

**Size variants:**
- `.icon-xs` — 12px
- `.icon-sm` — 16px (default via `.icon`)
- `.icon-md` — 20px
- `.icon-lg` — 24px
- `.icon-xl` — 48px

**Animation:**
- `.icon-loading` — spinning animation, respects `prefers-reduced-motion`

Icons inherit `currentColor` from their parent, so they match surrounding text. See `icons/README.md` for the complete icon list and setup instructions.

## Framework setup

### Vite / Next.js / Astro / Remix

Import once in your root CSS file (`app.css`, `globals.css`, etc.):

```css
@import "@ars/design-system";
```

If your bundler can't resolve the bare specifier, point at the file:

```css
@import "../ars-design-system/index.css";
```

### Tailwind CSS v4

Tailwind v4 reads `@theme` from your CSS. The package exposes `--color-*` aliases that drop straight in:

```css
@import "tailwindcss";
@import "@ars/design-system";

@theme {
  /* Map Tailwind utility names to ARS primitives. */
  --color-paper:  var(--l-paper);
  --color-rule:   var(--l-rule);
  --color-mid:    var(--l-mid);
  --color-ink:    var(--l-black);
  --color-dark:   var(--l-dark);
  --color-light:  var(--l-light);
  --color-orange: var(--l-orange);
  --color-red:    var(--l-red);
  --color-blue:   var(--l-blue);
  --color-green:  var(--l-green);

  /* Zero-radius doctrine — must override every Tailwind default. */
  --radius:     0px;
  --radius-sm:  0px;
  --radius-md:  0px;
  --radius-lg:  0px;
  --radius-xl:  0px;
  --radius-2xl: 0px;
  --radius-3xl: 0px;
  --radius-4xl: 0px;

  --font-sans: "Barlow", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```

You can now use `bg-paper`, `text-ink`, `border-rule`, `text-orange`, `font-sans` etc. as Tailwind utilities. The complete copy-paste example lives at [`examples/tailwind-v4-setup.css`](./examples/tailwind-v4-setup.css).

### shadcn/ui pairing

Tokens are shadcn-compatible — `--primary`, `--primary-foreground`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`, plus the `--sidebar-*` family — all defined in `tokens/colors.css`. Bring your own shadcn components and they'll inherit the theme. No shadcn integration code ships in this package.

### Plain HTML

```html
<link rel="stylesheet" href="./node_modules/@ars/design-system/index.css">
```

Or, when linking locally:

```html
<link rel="stylesheet" href="../ars-design-system/index.css">
```

## React package — @ars/design-system-react

`@ars/design-system-react@0.1.0` is a sibling package of thin Radix UI wrappers that apply the matching ARS CSS classes. The CSS package is still the source of truth for styling — this package only adds behavior.

### Install

```bash
pnpm add @ars/design-system @ars/design-system-react
pnpm add @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tooltip @radix-ui/react-toast \
         @radix-ui/react-switch @radix-ui/react-checkbox @radix-ui/react-radio-group \
         @radix-ui/react-select @radix-ui/react-tabs
```

Every Radix package is a peer dep so you control the version.

### Setup

```css
/* in your app's main CSS */
@import "@ars/design-system";
```

```tsx
// in your root layout
import { ToastProvider, ToastViewport, TooltipProvider } from "@ars/design-system-react";

export default function Root({ children }) {
  return (
    <TooltipProvider>
      <ToastProvider>
        {children}
        <ToastViewport />
      </ToastProvider>
    </TooltipProvider>
  );
}
```

### Example: Dialog

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose, DialogActions } from "@ars/design-system-react";

<Dialog>
  <DialogTrigger asChild>
    <button className="btn btn-default">Open</button>
  </DialogTrigger>
  <DialogContent>
    <DialogTitle>Confirm subscription change</DialogTitle>
    <DialogDescription>You're moving from Monthly to Annual. New rate applies at next billing.</DialogDescription>
    <DialogActions>
      <DialogClose asChild>
        <button className="btn btn-ghost">Cancel</button>
      </DialogClose>
      <button className="btn btn-default">Confirm</button>
    </DialogActions>
  </DialogContent>
</Dialog>
```

### Example: Tabs

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@ars/design-system-react";

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="activity">Activity</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">…</TabsContent>
  <TabsContent value="activity">…</TabsContent>
  <TabsContent value="settings">…</TabsContent>
</Tabs>
```

### Available components

- **Dialog** — `Dialog`, `DialogTrigger`, `DialogContent`, `DialogTitle`, `DialogDescription`, `DialogClose`, `DialogActions`
- **DropdownMenu** — `DropdownMenu`, `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuItem` (`variant?: "danger"`), `DropdownMenuLabel`, `DropdownMenuSeparator`, `DropdownMenuShortcut`
- **Tooltip** — `TooltipProvider`, `Tooltip`, `TooltipTrigger`, `TooltipContent`, `TooltipArrow`
- **Toast** — `ToastProvider`, `ToastViewport`, `Toast` (`variant?: "success" | "warning" | "danger" | "info"`), `ToastTitle`, `ToastDescription`, `ToastAction`, `ToastClose`
- **Switch** / **Checkbox** — single-component wrappers
- **RadioGroup** — `RadioGroup`, `RadioGroupItem`
- **Select** — `Select`, `SelectTrigger`, `SelectValue`, `SelectContent`, `SelectItem`, `SelectGroup`, `SelectLabel`, `SelectSeparator`
- **Tabs** — `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`
- **Helper** — `cn` (className merge utility)

Total: 39 components + 2 types (`ToastVariant`, `ToastProps`).

### Design notes

- Wrappers are thin: each is a `React.forwardRef` that applies the matching ARS CSS class via the `cn` helper. No state, no behavior beyond what Radix provides.
- Bundle size: **ESM 10.93 KB / CJS 14.73 KB** — Radix is a peer dep so consumers control versions and avoid duplicate React contexts.
- No `"use client"` directive shipped — works in both client and server-component apps; consumers add `"use client"` to their own files as needed.

## Dark mode

Dark mode is opt-in via the `data-theme` attribute on `<html>`:

```html
<html data-theme="dark">
```

Set it once at app boot to match user preference. Sample:

```tsx
// in a top-level client effect or _app.tsx
useEffect(() => {
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (stored === "dark" || (!stored && prefersDark)) {
    document.documentElement.dataset.theme = "dark";
  }
}, []);
```

The dark palette inverts surface/text/chrome semantic tokens (`--background`, `--foreground`, `--card`, `--border`, `--ring`, etc.) and re-points `--primary`/`--primary-foreground`. Brand colours (`--l-orange`, `--l-red`, `--l-green`) keep their values — orange on `--l-black` is 6.07:1 (AA pass).

If you use Tailwind v4, the `--color-*` aliases do NOT re-override in dark mode by design. Use Tailwind's standard `dark:` variants for utility classes:

```html
<div class="bg-paper dark:bg-card text-ink dark:text-foreground">…</div>
```

## Documentation site

A full docs site lives in the `site/` workspace, built with [Astro Starlight](https://starlight.astro.build/). It includes install guides, token references, component pages, dark-mode docs, and live React component playgrounds (Astro islands hydrating real `@ars/design-system-react` components). To run it locally:

```sh
pnpm install
pnpm --filter @ars/design-system-docs dev
```

The site builds to `site/dist/` as static HTML + Pagefind search index — deployable to Vercel, Cloudflare Pages, or any static host.

## Visual reference

`reference.html` at the package root is a self-contained spec page — open it directly in a browser. It inlines every token and component sample and does **not** import `index.css`, so it works as a frozen visual reference even if the CSS changes.

**View online:**  
https://anselmo.github.io/ars-design-system/reference.html

**View locally:**
```sh
open node_modules/@ars/design-system/reference.html
```

`reference.html` and the docs site are complementary: `reference.html` is a frozen, single-file snapshot you can attach to an email or open offline; the docs site is the living reference with search, navigation, and interactive examples.

## Design principles

- **Zero radius.** Every `--radius-*` is `0px`. The only exceptions are genuine circles (radio dot, switch thumb, skeleton circle) which use `border-radius: 50%`.
- **Barlow only.** Hierarchy comes from weight and scale, never font family.
- **11 colour primitives.** All UI colour traces back to the `--l-*` palette.
- **Hierarchy through surface contrast.** White / paper / light / rule layers do the work, not colour variety.
- **Overlay-only shadows.** `--shadow-popover/overlay/modal` are reserved for floating surfaces (dropdown, toast, dialog, tooltip). Static surfaces (cards, sidebars, tables) get borders, not shadows.
- **Uppercase bold micro-type.** Buttons (11px, 0.06em tracking) and labels (9px, 0.16em tracking).

## Conventions

- Typography classes use the `ds-` prefix (`.ds-display`, `.ds-heading`, `.ds-label`).
- Component classes are flat (`.btn-default`, `.badge-success`, `.sidebar-item`); modifiers use BEM-like double dash (`.toast--success`, `.input--error`, `.skeleton--circle`).
- Colour primitives use `--l-` prefix; Tailwind aliases use `--color-` prefix; semantic tokens are unprefixed (`--primary`, `--border`, `--ring`).
- **Primitives vs semantic aliases.** When extending or forking ARS, use **semantic aliases** (`var(--border)`, `var(--background)`, `var(--foreground)`, `var(--ring)`) for role-based properties — they re-point in dark mode. Use **primitives** (`var(--l-orange)`, `var(--l-rule)`) only when the *value* matters (brand accent fills, swatches, status indicators). A `border-color: var(--l-rule)` looks correct in light mode but renders near-white on black in dark mode; the right form is `border-color: var(--border)`.

## Versioning & support

- Version: **1.0.1**
- Internal package — license: `UNLICENSED`
- Bundled Barlow font: SIL OFL 1.1 (`fonts/OFL.txt`)
- Bundled icons: Iconoir (MIT license)
