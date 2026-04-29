import { Response, NextFunction } from "express";
import { AuthRequest } from "./auth.middleware.js";

/**
 * Role-Based Access Control Middleware
 */
export const authorize = (...roles: string[]) => {
    return (
        req: AuthRequest,
        res: Response,
        next: NextFunction
    ) => {
        // check authenticated user
        if (!req.user) {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }

        // check role access
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: "Access denied",
            });
        }

        next();
    };
};