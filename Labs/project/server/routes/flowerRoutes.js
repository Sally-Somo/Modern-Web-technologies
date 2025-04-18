const express = require("express");
const router = express.Router();
const flowerController = require("../controllers/flowerController");

// Get all flowers
router.get("/", flowerController.getAllFlowers);

// Get a single flower
router.get("/:id", flowerController.getFlower);

// Create a new flower
router.post("/", flowerController.createFlower);

// Update a flower
router.put("/:id", flowerController.updateFlower);

// Delete a flower
router.delete("/:id", flowerController.deleteFlower);

module.exports = router;
