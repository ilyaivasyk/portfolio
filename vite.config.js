import { defineConfig } from "vite";
import includeHtml from "vite-plugin-include-html";

export default defineConfig(({ command }) => ({
  root: "src",
  base: command === "serve" ? "/" : "/portfolio/",
  plugins: [includeHtml()],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
}));
