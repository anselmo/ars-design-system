import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [
    react(),
    starlight({
      title: "ARS Design System",
      description:
        "Swiss-inspired, zero-radius, Barlow-only design system for the web.",
      customCss: ["./src/styles/ars-theme.css"],
      social: {
        github: "https://github.com/anselmo/ars-design-system",
      },
      sidebar: [
        {
          label: "Getting started",
          items: [
            { label: "Overview", slug: "" },
            { label: "Install", slug: "install" },
            { label: "Dark mode", slug: "dark-mode" },
          ],
        },
        {
          label: "Tokens",
          items: [
            { label: "Colors", slug: "tokens/colors" },
            { label: "Typography", slug: "tokens/typography" },
            { label: "Motion", slug: "tokens/motion" },
            { label: "Elevation", slug: "tokens/elevation" },
            { label: "Z-index", slug: "tokens/z-index" },
            { label: "Spacing", slug: "tokens/spacing" },
          ],
        },
        {
          label: "Components",
          items: [
            { label: "Buttons", slug: "components/buttons" },
            { label: "Badges", slug: "components/badges" },
            { label: "Inputs", slug: "components/inputs" },
            { label: "Forms", slug: "components/forms" },
            { label: "Cards", slug: "components/cards" },
            { label: "Tables", slug: "components/tables" },
            { label: "Layout", slug: "components/layout" },
            { label: "Charts", slug: "components/charts" },
            { label: "Alert", slug: "components/alert" },
            { label: "Empty State", slug: "components/empty-state" },
            { label: "Skeleton", slug: "components/skeleton" },
            { label: "Pagination", slug: "components/pagination" },
            { label: "Breadcrumb", slug: "components/breadcrumb" },
            { label: "Dialog (React)", slug: "components/dialog" },
            { label: "Dropdown Menu (React)", slug: "components/dropdown-menu" },
            { label: "Tooltip (React)", slug: "components/tooltip" },
            { label: "Toast (React)", slug: "components/toast" },
            { label: "Switch (React)", slug: "components/switch" },
            { label: "Checkbox (React)", slug: "components/checkbox" },
            { label: "Radio Group (React)", slug: "components/radio-group" },
            { label: "Select (React)", slug: "components/select" },
            { label: "Tabs (React)", slug: "components/tabs" },
          ],
        },
      ],
    }),
  ],
});
