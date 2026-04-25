// DropdownMenu — wraps @radix-ui/react-dropdown-menu.
//
// CSS pairing
// ───────────
// `components/dropdown.css` styles the anatomy:
//   .dropdown-content       portal-mounted container (slides + fades on [data-state])
//   .dropdown-item          single menu row (highlight via [data-highlighted])
//   .dropdown-item--danger  destructive variant (red text + soft red highlight)
//   .dropdown-label         non-interactive section heading (uppercase micro-type)
//   .dropdown-separator     hairline divider
//   .dropdown-shortcut      right-aligned ⌘K-style hint
//
// Composition decisions
// ─────────────────────
// - `DropdownMenuContent` auto-portals (wraps `DropdownMenu.Portal`
//   internally) and defaults `sideOffset={4}` so the menu floats off the
//   trigger by a comfortable margin without any consumer setup.
// - `DropdownMenuItem` accepts an extra `variant?: "danger"` prop that
//   appends `.dropdown-item--danger` for destructive actions (Delete,
//   Remove, etc). All other Radix item props pass through unchanged.
// - `DropdownMenuShortcut` is NOT a Radix primitive — it's a plain
//   `<span className="dropdown-shortcut">` for keyboard-hint glyphs
//   placed inside an item.
// - CheckboxItem and RadioItem are intentionally out of scope for v0.1.

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "../cn.js";

export const DropdownMenu = DropdownMenuPrimitive.Root;

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn("dropdown-content", className)}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

type DropdownMenuItemProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Item
> & {
  variant?: "danger";
};

export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  DropdownMenuItemProps
>(({ className, variant, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "dropdown-item",
      variant === "danger" && "dropdown-item--danger",
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

export const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("dropdown-label", className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

export const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("dropdown-separator", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName =
  DropdownMenuPrimitive.Separator.displayName;

export const DropdownMenuShortcut = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("dropdown-shortcut", className)}
    {...props}
  />
));
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
