import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // if index.html is in /public, set root: 'public'
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:3000", // forward API calls to Express backend
    },
  },
});
