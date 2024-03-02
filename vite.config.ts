import react from "@vitejs/plugin-react";
import rollupPluginCopy from "rollup-plugin-copy";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import * as path from "path";

// https://vitejs.dev/config/
export default ({ mode }) => {

  return defineConfig({
    base: "./",
    build: {
      outDir: "./dist",
      assetsDir: "./",
      emptyOutDir: true,
    },
    plugins: [
      react(),
      tsconfigPaths()
    ],
  });
};