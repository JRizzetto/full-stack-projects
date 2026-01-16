import express from "express";
import { login, logout, register, verify } from "../controllers/auth.js"; // Add verify

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/verify", verify); // Add this line

export default router;
