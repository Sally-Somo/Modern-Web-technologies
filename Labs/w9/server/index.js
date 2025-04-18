import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import book_router from "./router/book_router.js"

dotenv.config();

// Variables
const app = express();
const PORT = process.env.PORT || 5000;

//middleware

// router
app.use("/book", book_router)

// start server
mongoose
   .connect(process.env.MONGO_URI)
   .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () =>
       console.log(`server running on http://lovalhost:${PORT}`)
    );
   })
   .catch((error) => console.error("MongoDB connection error:", error));