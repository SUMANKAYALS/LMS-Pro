"use client";

import Link from "next/link";

import { useState } from "react";

import {
    Bell,
    Search,
    Shield,
    Download,
    KeyRound,
    Lock,
} from "lucide-react";

const securityFeatures = [
    {
        title: "256-bit AES Encryption",

        desc: "All data is encrypted using military-grade AES-256 encryption.",

        status: "Active",
    },

    {
        title: "Two-Factor Authentication",

        desc: "OTP and authenticator app enabled for secure access.",

        status: "Enabled",
    },

    {
        title: "AI Fraud Detection",

        desc: "Machine learning models detect suspicious activities in real-time.",

        status: "Monitoring",
    },

    {
        title: "Session Management",

        desc: "Track and revoke all active sessions securely.",

        status: "Active",
    },

    {
        title: "Immutable Audit Logs",

        desc: "Every account activity is securely logged and monitored.",

        status: "Active",
    },

    {
        title: "RBI & ISO Certified",

        desc: "Compliant with RBI and ISO 27001 security standards.",

        status: "Certified",
    },
];

const recentEvents = [
    {
        event: "Login from new device",

        time: "2 hours ago",

        risk: "Low",
    },

    {
        event: "Password changed successfully",

        time: "3 days ago",

        risk: "None",
    },

    {
        event: "Failed login attempt blocked",

        time: "2 weeks ago",

        risk: "High",
    },
];

export default function SecurityPage() {
    const [search, setSearch] =
        useState("");

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
                            placeholder="Search security logs..."
                            value={search}
                            onChange={(e) =>
                                setSearch(
                                    e.target
                                        .value
                                )
                            }
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
                {/* Top */}
                <div className="mb-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                                Security Center
                            </p>
                        </div>

                        <h1 className="text-5xl font-bold tracking-tight">
                            Account Security
                        </h1>

                        <p className="text-gray-400 mt-3 max-w-xl leading-7">
                            Enterprise-grade
                            protection for your
                            loans, payments,
                            account access, and
                            financial data.
                        </p>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
                        <button className="bg-white/5 border border-white/10 px-5 py-4 rounded-2xl hover:bg-white/10 transition flex items-center gap-3">
                            <KeyRound
                                size={18}
                            />

                            <span className="text-sm font-medium">
                                Enable Passkey
                            </span>
                        </button>

                        <button className="bg-white/5 border border-white/10 px-5 py-4 rounded-2xl hover:bg-white/10 transition flex items-center gap-3">
                            <Download
                                size={18}
                            />

                            <span className="text-sm font-medium">
                                Audit Logs
                            </span>
                        </button>

                        <button className="bg-white/5 border border-white/10 px-5 py-4 rounded-2xl hover:bg-white/10 transition flex items-center gap-3">
                            <Lock
                                size={18}
                            />

                            <span className="text-sm font-medium">
                                Change Password
                            </span>
                        </button>

                        <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-5 py-4 rounded-2xl hover:opacity-90 transition flex items-center gap-3">
                            <Shield
                                size={18}
                            />

                            <span className="text-sm font-semibold">
                                Security Settings
                            </span>
                        </button>
                    </div>
                </div>

                {/* Security Score */}
                <div className="bg-gradient-to-br from-emerald-900/20 to-cyan-900/10 border border-emerald-500/20 rounded-3xl p-8 mb-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3">
                                Security Score
                            </p>

                            <h2 className="text-6xl font-bold text-emerald-400">
                                92
                                <span className="text-2xl text-gray-500">
                                    /100
                                </span>
                            </h2>

                            <p className="text-gray-400 mt-3">
                                Excellent
                                protection level
                            </p>
                        </div>

                        {/* Progress */}
                        <div className="flex-1 w-full">
                            <div className="w-full bg-white/10 rounded-full h-4 overflow-hidden">
                                <div className="h-full w-[92%] bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full" />
                            </div>

                            <p className="text-xs text-gray-500 mt-3">
                                Enable passkey
                                login to reach
                                maximum security
                                score.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Security Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">
                    {securityFeatures.map(
                        (feature) => (
                            <div
                                key={
                                    feature.title
                                }
                                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:-translate-y-1 transition duration-300"
                            >
                                <div className="flex items-center justify-between mb-5">
                                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                        <Shield
                                            size={
                                                22
                                            }
                                            className="text-cyan-400"
                                        />
                                    </div>

                                    <span className="text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full">
                                        {
                                            feature.status
                                        }
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold mb-3">
                                    {
                                        feature.title
                                    }
                                </h3>

                                <p className="text-sm text-gray-400 leading-7">
                                    {
                                        feature.desc
                                    }
                                </p>
                            </div>
                        )
                    )}
                </div>

                {/* Threat Graph */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-7 mb-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-bold">
                                Threat Monitoring
                            </h2>

                            <p className="text-sm text-gray-400 mt-1">
                                Failed login
                                attempts &
                                suspicious
                                activities
                            </p>
                        </div>

                        <div className="text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-4 py-2 rounded-xl">
                            Live Monitoring
                        </div>
                    </div>

                    {/* Fake Graph */}
                    <div className="flex items-end gap-4 h-64">
                        {[20, 45, 30, 60, 40, 25, 70].map(
                            (
                                value,
                                index
                            ) => (
                                <div
                                    key={
                                        index
                                    }
                                    className="flex-1 flex flex-col items-center gap-3"
                                >
                                    <div
                                        className="w-full rounded-t-2xl bg-gradient-to-t from-cyan-500 to-purple-500"
                                        style={{
                                            height: `${value}%`,
                                        }}
                                    />

                                    <span className="text-xs text-gray-500">
                                        {
                                            [
                                                "Mon",
                                                "Tue",
                                                "Wed",
                                                "Thu",
                                                "Fri",
                                                "Sat",
                                                "Sun",
                                            ][
                                            index
                                            ]
                                        }
                                    </span>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Recent Events */}
                <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
                    <div className="px-7 py-5 border-b border-white/10">
                        <h2 className="text-2xl font-bold">
                            Security Event Log
                        </h2>

                        <p className="text-sm text-gray-400 mt-1">
                            Recent account
                            activities and
                            audit events
                        </p>
                    </div>

                    <div className="divide-y divide-white/[0.05]">
                        {recentEvents.map(
                            (event, i) => (
                                <div
                                    key={i}
                                    className="px-7 py-5 flex items-center justify-between gap-4 hover:bg-white/[0.03] transition"
                                >
                                    <div>
                                        <p className="font-medium">
                                            {
                                                event.event
                                            }
                                        </p>

                                        <p className="text-xs text-gray-500 mt-1">
                                            {
                                                event.time
                                            }
                                        </p>
                                    </div>

                                    <span
                                        className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${event.risk ===
                                                "High"
                                                ? "bg-red-500/10 text-red-400 border border-red-500/20"
                                                : event.risk ===
                                                    "Low"
                                                    ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                                    : "bg-white/5 text-gray-400 border border-white/10"
                                            }`}
                                    >
                                        {event.risk}
                                    </span>
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
                            loan management and
                            security platform.
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
                            href="/dashboard"
                            className="hover:text-white transition"
                        >
                            Dashboard
                        </Link>

                        <Link
                            href="/security"
                            className="hover:text-white transition"
                        >
                            Security
                        </Link>

                        <Link
                            href="/pricing"
                            className="hover:text-white transition"
                        >
                            Pricing
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