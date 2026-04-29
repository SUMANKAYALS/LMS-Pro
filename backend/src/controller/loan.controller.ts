import { Response, NextFunction } from "express";

import { Loan } from "../model/loan.model.js";

import { AuthRequest } from "../middleware/auth.middleware.js";

import { calculateLoan } from "../utils/calculateLoan.js";

import { breCheck } from "../utils/bre.js";
import { LOAN_STATUS } from "../constants/loanStatus.js";

/**
 * Apply Loan
 */
export const applyLoan = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const {
            fullName,
            amount,
            tenureDays,
            annualIncome,
            employmentType,
            panNumber,
            aadhaarNumber,
            purpose,
        } = req.body;

        /**
         * 🔍 Required Field Validation
         */
        if (
            !fullName ||
            !amount ||
            !tenureDays ||
            !annualIncome ||
            !employmentType ||
            !panNumber ||
            !aadhaarNumber ||
            !purpose
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        /**
         * Convert Numbers
         */
        const loanAmount = Number(amount);

        const loanTenure = Number(tenureDays);

        const income = Number(annualIncome);

        /**
         * BRE Validation
         */
        const breResult = breCheck({
            annualIncome: income,
            amount: loanAmount,
            employmentType,
            panNumber,
            aadhaarNumber,
        });

        /**
         * Reject Loan
         */
        if (!breResult.eligible) {
            return res.status(400).json({
                success: false,
                message: breResult.message,
            });
        }

        /**
         * Interest Calculation
         */
        const { interestAmount, totalRepayment } = calculateLoan({
            amount: loanAmount,
            interestRate: 12,
            tenureDays: loanTenure,
        });

        /**
         * Save Loan
         */
        const loan = await Loan.create({
            user: req.user?.id,

            fullName,

            amount: loanAmount,

            tenureDays: loanTenure,

            annualIncome: income,

            employmentType,

            panNumber,

            aadhaarNumber,

            purpose,

            interestRate: 12,

            interestAmount,

            totalRepayment,
        });

        /**
         * Success Response
         */
        res.status(201).json({
            success: true,
            message: "Loan applied successfully",

            loan,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Borrower Loan History
 */
export const getMyLoans = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const loans = await Loan.find({
            user: req.user?.id,
        }).sort({
            createdAt: -1,
        });

        res.status(200).json({
            success: true,
            count: loans.length,
            loans,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Admin View All Loans
 */
export const getAllLoans = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const loans = await Loan.find()
            .populate("user", "name email role")
            .sort({
                createdAt: -1,
            });

        res.status(200).json({
            success: true,
            count: loans.length,
            loans,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Update Loan Status
 */
export const updateLoanStatus = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const { loanId } = req.params;

        const { status } = req.body;

        /**
         * Validate Status
         */
        if (!Object.values(LOAN_STATUS).includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid loan status",
            });
        }

        /**
         * Find Loan
         */
        const loan = await Loan.findById(loanId);

        if (!loan) {
            return res.status(404).json({
                success: false,
                message: "Loan not found",
            });
        }

        /**
         * Update Status
         */
        loan.status = status;

        await loan.save();

        /**
         * Response
         */
        res.status(200).json({
            success: true,
            message: `Loan status updated to ${status}`,
            loan,
        });
    } catch (error) {
        next(error);
    }
};