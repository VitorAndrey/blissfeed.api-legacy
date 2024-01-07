import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src", "!src/**/*.spec.*", "!src/**/*.test.*"],
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["@vitest", "vitest"],
});
