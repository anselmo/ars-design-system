import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipArrow,
} from "@ars/design-system-react";

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <div className="ars-playground">
        <p className="ars-playground-label">Live React Tooltip</p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="btn btn-default">Save</button>
            </TooltipTrigger>
            <TooltipContent>
              Save changes
              <TooltipArrow />
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="btn btn-outline">Export</button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              Download as CSV
              <TooltipArrow />
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="btn btn-ghost">Help</button>
            </TooltipTrigger>
            <TooltipContent side="right">
              Open documentation
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
