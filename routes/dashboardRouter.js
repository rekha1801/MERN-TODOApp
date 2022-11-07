import express from "express";
import {
  createTodoList,
  getTodoList,
} from "../controllers/dashboardController.js";

const router = express.Router();
router.post("/create-todo", createTodoList);
router.get("/my-tasks", getTodoList);
export default router;
