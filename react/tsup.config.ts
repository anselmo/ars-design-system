import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  target: "es2020",
  treeshake: true,
  // Mark every peer as external — bundling them would duplicate React contexts
  // and balloon the dist. Consumers install these themselves.
  external: [
    "react",
    "react-dom",
    "@ars/design-system",
    /^@radix-ui\//,
  ],
});
