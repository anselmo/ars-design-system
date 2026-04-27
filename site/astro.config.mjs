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
          ],
        },
        {
          label: "Components",
          items: [
            { label: "Buttons", slug: "components/buttons" },
            { label: "Dialog (React)", slug: "components/dialog" },
          ],
        },
      ],
    }),
  ],
});
