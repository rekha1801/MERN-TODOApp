import express from "express";
import { dashboardController } from "../controllers/dashboardController.js";

const router = express.Router();
router.post("/create-todo", dashboardController);
export default router;
