import { defineConfig } from "vite";
import path from "path";
import fs from "fs";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

const caseNum = process.env.CASE_NUM || "1";

function figmaAssetResolver() {
  return {
    name: "figma-asset-resolver",
    resolveId(id: string) {
      if (id.startsWith("figma:asset/")) {
        const filename = id.replace("figma:asset/", "");
        return path.resolve(__dirname, "src/assets", filename);
      }
    },
  };
}

function renameToIndex() {
  return {
    name: "rename-to-index",
    closeBundle() {
      const src = path.resolve(__dirname, `dist/cases/case-${caseNum}/case-${caseNum}.html`);
      const dest = path.resolve(__dirname, `dist/cases/case-${caseNum}/index.html`);
      if (fs.existsSync(src)) fs.renameSync(src, dest);
    },
  };
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
    viteSingleFile(),
    renameToIndex(),
  ],
  // Não copiar public/ para o outDir dos cases — as imagens ficam em dist/ (main SPA)
  publicDir: false,
  build: {
    outDir: `dist/cases/case-${caseNum}`,
    emptyOutDir: true,
    rollupOptions: {
      input: { index: path.resolve(__dirname, `case-${caseNum}.html`) },
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.svg", "**/*.csv"],
});
