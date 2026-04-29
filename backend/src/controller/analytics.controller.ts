import { Request, Response, NextFunction } from "express";

import { Loan } from "../model/loan.model.js";

import { Payment } from "../model/payment.model.js";

import { User } from "../model/user.model.js";

/**
 * Dashboard Analytics
 */
export const getDashboardAnalytics = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        /**
         * Total Loans
         */
        const totalLoans =
            await Loan.countDocuments();

        /**
         * Total Loan Amount
         */
        const loanAmountResult =
            await Loan.aggregate([
                {
                    $group: {
                        _id: null,
                        total: {
                            $sum: "$amount",
                        },
                    },
                },
            ]);

        /**
         * Total Payments
         */
        const paymentResult =
            await Payment.aggregate([
                {
                    $group: {
                        _id: null,
                        total: {
                            $sum: "$amount",
                        },
                    },
                },
            ]);

        /**
         * Total Users
         */
        const totalUsers =
            await User.countDocuments();

        /**
         * Monthly Analytics
         */
        // const monthlyLoans =
        //     await Loan.aggregate([
        //         {
        //             $group: {
        //                 _id: {
        //                     month: {
        //                         $month: "$createdAt",
        //                     },
        //                 },

        //                 total: {
        //                     $sum: "$amount",
        //                 },
        //             },
        //         },

        //         {
        //             $sort: {
        //                 "_id.month": 1,
        //             },
        //         },
        //     ]);
        const monthlyLoans =
            await Loan.aggregate([
                {
                    $group: {
                        _id: {
                            month: {
                                $month: "$createdAt",
                            },
                        },

                        totalLoans: {
                            $sum: 1,
                        },

                        totalAmount: {
                            $sum: "$amount",
                        },
                    },
                },

                {
                    $sort: {
                        "_id.month": 1,
                    },
                },
            ]);

        /**
         * Response
         */
        res.status(200).json({
            success: true,

            analytics: {
                totalLoans,

                totalLoanAmount:
                    loanAmountResult[0]?.total || 0,

                totalPayments:
                    paymentResult[0]?.total || 0,

                totalUsers,

                monthlyLoans,
            },
        });
    } catch (error) {
        next(error);
    }
};