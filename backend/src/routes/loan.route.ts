import { Router } from "express";

import {
    applyLoan,
    getMyLoans,
    getAllLoans,
    updateLoanStatus,
} from "../controller/loan.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

import { authorize } from "../middleware/rbac.middleware.js";

import { ROLES } from "../constants/roles.js";

const router = Router();

/**
 * Apply Loan
 */
router.post(
    "/apply",
    authMiddleware,
    authorize(ROLES.BORROWER, ROLES.ADMIN),
    applyLoan
);

/**
 * Borrower Loan History
 */
router.get(
    "/my-loans",
    authMiddleware,
    authorize(ROLES.BORROWER, ROLES.ADMIN),
    getMyLoans
);

/**
 * Admin View All Loans
 */
router.get(
    "/all",
    authMiddleware,
    authorize(ROLES.ADMIN),
    getAllLoans
);

router.patch(
    "/status/:loanId",
    authMiddleware,
    authorize(
        ROLES.ADMIN,
        ROLES.SANCTION,
        ROLES.DISBURSEMENT
    ),
    updateLoanStatus
);

export default router;