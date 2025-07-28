import { defineConfig } from "vite";
import "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

const testFiles = ["./src/**/*.test.ts", "./src/**/*.test.tsx"];

const config = defineConfig({
  test: {
    globals: true,
    include: testFiles,

    // Enable auto-mocking for __mocks__ folders
    // mockReset: true,
    // clearMocks: true,
    // restoreMocks: true,
  },
  build: {
    emptyOutDir: true,
    sourcemap: true,
  },
  plugins: [tsconfigPaths()],
});

// console.log(`VITE CONFIG:\n${JSON.stringify(config.resolve.alias, null, 2)}`);

export default config;
