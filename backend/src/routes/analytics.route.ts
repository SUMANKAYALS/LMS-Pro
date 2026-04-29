import { Router } from "express";

import { getDashboardAnalytics } from "../controller/analytics.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

import { authorize } from "../middleware/rbac.middleware.js";

import { ROLES } from "../constants/roles.js";

const router = Router();

/**
 * Dashboard Analytics
 */
router.get(
    "/dashboard",
    authMiddleware,
    authorize(ROLES.ADMIN),
    getDashboardAnalytics
);

export default router;