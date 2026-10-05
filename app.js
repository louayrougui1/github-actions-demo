import express from "express";

const app = express();
// Define routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my Express API!",
    version: "1.0.0",
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

export default app;
