import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.js";

/**
 * Extend Express Request
 */
export interface AuthRequest extends Request {
    user?: {
        id: string;
        role: string;
    };
}

export const authMiddleware = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        // get token from cookie
        const token = req.cookies.token;

        // check token
        if (!token) {
            return res.status(401).json({
                message: "No token provided",
            });
        }

        // verify token
        const decoded = verifyToken(token) as {
            id: string;
            role: string;
        };

        // attach user
        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token",
        });
    }
};