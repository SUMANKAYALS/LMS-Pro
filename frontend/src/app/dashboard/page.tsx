"use client";

import { useEffect, useState } from "react";

import {
    CreditCard,
    Wallet,
    BadgeDollarSign,
    Users,
} from "lucide-react";

import AnalyticsCard from "@/components/dashboard/AnalyticsCard";

import LoanChart from "@/components/dashboard/LoanChart";

import { getDashboardAnalytics } from "@/services/analytics.service";
import { logoutUser } from "@/services/auth.service";

export default function DashboardPage() {
    const [analytics, setAnalytics] =
        useState<any>(null);

    const [loading, setLoading] =
        useState(true);

    /**
     * Fetch Analytics
     */
    // useEffect(() => {
    //     const fetchAnalytics = async () => {
    //         try {
    //             const response =
    //                 await getDashboardAnalytics();

    //             setAnalytics(response.analytics);
    //         } catch (error) {
    //             console.log(error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchAnalytics();
    // }, []);


    useEffect(() => {
        const verifyAuth = async () => {
            try {
                const response =
                    await getDashboardAnalytics();

                setAnalytics(
                    response.analytics
                );
            } catch (error: any) {
                console.log(error);

                if (
                    error.response?.status ===
                    401
                ) {
                    window.location.href =
                        "/login";
                }
            } finally {
                setLoading(false);
            }
        };

        verifyAuth();

        const syncLogout = (
            event: StorageEvent
        ) => {
            if (
                event.key === "logout"
            ) {
                window.location.href =
                    "/login";
            }
        };

        window.addEventListener(
            "storage",
            syncLogout
        );

        return () => {
            window.removeEventListener(
                "storage",
                syncLogout
            );
        };
    }, []);

    /**
     * Loading
     */
    if (loading) {
        return (
            <main className="min-h-screen flex items-center justify-center text-white text-xl">
                Loading analytics...
            </main>
        );
    }

    // const handleLogout =
    //     async () => {
    //         try {
    //             await logoutUser();

    //             localStorage.setItem(
    //                 "logout",
    //                 Date.now().toString()
    //             );

    //             window.location.href =
    //                 "/login";
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };

    return (
        <main className="space-y-8">
            {/* Heading */}
            <div>
                <h1 className="text-4xl font-bold">
                    Analytics Dashboard
                </h1>

                <p className="text-gray-400 mt-2">
                    Monitor loans, payments, and users
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {/* Total Loans */}
                <AnalyticsCard
                    title="Total Loans"
                    value={
                        analytics?.totalLoans?.toString() ||
                        "0"
                    }
                    growth="18%"
                    icon={<CreditCard size={30} />}
                />

                {/* Active Loans */}
                <AnalyticsCard
                    title="Loan Amount"
                    value={`₹${(
                        analytics?.totalLoanAmount || 0
                    ).toLocaleString()}`}
                    growth="12%"
                    icon={<Wallet size={30} />}
                />

                {/* Payments */}
                <AnalyticsCard
                    title="Total Payments"
                    value={`₹${(
                        analytics?.totalPayments || 0
                    ).toLocaleString()}`}
                    growth="22%"
                    icon={
                        <BadgeDollarSign size={30} />
                    }
                />

                {/* Users */}
                <AnalyticsCard
                    title="Users"
                    value={
                        analytics?.totalUsers?.toString() ||
                        "0"
                    }
                    growth="9%"
                    icon={<Users size={30} />}
                />
            </div>

            {/* Chart */}
            <LoanChart
                data={analytics?.monthlyLoans || []}
            />

            {/* Recent Activities */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold">
                        Recent Activities
                    </h2>

                    <p className="text-gray-400 mt-1">
                        Latest loan and payment actions
                    </p>
                </div>

                <div className="space-y-4">
                    {/* Approved */}
                    <div className="flex items-center justify-between bg-white/5 p-5 rounded-2xl">
                        <div>
                            <h3 className="font-semibold">
                                Loan Approved
                            </h3>

                            <p className="text-gray-400 text-sm">
                                Loan application processed
                            </p>
                        </div>

                        <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
                            Approved
                        </span>
                    </div>

                    {/* Payment */}
                    <div className="flex items-center justify-between bg-white/5 p-5 rounded-2xl">
                        <div>
                            <h3 className="font-semibold">
                                EMI Payment Received
                            </h3>

                            <p className="text-gray-400 text-sm">
                                Successful transaction
                            </p>
                        </div>

                        <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm">
                            Paid
                        </span>
                    </div>

                    {/* Rejected */}
                    <div className="flex items-center justify-between bg-white/5 p-5 rounded-2xl">
                        <div>
                            <h3 className="font-semibold">
                                Loan Rejected
                            </h3>

                            <p className="text-gray-400 text-sm">
                                Business rules validation failed
                            </p>
                        </div>

                        <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm">
                            Rejected
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
}

