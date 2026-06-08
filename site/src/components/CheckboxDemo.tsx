import { useState } from "react";
import { Checkbox } from "@ars/design-system-react";

export default function CheckboxDemo() {
  const [terms, setTerms] = useState(false);

  return (
    <div className="ars-playground">
      <p className="ars-playground-label">Live React Checkbox</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Checkbox
            checked={terms}
            onCheckedChange={(v) => setTerms(v === true)}
          />
          <span style={{ fontSize: "13px" }}>
            Accept terms and conditions — {terms ? "checked" : "unchecked"}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Checkbox defaultChecked />
          <span style={{ fontSize: "13px" }}>Subscribe to changelog</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Checkbox checked="indeterminate" />
          <span style={{ fontSize: "13px" }}>Indeterminate state</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Checkbox disabled />
          <span style={{ fontSize: "13px", opacity: 0.5 }}>Disabled</span>
        </div>
      </div>
    </div>
  );
}
