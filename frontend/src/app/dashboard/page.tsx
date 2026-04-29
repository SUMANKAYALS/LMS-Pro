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

export default function DashboardPage() {
    const [analytics, setAnalytics] =
        useState<any>(null);

    const [loading, setLoading] =
        useState(true);

    /**
     * 📊 Fetch Analytics
     */
    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const response =
                    await getDashboardAnalytics();

                setAnalytics(response.analytics);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchAnalytics();
    }, []);

    /**
     * ⏳ Loading
     */
    if (loading) {
        return (
            <main className="min-h-screen flex items-center justify-center text-white text-xl">
                Loading analytics...
            </main>
        );
    }

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

// "use client";

// import { useEffect, useState } from "react";
// import {
//     CreditCard,
//     Wallet,
//     BadgeDollarSign,
//     Users,
//     TrendingUp,
//     TrendingDown,
//     ArrowRight,
//     RefreshCw,
//     CheckCircle2,
//     XCircle,
//     Clock,
//     Activity,
//     AlertCircle,
// } from "lucide-react";
// import LoanChart from "@/components/dashboard/LoanChart";
// import { getDashboardAnalytics } from "@/services/analytics.service";

// /* ─── Types ──────────────────────────────────────────────────────── */
// interface Analytics {
//     totalLoans: number;
//     totalLoanAmount: number;
//     totalPayments: number;
//     totalUsers: number;
//     monthlyLoans: any[];
// }

// /* ─── Skeleton ───────────────────────────────────────────────────── */
// function Skeleton({ className }: { className?: string }) {
//     return (
//         <div
//             className={`rounded-xl animate-pulse ${className}`}
//             style={{ background: "rgba(255,255,255,0.05)" }}
//         />
//     );
// }

// /* ─── Metric Card ────────────────────────────────────────────────── */
// function MetricCard({
//     title,
//     value,
//     growth,
//     icon: Icon,
//     accent,
//     prefix = "",
//     loading,
// }: {
//     title: string;
//     value: string | number;
//     growth: string;
//     icon: React.ElementType;
//     accent: string;
//     prefix?: string;
//     loading?: boolean;
// }) {
//     const isPositive = !growth.startsWith("-");

//     if (loading) {
//         return (
//             <div
//                 className="rounded-2xl p-6"
//                 style={{
//                     background: "rgba(255,255,255,0.03)",
//                     border: "0.5px solid rgba(255,255,255,0.07)",
//                 }}
//             >
//                 <Skeleton className="h-4 w-24 mb-4" />
//                 <Skeleton className="h-8 w-32 mb-3" />
//                 <Skeleton className="h-3 w-20" />
//             </div>
//         );
//     }

//     return (
//         <div
//             className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
//             style={{
//                 background: "rgba(255,255,255,0.03)",
//                 border: "0.5px solid rgba(255,255,255,0.08)",
//                 backdropFilter: "blur(16px)",
//             }}
//         >
//             {/* Accent glow */}
//             <div
//                 className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                 style={{
//                     background: `radial-gradient(circle, ${accent}18, transparent 70%)`,
//                     transform: "translate(30%,-30%)",
//                 }}
//             />

//             {/* Top row */}
//             <div className="flex items-start justify-between mb-5">
//                 <div
//                     className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
//                     style={{ background: `${accent}18`, border: `0.5px solid ${accent}30` }}
//                 >
//                     <Icon size={17} style={{ color: accent }} />
//                 </div>
//                 <div
//                     className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full"
//                     style={{
//                         background: isPositive
//                             ? "rgba(52,211,153,0.1)"
//                             : "rgba(248,113,113,0.1)",
//                         color: isPositive ? "#34d399" : "#f87171",
//                     }}
//                 >
//                     {isPositive ? (
//                         <TrendingUp size={11} />
//                     ) : (
//                         <TrendingDown size={11} />
//                     )}
//                     {growth}
//                 </div>
//             </div>

//             {/* Value */}
//             <p
//                 className="text-2xl font-extrabold text-white mb-1 tracking-tight"
//                 style={{ fontFamily: "'Syne', sans-serif" }}
//             >
//                 {prefix}{value}
//             </p>
//             <p
//                 className="text-xs font-medium tracking-widest uppercase"
//                 style={{ color: "rgba(148,163,184,0.45)" }}
//             >
//                 {title}
//             </p>

//             {/* Bottom bar */}
//             <div
//                 className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                 style={{ background: `linear-gradient(90deg, ${accent}60, transparent)` }}
//             />
//         </div>
//     );
// }

// /* ─── Activity Row ───────────────────────────────────────────────── */
// type ActivityStatus = "Approved" | "Paid" | "Rejected" | "Pending";

// const STATUS_CONFIG: Record<
//     ActivityStatus,
//     { bg: string; color: string; icon: React.ElementType; dot: string }
// > = {
//     Approved: {
//         bg: "rgba(52,211,153,0.1)",
//         color: "#34d399",
//         icon: CheckCircle2,
//         dot: "#34d399",
//     },
//     Paid: {
//         bg: "rgba(6,182,212,0.1)",
//         color: "#22d3ee",
//         icon: BadgeDollarSign,
//         dot: "#22d3ee",
//     },
//     Rejected: {
//         bg: "rgba(248,113,113,0.1)",
//         color: "#f87171",
//         icon: XCircle,
//         dot: "#f87171",
//     },
//     Pending: {
//         bg: "rgba(251,191,36,0.1)",
//         color: "#fbbf24",
//         icon: Clock,
//         dot: "#fbbf24",
//     },
// };

// function ActivityRow({
//     title,
//     subtitle,
//     status,
//     amount,
//     time,
//     initials,
// }: {
//     title: string;
//     subtitle: string;
//     status: ActivityStatus;
//     amount?: string;
//     time: string;
//     initials: string;
// }) {
//     const cfg = STATUS_CONFIG[status];
//     const StatusIcon = cfg.icon;

//     return (
//         <div
//             className="flex items-center gap-4 p-4 rounded-xl transition-colors duration-200 group"
//             style={{ border: "0.5px solid transparent" }}
//             onMouseEnter={(e) =>
//                 (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")
//             }
//             onMouseLeave={(e) =>
//                 (e.currentTarget.style.borderColor = "transparent")
//             }
//         >
//             {/* Avatar */}
//             <div
//                 className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0"
//                 style={{
//                     background: "rgba(255,255,255,0.05)",
//                     color: "rgba(148,163,184,0.7)",
//                 }}
//             >
//                 {initials}
//             </div>

//             {/* Text */}
//             <div className="flex-1 min-w-0">
//                 <p className="text-sm font-medium text-white/80 truncate">{title}</p>
//                 <p className="text-xs truncate" style={{ color: "rgba(148,163,184,0.45)" }}>
//                     {subtitle}
//                 </p>
//             </div>

//             {/* Amount */}
//             {amount && (
//                 <p className="text-sm font-semibold text-white/70 hidden sm:block">
//                     {amount}
//                 </p>
//             )}

//             {/* Time */}
//             <p
//                 className="text-xs hidden md:block flex-shrink-0"
//                 style={{ color: "rgba(148,163,184,0.35)" }}
//             >
//                 {time}
//             </p>

//             {/* Status badge */}
//             <div
//                 className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold flex-shrink-0"
//                 style={{ background: cfg.bg, color: cfg.color }}
//             >
//                 <StatusIcon size={11} />
//                 {status}
//             </div>
//         </div>
//     );
// }

// /* ─── Quick Stat Bar ─────────────────────────────────────────────── */
// function QuickBar({
//     label,
//     value,
//     total,
//     color,
// }: {
//     label: string;
//     value: number;
//     total: number;
//     color: string;
// }) {
//     const pct = total > 0 ? Math.round((value / total) * 100) : 0;
//     return (
//         <div>
//             <div className="flex justify-between items-center mb-1.5">
//                 <p className="text-xs" style={{ color: "rgba(148,163,184,0.55)" }}>
//                     {label}
//                 </p>
//                 <p className="text-xs font-semibold text-white/70">{value} <span style={{ color: "rgba(148,163,184,0.35)" }}>({pct}%)</span></p>
//             </div>
//             <div
//                 className="h-1.5 rounded-full overflow-hidden"
//                 style={{ background: "rgba(255,255,255,0.06)" }}
//             >
//                 <div
//                     className="h-full rounded-full transition-all duration-1000"
//                     style={{ width: `${pct}%`, background: color }}
//                 />
//             </div>
//         </div>
//     );
// }

// /* ─── Main Page ──────────────────────────────────────────────────── */
// export default function DashboardPage() {
//     const [analytics, setAnalytics] = useState<Analytics | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [refreshing, setRefreshing] = useState(false);
//     const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

//     const fetchAnalytics = async (silent = false) => {
//         if (silent) setRefreshing(true);
//         else setLoading(true);
//         try {
//             const response = await getDashboardAnalytics();
//             setAnalytics(response.analytics);
//             setLastUpdated(new Date());
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setLoading(false);
//             setRefreshing(false);
//         }
//     };

//     useEffect(() => {
//         fetchAnalytics();
//     }, []);

//     const totalLoans = analytics?.totalLoans || 0;

//     return (
//         <main className="space-y-7" style={{ fontFamily: "'DM Sans', sans-serif" }}>
//             <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');`}</style>

//             {/* ── Header ── */}
//             <div className="flex items-start justify-between gap-4 flex-wrap">
//                 <div>
//                     <p
//                         className="text-xs font-bold tracking-[0.18em] uppercase mb-2"
//                         style={{ color: "#22d3ee" }}
//                     >
//                         Overview
//                     </p>
//                     <h1
//                         className="text-4xl font-extrabold text-white"
//                         style={{ fontFamily: "'Syne', sans-serif" }}
//                     >
//                         Analytics Dashboard
//                     </h1>
//                     <p className="text-sm mt-1.5" style={{ color: "rgba(148,163,184,0.55)" }}>
//                         Monitor loans, payments, and borrower activity in real time
//                     </p>
//                 </div>

//                 <div className="flex items-center gap-3 flex-wrap">
//                     {/* Last updated */}
//                     <div
//                         className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-xl"
//                         style={{
//                             background: "rgba(255,255,255,0.04)",
//                             border: "0.5px solid rgba(255,255,255,0.07)",
//                             color: "rgba(148,163,184,0.45)",
//                         }}
//                     >
//                         <Activity size={11} style={{ color: "#34d399" }} />
//                         Updated {lastUpdated.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
//                     </div>

//                     {/* Refresh */}
//                     <button
//                         onClick={() => fetchAnalytics(true)}
//                         disabled={refreshing}
//                         className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors"
//                         style={{
//                             background: "rgba(255,255,255,0.05)",
//                             border: "0.5px solid rgba(255,255,255,0.09)",
//                             color: "rgba(255,255,255,0.6)",
//                         }}
//                     >
//                         <RefreshCw
//                             size={13}
//                             style={{
//                                 color: "#22d3ee",
//                                 animation: refreshing ? "spin 1s linear infinite" : "none",
//                             }}
//                         />
//                         {refreshing ? "Refreshing…" : "Refresh"}
//                     </button>
//                 </div>
//             </div>

//             {/* ── Metric Cards ── */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
//                 <MetricCard
//                     title="Total Loans"
//                     value={analytics?.totalLoans?.toLocaleString() || "0"}
//                     growth="+18%"
//                     icon={CreditCard}
//                     accent="#06b6d4"
//                     loading={loading}
//                 />
//                 <MetricCard
//                     title="Total Disbursed"
//                     value={(analytics?.totalLoanAmount || 0).toLocaleString("en-IN")}
//                     growth="+12%"
//                     icon={Wallet}
//                     accent="#8b5cf6"
//                     prefix="₹"
//                     loading={loading}
//                 />
//                 <MetricCard
//                     title="Total Payments"
//                     value={(analytics?.totalPayments || 0).toLocaleString("en-IN")}
//                     growth="+22%"
//                     icon={BadgeDollarSign}
//                     accent="#10b981"
//                     prefix="₹"
//                     loading={loading}
//                 />
//                 <MetricCard
//                     title="Registered Users"
//                     value={analytics?.totalUsers?.toLocaleString() || "0"}
//                     growth="+9%"
//                     icon={Users}
//                     accent="#f59e0b"
//                     loading={loading}
//                 />
//             </div>

//             {/* ── Chart + Breakdown ── */}
//             <div className="grid xl:grid-cols-[1fr_320px] gap-5">
//                 {/* Chart */}
//                 <div
//                     className="rounded-2xl p-6"
//                     style={{
//                         background: "rgba(255,255,255,0.03)",
//                         border: "0.5px solid rgba(255,255,255,0.07)",
//                         backdropFilter: "blur(16px)",
//                     }}
//                 >
//                     <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
//                         <div>
//                             <h2
//                                 className="text-lg font-bold text-white"
//                                 style={{ fontFamily: "'Syne', sans-serif" }}
//                             >
//                                 Loan Disbursement Trend
//                             </h2>
//                             <p className="text-xs mt-0.5" style={{ color: "rgba(148,163,184,0.45)" }}>
//                                 Monthly volume over the last 12 months
//                             </p>
//                         </div>
//                         <div className="flex items-center gap-4 text-xs">
//                             {[
//                                 { label: "Disbursed", color: "#06b6d4" },
//                                 { label: "Repaid", color: "#8b5cf6" },
//                             ].map((l) => (
//                                 <div key={l.label} className="flex items-center gap-1.5" style={{ color: "rgba(148,163,184,0.55)" }}>
//                                     <span className="w-2.5 h-2.5 rounded-full" style={{ background: l.color }} />
//                                     {l.label}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     {loading ? (
//                         <Skeleton className="h-56 w-full" />
//                     ) : (
//                         <LoanChart data={analytics?.monthlyLoans || []} />
//                     )}
//                 </div>

//                 {/* Breakdown panel */}
//                 <div
//                     className="rounded-2xl p-6"
//                     style={{
//                         background: "rgba(255,255,255,0.03)",
//                         border: "0.5px solid rgba(255,255,255,0.07)",
//                         backdropFilter: "blur(16px)",
//                     }}
//                 >
//                     <div className="mb-6">
//                         <h2
//                             className="text-lg font-bold text-white"
//                             style={{ fontFamily: "'Syne', sans-serif" }}
//                         >
//                             Portfolio Breakdown
//                         </h2>
//                         <p className="text-xs mt-0.5" style={{ color: "rgba(148,163,184,0.45)" }}>
//                             Loan status distribution
//                         </p>
//                     </div>

//                     {loading ? (
//                         <div className="space-y-5">
//                             {[1, 2, 3, 4].map((i) => <Skeleton key={i} className="h-8 w-full" />)}
//                         </div>
//                     ) : (
//                         <div className="space-y-5">
//                             <QuickBar label="Approved" value={Math.round(totalLoans * 0.58)} total={totalLoans} color="#34d399" />
//                             <QuickBar label="Active / Disbursed" value={Math.round(totalLoans * 0.22)} total={totalLoans} color="#22d3ee" />
//                             <QuickBar label="Pending Review" value={Math.round(totalLoans * 0.12)} total={totalLoans} color="#fbbf24" />
//                             <QuickBar label="Rejected" value={Math.round(totalLoans * 0.08)} total={totalLoans} color="#f87171" />
//                         </div>
//                     )}

//                     {/* Divider */}
//                     <div className="my-6 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />

//                     {/* Quick KPIs */}
//                     <div className="space-y-4">
//                         {[
//                             { label: "Avg. Loan Size", value: analytics ? `₹${Math.round((analytics.totalLoanAmount || 0) / Math.max(totalLoans, 1)).toLocaleString("en-IN")}` : "—", color: "#22d3ee" },
//                             { label: "Repayment Rate", value: "94.2%", color: "#34d399" },
//                             { label: "NPA Ratio", value: "1.8%", color: "#fbbf24" },
//                         ].map((kpi) => (
//                             <div key={kpi.label} className="flex items-center justify-between">
//                                 <p className="text-xs" style={{ color: "rgba(148,163,184,0.45)" }}>{kpi.label}</p>
//                                 <p className="text-sm font-bold" style={{ color: kpi.color, fontFamily: "'Syne',sans-serif" }}>{kpi.value}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* ── Recent Activity ── */}
//             <div
//                 className="rounded-2xl"
//                 style={{
//                     background: "rgba(255,255,255,0.03)",
//                     border: "0.5px solid rgba(255,255,255,0.07)",
//                     backdropFilter: "blur(16px)",
//                     overflow: "hidden",
//                 }}
//             >
//                 {/* Header */}
//                 <div
//                     className="flex items-center justify-between px-6 py-5"
//                     style={{ borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}
//                 >
//                     <div>
//                         <h2
//                             className="text-lg font-bold text-white"
//                             style={{ fontFamily: "'Syne', sans-serif" }}
//                         >
//                             Recent Activity
//                         </h2>
//                         <p className="text-xs mt-0.5" style={{ color: "rgba(148,163,184,0.45)" }}>
//                             Latest loan events and transactions
//                         </p>
//                     </div>
//                     <button
//                         className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-xl transition-colors"
//                         style={{
//                             background: "rgba(6,182,212,0.08)",
//                             border: "0.5px solid rgba(6,182,212,0.2)",
//                             color: "#22d3ee",
//                         }}
//                     >
//                         View All
//                         <ArrowRight size={12} />
//                     </button>
//                 </div>

//                 {/* Column headers */}
//                 <div
//                     className="hidden md:grid grid-cols-[36px_1fr_100px_80px_110px] gap-4 items-center px-6 py-3"
//                     style={{ borderBottom: "0.5px solid rgba(255,255,255,0.04)" }}
//                 >
//                     {["", "Activity", "Amount", "Time", "Status"].map((h) => (
//                         <p
//                             key={h}
//                             className="text-[10px] font-bold tracking-widest uppercase"
//                             style={{ color: "rgba(148,163,184,0.3)" }}
//                         >
//                             {h}
//                         </p>
//                     ))}
//                 </div>

//                 {/* Rows */}
//                 {loading ? (
//                     <div className="p-6 space-y-3">
//                         {[1, 2, 3].map((i) => <Skeleton key={i} className="h-14 w-full" />)}
//                     </div>
//                 ) : (
//                     <div className="px-2 py-2">
//                         <ActivityRow
//                             initials="RK"
//                             title="Loan Approved — Rajesh Kumar"
//                             subtitle="Personal loan application processed and disbursed"
//                             status="Approved"
//                             amount="₹2,50,000"
//                             time="2 min ago"
//                         />
//                         <ActivityRow
//                             initials="PS"
//                             title="EMI Payment Received — Priya Sharma"
//                             subtitle="Monthly instalment successfully credited"
//                             status="Paid"
//                             amount="₹12,400"
//                             time="18 min ago"
//                         />
//                         <ActivityRow
//                             initials="AP"
//                             title="Loan Rejected — Amit Patel"
//                             subtitle="Business rules validation failed — low CIBIL score"
//                             status="Rejected"
//                             amount="₹5,00,000"
//                             time="1 hr ago"
//                         />
//                         <ActivityRow
//                             initials="SM"
//                             title="Application Pending — Sunita Mehta"
//                             subtitle="Awaiting document verification and credit check"
//                             status="Pending"
//                             amount="₹80,000"
//                             time="3 hrs ago"
//                         />
//                         <ActivityRow
//                             initials="VR"
//                             title="Loan Approved — Vikram Rao"
//                             subtitle="Home renovation loan cleared after KYC verification"
//                             status="Approved"
//                             amount="₹8,50,000"
//                             time="5 hrs ago"
//                         />
//                     </div>
//                 )}
//             </div>

//             {/* ── Alert Banner ── */}
//             <div
//                 className="flex items-start gap-3 rounded-xl px-5 py-4"
//                 style={{
//                     background: "rgba(251,191,36,0.06)",
//                     border: "0.5px solid rgba(251,191,36,0.2)",
//                 }}
//             >
//                 <AlertCircle size={15} style={{ color: "#fbbf24", flexShrink: 0, marginTop: 1 }} />
//                 <p className="text-xs leading-relaxed" style={{ color: "rgba(148,163,184,0.6)" }}>
//                     <span className="font-semibold" style={{ color: "#fbbf24" }}>3 loans</span> are past their due date and flagged for follow-up. Visit the Collections module to initiate recovery actions.
//                 </p>
//                 <button
//                     className="ml-auto flex-shrink-0 text-xs font-semibold flex items-center gap-1"
//                     style={{ color: "#fbbf24" }}
//                 >
//                     Review <ArrowRight size={11} />
//                 </button>
//             </div>
//         </main>
//     );
// }