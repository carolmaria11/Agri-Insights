// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Explicitly aliasing @tanstack/react-query
      "@tanstack/react-query": "@tanstack/react-query",
    },
  },
  server: {
    hmr: {
      overlay: true, // Ensures error overlays are enabled (optional)
    },
  },
});
