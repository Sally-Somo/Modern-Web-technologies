const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const recipeRouter = require("./recipes_router");

const app = express();
const PORT = 8001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/recipe", recipeRouter);

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/recipesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
