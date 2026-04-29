"use client";

import Link from "next/link";

import {
    Bell,
    Search,
    ArrowRight,
} from "lucide-react";

const features = [
    {
        icon: "⚡",
        title: "Instant Disbursement",
        desc: "Approved loans are disbursed directly to your bank account within minutes — no waiting, no paperwork delays.",
        tag: "Core",
        color: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/20",
        accent: "text-cyan-400",
    },
    {
        icon: "📊",
        title: "Smart EMI Calculator",
        desc: "Plan your repayments with our intelligent EMI calculator. Adjust tenure and amount to find the perfect plan.",
        tag: "Planning",
        color: "from-purple-500/20 to-purple-500/5 border-purple-500/20",
        accent: "text-purple-400",
    },
    {
        icon: "🔔",
        title: "Real-Time Alerts",
        desc: "Get instant notifications for payments, approvals, due dates, and account activity via SMS and email.",
        tag: "Notifications",
        color: "from-amber-500/20 to-amber-500/5 border-amber-500/20",
        accent: "text-amber-400",
    },
    {
        icon: "📱",
        title: "Multi-Device Access",
        desc: "Manage your loans from anywhere — desktop, tablet, or mobile. Your dashboard syncs in real time.",
        tag: "Accessibility",
        color: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20",
        accent: "text-emerald-400",
    },
    {
        icon: "🤖",
        title: "AI Credit Scoring",
        desc: "Our ML models assess your creditworthiness beyond traditional metrics — get fairer, faster approvals.",
        tag: "AI-Powered",
        color: "from-pink-500/20 to-pink-500/5 border-pink-500/20",
        accent: "text-pink-400",
    },
    {
        icon: "📁",
        title: "Document Vault",
        desc: "Securely store and retrieve all your loan documents, statements, and NOC letters in one encrypted place.",
        tag: "Storage",
        color: "from-sky-500/20 to-sky-500/5 border-sky-500/20",
        accent: "text-sky-400",
    },
];

const highlights = [
    { label: "Loan Types", value: "12+" },
    { label: "Approval Time", value: "< 2 min" },
    { label: "Happy Users", value: "50K+" },
    { label: "Uptime", value: "99.9%" },
];

export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-[#050816] text-white flex flex-col">
            {/* HEADER */}
            <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-2xl">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between gap-6">
                    {/* Logo */}
                    <div>
                        <Link href="/">
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
                            placeholder="Search features..."
                            className="bg-transparent outline-none border-none ml-3 text-sm w-full placeholder:text-gray-500"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button className="relative bg-white/5 border border-white/10 p-3 rounded-2xl hover:bg-white/10 transition">
                            <Bell size={20} />

                            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-400" />
                        </button>

                        <Link
                            href="/login"
                            className="bg-gradient-to-r from-cyan-500 to-purple-500 px-5 py-2 rounded-xl hover:opacity-90 transition text-sm font-semibold"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </header>

            {/* MAIN */}
            <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-10 py-12">
                {/* Hero */}
                <div className="mb-14 text-center max-w-3xl mx-auto">
                    <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
                        Platform Features
                    </p>

                    <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-tight">
                        Everything you need to{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            borrow smarter
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg leading-8">
                        A complete lending platform
                        built for speed,
                        transparency, security,
                        and full financial control.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-14">
                    {highlights.map((h) => (
                        <div
                            key={h.label}
                            className="bg-white/5 border border-white/10 rounded-3xl px-6 py-6 text-center backdrop-blur-xl hover:-translate-y-1 transition"
                        >
                            <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                {h.value}
                            </p>

                            <p className="text-sm text-gray-400 mt-2">
                                {h.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {features.map((f) => (
                        <div
                            key={f.title}
                            className={`bg-gradient-to-br ${f.color} border rounded-3xl p-7 flex flex-col gap-5 hover:scale-[1.02] transition-all duration-300 backdrop-blur-xl`}
                        >
                            <div className="flex items-start justify-between">
                                <span className="text-4xl">
                                    {f.icon}
                                </span>

                                <span
                                    className={`text-xs font-semibold uppercase tracking-wider ${f.accent} bg-white/5 px-3 py-1 rounded-full border border-white/10`}
                                >
                                    {f.tag}
                                </span>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-3">
                                    {f.title}
                                </h3>

                                <p className="text-sm text-gray-300 leading-7">
                                    {f.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl px-8 py-12 text-center backdrop-blur-xl">
                    <h2 className="text-3xl font-bold mb-3">
                        Ready to get started?
                    </h2>

                    <p className="text-gray-400 mb-8 text-sm max-w-xl mx-auto leading-7">
                        Apply for a loan in under
                        2 minutes with instant
                        approval workflows and
                        transparent repayment
                        plans.
                    </p>

                    <Link
                        href="/dashboard/apply-loan"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-2xl hover:opacity-90 transition"
                    >
                        Apply Now

                        <ArrowRight size={18} />
                    </Link>
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
                            Enterprise-grade loan
                            management platform
                            built for modern
                            lending operations and
                            analytics.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-400">
                        <Link
                            href="/"
                            className="hover:text-white transition"
                        >
                            Home
                        </Link>

                        <Link
                            href="/features"
                            className="hover:text-white transition"
                        >
                            Features
                        </Link>

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