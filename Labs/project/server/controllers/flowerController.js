const Flower = require("../models/Flower");

// Get all flowers
exports.getAllFlowers = async (req, res) => {
  try {
    const flowers = await Flower.find().sort({ createdAt: -1 });
    res.status(200).json(flowers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single flower
exports.getFlower = async (req, res) => {
  try {
    const flower = await Flower.findById(req.params.id);
    if (!flower) {
      return res.status(404).json({ message: "Flower not found" });
    }
    res.status(200).json(flower);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new flower
exports.createFlower = async (req, res) => {
  try {
    const flower = new Flower(req.body);
    const newFlower = await flower.save();
    res.status(201).json(newFlower);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a flower
exports.updateFlower = async (req, res) => {
  try {
    const flower = await Flower.findById(req.params.id);
    if (!flower) {
      return res.status(404).json({ message: "Flower not found" });
    }

    Object.assign(flower, req.body);
    const updatedFlower = await flower.save();
    res.status(200).json(updatedFlower);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a flower
exports.deleteFlower = async (req, res) => {
  try {
    const flower = await Flower.findById(req.params.id);
    if (!flower) {
      return res.status(404).json({ message: "Flower not found" });
    }

    await flower.remove();
    res.status(200).json({ message: "Flower deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
