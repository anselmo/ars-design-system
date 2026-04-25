// Switch — wraps @radix-ui/react-switch.
//
// CSS pairing
// ───────────
// `components/forms.css` renders the switch thumb via a `::after`
// pseudo-element on `.switch`. Radix's <Switch.Thumb> is a real DOM node
// that would visually conflict with our pseudo-element thumb if rendered
// with default styling.
//
// Decision
// ────────
// We mount <Switch.Thumb> (Radix expects it in the tree for accessibility
// completeness) but force `display: none` on it so the CSS `::after`
// thumb is the sole visual. No CSS change required; forms.css stays
// authoritative for the visual.
//
// Consumers therefore use a single component: <Switch />. The thumb is
// abstracted away.

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "../cn.js";

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn("switch", className)}
    {...props}
  >
    <SwitchPrimitive.Thumb style={{ display: "none" }} />
  </SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;
