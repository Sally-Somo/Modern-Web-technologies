const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  difficulty: String,
  ingredients: [String],
  steps: [String],
});

module.exports = mongoose.model("Recipe", RecipeSchema);
