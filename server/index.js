// server/server.js

import express from "express";
import connectDB from "./config/db.js";
import jobRoutes from "./routes/jobRoutes.js";
import authRoutes from "./routes/authRoutes.js"; // Import auth routes
import cors from "cors";
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies
// Use the routes
app.use("/api/jobs", jobRoutes);
app.use("/api/auth", authRoutes); // Use auth routes

// Example route (you can create your actual routes later)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
