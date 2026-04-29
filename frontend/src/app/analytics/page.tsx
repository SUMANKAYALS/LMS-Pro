"use client";

import Link from "next/link";

import {
    ArrowUpRight,
    Bell,
    ChevronRight,
    Search,
} from "lucide-react";

const metrics = [
    {
        label: "Total Disbursed",
        value: "₹24,80,000",
        change: "+12.4%",
        up: true,
    },
    {
        label: "Active Loans",
        value: "3",
        change: "+1 this month",
        up: true,
    },
    {
        label: "Total Interest Paid",
        value: "₹1,24,000",
        change: "Lifetime",
        up: null,
    },
    {
        label: "On-Time Payments",
        value: "98.2%",
        change: "+2.1%",
        up: true,
    },
];

const monthlyData = [
    { month: "Nov", amount: 18000 },
    { month: "Dec", amount: 22000 },
    { month: "Jan", amount: 15000 },
    { month: "Feb", amount: 28000 },
    { month: "Mar", amount: 20000 },
    { month: "Apr", amount: 32000 },
];

const recentActivity = [
    {
        date: "Apr 24, 2025",
        type: "EMI Payment",
        loan: "Personal Loan",
        amount: "₹8,500",
        status: "Success",
    },
    {
        date: "Apr 10, 2025",
        type: "EMI Payment",
        loan: "Home Loan",
        amount: "₹22,000",
        status: "Success",
    },
    {
        date: "Mar 24, 2025",
        type: "EMI Payment",
        loan: "Personal Loan",
        amount: "₹8,500",
        status: "Success",
    },
    {
        date: "Mar 10, 2025",
        type: "EMI Payment",
        loan: "Home Loan",
        amount: "₹22,000",
        status: "Late",
    },
    {
        date: "Feb 24, 2025",
        type: "Loan Disbursed",
        loan: "Personal Loan",
        amount: "₹2,00,000",
        status: "Completed",
    },
];

const maxAmount = Math.max(
    ...monthlyData.map((d) => d.amount)
);

export default function AnalyticsPage() {
    return (
        <div className="min-h-screen bg-[#050816] text-white flex flex-col">
            {/* HEADER */}
            <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-2xl">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between gap-6">
                    {/* Logo */}
                    <div>
                        <Link href="/dashboard">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent cursor-pointer">
                                LMS Pro
                            </h1>
                        </Link>

                        <p className="text-xs text-gray-500 mt-1">
                            Enterprise Loan Management
                            Platform
                        </p>
                    </div>

                    {/* Search */}
                    <div className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-2xl px-4 py-3 w-[380px]">
                        <Search
                            size={18}
                            className="text-gray-400"
                        />

                        <input
                            type="text"
                            placeholder="Search loans, payments, customers..."
                            className="bg-transparent outline-none border-none ml-3 text-sm w-full placeholder:text-gray-500"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        {/* Notification */}
                        <button className="relative bg-white/5 border border-white/10 p-3 rounded-2xl hover:bg-white/10 transition">
                            <Bell size={20} />

                            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-400" />
                        </button>

                        {/* Profile */}
                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center font-bold">
                                S
                            </div>

                            <div className="hidden sm:block">
                                <p className="text-sm font-semibold">
                                    Suman Kayal
                                </p>

                                <p className="text-xs text-gray-400">
                                    Admin
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* MAIN */}
            <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-10 py-10">
                {/* Page Header */}
                <div className="mb-10 flex items-start justify-between flex-wrap gap-4">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
                            Analytics Dashboard
                        </p>

                        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                            Financial Insights &
                            <br />
                            Loan Performance
                        </h1>

                        <p className="text-gray-400 mt-3 text-sm max-w-2xl leading-7">
                            Monitor repayments,
                            borrower activity, EMI
                            performance, and loan
                            analytics through a
                            modern enterprise
                            dashboard.
                        </p>
                    </div>

                    <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-5 py-3 rounded-2xl hover:opacity-90 transition text-sm font-semibold">
                        Export Report

                        <ArrowUpRight size={18} />
                    </button>
                </div>

                {/* Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
                    {metrics.map((m) => (
                        <div
                            key={m.label}
                            className="bg-white/5 border border-white/10 rounded-3xl px-6 py-6 backdrop-blur-xl hover:-translate-y-1 transition duration-300"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm text-gray-400 mb-3">
                                        {m.label}
                                    </p>

                                    <p className="text-3xl font-bold tracking-tight">
                                        {m.value}
                                    </p>
                                </div>

                                <div className="bg-cyan-500/10 border border-cyan-500/20 p-3 rounded-2xl">
                                    <ArrowUpRight
                                        size={18}
                                        className="text-cyan-400"
                                    />
                                </div>
                            </div>

                            <p
                                className={`text-xs mt-4 font-medium ${m.up === true
                                        ? "text-emerald-400"
                                        : m.up === false
                                            ? "text-red-400"
                                            : "text-gray-500"
                                    }`}
                            >
                                {m.change}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Chart + Breakdown */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
                    {/* Chart */}
                    <div className="xl:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-xl">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-xl font-bold">
                                    Monthly Payments
                                </h2>

                                <p className="text-sm text-gray-400 mt-1">
                                    Total EMI paid per
                                    month
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm text-gray-300">
                                Last 6 Months
                            </div>
                        </div>

                        <div className="flex items-end gap-4 h-64">
                            {monthlyData.map((d) => {
                                const pct =
                                    Math.round(
                                        (d.amount /
                                            maxAmount) *
                                        100
                                    );

                                return (
                                    <div
                                        key={
                                            d.month
                                        }
                                        className="flex-1 flex flex-col items-center gap-3"
                                    >
                                        <span className="text-xs text-gray-400">
                                            ₹
                                            {(
                                                d.amount /
                                                1000
                                            ).toFixed(
                                                0
                                            )}
                                            k
                                        </span>

                                        <div
                                            className="w-full rounded-t-2xl bg-gradient-to-t from-cyan-500 via-cyan-400 to-purple-500 hover:opacity-100 transition-all duration-300 opacity-90"
                                            style={{
                                                height: `${pct}%`,
                                                minHeight:
                                                    "12px",
                                            }}
                                        />

                                        <span className="text-sm text-gray-400 font-medium">
                                            {
                                                d.month
                                            }
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Breakdown */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-xl">
                        <h2 className="text-xl font-bold mb-1">
                            Loan Breakdown
                        </h2>

                        <p className="text-sm text-gray-400 mb-8">
                            Distribution by loan
                            category
                        </p>

                        <div className="space-y-5">
                            {[
                                {
                                    label: "Home Loan",
                                    pct: 62,
                                    color: "bg-cyan-500",
                                },
                                {
                                    label: "Personal Loan",
                                    pct: 28,
                                    color: "bg-purple-500",
                                },
                                {
                                    label: "Vehicle Loan",
                                    pct: 10,
                                    color: "bg-amber-500",
                                },
                            ].map((item) => (
                                <div
                                    key={
                                        item.label
                                    }
                                >
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-300">
                                            {
                                                item.label
                                            }
                                        </span>

                                        <span className="text-white font-semibold">
                                            {
                                                item.pct
                                            }
                                            %
                                        </span>
                                    </div>

                                    <div className="w-full bg-white/10 rounded-full h-2">
                                        <div
                                            className={`${item.color} h-2 rounded-full`}
                                            style={{
                                                width: `${item.pct}%`,
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl">
                    <div className="px-7 py-5 border-b border-white/10 flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-bold">
                                Recent Activity
                            </h2>

                            <p className="text-sm text-gray-400 mt-1">
                                Latest transactions
                                and repayment updates
                            </p>
                        </div>

                        <button className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition">
                            View All

                            <ChevronRight
                                size={16}
                            />
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-white/[0.03] border-b border-white/10">
                                <tr>
                                    {[
                                        "Date",
                                        "Type",
                                        "Loan",
                                        "Amount",
                                        "Status",
                                    ].map((h) => (
                                        <th
                                            key={
                                                h
                                            }
                                            className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400"
                                        >
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {recentActivity.map(
                                    (
                                        row,
                                        i
                                    ) => (
                                        <tr
                                            key={
                                                i
                                            }
                                            className="border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors"
                                        >
                                            <td className="px-6 py-5 text-sm text-gray-400">
                                                {
                                                    row.date
                                                }
                                            </td>

                                            <td className="px-6 py-5 text-sm font-medium">
                                                {
                                                    row.type
                                                }
                                            </td>

                                            <td className="px-6 py-5 text-sm text-gray-300">
                                                {
                                                    row.loan
                                                }
                                            </td>

                                            <td className="px-6 py-5 text-sm font-semibold text-cyan-300">
                                                {
                                                    row.amount
                                                }
                                            </td>

                                            <td className="px-6 py-5">
                                                <span
                                                    className={`text-xs font-semibold px-3 py-1 rounded-full ${row.status ===
                                                            "Success"
                                                            ? "bg-emerald-500/15 text-emerald-400"
                                                            : row.status ===
                                                                "Late"
                                                                ? "bg-red-500/15 text-red-400"
                                                                : "bg-cyan-500/15 text-cyan-400"
                                                        }`}
                                                >
                                                    {
                                                        row.status
                                                    }
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            {/* FOOTER */}
            <footer className="border-t border-white/10 bg-black/30 backdrop-blur-2xl">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            LMS Pro
                        </h3>

                        <p className="text-sm text-gray-500 mt-2 max-w-md leading-6">
                            Enterprise-grade
                            loan management
                            platform designed for
                            modern lending
                            operations and
                            analytics.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-400">
                        <Link
                            href="/dashboard"
                            className="hover:text-white transition"
                        >
                            Dashboard
                        </Link>

                        <Link
                            href="/dashboard/apply-loan"
                            className="hover:text-white transition"
                        >
                            Apply Loan
                        </Link>

                        <Link
                            href="/dashboard/my-loans"
                            className="hover:text-white transition"
                        >
                            My Loans
                        </Link>

                        <Link
                            href="/dashboard/payment"
                            className="hover:text-white transition"
                        >
                            Payments
                        </Link>
                    </div>
                </div>

                <div className="border-t border-white/5 py-4 text-center text-xs text-gray-500">
                    © 2026 LMS Pro. All rights
                    reserved.
                </div>
            </footer>
        </div>
    );
}