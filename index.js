import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import connectDB from "./server/db.js";
import studentRoutes from "./server/routes/studentRoutes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use("/students", studentRoutes);  
connectDB();
const PORT=5000;
app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`)
);