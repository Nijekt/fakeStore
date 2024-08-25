import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@constants": "/src/constants",
      "@store": "/src/store",
      "@containers": "/src/containers",
      "@utils": "/src/utils",
      "@context": "/src/context",
    },
  },
});
