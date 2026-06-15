import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "@ars/design-system-react";

export default function SelectDemo() {
  const [region, setRegion] = useState<string | undefined>(undefined);

  return (
    <div className="ars-playground">
      <p className="ars-playground-label">Live React Select</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "320px" }}>
        <div>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "8px" }}>
            Region — {region ?? "none selected"}
          </p>
          <Select value={region} onValueChange={setRegion}>
            <SelectTrigger style={{ width: "100%" }}>
              <SelectValue placeholder="Select a region" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Americas</SelectLabel>
                <SelectItem value="us-east">US East</SelectItem>
                <SelectItem value="us-west">US West</SelectItem>
                <SelectItem value="ca-central">Canada Central</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Europe</SelectLabel>
                <SelectItem value="eu-west">EU West</SelectItem>
                <SelectItem value="eu-central">EU Central</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Asia Pacific</SelectLabel>
                <SelectItem value="ap-southeast">AP Southeast</SelectItem>
                <SelectItem value="ap-northeast">AP Northeast</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "8px" }}>
            Disabled
          </p>
          <Select disabled>
            <SelectTrigger style={{ width: "100%" }}>
              <SelectValue placeholder="Unavailable" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="x">Option</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
