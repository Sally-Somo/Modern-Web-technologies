const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

app.use(cors()); // Allow requests from React frontend
app.use(express.json());

// Root route (fix for "Cannot GET /" issue)
app.get("/", (req, res) => {
  res.send("Welcome to the Resume API");
});

app.get("/", (req, res) => {
  res.json([
    { school: "Humber College", degree: "Diploma in Programming", year: "2024" }
  ]);
});

app.get("/getExp", (req, res) => {
  res.json([
    { company: "Bell Canada", role: "Customer Service Rep", year: "2023" }
  ]);
});

app.get("/getOverview", (req, res) => {
  res.json({
    name: "Sally Kpufotitin",
    summary: "Aspiring developer with a background in customer service."
  });
}); 

// Sample endpoints
app.get("/getEdu", (req, res) => {
  res.json([
    { school: "Humber College", degree: "Diploma in Programming", year: "2024" }
  ]);
});

app.get("/getExp", (req, res) => {
  res.json([
    { company: "Bell Canada", role: "Customer Service Rep", year: "2023" }
  ]);
});

app.get("/getOverview", (req, res) => {
  res.json({
    name: "Sally Kpufotitin",
    summary: "Aspiring developer with a background in customer service."
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
