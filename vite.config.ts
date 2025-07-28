import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

const testFiles = ["./src/**/*.test.ts", "./src/**/*.test.tsx"];

const config = defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    // setupFiles: ['./config/jest-setup.ts'],
    // globalSetup: ['./config/testGlobalSetup.ts'],
    include: testFiles,

    // Enable auto-mocking for __mocks__ folders
    // mockReset: true,
    // clearMocks: true,
    // restoreMocks: true,
  },
  // build: {
  //   emptyOutDir: true,
  //   sourcemap: true,
  // },
  // plugins: [tsconfigPaths(), react()],
  plugins: [tsconfigPaths(), react()],
});

// console.log(`VITE CONFIG:\n${JSON.stringify(config.resolve.alias, null, 2)}`);

export default config;
