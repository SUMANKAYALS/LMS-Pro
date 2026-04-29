import { Request, Response, NextFunction } from "express";
import { User } from "../model/user.model.js";
import { generateToken } from "../utils/jwt.js";
import { ROLES } from "../constants/roles.js";

/**
 * Register User
 */
export const register = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { name, email, password, role } = req.body;

        // validation
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        // check existing user
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        // validate role
        const userRole =
            role && Object.values(ROLES).includes(role)
                ? role
                : ROLES.BORROWER;

        // create user
        const user = await User.create({
            name,
            email,
            password,
            role: userRole,
        });

        // // generate token on registration
        // const token = generateToken({
        //     id: user._id.toString(),
        //     role: user.role,
        // });

        // const token = generateToken({
        //     id: user._id.toString(),
        //     role: user.role,
        // });

        // res.cookie("token", token, {
        //     httpOnly: true,
        //     secure: false,
        //     sameSite: "lax",
        //     maxAge: 7 * 24 * 60 * 60 * 1000,
        // });

        // res.status(201).json({
        //     message: "User registered successfully",
        //     user: {
        //         id: user._id,
        //         name: user.name,
        //         email: user.email,
        //         role: user.role,
        //     },
        // });

        res.status(201).json({
            message: "User registered successfully",
            // token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        next(error);
    }
};

/**
 * 🔹 Login User
 */
export const login = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { email, password } = req.body;
        console.log("LOGIN API HIT");

        // validation
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password required",
            });
        }

        // fetch user with password
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.status(400).json({
                message: "User not found",
            });
        }

        // compare password
        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid password",
            });
        }

        // generate token
        const token = generateToken({
            id: user._id.toString(),
            role: user.role,
        });

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Logout User
 */
export const logout = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        res.clearCookie("token");
        // res.clearCookie("token", {
        //     httpOnly: true,

        //     secure:
        //         process.env.NODE_ENV ===
        //         "production",

        //     sameSite:
        //         process.env.NODE_ENV ===
        //             "production"
        //             ? "none"
        //             : "lax",
        // });

        res.status(200).json({
            message: "Logout successful",
        });
    } catch (error) {
        next(error);
    }
};