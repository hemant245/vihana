import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { ViteDevServer } from "vite";
import type { IncomingMessage, ServerResponse } from "http";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    // SPA routing middleware for dev server
    {
      name: "spa-routing",
      configureServer(server: ViteDevServer) {
        return () => {
          server.middlewares.use((req: IncomingMessage, res: ServerResponse, next: () => void) => {
            // Skip asset requests
            if (
              req.url === "/" ||
              req.url?.match(/^\/(?!.*\.)/) ||
              req.url?.match(/\/$/)
            ) {
              // Check if it's not a static asset
              if (!req.url?.match(/\.\w+$/)) {
                req.url = "/";
              }
            }
            next();
          });
        };
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Production build configuration
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "router": ["react-router-dom"],
          "ui": ["@radix-ui/react-accordion", "@radix-ui/react-dialog"],
        },
      },
    },
  },
  // Preview configuration for local testing of production build
  preview: {
    host: "::",
    port: 4173,
  },
}));
