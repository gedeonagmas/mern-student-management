import express from "express";
import {
  createStudent,
  deleteStudent,
  getStudents,
} from "../controllers/studentControllers.js";

const router = express.Router();

router.get("/", getStudents);
router.post("/", createStudent);
router.delete("/:id", deleteStudent);
export default router;
