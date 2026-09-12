import { defineConfig } from "vite";
import fs from "fs";
import path from "path";

function htmlIncludes() {
  const includeRe = /<include\s+src="([^"]+)"><\/include>/g;

  return {
    name: "html-includes",

    transformIndexHtml: {
      order: "pre",
      handler(html, ctx) {
        const matches = [...html.matchAll(includeRe)];
        if (!matches.length) return html;

        // Paths like ./src/sections/foo.html are relative to the project root
        // (where npm scripts run), not to the Vite `root` option.
        const projectRoot = process.cwd();

        for (const [, src] of matches) {
          const abs = path.resolve(projectRoot, src.replace(/^\.\//, ""));
          if (ctx.server) ctx.server.watcher.add(abs);
        }

        return html.replace(includeRe, (_, src) => {
          const abs = path.resolve(projectRoot, src.replace(/^\.\//, ""));
          try {
            return fs.readFileSync(abs, "utf-8");
          } catch {
            return `<!-- include not found: ${src} -->`;
          }
        });
      },
    },

    handleHotUpdate({ file, server }) {
      const sectionsDir = path.resolve(server.config.root, "sections");
      if (file.startsWith(sectionsDir)) {
        // Section file changed → invalidate the root index so browser reloads
        const mod = server.moduleGraph.getModuleById(
          path.resolve(server.config.root, "index.html")
        );
        if (mod) server.moduleGraph.invalidateModule(mod);
        server.ws.send({ type: "full-reload" });
        return [];
      }
    },
  };
}

// Relative base so assets (CSS, img, JS) resolve on GitHub Pages project URLs
// without relying on a trailing slash on the index URL.
export default defineConfig(() => ({
  root: "src",
  base: "./",
  plugins: [htmlIncludes()],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
}));
