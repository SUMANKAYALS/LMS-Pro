"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import {
    LayoutDashboard,
    CreditCard,
    Wallet,
    ShieldCheck,
    IndianRupee,
    Zap,
} from "lucide-react";

interface SidebarProps {
    role?: string;
}

export default function Sidebar({
    role,
}: SidebarProps) {
    const pathname = usePathname();

    /**
     * Active Menu Style
     */
    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <aside className="fixed left-0 top-0 h-screen w-[260px] bg-black/40 backdrop-blur-2xl border-r border-white/10 p-6 flex flex-col">
            {/* Logo */}
            {/* <div className="mb-10">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    LMS Pro
                </h1>

                <p className="text-gray-400 text-sm mt-1">
                    Loan Management System
                </p>
            </div> */}
            {/* Brand Header */}
            <div className="mb-12 px-2">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                        <IndianRupee className="text-white" size={24} />
                    </div>
                    <div>
                        <span
                            className="font-display text-lg font-bold tracking-tight"
                            style={{
                                background: "linear-gradient(90deg, #e2e8f0, #94a3b8)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            LMS Pro
                        </span>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
                            Enterprise Core
                        </p>
                    </div>
                </div>
            </div>

            {/* Logo */}
            {/* <div className="flex items-center gap-3">
                <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                        background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                    }}
                >
                    <Zap size={15} className="text-white" />
                </div>
                <div>
                    <span
                        className="font-display text-lg font-bold tracking-tight"
                        style={{
                            background: "linear-gradient(90deg, #e2e8f0, #94a3b8)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        LMS Pro
                    </span>
                </div>
            </div> */}

            {/* Menu */}
            <nav className="space-y-3 flex-1">
                {/* Dashboard */}
                <Link
                    href="/dashboard"
                    className={`flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 ${isActive("/dashboard")
                        ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/20 text-cyan-400"
                        : "hover:bg-white/10 text-white"
                        }`}
                >
                    <LayoutDashboard size={20} />
                    Dashboard
                </Link>

                {/* Apply Loan */}
                <Link
                    href="/dashboard/apply-loan"
                    className={`flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 ${isActive("/dashboard/apply-loan")
                        ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/20 text-cyan-400"
                        : "hover:bg-white/10 text-white"
                        }`}
                >
                    <CreditCard size={20} />
                    Apply Loan
                </Link>

                {/* My Loans */}
                <Link
                    href="/dashboard/my-loans"
                    className={`flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 ${isActive("/dashboard/my-loans")
                        ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/20 text-cyan-400"
                        : "hover:bg-white/10 text-white"
                        }`}
                >
                    <Wallet size={20} />
                    My Loans
                </Link>

                {/* Payments */}
                <Link
                    href="/dashboard/payment"
                    className={`flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 ${isActive("/dashboard/payment")
                        ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/20 text-cyan-400"
                        : "hover:bg-white/10 text-white"
                        }`}
                >
                    <IndianRupee size={20} />
                    Payments
                </Link>

                {/* Admin */}
                {role === "ADMIN" && (
                    <Link
                        href="/dashboard/admin"
                        className={`flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 ${isActive("/dashboard/admin")
                            ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/20 text-cyan-400"
                            : "hover:bg-white/10 text-white"
                            }`}
                    >
                        <ShieldCheck size={20} />
                        Admin Panel
                    </Link>
                )}
            </nav>

            {/* Bottom
            <div className="mt-auto pt-6 border-t border-white/10">
                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-4">
                    <p className="text-sm text-gray-400">
                        Professional Loan Platform
                    </p>

                    <h3 className="text-lg font-semibold mt-1">
                        Industry Ready UI
                    </h3>
                </div>
            </div> */}
        </aside>
    );
}