import { Response, NextFunction } from "express";

import { Payment } from "../model/payment.model.js";

import { Loan } from "../model/loan.model.js";

import { AuthRequest } from "../middleware/auth.middleware.js";

import { LOAN_STATUS } from "../constants/loanStatus.js";

/**
 * Make Payment
 */
export const makePayment = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const { loanId } = req.params;

        const { amount, utrNumber } = req.body;

        /**
         * Validation
         */
        if (!amount || !utrNumber) {
            return res.status(400).json({
                success: false,
                message: "Amount and UTR number are required",
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
         * Loan must be disbursed
         */
        if (loan.status !== LOAN_STATUS.DISBURSED) {
            return res.status(400).json({
                success: false,
                message: "Loan is not disbursed yet",
            });
        }

        /**
         * Duplicate UTR Check
         */
        const existingUTR = await Payment.findOne({
            utrNumber,
        });

        if (existingUTR) {
            return res.status(400).json({
                success: false,
                message: "Duplicate UTR number",
            });
        }

        /**
         * Save Payment
         */
        const payment = await Payment.create({
            loan: loan._id,

            user: req.user?.id,

            amount: Number(amount),

            utrNumber,
        });

        /**
         * Calculate Total Paid
         */
        const payments = await Payment.find({
            loan: loan._id,
        });

        const totalPaid = payments.reduce(
            (sum, item) => sum + item.amount,
            0
        );

        /**
         * Auto Close Loan
         */
        if (totalPaid >= loan.totalRepayment) {
            loan.status = LOAN_STATUS.CLOSED;

            await loan.save();
        }

        /**
         * Response
         */
        res.status(201).json({
            success: true,
            message: "Payment successful",

            totalPaid,

            remainingAmount:
                loan.totalRepayment - totalPaid,

            loanStatus: loan.status,

            payment,
        });
    } catch (error) {
        next(error);
    }
};