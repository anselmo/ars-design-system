// Toast — wraps @radix-ui/react-toast.
//
// CSS pairing
// ───────────
// `components/toast.css` styles the viewport, root, title, description,
// action, and close. Open/close transitions, swipe-to-dismiss, and
// reduced-motion fallbacks are all driven by Radix's data-attributes
// (`[data-state]`, `[data-swipe]`) — no JS-side animation here.
//
// Composition decisions
// ─────────────────────
// - `ToastProvider` is required at the app root; it owns the queue and
//   viewport configuration (swipeDirection, duration, etc.).
// - `Toast` accepts a custom `variant?: "success" | "warning" | "danger"
//   | "info"` prop which translates to the matching `.toast--variant`
//   modifier class. This is the only wrapper that adds non-passthrough
//   API surface beyond Radix's own props. The variant CSS draws a 3px
//   left-edge accent bar via `::before`; the body fill stays neutral
//   (Swiss restraint — no tinted backgrounds, no leading icons).
// - All other slots (Viewport, Title, Description, Action, Close) are
//   direct forwardRef wrappers applying their respective class.

import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cn } from "../cn.js";

export const ToastProvider = ToastPrimitive.Provider;

export const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={cn("toast-viewport", className)}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitive.Viewport.displayName;

export type ToastVariant = "success" | "warning" | "danger" | "info";

export type ToastProps = React.ComponentPropsWithoutRef<
  typeof ToastPrimitive.Root
> & {
  variant?: ToastVariant;
};

export const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  ToastProps
>(({ className, variant, ...props }, ref) => (
  <ToastPrimitive.Root
    ref={ref}
    className={cn("toast", variant && `toast--${variant}`, className)}
    {...props}
  />
));
Toast.displayName = ToastPrimitive.Root.displayName;

export const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    className={cn("toast-title", className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitive.Title.displayName;

export const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={cn("toast-description", className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitive.Description.displayName;

export const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Action
    ref={ref}
    className={cn("toast-action", className)}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitive.Action.displayName;

export const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    className={cn("toast-close", className)}
    {...props}
  />
));
ToastClose.displayName = ToastPrimitive.Close.displayName;
