# Examples — Tailwind v4 integration

This folder shows how to wire `@ars/design-system` into a Tailwind CSS v4 project.

## File

- [`tailwind-v4-setup.css`](./tailwind-v4-setup.css) — copy-paste this as your app's main CSS entry (e.g. `src/app.css`).

## Why CSS-first config

Tailwind v4 dropped `tailwind.config.js` as the primary configuration surface. Theme tokens are now declared in CSS via the `@theme` directive, and Tailwind generates utility classes from any `--color-*`, `--font-*`, `--radius-*`, `--spacing-*`, etc. it finds there. **You do not need a `tailwind.config.js` for this setup.**

## Import order matters

```css
@import "tailwindcss";        /* 1. Tailwind first */
@import "@ars/design-system"; /* 2. DS tokens + components */
@theme { /* DS → Tailwind */ }/* 3. Re-export tokens as utilities */
```

If you swap (1) and (2), Tailwind's preflight will override the DS reset. If you skip (3), the DS `--color-*` aliases are present on `:root` but Tailwind won't generate `bg-paper`, `text-orange`, etc.

## Why every `--radius-*` is in `@theme`

The DS is zero-radius — every corner is sharp. Tailwind v4 ships sensible defaults (`--radius-md: 0.375rem`, etc.), so unless you override **all** of them inside `@theme`, classes like `rounded-md` and shadcn/ui components silently reintroduce rounded corners. The example overrides `--radius`, `--radius-sm` through `--radius-4xl` to `0px`.

## Tailwind v3?

We don't support v3. If you're still on v3, you'd configure these tokens via `theme.extend` in `tailwind.config.js` — see the Tailwind v3 → v4 migration guide. No v3 example is shipped here.
