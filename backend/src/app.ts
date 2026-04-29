import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// routes
import authRouter from "./routes/auth.route.js";
import loanRouter from "./routes/loan.route.js";
import paymentRouter from "./routes/payment.route.js";

// middleware
import { errorHandler } from "./middleware/error.middleware.js";
import analyticsRouter from "./routes/analytics.route.js";
import reportRouter from "./routes/report.route.js";

const app = express();

/**
 * Middlewares
 */
app.use(express.json());

app.use(cookieParser());

app.use(
    cors({
        origin: [
            "http://localhost:3000",
            "https://lms-pro.vercel.app",
        ],
        credentials: true,
    })
);

/**
 * API Routes
 */
app.use("/api/auth", authRouter);

app.use("/api/loan", loanRouter);

app.use("/api/payment", paymentRouter);

app.use("/api/analytics", analyticsRouter);

app.use("/api/report", reportRouter);
/**
 * Health Check
 */
app.get("/", (req: Request, res: Response) => {
    res.send("API Running...");
});

/**
 * Global Error Handler
 */
app.use(errorHandler);

export default app;