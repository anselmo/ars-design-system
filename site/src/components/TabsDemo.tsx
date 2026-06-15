import { Tabs, TabsList, TabsTrigger, TabsContent } from "@ars/design-system-react";

export default function TabsDemo() {
  return (
    <div className="ars-playground">
      <p className="ars-playground-label">Live React Tabs</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "12px" }}>
            Horizontal (default)
          </p>
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
              <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <p style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>
                Dashboard overview content.
              </p>
            </TabsContent>
            <TabsContent value="activity">
              <p style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>
                Recent activity feed.
              </p>
            </TabsContent>
            <TabsContent value="settings">
              <p style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>
                Account settings.
              </p>
            </TabsContent>
          </Tabs>
        </div>
        <div>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "12px" }}>
            Vertical
          </p>
          <Tabs defaultValue="overview" orientation="vertical" style={{ gap: "0" }}>
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" style={{ paddingLeft: "20px" }}>
              <p style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>
                Dashboard overview content.
              </p>
            </TabsContent>
            <TabsContent value="activity" style={{ paddingLeft: "20px" }}>
              <p style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>
                Recent activity feed.
              </p>
            </TabsContent>
            <TabsContent value="settings" style={{ paddingLeft: "20px" }}>
              <p style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>
                Account settings.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
