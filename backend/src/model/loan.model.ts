import mongoose, { Schema, Document, Model } from "mongoose";

import {
    LOAN_STATUS,
    LoanStatus,
} from "../constants/loanStatus.js";

/**
 * Loan Interface
 */
export interface ILoan extends Document {
    user: mongoose.Types.ObjectId;

    fullName: string;

    amount: number;

    tenureDays: number;

    annualIncome: number;

    employmentType: string;

    panNumber: string;

    aadhaarNumber: string;

    purpose: string;

    interestRate: number;

    interestAmount: number;

    totalRepayment: number;

    status: LoanStatus;
}

/**
 * Loan Schema
 */
const loanSchema = new Schema<ILoan>(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        fullName: {
            type: String,
            required: true,
            trim: true,
        },

        amount: {
            type: Number,
            required: true,
            min: 1000,
        },

        tenureDays: {
            type: Number,
            required: true,
            min: 1,
        },

        annualIncome: {
            type: Number,
            required: true,
        },

        employmentType: {
            type: String,
            required: true,
        },

        panNumber: {
            type: String,
            required: true,
            uppercase: true,
        },

        aadhaarNumber: {
            type: String,
            required: true,
        },

        purpose: {
            type: String,
            required: true,
        },

        interestRate: {
            type: Number,
            default: 12,
        },

        interestAmount: {
            type: Number,
            default: 0,
        },

        totalRepayment: {
            type: Number,
            default: 0,
        },

        status: {
            type: String,
            enum: Object.values(LOAN_STATUS),
            default: LOAN_STATUS.APPLIED,
        },
    },
    {
        timestamps: true,
    }
);

/**
 * Export Model
 */
export const Loan: Model<ILoan> = mongoose.model<ILoan>(
    "Loan",
    loanSchema
);