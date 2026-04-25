// Select — wraps @radix-ui/react-select.
//
// CSS pairing
// ───────────
// Radix Select is a popover (portal-mounted listbox), not a native
// `<select>`. We reuse two existing class families:
//   .select          (forms.css)   — applied to the trigger button so it
//                                    visually matches a native `<select>`.
//   .dropdown-content (dropdown.css) — applied to the portal-mounted
//                                    listbox; visually identical to a
//                                    DropdownMenu popover.
//   .dropdown-item   (dropdown.css) — applied to each option row.
//   .dropdown-label  (dropdown.css) — applied to group headings.
//   .dropdown-separator              — applied to group dividers.
//
// Composition decisions
// ─────────────────────
// - `SelectTrigger` chevron suppression: `forms.css .select` paints a
//   chevron via `background-image` (an inline SVG data URL) because the
//   class was originally designed for a native `<select>`. Radix renders
//   its own chevron as a child via `<Select.Icon>`, so we'd see two
//   chevrons stacked. We override with inline `style={{ backgroundImage:
//   "none" }}` and keep the existing right-side padding so Radix's icon
//   sits in the same visual slot. The trigger also needs `display: flex`
//   + `align-items: center` so the icon child aligns vertically — the
//   `.select` class was sized for a single-line text node, not flex
//   children, so we set those inline as well. (No CSS edits in v0.1; if
//   we add a `.select-trigger` modifier later we can drop the inline
//   styles.)
// - `SelectContent` auto-portals (wraps `Select.Portal`) and renders the
//   required `<Select.Viewport>` internally so consumer just writes
//   `<SelectContent><SelectItem>...</SelectItem></SelectContent>`.
// - `SelectItem` auto-wraps `children` in `<Select.ItemText>` so consumers
//   pass plain text/JSX and we handle the Radix anatomy detail. The
//   `<Select.ItemIndicator>` (selected check) is intentionally omitted in
//   v0.1 — keeping the row visually simple. Add later if needed.
// - `SelectValue` and `SelectGroup` are direct pass-throughs of the Radix
//   primitives — they have no DOM of their own to style.

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "../cn.js";

export const Select = SelectPrimitive.Root;

export const SelectGroup = SelectPrimitive.Group;

export const SelectValue = SelectPrimitive.Value;

export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, style, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn("select", className)}
    // Suppress the native chevron painted by `.select`'s background-image
    // (Radix renders its own chevron via `<Select.Icon>`). Flexbox keeps
    // the value text and the icon vertically centered inside the 32px row.
    style={{
      backgroundImage: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      ...style,
    }}
    {...props}
  >
    {children}
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

export const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      position={position}
      className={cn("dropdown-content", className)}
      {...props}
    >
      <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn("dropdown-item", className)}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

export const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("dropdown-label", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

export const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("dropdown-separator", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
