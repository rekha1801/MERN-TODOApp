import express from "express";
import {
  signinController,
  signupController,
} from "../controllers/authController.js";

const router = express.Router();
console.log("Router is here");
router.post("/signup", signupController);
router.post("/signin", signinController);

export default router;
