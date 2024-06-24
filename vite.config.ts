import { defineConfig } from "vite";
import { resolve } from "path";
import { configDefaults } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    exclude: [...configDefaults.exclude, "node_modules/**"],
  },
});
