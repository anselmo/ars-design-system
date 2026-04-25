// @ars/design-system-react — barrel re-exports
//
// Each primitive is a thin wrapper around a Radix UI component, applying
// classes from @ars/design-system. Consumers must install the matching
// @radix-ui/react-* package and import @ars/design-system/index.css separately.

export * from "./cn.js";
export * from "./primitives/Dialog.js";
export * from "./primitives/DropdownMenu.js";
export * from "./primitives/Tooltip.js";
export * from "./primitives/Toast.js";
export * from "./primitives/Switch.js";
export * from "./primitives/Checkbox.js";
export * from "./primitives/RadioGroup.js";
export * from "./primitives/Select.js";
export * from "./primitives/Tabs.js";
