import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    // SPA fallback middleware: serve index.html for non-asset routes
    middlewareMode: false,
    // Fallback to index.html for client-side routing
    fs: {
      strict: true,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Production build configuration
  build: {
    outDir: "dist",
    sourcemap: false,
    // minify: "terser",
  },
  // Preview configuration for local testing of production build
  preview: {
    host: "::",
    port: 4173,
  },
}));
