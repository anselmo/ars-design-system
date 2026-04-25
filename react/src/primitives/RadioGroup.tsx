// RadioGroup — wraps @radix-ui/react-radio-group.
//
// CSS pairing
// ───────────
// `components/forms.css` renders the selected-radio dot via a `::after`
// pseudo-element on `.radio`, keyed off `[data-state="checked"]` that
// Radix sets on each item. There is NO `.radio-group` class in the CSS;
// the root is a layout-only container, so we forward consumer's
// className unchanged (no default class).
//
// Decision
// ────────
// `<RadioGroupItem>` mounts <RadioGroup.Indicator> (Radix's API contract
// assumes it exists) but forces `display: none` so the CSS `::after`
// dot wins. No CSS change required.
//
// Exports
// ───────
//   RadioGroup     — layout container (no ARS class, just className passthrough)
//   RadioGroupItem — single 16×16 circle, applies `.radio`

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "../cn.js";

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn(className)}
    {...props}
  />
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn("radio", className)}
    {...props}
  >
    <RadioGroupPrimitive.Indicator style={{ display: "none" }} />
  </RadioGroupPrimitive.Item>
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
