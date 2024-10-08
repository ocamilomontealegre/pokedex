import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  resolve: {
    alias: {
      "@app": resolve(__dirname, "src/app"),
      "@common": resolve(__dirname, "src/common"),
      "@assets": resolve(__dirname, "src/assets"),
      "@features": resolve(__dirname, "src/features"),
      "@lib": resolve(__dirname, "src/lib"),
      "@pages": resolve(__dirname, "src/pages"),
      "@routes": resolve(__dirname, "src/routes"),
      "@ui": resolve(__dirname, "src/ui"),
    },
  },
  plugins: [react(), svgr()],
  server: {
    cors: true,
    port: 3000,
  },
});
