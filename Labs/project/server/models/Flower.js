const mongoose = require("mongoose");

const flowerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  color: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
    min: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Flower", flowerSchema);
