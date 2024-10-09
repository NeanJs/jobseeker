// server/routes/authRoutes.js

import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

// Define routes
router.post("/register", register); // POST /api/auth/register
router.post("/login", login); // POST /api/auth/login

export default router;
