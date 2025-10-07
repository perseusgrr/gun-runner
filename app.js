const express = require("express");
const path = require("path");
const app = express();

const isProd = process.env.NODE_ENV === "production";

if (isProd) {
  // Serve static files from Vite build
  app.use(express.static(path.join(__dirname, "dist")));
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });
} else {
  console.log("Running in development mode with Vite proxy");
}

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express backend!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
