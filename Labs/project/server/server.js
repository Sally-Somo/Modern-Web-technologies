const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const flowerRoutes = require("./routes/flowerRoutes");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection with clear success/error messages
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨");
    console.log("🌟 MongoDB Connection Successful! 🌟");
    console.log("✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error ❌");
    console.error(err);
    process.exit(1);
  });

// Routes
app.use("/api/flowers", flowerRoutes);

// Base route
app.get("/", (req, res) => {
  res.send("Welcome to Des Fleurs Blooms API 🌸");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Start server with clear port message
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀");
  console.log(`🌺 Server is blooming on port ${PORT}! 🌺`);
  console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀");
});
