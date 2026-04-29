"use client";

import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import {
    getAllLoans,
    updateLoanStatus,
} from "@/services/loan.service";

import { Loan } from "@/types/loan";

import StatusBadge from "@/components/dashboard/StatusBadge";

export default function AdminPage() {
    const [loading, setLoading] = useState(true);

    const [loans, setLoans] = useState<Loan[]>(
        []
    );

    /**
     * Fetch All Loans
     */
    const fetchLoans = async () => {
        try {
            const response = await getAllLoans();

            setLoans(response.loans);
        } catch (error: any) {
            toast.error(
                error.response?.data?.message ||
                "Failed to fetch loans"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLoans();
    }, []);

    /**
     * Update Status
     */
    const handleStatusUpdate = async (
        loanId: string,
        status: string
    ) => {
        try {
            await updateLoanStatus(loanId, status);

            toast.success(
                `Loan ${status.toLowerCase()} successfully`
            );

            fetchLoans();
        } catch (error: any) {
            toast.error(
                error.response?.data?.message ||
                "Status update failed"
            );
        }
    };

    /**
     * Loading
     */
    if (loading) {
        return (
            <div className="text-xl text-white">
                Loading loans...
            </div>
        );
    }

    return (
        <main>
            {/* Heading */}
            <div className="mb-10">
                <h1 className="text-4xl font-bold">
                    Admin Loan Management
                </h1>

                <p className="text-gray-400 mt-2">
                    Manage all loan applications
                </p>
            </div>

            {/* Table */}
            <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        {/* Head */}
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th className="text-left p-5">
                                    User
                                </th>

                                <th className="text-left p-5">
                                    Amount
                                </th>

                                <th className="text-left p-5">
                                    Purpose
                                </th>

                                <th className="text-left p-5">
                                    Repayment
                                </th>

                                <th className="text-left p-5">
                                    Status
                                </th>

                                <th className="text-left p-5">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        {/* Body */}
                        <tbody>
                            {loans.length > 0 ? (
                                loans.map((loan) => (
                                    <tr
                                        key={loan._id}
                                        className="border-b border-white/5 hover:bg-white/5 transition"
                                    >
                                        {/* User */}
                                        <td className="p-5">
                                            <div>
                                                <h3 className="font-semibold">
                                                    {loan.fullName}
                                                </h3>

                                                <p className="text-gray-400 text-sm">
                                                    {loan.employmentType}
                                                </p>
                                            </div>
                                        </td>

                                        {/* Amount */}
                                        <td className="p-5 font-semibold">
                                            ₹
                                            {loan.amount.toLocaleString()}
                                        </td>

                                        {/* Purpose */}
                                        <td className="p-5">
                                            {loan.purpose}
                                        </td>

                                        {/* Repayment */}
                                        <td className="p-5">
                                            ₹
                                            {loan.totalRepayment.toLocaleString()}
                                        </td>

                                        {/* Status */}
                                        <td className="p-5">
                                            <StatusBadge
                                                status={loan.status}
                                            />
                                        </td>

                                        {/* Actions */}
                                        <td className="p-5">
                                            <div className="flex flex-wrap gap-2">
                                                {/* Sanction */}
                                                {loan.status ===
                                                    "APPLIED" && (
                                                        <>
                                                            <button
                                                                onClick={() =>
                                                                    handleStatusUpdate(
                                                                        loan._id,
                                                                        "SANCTIONED"
                                                                    )
                                                                }
                                                                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-xl text-sm transition"
                                                            >
                                                                Sanction
                                                            </button>

                                                            <button
                                                                onClick={() =>
                                                                    handleStatusUpdate(
                                                                        loan._id,
                                                                        "REJECTED"
                                                                    )
                                                                }
                                                                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl text-sm transition"
                                                            >
                                                                Reject
                                                            </button>
                                                        </>
                                                    )}

                                                {/* Disburse */}
                                                {loan.status ===
                                                    "SANCTIONED" && (
                                                        <button
                                                            onClick={() =>
                                                                handleStatusUpdate(
                                                                    loan._id,
                                                                    "DISBURSED"
                                                                )
                                                            }
                                                            className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-xl text-sm transition"
                                                        >
                                                            Disburse
                                                        </button>
                                                    )}

                                                {/* Closed */}
                                                {loan.status ===
                                                    "DISBURSED" && (
                                                        <button
                                                            onClick={() =>
                                                                handleStatusUpdate(
                                                                    loan._id,
                                                                    "CLOSED"
                                                                )
                                                            }
                                                            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-xl text-sm transition"
                                                        >
                                                            Close
                                                        </button>
                                                    )}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={6}
                                        className="text-center p-10 text-gray-400"
                                    >
                                        No loans found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}