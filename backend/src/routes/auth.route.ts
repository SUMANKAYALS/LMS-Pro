import { Router } from "express";

import {
    register,
    login,
    logout,
} from "../controller/auth.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

/**
 * Auth Routes
 */
router.post("/register", register);

router.post("/login", login);

router.post("/logout", authMiddleware, logout);

/**
 * Protected Route
 */
router.get("/me", authMiddleware, (req: any, res) => {
    res.status(200).json({
        message: "Authenticated user",
        user: req.user,
    });
});

export default router;