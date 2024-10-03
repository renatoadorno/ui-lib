import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "vite-react-ts-button",
      fileName: (format) => `index.${format}.js`,
      formats: ["cjs", "es"]
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)]
    },
    sourcemap: true,
    emptyOutDir: true
  },
  plugins: [
    libInjectCss(),
    dts({ include: ['src'] })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});