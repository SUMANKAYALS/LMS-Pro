import mongoose, { Schema, Document, Model } from "mongoose";

/**
 * Payment Interface
 */
export interface IPayment extends Document {
    loan: mongoose.Types.ObjectId;

    user: mongoose.Types.ObjectId;

    amount: number;

    utrNumber: string;

    paymentDate: Date;
}

/**
 * Payment Schema
 */
const paymentSchema = new Schema<IPayment>(
    {
        loan: {
            type: Schema.Types.ObjectId,
            ref: "Loan",
            required: true,
        },

        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        amount: {
            type: Number,
            required: true,
            min: 1,
        },

        utrNumber: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            uppercase: true,
        },

        paymentDate: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

/**
 * Export Model
 */
export const Payment: Model<IPayment> =
    mongoose.model<IPayment>(
        "Payment",
        paymentSchema
    );