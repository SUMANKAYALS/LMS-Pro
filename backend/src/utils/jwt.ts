import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

/**
 * Token Payload Type
 */
export interface JwtPayload {
    id: string;
    role: string;
}

/**
 * Generate JWT
 */
export const generateToken = (payload: JwtPayload) => {
    return jwt.sign(payload, env.JWT_SECRET, {
        expiresIn: "7d",
    });
};

/**
 * Verify JWT
 */
export const verifyToken = (token: string): JwtPayload => {
    return jwt.verify(token, env.JWT_SECRET) as JwtPayload;
};