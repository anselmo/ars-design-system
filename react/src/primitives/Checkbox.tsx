// Checkbox — wraps @radix-ui/react-checkbox.
//
// CSS pairing
// ───────────
// `components/forms.css` renders the check mark (and the indeterminate
// dash) via `::after` pseudo-elements on `.checkbox`, keyed off
// `[data-state="checked"]` / `[data-state="indeterminate"]` that Radix
// already sets on the root. Radix's <Checkbox.Indicator> is a real DOM
// child that would otherwise nest an empty span (or a consumer-supplied
// glyph) inside our 16×16 box and clash with the pseudo-element check.
//
// Decision
// ────────
// We mount <Checkbox.Indicator> (Radix's API contract assumes it exists)
// but force `display: none` so our CSS `::after` checkmark wins. No CSS
// change required; forms.css stays authoritative for the visual.
//
// Consumers use a single component: <Checkbox />. The indicator is
// abstracted away.

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "../cn.js";

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn("checkbox", className)}
    {...props}
  >
    <CheckboxPrimitive.Indicator style={{ display: "none" }} />
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
