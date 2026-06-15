import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@ars/design-system-react";

export default function RadioGroupDemo() {
  const [plan, setPlan] = useState("monthly");

  return (
    <div className="ars-playground">
      <p className="ars-playground-label">Live React RadioGroup</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "10px" }}>
            Billing cycle — selected: {plan}
          </p>
          <RadioGroup
            value={plan}
            onValueChange={setPlan}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <RadioGroupItem value="monthly" id="monthly" />
              <label htmlFor="monthly" style={{ fontSize: "13px", cursor: "pointer" }}>Monthly</label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <RadioGroupItem value="annual" id="annual" />
              <label htmlFor="annual" style={{ fontSize: "13px", cursor: "pointer" }}>Annual</label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <RadioGroupItem value="enterprise" id="enterprise" />
              <label htmlFor="enterprise" style={{ fontSize: "13px", cursor: "pointer" }}>Enterprise</label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "10px" }}>
            Disabled
          </p>
          <RadioGroup
            defaultValue="standard"
            disabled
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <RadioGroupItem value="standard" id="std-disabled" />
              <label htmlFor="std-disabled" style={{ fontSize: "13px", opacity: 0.4 }}>Standard</label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <RadioGroupItem value="premium" id="prem-disabled" />
              <label htmlFor="prem-disabled" style={{ fontSize: "13px", opacity: 0.4 }}>Premium</label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
