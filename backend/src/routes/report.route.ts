import { Router } from "express";

import { generateLoanReport } from "../controller/report.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

/**
 * Loan Report
 */
router.get(
    "/loan/:loanId",
    authMiddleware,
    generateLoanReport
);

export default router;