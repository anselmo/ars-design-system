import { useState } from "react";
import { Switch } from "@ars/design-system-react";

export default function SwitchDemo() {
  const [notifs, setNotifs] = useState(false);

  return (
    <div className="ars-playground">
      <p className="ars-playground-label">Live React Switch</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Switch checked={notifs} onCheckedChange={setNotifs} />
          <span style={{ fontSize: "13px" }}>
            Email notifications — {notifs ? "on" : "off"}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Switch defaultChecked />
          <span style={{ fontSize: "13px" }}>Auto-save</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Switch disabled />
          <span style={{ fontSize: "13px", opacity: 0.5 }}>
            Two-factor auth (managed by admin)
          </span>
        </div>
      </div>
    </div>
  );
}
