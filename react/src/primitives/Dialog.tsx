// Dialog — wraps @radix-ui/react-dialog.
//
// CSS pairing
// ───────────
// `components/dialog.css` styles the anatomy:
//   .dialog-overlay      backdrop (fades on [data-state])
//   .dialog-content      centered panel (slides + fades)
//   .dialog-title        heading inside content
//   .dialog-description  subtitle / lead paragraph
//   .dialog-close        absolutely-positioned top-right close (X)
//   .dialog-actions      button row at bottom (cancel + confirm)
//
// Composition decisions
// ─────────────────────
// - `DialogContent` auto-portals AND auto-includes the `.dialog-overlay`.
//   Consumer API is `<DialogContent>{children}</DialogContent>` — they
//   never have to remember to render the overlay or the portal. This
//   mirrors shadcn/ui and means the overlay is always paired with the
//   panel, which is the correct behaviour for a modal dialog.
// - `DialogActions` is NOT a Radix primitive — it's a plain
//   `<div className="dialog-actions">` layout helper for the button row,
//   exposed as a forwardRef component so consumers can attach refs.
// - `DialogClose` is the Radix close button styled with `.dialog-close`.
//   The CSS positions it absolutely inside `.dialog-content` and renders
//   the X via `::before` + `::after` — consumers pass no children.

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../cn.js";

export const Dialog = DialogPrimitive.Root;

export const DialogTrigger = DialogPrimitive.Trigger;

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="dialog-overlay" />
    <DialogPrimitive.Content
      ref={ref}
      className={cn("dialog-content", className)}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("dialog-title", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("dialog-description", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export const DialogClose = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    className={cn("dialog-close", className)}
    {...props}
  />
));
DialogClose.displayName = DialogPrimitive.Close.displayName;

export const DialogActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("dialog-actions", className)}
    {...props}
  />
));
DialogActions.displayName = "DialogActions";
