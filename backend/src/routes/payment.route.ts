import { Router } from "express";

import { makePayment } from "../controller/payment.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

import { authorize } from "../middleware/rbac.middleware.js";

import { ROLES } from "../constants/roles.js";

const router = Router();

/**
 * Make Payment
 */
router.post(
    "/:loanId",
    authMiddleware,
    authorize(ROLES.BORROWER, ROLES.ADMIN),
    makePayment
);

export default router;