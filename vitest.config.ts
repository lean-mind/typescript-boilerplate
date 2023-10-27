/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    includeSource: ["./**/*.{js,ts}"],
    exclude: ["node_modules/**", "dist/**"],
  },
  resolve: {
    alias: {
      "@core": "src/core",
    },
  },
});
