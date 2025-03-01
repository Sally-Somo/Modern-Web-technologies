import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import _ from "lodash"; // Lodash for random selection
import save_router from "./routers/save_router.js";
import fetch_router from "./routers/fetch_router.js";
import axios from "axios"; // ✅ Use Axios for external API calls

const app = express();
const PORT = process.env.PORT || 8000;

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Ensure Express Serves Static Files Properly
const uploadDirectory = path.join(__dirname, "uploads");
app.use("/uploads", express.static(uploadDirectory));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// ✅ Fetch a random dog image using Axios (Fix)
app.get("/fetch/dog", async (req, res) => {
  try {
    console.log("Fetching random dog image...");
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");

    console.log("Dog image fetched:", response.data.message); // ✅ Debug log
    res.json({ dogImage: response.data.message });
  } catch (error) {
    console.error("Error fetching dog image:", error);
    res.status(500).json({ error: "Failed to fetch dog image" });
  }
});

// Existing Routes
app.use("/save", save_router);
app.use("/fetch", fetch_router);

// API List
app.get("/", (req, res) => {
  res.send("Welcome to the server, Check api-list for available routes");
});

// 404 Handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: `No request for ${req.url} exists` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});

