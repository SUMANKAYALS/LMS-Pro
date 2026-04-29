"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  CreditCard,
  BarChart3,
  Wallet,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Clock,
  Users,
  ChevronRight,
  Zap,
  IndianRupee,
} from "lucide-react";

/* ─── Animated counter hook ─────────────────────────────────────────── */
function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

/* ─── Typing effect hook ─────────────────────────────────────────────── */
function useTyping(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        if (charIdx === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx((c) => c + 1);
        }
      }, speed);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        if (charIdx === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
        } else {
          setCharIdx((c) => c - 1);
        }
      }, speed / 2);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  useEffect(() => {
    if (!deleting) setCharIdx((c) => c + 1);
  }, [wordIdx]);

  return display;
}

/* ─── Stat Card ─────────────────────────────────────────────────────── */
function StatCard({
  label,
  value,
  suffix = "",
  prefix = "",
  accent,
  started,
}: {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  accent: string;
  started: boolean;
}) {
  const count = useCounter(value, 1600, started);
  return (
    <div
      className="relative overflow-hidden rounded-2xl p-6 border border-white/8 backdrop-blur-xl"
      style={{ background: "rgba(255,255,255,0.03)" }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 0% 0%, ${accent}, transparent 70%)`,
        }}
      />
      <p className="text-xs font-medium tracking-widest text-white/40 uppercase mb-3">
        {label}
      </p>
      <p className="text-4xl font-black text-white tracking-tight">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </p>
    </div>
  );
}

/* ─── Feature Card ────────────────────────────────────────────────── */
function FeatureCard({
  icon: Icon,
  title,
  desc,
  accent,
  items,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  accent: string;
  items: string[];
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-3xl border border-white/8 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
      style={{ background: "rgba(255,255,255,0.03)" }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 0% 100%, ${accent}18, transparent 60%)`,
        }}
      />
      <div
        className="mb-6 inline-flex p-3.5 rounded-2xl"
        style={{ background: `${accent}20` }}
      >
        <Icon size={22} style={{ color: accent }} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/50 text-sm leading-relaxed mb-6">{desc}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-white/60">
            <CheckCircle2 size={13} style={{ color: accent }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Loan Activity Row ───────────────────────────────────────────── */
function ActivityRow({
  name,
  amount,
  status,
  time,
}: {
  name: string;
  amount: string;
  status: "Approved" | "Pending" | "Processing";
  time: string;
}) {
  const colors = {
    Approved: { bg: "rgba(52,211,153,0.12)", text: "#34d399" },
    Pending: { bg: "rgba(251,191,36,0.12)", text: "#fbbf24" },
    Processing: { bg: "rgba(96,165,250,0.12)", text: "#60a5fa" },
  };
  const c = colors[status];
  return (
    <div className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold"
          style={{ background: "rgba(255,255,255,0.06)", color: "#94a3b8" }}
        >
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-medium text-white/80">{name}</p>
          <p className="text-xs text-white/30">{time}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-white">{amount}</span>
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-full"
          style={{ background: c.bg, color: c.text }}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

/* ─── Main Page ───────────────────────────────────────────────────── */
export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const typed = useTyping(["Repayments", "Analytics", "EMI Tracking", "Approvals"]);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  /* Parallax on hero orbs */
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const dx = (clientX / w - 0.5) * 30;
      const dy = (clientY / h - 0.5) * 30;
      const orb1 = heroRef.current.querySelector<HTMLElement>(".orb-1");
      const orb2 = heroRef.current.querySelector<HTMLElement>(".orb-2");
      if (orb1) orb1.style.transform = `translate(${dx}px, ${dy}px)`;
      if (orb2) orb2.style.transform = `translate(${-dx}px, ${-dy}px)`;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <main
      className="min-h-screen text-white overflow-x-hidden"
      style={{ background: "#060912" }}
    >
      {/* ── Global Style ─────────────────────────────────────── */}
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

                * { font-family: 'DM Sans', sans-serif; }
                .font-display { font-family: 'Syne', sans-serif; }

                .grid-bg {
                    background-image:
                        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
                    background-size: 60px 60px;
                }

                .noise::before {
                    content: '';
                    position: fixed;
                    inset: 0;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
                    pointer-events: none;
                    z-index: 0;
                    opacity: 0.4;
                }

                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .fade-up { animation: fadeUp 0.7s ease both; }
                .delay-1 { animation-delay: 0.1s; }
                .delay-2 { animation-delay: 0.22s; }
                .delay-3 { animation-delay: 0.36s; }
                .delay-4 { animation-delay: 0.52s; }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
                .float { animation: float 6s ease-in-out infinite; }

                @keyframes pulse-ring {
                    0% { transform: scale(1); opacity: 0.6; }
                    100% { transform: scale(1.6); opacity: 0; }
                }

                @keyframes slide-in-row {
                    from { opacity: 0; transform: translateX(-10px); }
                    to   { opacity: 1; transform: translateX(0); }
                }

                .ticker-wrap { overflow: hidden; mask-image: linear-gradient(90deg, transparent, black 15%, black 85%, transparent); }
                @keyframes ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .ticker-inner { display: flex; animation: ticker 22s linear infinite; width: max-content; }

                .cursor { display: inline-block; width: 2px; height: 1em; background: #22d3ee; margin-left: 2px; vertical-align: text-bottom; animation: blink 1s step-start infinite; }
                @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

                .btn-primary {
                    position: relative; overflow: hidden;
                    background: linear-gradient(135deg, #06b6d4, #8b5cf6);
                    transition: opacity 0.2s, transform 0.15s;
                }
                .btn-primary::after {
                    content: ''; position: absolute; inset: 0;
                    background: linear-gradient(135deg, #22d3ee, #a78bfa);
                    opacity: 0; transition: opacity 0.3s;
                }
                .btn-primary:hover::after { opacity: 1; }
                .btn-primary:hover { transform: translateY(-1px); }
                .btn-primary > * { position: relative; z-index: 1; }

                .glass-card {
                    background: rgba(255,255,255,0.03);
                    border: 0.5px solid rgba(255,255,255,0.09);
                    backdrop-filter: blur(24px);
                }

                .orb-1, .orb-2 { transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); }

                .nav-link {
                    position: relative; padding: 6px 12px; font-size: 14px;
                    color: rgba(255,255,255,0.6); transition: color 0.2s;
                    letter-spacing: 0.01em;
                }
                .nav-link::after {
                    content: ''; position: absolute; bottom: 0; left: 50%; right: 50%;
                    height: 1px; background: #22d3ee; transition: all 0.3s;
                }
                .nav-link:hover { color: #fff; }
                .nav-link:hover::after { left: 12px; right: 12px; }

                .step-line::after {
                    content: '';
                    position: absolute;
                    top: 20px; left: 50%;
                    width: 100%; height: 1px;
                    background: linear-gradient(90deg, rgba(6,182,212,0.4), transparent);
                }
            `}</style>

      {/* ── Noise overlay ─────────────────────────────────────── */}
      <div className="noise" />

      {/* ── Grid BG ───────────────────────────────────────────── */}
      <div className="fixed inset-0 grid-bg opacity-100 pointer-events-none" />

      {/* ── Ambient orbs ──────────────────────────────────────── */}
      <div
        ref={heroRef}
        className="fixed inset-0 pointer-events-none overflow-hidden"
      >
        <div
          className="orb-1 absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="orb-2 absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════
                NAVBAR
            ══════════════════════════════════════════════════════════ */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "rgba(6,9,18,0.75)",
          backdropFilter: "blur(20px)",
          borderBottom: "0.5px solid rgba(255,255,255,0.07)",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
              }}
            >
              <IndianRupee size={15} className="text-white" />
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
          </div>

          {/* Center Links */}
          {/* <div className="hidden lg:flex items-center gap-1">
            {["features", "analytics", "security", "pricing"].map((item) => (
              <a key={item} href={item} className="nav-link" >
                {item}
              </a>
            ))}
          </div> */}

          {/* Center Links */}
          <div className="hidden lg:flex items-center gap-1">
            {["features", "analytics", "security", "pricing", "about"].map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link href="/login" className="nav-link hidden sm:block">
              Sign in
            </Link>
            <Link
              href="/register"
              className="btn-primary flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
            >
              <span>Get Started</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </nav>
      </header>

      {/* ═══════════════════════════════════════════════════════
                TRUST TICKER
            ══════════════════════════════════════════════════════════ */}
      <div
        className="fixed top-16 left-0 right-0 z-40 ticker-wrap py-2"
        style={{
          background: "rgba(6,9,18,0.9)",
          borderBottom: "0.5px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="ticker-inner">
          {[
            "₹500Cr+ Loans Managed",
            "99.9% Uptime SLA",
            "ISO 27001 Certified",
            "RBI Compliant",
            "48hr Approval Time",
            "Enterprise Ready",
            "End-to-End Encryption",
            "Real-time Analytics",
            "₹500Cr+ Loans Managed",
            "99.9% Uptime SLA",
            "ISO 27001 Certified",
            "RBI Compliant",
            "48hr Approval Time",
            "Enterprise Ready",
            "End-to-End Encryption",
            "Real-time Analytics",
          ].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-6 px-8 text-xs font-medium tracking-wider"
              style={{ color: "rgba(148,163,184,0.6)" }}
            >
              <span
                className="w-1 h-1 rounded-full"
                style={{ background: "#06b6d4" }}
              />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
                HERO
            ══════════════════════════════════════════════════════════ */}
      <section className="relative z-10 min-h-screen flex items-center pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-16 items-center">

            {/* ── Left ── */}
            <div>
              {/* Badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-8 fade-up ${heroVisible ? "" : "opacity-0"}`}
                style={{
                  background: "rgba(6,182,212,0.1)",
                  border: "0.5px solid rgba(6,182,212,0.3)",
                  color: "#22d3ee",
                }}
              >
                <span
                  className="relative flex h-2 w-2"
                >
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ background: "#22d3ee" }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-2 w-2"
                    style={{ background: "#22d3ee" }}
                  />
                </span>
                Enterprise Loan Management Platform
              </div>

              {/* Headline */}
              <h1
                className={`font-display text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 fade-up delay-1 ${heroVisible ? "" : "opacity-0"}`}
              >
                <span style={{ color: "#f1f5f9" }}>
                  Manage Loans &{" "}
                </span>
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #22d3ee 0%, #818cf8 50%, #c084fc 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {typed}
                  <span className="cursor" />
                </span>
                <br />
                <span style={{ color: "#f1f5f9" }}>
                  at Scale.
                </span>
              </h1>

              {/* Subtext */}
              <p
                className={`text-base leading-relaxed max-w-lg mb-10 fade-up delay-2 ${heroVisible ? "" : "opacity-0"}`}
                style={{ color: "rgba(148,163,184,0.85)" }}
              >
                A modern, end-to-end lending platform built for financial
                institutions. Streamline applications, approvals, EMI tracking,
                and real-time reporting — all from one secure dashboard.
              </p>

              {/* Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 mb-14 fade-up delay-3 ${heroVisible ? "" : "opacity-0"}`}
              >
                <Link
                  href="/dashboard/apply-loan"
                  className="btn-primary flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-base font-semibold text-white"
                >
                  <span>Apply for Loan</span>
                  <ArrowRight size={17} />
                </Link>
                <Link
                  href="/dashboard"
                  className="glass-card flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base text-white/70 hover:text-white hover:border-white/20 transition-all duration-200"
                >
                  View Dashboard
                  <ChevronRight size={16} />
                </Link>
              </div>

              {/* Social proof */}
              <div
                className={`flex items-center gap-6 fade-up delay-4 ${heroVisible ? "" : "opacity-0"}`}
              >
                <div className="flex -space-x-2">
                  {["#06b6d4", "#8b5cf6", "#10b981", "#f59e0b"].map(
                    (color, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                        style={{
                          background: color + "30",
                          borderColor: color + "60",
                          color,
                        }}
                      >
                        {["A", "B", "S", "R"][i]}
                      </div>
                    )
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-white/80">
                    Trusted by 500+ lenders
                  </p>
                  <p className="text-xs" style={{ color: "#94a3b8" }}>
                    ★★★★★ Rated 4.9 on enterprise reviews
                  </p>
                </div>
              </div>
            </div>

            {/* ── Right: Dashboard Card ── */}
            <div className="relative float">
              {/* Glow behind */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.35), transparent 70%)",
                  filter: "blur(30px)",
                  transform: "scale(1.1)",
                }}
              />

              <div className="relative glass-card rounded-3xl p-6 shadow-2xl">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-white/30 uppercase mb-1">
                      Portfolio Overview
                    </p>
                    <h2 className="font-display text-xl font-bold text-white">
                      Dashboard
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{
                        background: "rgba(52,211,153,0.12)",
                        color: "#34d399",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: "#34d399" }}
                      />
                      Live
                    </div>
                  </div>
                </div>

                {/* Stat Grid */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    {
                      label: "Total Disbursed",
                      value: "₹12.4 Cr",
                      change: "+18.2%",
                      up: true,
                    },
                    {
                      label: "Collections",
                      value: "₹8.7 Cr",
                      change: "+6.4%",
                      up: true,
                    },
                    {
                      label: "Active Borrowers",
                      value: "1,240",
                      change: "+24",
                      up: true,
                    },
                    {
                      label: "NPA Ratio",
                      value: "1.8%",
                      change: "-0.3%",
                      up: false,
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl p-4"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "0.5px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      <p
                        className="text-xs mb-2"
                        style={{ color: "rgba(148,163,184,0.6)" }}
                      >
                        {stat.label}
                      </p>
                      <p className="text-xl font-bold text-white font-display">
                        {stat.value}
                      </p>
                      <p
                        className="text-xs font-medium mt-1"
                        style={{
                          color: stat.up ? "#34d399" : "#f87171",
                        }}
                      >
                        {stat.change} this month
                      </p>
                    </div>
                  ))}
                </div>

                {/* Mini chart bars */}
                <div
                  className="rounded-2xl p-4 mb-4"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "0.5px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-white/40 font-medium">Disbursement — Last 6 Months</p>
                    <TrendingUp size={13} style={{ color: "#22d3ee" }} />
                  </div>
                  <div className="flex items-end gap-1.5 h-14">
                    {[35, 55, 42, 70, 88, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm transition-all duration-1000"
                        style={{
                          height: `${h}%`,
                          background:
                            i === 5
                              ? "linear-gradient(180deg,#22d3ee,#818cf8)"
                              : "rgba(255,255,255,0.08)",
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-1.5">
                    {["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"].map((m) => (
                      <span
                        key={m}
                        className="text-[10px] flex-1 text-center"
                        style={{ color: "rgba(148,163,184,0.35)" }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <p className="text-xs font-semibold tracking-widest text-white/30 uppercase mb-3">
                    Recent Activity
                  </p>
                  <ActivityRow
                    name="Rajesh Kumar"
                    amount="₹2,50,000"
                    status="Approved"
                    time="2 min ago"
                  />
                  <ActivityRow
                    name="Priya Sharma"
                    amount="₹80,000"
                    status="Processing"
                    time="14 min ago"
                  />
                  <ActivityRow
                    name="Amit Patel"
                    amount="₹5,00,000"
                    status="Pending"
                    time="1 hr ago"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
                METRICS STRIP
            ══════════════════════════════════════════════════════════ */}
      <section className="relative z-10 py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div
            className="glass-card rounded-3xl p-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(6,182,212,0.07) 0%, rgba(139,92,246,0.07) 100%)",
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard
                label="Loans Processed"
                value={12400}
                suffix="+"
                accent="#06b6d4"
                started={heroVisible}
              />
              <StatCard
                label="Total Disbursed (Cr)"
                prefix="₹"
                value={500}
                suffix="+"
                accent="#8b5cf6"
                started={heroVisible}
              />
              <StatCard
                label="Repayment Rate"
                value={98}
                suffix="%"
                accent="#10b981"
                started={heroVisible}
              />
              <StatCard
                label="Institutions Served"
                value={540}
                suffix="+"
                accent="#f59e0b"
                started={heroVisible}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
                HOW IT WORKS
            ══════════════════════════════════════════════════════════ */}
      <section className="relative z-10 py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#22d3ee" }}
            >
              Workflow
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-5">
              From Application to Closure
            </h2>
            <p
              className="text-base max-w-2xl mx-auto leading-relaxed"
              style={{ color: "rgba(148,163,184,0.7)" }}
            >
              A structured, automated pipeline that eliminates manual
              bottlenecks at every stage of the loan lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Apply Online",
                desc: "Borrowers submit digital applications with auto-filled KYC and document verification.",
                icon: CreditCard,
                accent: "#06b6d4",
              },
              {
                step: "02",
                title: "AI Risk Score",
                desc: "Intelligent credit scoring engine evaluates eligibility within seconds.",
                icon: Zap,
                accent: "#8b5cf6",
              },
              {
                step: "03",
                title: "Approval & Disbursal",
                desc: "Multi-level approval workflows with instant NEFT/IMPS disbursal on clearance.",
                icon: CheckCircle2,
                accent: "#10b981",
              },
              {
                step: "04",
                title: "EMI & Closure",
                desc: "Automated EMI reminders, payment tracking, and loan closure certificates.",
                icon: Wallet,
                accent: "#f59e0b",
              },
            ].map((item, i) => (
              <div key={item.step} className="relative">
                {i < 3 && (
                  <div
                    className="hidden md:block absolute top-8 left-full w-full h-px z-10"
                    style={{
                      background: `linear-gradient(90deg, ${item.accent}50, transparent)`,
                    }}
                  />
                )}
                <div className="glass-card rounded-3xl p-7 h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: item.accent + "20" }}
                    >
                      <item.icon size={20} style={{ color: item.accent }} />
                    </div>
                    <span
                      className="font-display text-4xl font-black"
                      style={{ color: "rgba(255,255,255,0.06)" }}
                    >
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.6)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
                FEATURES
            ══════════════════════════════════════════════════════════ */}
      <section className="relative z-10 py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#8b5cf6" }}
            >
              Capabilities
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-5">
              Everything You Need
              <br />
              to Run a Lending Business
            </h2>
            <p
              className="text-base max-w-2xl mx-auto leading-relaxed"
              style={{ color: "rgba(148,163,184,0.7)" }}
            >
              Purpose-built for NBFCs, MFIs, and cooperative banks —
              every feature mapped to a real operational need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <FeatureCard
              icon={CreditCard}
              title="Loan Origination"
              accent="#06b6d4"
              desc="End-to-end digital application with automated KYC, CIBIL pulls, and document OCR."
              items={[
                "Multi-product loan types",
                "eKYC integration",
                "Digital signature",
                "Bureau pull (CIBIL/Experian)",
              ]}
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Security & Compliance"
              accent="#8b5cf6"
              desc="Role-based access, end-to-end encryption, and full audit trails aligned to RBI norms."
              items={[
                "JWT + RBAC auth",
                "AES-256 encryption",
                "Full audit logs",
                "RBI data localization",
              ]}
            />
            <FeatureCard
              icon={BarChart3}
              title="Analytics & Reporting"
              accent="#10b981"
              desc="Live dashboards, portfolio health metrics, NPA alerts, and exportable MIS reports."
              items={[
                "Real-time dashboards",
                "NPA & risk heatmaps",
                "Custom MIS exports",
                "Trend forecasting",
              ]}
            />
            <FeatureCard
              icon={Wallet}
              title="Collections & EMI"
              accent="#f59e0b"
              desc="Smart EMI engine with automated reminders, NACH mandates, and prepayment workflows."
              items={[
                "NACH/eMandate setup",
                "Automated SMS alerts",
                "Prepayment calculator",
                "Closure certificate",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
                CTA BANNER
            ══════════════════════════════════════════════════════════ */}
      <section className="relative z-10 py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div
            className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(139,92,246,0.2) 50%, rgba(16,185,129,0.1) 100%)",
              border: "0.5px solid rgba(255,255,255,0.1)",
            }}
          >
            {/* decorative grid in CTA */}
            <div
              className="absolute inset-0 grid-bg opacity-40 pointer-events-none rounded-3xl"
            />
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(139,92,246,0.3), transparent 70%)",
                filter: "blur(30px)",
              }}
            />

            <p
              className="relative text-xs font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#22d3ee" }}
            >
              Get Started Today
            </p>
            <h2 className="relative font-display text-4xl md:text-5xl font-extrabold text-white mb-5">
              Ready to Modernise
              <br />Your Lending Stack?
            </h2>
            <p
              className="relative text-base max-w-xl mx-auto mb-10 leading-relaxed"
              style={{ color: "rgba(148,163,184,0.75)" }}
            >
              Join hundreds of lenders already running on LMS Pro.
              Book a demo and go live in under 2 weeks.
            </p>
            <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="btn-primary flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white"
              >
                <span>Book a Demo</span>
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/dashboard"
                className="glass-card flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base text-white/70 hover:text-white hover:border-white/20 transition-all duration-200"
              >
                <Users size={17} />
                Talk to Sales
              </Link>
            </div>

            {/* Trust badges */}
            <div className="relative flex flex-wrap items-center justify-center gap-6 mt-10">
              {[
                { icon: ShieldCheck, label: "RBI Compliant" },
                { icon: Clock, label: "48hr Go-Live" },
                { icon: Zap, label: "99.9% Uptime" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 text-xs"
                  style={{ color: "rgba(148,163,184,0.6)" }}
                >
                  <b.icon size={13} style={{ color: "#22d3ee" }} />
                  {b.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
                FOOTER
            ══════════════════════════════════════════════════════════ */}
      <footer
        className="relative z-10 px-6 lg:px-12 py-12 mt-8"
        style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                  }}
                >
                  <Zap size={13} className="text-white" />
                </div>
                <span
                  className="font-display text-base font-bold"
                  style={{ color: "#e2e8f0" }}
                >
                  LMS Pro
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(148,163,184,0.5)" }}
              >
                India's most trusted enterprise
                lending management platform.
              </p>
            </div>

            {/* Links */}
            {[
              {
                title: "Product",
                links: ["Features", "Analytics", "Security", "Integrations"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Press"],
              },
              {
                title: "Legal",
                links: ["Privacy Policy", "Terms", "Compliance", "Cookie Policy"],
              },
            ].map((col) => (
              <div key={col.title}>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-4"
                  style={{ color: "rgba(148,163,184,0.4)" }}
                >
                  {col.title}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm transition-colors duration-200"
                        style={{ color: "rgba(148,163,184,0.55)" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#e2e8f0")
                        }
                        onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          "rgba(148,163,184,0.55)")
                        }
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
            style={{ borderTop: "0.5px solid rgba(255,255,255,0.05)" }}
          >
            <p
              className="text-xs"
              style={{ color: "rgba(148,163,184,0.35)" }}
            >
              © 2026 LMS Pro Technologies Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs" style={{ color: "rgba(148,163,184,0.35)" }}>
              <span>ISO 27001</span>
              <span>·</span>
              <span>SOC 2 Type II</span>
              <span>·</span>
              <span>RBI Compliant</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}