import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.[tj]sx?$/, // Process all .js, .jsx, .ts, and .tsx files in the src folder
  },
});
