/**
 * Production Server for vehana.ai
 * Handles SPA routing - serves index.html for all non-asset routes
 * 
 * Usage:
 * 1. Build: npm run build
 * 2. Start: node server.js
 * 3. Visit: http://localhost:3000
 */

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import compression from "compression";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_PATH = path.join(__dirname, "dist");

// Middleware
app.use(compression()); // Enable gzip compression
app.use(express.static(DIST_PATH, { maxAge: "1d" })); // Cache static files for 1 day

/**
 * SPA Routing: Serve index.html for all non-asset routes
 * This allows React Router to handle all routing on the client-side
 */
app.get("*", (req, res, next) => {
  // Check if it's a static asset (has file extension)
  if (req.url.match(/\.\w+$/)) {
    return next();
  }

  // Serve index.html for all other requests
  res.sendFile(path.join(DIST_PATH, "index.html"), (err) => {
    if (err) {
      next(err);
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).send("Internal Server Error");
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║   Vehana.ai Server Running 🚀          ║
╠════════════════════════════════════════╣
║ Environment: ${process.env.NODE_ENV || "production"}
║ Port: ${PORT}
║ URL: http://localhost:${PORT}
║ Build Dir: ${DIST_PATH}
╚════════════════════════════════════════╝
  `);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  process.exit(0);
});
