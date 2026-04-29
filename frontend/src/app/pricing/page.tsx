"use client";

import Link from "next/link";

import { useState } from "react";

import {
    Bell,
    Search,
    Check,
} from "lucide-react";

const plans = [
    {
        name: "Starter",
        tagline: "For first-time borrowers",
        price: { monthly: 0, annual: 0 },
        badge: null,
        color: "border-white/10",
        btnClass:
            "bg-white/10 hover:bg-white/15 text-white",

        features: [
            "Up to ₹50,000 loan limit",
            "Standard 14% interest rate",
            "Basic EMI calculator",
            "Email support",
            "3 active loans max",
            "—",
        ],
    },

    {
        name: "Pro",
        tagline: "For frequent borrowers",

        price: {
            monthly: 199,
            annual: 149,
        },

        badge: "Most Popular",

        color: "border-cyan-400/40",

        btnClass:
            "bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 text-white",

        features: [
            "Up to ₹5,00,000 loan limit",
            "Reduced 11% interest rate",
            "Smart EMI optimizer",
            "Priority support",
            "10 active loans max",
            "Credit score insights",
        ],
    },

    {
        name: "Elite",
        tagline: "For high-value borrowers",

        price: {
            monthly: 499,
            annual: 399,
        },

        badge: null,

        color: "border-purple-500/30",

        btnClass:
            "bg-white/5 border border-purple-500/30 hover:bg-purple-500/10 text-purple-300",

        features: [
            "Up to ₹50,00,000 loan limit",
            "Lowest 8.5% interest rate",
            "Dedicated loan manager",
            "24/7 phone support",
            "Unlimited active loans",
            "Advanced analytics dashboard",
        ],
    },
];

const featureLabels = [
    "Loan Limit",
    "Interest Rate",
    "EMI Tools",
    "Support",
    "Active Loans",
    "Bonus",
];

const faq = [
    {
        q: "Can I upgrade or downgrade my plan?",

        a: "Yes, you can change your plan anytime. Upgrades take effect immediately; downgrades apply at the next billing cycle.",
    },

    {
        q: "Are there any hidden charges?",

        a: "No. We charge a one-time processing fee of 1–2% on loan disbursement, shown clearly before you confirm.",
    },

    {
        q: "What happens if I miss an EMI payment?",

        a: "A late fee of ₹250 or 2% of the EMI (whichever is higher) applies after a 3-day grace period.",
    },

    {
        q: "Is GST applicable on plan fees?",

        a: "Yes, 18% GST is applied on Pro and Elite subscription fees as per Indian tax regulations.",
    },
];

export default function PricingPage() {
    const [annual, setAnnual] =
        useState(false);

    const [openFaq, setOpenFaq] =
        useState<number | null>(null);

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
                            Enterprise Loan
                            Management Platform
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
                            placeholder="Search plans..."
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
                {/* HERO */}
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
                        Pricing
                    </p>

                    <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                        Simple,
                        transparent pricing
                    </h1>

                    <p className="text-gray-400 text-lg leading-8">
                        No surprises. Choose a
                        plan that fits your
                        borrowing needs with
                        flexible repayment
                        options.
                    </p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <span
                            className={`text-sm ${!annual
                                    ? "text-white"
                                    : "text-gray-500"
                                }`}
                        >
                            Monthly
                        </span>

                        <button
                            onClick={() =>
                                setAnnual(
                                    (
                                        v
                                    ) => !v
                                )
                            }
                            className={`relative w-14 h-7 rounded-full transition-colors ${annual
                                    ? "bg-cyan-500"
                                    : "bg-white/20"
                                }`}
                        >
                            <span
                                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${annual
                                        ? "left-8"
                                        : "left-1"
                                    }`}
                            />
                        </button>

                        <span
                            className={`text-sm ${annual
                                    ? "text-white"
                                    : "text-gray-500"
                                }`}
                        >
                            Annual

                            <span className="ml-2 text-xs text-emerald-400 font-semibold">
                                Save 25%
                            </span>
                        </span>
                    </div>
                </div>

                {/* PRICING CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
                    {plans.map((plan) => {
                        const price = annual
                            ? plan.price
                                .annual
                            : plan.price
                                .monthly;

                        return (
                            <div
                                key={
                                    plan.name
                                }
                                className={`relative bg-white/5 border-2 ${plan.color} rounded-3xl p-8 flex flex-col backdrop-blur-xl hover:-translate-y-2 transition duration-300`}
                            >
                                {/* Badge */}
                                {plan.badge && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                                        {
                                            plan.badge
                                        }
                                    </div>
                                )}

                                {/* Plan */}
                                <div className="mb-7">
                                    <h2 className="text-2xl font-bold">
                                        {
                                            plan.name
                                        }
                                    </h2>

                                    <p className="text-gray-400 text-sm mt-1">
                                        {
                                            plan.tagline
                                        }
                                    </p>
                                </div>

                                {/* Price */}
                                <div className="mb-7">
                                    {price ===
                                        0 ? (
                                        <span className="text-5xl font-bold">
                                            Free
                                        </span>
                                    ) : (
                                        <div className="flex items-end gap-1">
                                            <span className="text-5xl font-bold">
                                                ₹
                                                {
                                                    price
                                                }
                                            </span>

                                            <span className="text-gray-400 text-sm mb-2">
                                                /month
                                            </span>
                                        </div>
                                    )}

                                    {annual &&
                                        price >
                                        0 && (
                                            <p className="text-xs text-emerald-400 mt-2">
                                                Billed
                                                ₹
                                                {price *
                                                    12}
                                                /year
                                            </p>
                                        )}
                                </div>

                                {/* Features */}
                                <ul className="space-y-4 flex-1 mb-8">
                                    {plan.features.map(
                                        (
                                            feat,
                                            i
                                        ) => (
                                            <li
                                                key={
                                                    i
                                                }
                                                className="flex items-start gap-3 text-sm"
                                            >
                                                {feat ===
                                                    "—" ? (
                                                    <span className="text-gray-600">
                                                        —
                                                    </span>
                                                ) : (
                                                    <Check
                                                        size={
                                                            16
                                                        }
                                                        className="text-emerald-400 mt-0.5"
                                                    />
                                                )}

                                                <span
                                                    className={
                                                        feat ===
                                                            "—"
                                                            ? "text-gray-600"
                                                            : "text-gray-300"
                                                    }
                                                >
                                                    {feat ===
                                                        "—"
                                                        ? featureLabels[
                                                        i
                                                        ]
                                                        : feat}
                                                </span>
                                            </li>
                                        )
                                    )}
                                </ul>

                                {/* Button */}
                                <button
                                    className={`w-full py-4 rounded-2xl font-semibold text-sm transition-all duration-200 ${plan.btnClass}`}
                                >
                                    {price ===
                                        0
                                        ? "Get Started Free"
                                        : `Choose ${plan.name}`}
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Processing Fee */}
                <div className="bg-amber-500/5 border border-amber-500/15 rounded-3xl px-6 py-5 mb-14 flex items-start gap-4 backdrop-blur-xl">
                    <span className="text-amber-400 text-xl">
                        ℹ️
                    </span>

                    <p className="text-sm text-gray-300 leading-7">
                        <span className="text-amber-300 font-semibold">
                            Processing Fee:
                        </span>{" "}
                        A one-time processing
                        fee of 1–2% is charged
                        on loan disbursement
                        across all plans. This
                        is disclosed before
                        confirmation.
                    </p>
                </div>

                {/* FAQ */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        Frequently Asked
                        Questions
                    </h2>

                    <div className="space-y-4">
                        {faq.map(
                            (item, i) => (
                                <div
                                    key={i}
                                    className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl"
                                >
                                    <button
                                        onClick={() =>
                                            setOpenFaq(
                                                openFaq ===
                                                    i
                                                    ? null
                                                    : i
                                            )
                                        }
                                        className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-medium hover:bg-white/[0.03] transition-colors"
                                    >
                                        {
                                            item.q
                                        }

                                        <span
                                            className={`text-gray-400 transition-transform ${openFaq ===
                                                    i
                                                    ? "rotate-45"
                                                    : ""
                                                }`}
                                        >
                                            +
                                        </span>
                                    </button>

                                    {openFaq ===
                                        i && (
                                            <div className="px-6 pb-5 text-sm text-gray-400 leading-7 border-t border-white/5 pt-4">
                                                {
                                                    item.a
                                                }
                                            </div>
                                        )}
                                </div>
                            )
                        )}
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
                            platform built for
                            modern lending and
                            repayment systems.
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
                            href="/pricing"
                            className="hover:text-white transition"
                        >
                            Pricing
                        </Link>

                        <Link
                            href="/dashboard"
                            className="hover:text-white transition"
                        >
                            Dashboard
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