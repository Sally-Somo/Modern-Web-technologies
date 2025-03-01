import express from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

// ✅ Configure Multer for File Uploads
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// ✅ Fix: Handle Dog Image Uploads Correctly
router.post("/dog", upload.single("file"), (req, res) => {
  console.log("Received Dog Image Upload Request...");

  // ✅ Log Incoming File for Debugging
  console.log("Uploaded Dog Image:", req.file);

  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded. Make sure the request contains a 'file' field." });
  }

  res.json({
    message: "Dog image uploaded successfully",
    imageUrl: `http://localhost:8000/uploads/${req.file.filename}`,
  });
});

// ✅ Fix: Handle Single File Uploads
router.post("/single", upload.single("file"), (req, res) => {
  console.log("Received Single File Upload Request...");
  console.log("Uploaded File:", req.file);

  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded. Make sure the request contains a 'file' field." });
  }

  res.json({
    message: "Single file uploaded successfully",
    filePath: `http://localhost:8000/uploads/${req.file.filename}`,
  });
});

// ✅ Fix: Handle Multiple File Uploads
router.post("/multiple", upload.array("files", 5), (req, res) => {
  console.log("Received Multiple File Upload Request...");
  console.log("Uploaded Files:", req.files);

  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: "No files uploaded. Make sure the request contains a 'files' field." });
  }

  let filePaths = req.files.map(file => `http://localhost:8000/uploads/${file.filename}`);

  res.json({
    message: "Multiple files uploaded successfully",
    filePaths,
  });
});

export default router;
