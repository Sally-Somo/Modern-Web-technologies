import express from "express";
import fs from "fs";
import path from "path";
import _ from "lodash";
import { fileURLToPath } from "url";

const router = express.Router();

// Get the directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const upload_directory = path.join(__dirname, "../uploads");

// ✅ **Fix: Fetch a single random image (NEW)**
router.get("/single", (req, res) => {
  fs.readdir(upload_directory, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read uploads directory" });
    }

    // Filter only image files
    const imageFiles = files.filter(file => file.match(/\.(jpg|jpeg|png|gif)$/i));

    if (imageFiles.length === 0) {
      return res.status(404).json({ error: "No images found" });
    }

    // Pick 1 random image
    const randomImage = _.sample(imageFiles);
    res.json({ image: `http://localhost:8000/uploads/${randomImage}` });
  });
});

// ✅ **Fix: Fetch multiple random images**
router.get("/random-images", (req, res) => {
  fs.readdir(upload_directory, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read uploads directory" });
    }

    // Filter only image files
    const imageFiles = files.filter(file => file.match(/\.(jpg|jpeg|png|gif)$/i));

    if (imageFiles.length === 0) {
      return res.json({ images: [] });
    }

    // Pick up to 3 random images
    const randomImages = _.sampleSize(imageFiles, 3).map(file => 
      `http://localhost:8000/uploads/${file}`
    );

    res.json({ images: randomImages });
  });
});

// ✅ **New: Fetch a specific file by filename**
router.get("/file/:filename", (req, res) => {
  const filepath = path.join(upload_directory, req.params.filename);

  if (!fs.existsSync(filepath)) {
    return res.status(404).json({ error: "File not found" });
  }

  res.sendFile(filepath);
});

export default router;
