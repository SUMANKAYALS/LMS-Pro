"use client";

import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import { getMyLoans } from "@/services/loan.service";

import { downloadLoanReport } from "@/services/report.service";

import { Loan } from "@/types/loan";

import StatusBadge from "@/components/dashboard/StatusBadge";

export default function MyLoansPage() {
    const [loading, setLoading] = useState(true);

    const [loans, setLoans] = useState<Loan[]>([]);

    /**
     * 📥 Download PDF Report
     */
    const handleDownload = async (
        loanId: string
    ) => {
        try {
            const blob =
                await downloadLoanReport(
                    loanId
                );

            const url =
                window.URL.createObjectURL(
                    blob
                );

            const link =
                document.createElement("a");

            link.href = url;

            link.download =
                `loan-report-${loanId}.pdf`;

            document.body.appendChild(link);

            link.click();

            link.remove();

            window.URL.revokeObjectURL(
                url
            );

            toast.success(
                "Report downloaded"
            );
        } catch (error) {
            toast.error(
                "Failed to download report"
            );
        }
    };

    /**
     * 📋 Fetch Loans
     */
    useEffect(() => {
        const fetchLoans = async () => {
            try {
                const response =
                    await getMyLoans();

                setLoans(response.loans);
            } catch (error: any) {
                toast.error(
                    error.response?.data
                        ?.message ||
                    "Failed to fetch loans"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchLoans();
    }, []);

    /**
     * ⏳ Loading
     */
    if (loading) {
        return (
            <div className="text-white text-xl">
                Loading loans...
            </div>
        );
    }

    return (
        <main>
            {/* Heading */}
            <div className="mb-10">
                <h1 className="text-4xl font-bold">
                    My Loans
                </h1>

                <p className="text-gray-400 mt-2">
                    Manage all your loan applications
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
                                    Amount
                                </th>

                                <th className="text-left p-5">
                                    Interest
                                </th>

                                <th className="text-left p-5">
                                    Repayment
                                </th>

                                <th className="text-left p-5">
                                    Purpose
                                </th>

                                <th className="text-left p-5">
                                    Status
                                </th>

                                <th className="text-left p-5">
                                    Date
                                </th>

                                <th className="text-left p-5">
                                    Report
                                </th>
                            </tr>
                        </thead>

                        {/* Body */}
                        <tbody>
                            {loans.length > 0 ? (
                                loans.map(
                                    (loan) => (
                                        <tr
                                            key={
                                                loan._id
                                            }
                                            className="border-b border-white/5 hover:bg-white/5 transition"
                                        >
                                            {/* Amount */}
                                            <td className="p-5 font-semibold">
                                                ₹
                                                {loan.amount.toLocaleString()}
                                            </td>

                                            {/* Interest */}
                                            <td className="p-5">
                                                ₹
                                                {loan.interestAmount.toLocaleString()}
                                            </td>

                                            {/* Repayment */}
                                            <td className="p-5">
                                                ₹
                                                {loan.totalRepayment.toLocaleString()}
                                            </td>

                                            {/* Purpose */}
                                            <td className="p-5">
                                                {
                                                    loan.purpose
                                                }
                                            </td>

                                            {/* Status */}
                                            <td className="p-5">
                                                <StatusBadge
                                                    status={
                                                        loan.status
                                                    }
                                                />
                                            </td>

                                            {/* Date */}
                                            <td className="p-5 text-gray-400">
                                                {new Date(
                                                    loan.createdAt
                                                ).toLocaleDateString()}
                                            </td>

                                            {/* Download */}
                                            <td className="p-5">
                                                <button
                                                    onClick={() =>
                                                        handleDownload(
                                                            loan._id
                                                        )
                                                    }
                                                    className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-xl text-sm transition"
                                                >
                                                    Download
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                )
                            ) : (
                                <tr>
                                    <td
                                        colSpan={
                                            7
                                        }
                                        className="p-10 text-center text-gray-400"
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