// Tooltip — wraps @radix-ui/react-tooltip.
//
// CSS pairing
// ───────────
// `components/tooltip.css` styles the popover bubble (`.tooltip-content`)
// and the SVG arrow (`.tooltip-arrow`). Open/close animations are driven
// by Radix's `[data-state]` and `[data-side]` attributes on the content
// element — no JS-side animation logic needed here.
//
// Composition decisions
// ─────────────────────
// - `TooltipContent` auto-portals (wraps `Tooltip.Portal` internally) so
//   the consumer API is `<TooltipContent>...</TooltipContent>` instead of
//   `<Portal><Content>...</Content></Portal>`. This mirrors shadcn/ui.
// - `TooltipProvider` is exported so consumers can mount it at the app
//   root (Radix requires a Provider ancestor for any Tooltip).
// - `TooltipArrow` is exported but optional — many ARS tooltips use
//   inverted contrast alone for direction.

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "../cn.js";

export const TooltipProvider = TooltipPrimitive.Provider;

export const Tooltip = TooltipPrimitive.Root;

export const TooltipTrigger = TooltipPrimitive.Trigger;

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn("tooltip-content", className)}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export const TooltipArrow = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow>
>(({ className, ...props }, ref) => (
  <TooltipPrimitive.Arrow
    ref={ref}
    className={cn("tooltip-arrow", className)}
    {...props}
  />
));
TooltipArrow.displayName = TooltipPrimitive.Arrow.displayName;
