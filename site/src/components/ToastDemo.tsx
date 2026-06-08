import { useState } from "react";
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
} from "@ars/design-system-react";

type Variant = "success" | "warning" | "danger" | "info" | undefined;

const LABELS: Record<string, string> = {
  success: "Saved",
  warning: "Heads up",
  danger: "Error",
  info: "Note",
};

const DESCRIPTIONS: Record<string, string> = {
  success: "Your changes have been saved.",
  warning: "This action may have side effects.",
  danger: "Something went wrong. Try again.",
  info: "You have unsaved changes.",
};

export default function ToastDemo() {
  const [open, setOpen] = useState(false);
  const [variant, setVariant] = useState<Variant>(undefined);
  const [key, setKey] = useState(0);

  const trigger = (v: Variant) => {
    setVariant(v);
    setKey((k) => k + 1);
    setOpen(true);
  };

  return (
    <div className="ars-playground">
      <p className="ars-playground-label">Live React Toast</p>
      <ToastProvider>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <button className="btn btn-default" onClick={() => trigger(undefined)}>
            Default
          </button>
          <button className="btn btn-default" onClick={() => trigger("success")}>
            Success
          </button>
          <button className="btn btn-default" onClick={() => trigger("warning")}>
            Warning
          </button>
          <button className="btn btn-default" onClick={() => trigger("danger")}>
            Danger
          </button>
          <button className="btn btn-default" onClick={() => trigger("info")}>
            Info
          </button>
        </div>
        <Toast key={key} open={open} onOpenChange={setOpen} variant={variant}>
          <ToastTitle>{variant ? LABELS[variant] : "Notification"}</ToastTitle>
          <ToastDescription>
            {variant ? DESCRIPTIONS[variant] : "This is a toast notification."}
          </ToastDescription>
          <ToastAction altText="Undo action">Undo</ToastAction>
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    </div>
  );
}
