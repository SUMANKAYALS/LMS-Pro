// "use client";

// import { useState } from "react";

// import toast from "react-hot-toast";

// import { applyLoan } from "@/services/loan.service";

// export default function ApplyLoanPage() {
//     const [loading, setLoading] = useState(false);

//     const [formData, setFormData] = useState({
//         fullName: "",
//         amount: "",
//         tenureDays: "",
//         annualIncome: "",
//         employmentType: "SALARIED",
//         panNumber: "",
//         aadhaarNumber: "",
//         purpose: "",
//     });

//     /**
//      * Handle Input
//      */
//     const handleChange = (
//         e: React.ChangeEvent<
//             HTMLInputElement | HTMLSelectElement
//         >
//     ) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     /**
//      * Submit Loan
//      */
//     const handleSubmit = async (
//         e: React.FormEvent
//     ) => {
//         e.preventDefault();

//         try {
//             setLoading(true);

//             const response = await applyLoan(
//                 formData
//             );

//             toast.success(response.message);

//             setFormData({
//                 fullName: "",
//                 amount: "",
//                 tenureDays: "",
//                 annualIncome: "",
//                 employmentType: "SALARIED",
//                 panNumber: "",
//                 aadhaarNumber: "",
//                 purpose: "",
//             });
//         } catch (error: any) {
//             toast.error(
//                 error.response?.data?.message ||
//                 "Loan application failed"
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <main>
//             {/* Heading */}
//             <div className="mb-10">
//                 <h1 className="text-4xl font-bold">
//                     Apply for Loan
//                 </h1>

//                 <p className="text-gray-400 mt-2">
//                     Submit your loan application
//                 </p>
//             </div>

//             {/* Form Card */}
//             <div className="max-w-4xl bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
//                 <form
//                     onSubmit={handleSubmit}
//                     className="grid grid-cols-1 md:grid-cols-2 gap-6"
//                 >
//                     {/* Full Name */}
//                     <div>
//                         <label className="block mb-2 text-gray-300">
//                             Full Name
//                         </label>

//                         <input
//                             type="text"
//                             name="fullName"
//                             placeholder="John Doe"
//                             value={formData.fullName}
//                             onChange={handleChange}
//                             className="w-full bg-black/30 border border-white/10 p-4 rounded-xl outline-none focus:border-cyan-400"
//                         />
//                     </div>

//                     {/* Amount */}
//                     <div>
//                         <label className="block mb-2 text-gray-300">
//                             Loan Amount
//                         </label>

//                         <input
//                             type="number"
//                             name="amount"
//                             placeholder="50000"
//                             value={formData.amount}
//                             onChange={handleChange}
//                             className="w-full bg-black/30 border border-white/10 p-4 rounded-xl outline-none focus:border-cyan-400"
//                         />
//                     </div>

//                     {/* Tenure */}
//                     <div>
//                         <label className="block mb-2 text-gray-300">
//                             Tenure (Days)
//                         </label>

//                         <input
//                             type="number"
//                             name="tenureDays"
//                             placeholder="180"
//                             value={formData.tenureDays}
//                             onChange={handleChange}
//                             className="w-full bg-black/30 border border-white/10 p-4 rounded-xl outline-none focus:border-cyan-400"
//                         />
//                     </div>

//                     {/* Income */}
//                     <div>
//                         <label className="block mb-2 text-gray-300">
//                             Annual Income
//                         </label>

//                         <input
//                             type="number"
//                             name="annualIncome"
//                             placeholder="600000"
//                             value={formData.annualIncome}
//                             onChange={handleChange}
//                             className="w-full bg-black/30 border border-white/10 p-4 rounded-xl outline-none focus:border-cyan-400"
//                         />
//                     </div>

//                     {/* Employment */}
//                     <div>
//                         <label className="block mb-2 text-gray-300">
//                             Employment Type
//                         </label>

//                         <select
//                             name="employmentType"
//                             value={formData.employmentType}
//                             onChange={handleChange}
//                             className="w-full bg-black/30 border border-white/10 p-4 rounded-xl outline-none focus:border-cyan-400"
//                         >
//                             <option value="SALARIED">
//                                 Salaried
//                             </option>

//                             <option value="SELF_EMPLOYED">
//                                 Self Employed
//                             </option>

//                             <option value="BUSINESS">
//                                 Business
//                             </option>

//                             <option value="UNEMPLOYED">
//                                 Unemployed
//                             </option>
//                         </select>
//                     </div>

//                     {/* PAN */}
//                     <div>
//                         <label className="block mb-2 text-gray-300">
//                             PAN Number
//                         </label>

//                         <input
//                             type="text"
//                             name="panNumber"
//                             placeholder="ABCDE1234F"
//                             value={formData.panNumber}
//                             onChange={handleChange}
//                             className="w-full bg-black/30 border border-white/10 p-4 rounded-xl outline-none focus:border-cyan-400"
//                         />
//                     </div>

//                     {/* Aadhaar */}
//                     <div>
//                         <label className="block mb-2 text-gray-300">
//                             Aadhaar Number
//                         </label>

//                         <input
//                             type="text"
//                             name="aadhaarNumber"
//                             placeholder="123456789012"
//                             value={formData.aadhaarNumber}
//                             onChange={handleChange}
//                             className="w-full bg-black/30 border border-white/10 p-4 rounded-xl outline-none focus:border-cyan-400"
//                         />
//                     </div>

//                     {/* Purpose */}
//                     <div>
//                         <label className="block mb-2 text-gray-300">
//                             Loan Purpose
//                         </label>

//                         <input
//                             type="text"
//                             name="purpose"
//                             placeholder="Laptop Purchase"
//                             value={formData.purpose}
//                             onChange={handleChange}
//                             className="w-full bg-black/30 border border-white/10 p-4 rounded-xl outline-none focus:border-cyan-400"
//                         />
//                     </div>

//                     {/* Submit */}
//                     <div className="md:col-span-2">
//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 text-white font-semibold p-4 rounded-xl transition"
//                         >
//                             {loading
//                                 ? "Submitting..."
//                                 : "Apply Loan"}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </main>
//     );
// }


"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import {
    User,
    IndianRupee,
    Calendar,
    Briefcase,
    CreditCard,
    FileText,
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    Shield,
    Zap,
    Clock,
} from "lucide-react";
import { applyLoan } from "@/services/loan.service";

/* ─── Types ─────────────────────────────────────────────────────── */
interface FormData {
    fullName: string;
    amount: string;
    tenureDays: string;
    annualIncome: string;
    employmentType: string;
    panNumber: string;
    aadhaarNumber: string;
    purpose: string;
}

/* ─── Step config ───────────────────────────────────────────────── */
const STEPS = [
    { id: 1, label: "Personal", icon: User },
    { id: 2, label: "Loan Details", icon: IndianRupee },
    { id: 3, label: "KYC", icon: Shield },
];

const EMPLOYMENT_OPTIONS = [
    { value: "SALARIED", label: "Salaried", desc: "Full-time employee" },
    { value: "SELF_EMPLOYED", label: "Self Employed", desc: "Freelancer / Consultant" },
    { value: "BUSINESS", label: "Business Owner", desc: "Proprietor / Director" },
    { value: "UNEMPLOYED", label: "Unemployed", desc: "Currently not working" },
];

const PURPOSE_OPTIONS = [
    "Home Renovation", "Medical Emergency", "Education", "Vehicle Purchase",
    "Business Expansion", "Wedding", "Travel", "Debt Consolidation", "Other",
];

/* ─── Shared input styles ───────────────────────────────────────── */
const inputClass =
    "w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm outline-none transition-all duration-200 focus:border-cyan-400/60 focus:bg-white/6 focus:ring-1 focus:ring-cyan-400/20";

const labelClass = "block text-xs font-semibold tracking-widest text-white/40 uppercase mb-2";

/* ─── Field Wrapper ─────────────────────────────────────────────── */
function Field({
    label,
    icon: Icon,
    children,
}: {
    label: string;
    icon: React.ElementType;
    children: React.ReactNode;
}) {
    return (
        <div>
            <label className={labelClass}>
                <span className="inline-flex items-center gap-1.5">
                    <Icon size={11} />
                    {label}
                </span>
            </label>
            {children}
        </div>
    );
}

/* ─── Employment Card ───────────────────────────────────────────── */
function EmploymentCard({
    option,
    selected,
    onClick,
}: {
    option: (typeof EMPLOYMENT_OPTIONS)[0];
    selected: boolean;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="relative w-full text-left rounded-xl p-4 border transition-all duration-200"
            style={{
                background: selected
                    ? "rgba(6,182,212,0.08)"
                    : "rgba(255,255,255,0.03)",
                borderColor: selected
                    ? "rgba(6,182,212,0.5)"
                    : "rgba(255,255,255,0.08)",
            }}
        >
            {selected && (
                <div
                    className="absolute top-3 right-3"
                    style={{ color: "#22d3ee" }}
                >
                    <CheckCircle2 size={15} />
                </div>
            )}
            <p
                className="text-sm font-semibold mb-0.5"
                style={{ color: selected ? "#22d3ee" : "rgba(255,255,255,0.8)" }}
            >
                {option.label}
            </p>
            <p className="text-xs" style={{ color: "rgba(148,163,184,0.5)" }}>
                {option.desc}
            </p>
        </button>
    );
}

/* ─── Main Component ────────────────────────────────────────────── */
export default function ApplyLoanPage() {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        amount: "",
        tenureDays: "",
        annualIncome: "",
        employmentType: "SALARIED",
        panNumber: "",
        aadhaarNumber: "",
        purpose: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const response = await applyLoan(formData);
            toast.success(response.message);
            setSubmitted(true);
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Loan application failed");
        } finally {
            setLoading(false);
        }
    };

    /* ── EMI Preview ── */
    const emi = (() => {
        const p = parseFloat(formData.amount);
        const d = parseInt(formData.tenureDays);
        if (!p || !d) return null;
        const months = d / 30;
        const r = 0.12 / 12;
        if (months <= 0) return null;
        const emiVal =
            months === 1
                ? p * (1 + r)
                : (p * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
        return { monthly: Math.round(emiVal), total: Math.round(emiVal * months) };
    })();

    /* ── Success Screen ── */
    if (submitted) {
        return (
            <main className="min-h-[70vh] flex items-center justify-center px-4">
                <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');`}</style>
                <div className="text-center max-w-md">
                    <div
                        className="mx-auto mb-6 w-20 h-20 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(52,211,153,0.12)", border: "0.5px solid rgba(52,211,153,0.3)" }}
                    >
                        <CheckCircle2 size={36} style={{ color: "#34d399" }} />
                    </div>
                    <h2
                        className="text-3xl font-extrabold text-white mb-3"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                        Application Submitted!
                    </h2>
                    <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(148,163,184,0.65)" }}>
                        Your loan application is under review. You'll receive a decision
                        within 48 business hours via SMS and email.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                            onClick={() => { setSubmitted(false); setStep(1); setFormData({ fullName: "", amount: "", tenureDays: "", annualIncome: "", employmentType: "SALARIED", panNumber: "", aadhaarNumber: "", purpose: "" }); }}
                            className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-80"
                            style={{ background: "linear-gradient(135deg,#06b6d4,#8b5cf6)" }}
                        >
                            Apply Another Loan
                        </button>
                        <button
                            onClick={() => window.location.href = "/dashboard"}
                            className="px-6 py-3 rounded-xl text-sm font-medium transition-colors"
                            style={{ background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}
                        >
                            Go to Dashboard
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
                input[type=number]::-webkit-inner-spin-button { -webkit-appearance: none; }
                input:-webkit-autofill { -webkit-box-shadow: 0 0 0 100px rgba(0,0,0,0.5) inset !important; -webkit-text-fill-color: white !important; }
                .form-input { background: rgba(255,255,255,0.04); border: 0.5px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 14px 16px; color: white; font-size: 14px; width: 100%; outline: none; transition: all 0.2s; }
                .form-input::placeholder { color: rgba(255,255,255,0.2); }
                .form-input:focus { border-color: rgba(6,182,212,0.55); background: rgba(255,255,255,0.06); box-shadow: 0 0 0 3px rgba(6,182,212,0.08); }
                .form-select { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; }
                .form-select option { background: #0f1629; color: white; }
                @keyframes fadeSlide { from { opacity:0; transform:translateX(16px); } to { opacity:1; transform:translateX(0); } }
                .step-enter { animation: fadeSlide 0.3s ease both; }
            `}</style>

            {/* ── Page Header ── */}
            <div className="mb-10 flex items-start justify-between flex-wrap gap-4">
                <div>
                    <p
                        className="text-xs font-bold tracking-[0.18em] uppercase mb-2"
                        style={{ color: "#22d3ee" }}
                    >
                        Loan Application
                    </p>
                    <h1
                        className="text-4xl font-extrabold text-white"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                        Apply for Loan
                    </h1>
                    <p className="text-sm mt-2" style={{ color: "rgba(148,163,184,0.6)" }}>
                        Complete the 3-step form to submit your application
                    </p>
                </div>

                {/* Trust badges */}
                <div className="flex items-center gap-4">
                    {[
                        { icon: Shield, label: "256-bit SSL" },
                        { icon: Zap, label: "48hr Decision" },
                    ].map((b) => (
                        <div
                            key={b.label}
                            className="flex items-center gap-1.5 text-xs"
                            style={{ color: "rgba(148,163,184,0.5)" }}
                        >
                            <b.icon size={12} style={{ color: "#22d3ee" }} />
                            {b.label}
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-4xl">
                {/* ── Stepper ── */}
                <div className="flex items-center mb-10 gap-0">
                    {STEPS.map((s, i) => {
                        const done = step > s.id;
                        const active = step === s.id;
                        return (
                            <div key={s.id} className="flex items-center flex-1 last:flex-none">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                                        style={{
                                            background: done
                                                ? "rgba(52,211,153,0.15)"
                                                : active
                                                    ? "linear-gradient(135deg,#06b6d4,#8b5cf6)"
                                                    : "rgba(255,255,255,0.05)",
                                            border: done
                                                ? "0.5px solid rgba(52,211,153,0.4)"
                                                : active
                                                    ? "none"
                                                    : "0.5px solid rgba(255,255,255,0.1)",
                                        }}
                                    >
                                        {done ? (
                                            <CheckCircle2 size={15} style={{ color: "#34d399" }} />
                                        ) : (
                                            <s.icon
                                                size={14}
                                                style={{
                                                    color: active ? "white" : "rgba(148,163,184,0.4)",
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className="hidden sm:block">
                                        <p
                                            className="text-xs font-semibold"
                                            style={{
                                                color: active
                                                    ? "white"
                                                    : done
                                                        ? "rgba(52,211,153,0.8)"
                                                        : "rgba(148,163,184,0.35)",
                                            }}
                                        >
                                            {s.label}
                                        </p>
                                        <p
                                            className="text-[10px]"
                                            style={{ color: "rgba(148,163,184,0.3)" }}
                                        >
                                            Step {s.id} of {STEPS.length}
                                        </p>
                                    </div>
                                </div>
                                {i < STEPS.length - 1 && (
                                    <div
                                        className="flex-1 mx-4 h-px"
                                        style={{
                                            background:
                                                step > s.id
                                                    ? "linear-gradient(90deg,rgba(52,211,153,0.4),rgba(6,182,212,0.3))"
                                                    : "rgba(255,255,255,0.07)",
                                        }}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* ── Form Card ── */}
                <div
                    className="rounded-3xl p-8 lg:p-10"
                    style={{
                        background: "rgba(255,255,255,0.025)",
                        border: "0.5px solid rgba(255,255,255,0.08)",
                        backdropFilter: "blur(24px)",
                    }}
                >
                    {/* ══ STEP 1: Personal Info ══ */}
                    {step === 1 && (
                        <div className="step-enter">
                            <p
                                className="text-xs font-bold tracking-[0.16em] uppercase mb-1"
                                style={{ color: "#22d3ee" }}
                            >
                                Step 1
                            </p>
                            <h2
                                className="text-2xl font-bold text-white mb-1"
                                style={{ fontFamily: "'Syne', sans-serif" }}
                            >
                                Personal Information
                            </h2>
                            <p
                                className="text-sm mb-8"
                                style={{ color: "rgba(148,163,184,0.55)" }}
                            >
                                Tell us about yourself and your employment.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-5 mb-8">
                                <Field label="Full Name" icon={User}>
                                    <input
                                        className="form-input"
                                        type="text"
                                        name="fullName"
                                        placeholder="Rajesh Kumar"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                </Field>
                                <Field label="Annual Income (₹)" icon={IndianRupee}>
                                    <input
                                        className="form-input"
                                        type="number"
                                        name="annualIncome"
                                        placeholder="600000"
                                        value={formData.annualIncome}
                                        onChange={handleChange}
                                    />
                                </Field>
                            </div>

                            <div className="mb-8">
                                <label className={labelClass}>
                                    <span className="inline-flex items-center gap-1.5">
                                        <Briefcase size={11} />
                                        Employment Type
                                    </span>
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {EMPLOYMENT_OPTIONS.map((opt) => (
                                        <EmploymentCard
                                            key={opt.value}
                                            option={opt}
                                            selected={formData.employmentType === opt.value}
                                            onClick={() =>
                                                setFormData({
                                                    ...formData,
                                                    employmentType: opt.value,
                                                })
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ══ STEP 2: Loan Details ══ */}
                    {step === 2 && (
                        <div className="step-enter">
                            <p
                                className="text-xs font-bold tracking-[0.16em] uppercase mb-1"
                                style={{ color: "#8b5cf6" }}
                            >
                                Step 2
                            </p>
                            <h2
                                className="text-2xl font-bold text-white mb-1"
                                style={{ fontFamily: "'Syne', sans-serif" }}
                            >
                                Loan Details
                            </h2>
                            <p
                                className="text-sm mb-8"
                                style={{ color: "rgba(148,163,184,0.55)" }}
                            >
                                Specify your loan amount, tenure, and purpose.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-5 mb-6">
                                <Field label="Loan Amount (₹)" icon={IndianRupee}>
                                    <input
                                        className="form-input"
                                        type="number"
                                        name="amount"
                                        placeholder="250000"
                                        value={formData.amount}
                                        onChange={handleChange}
                                    />
                                </Field>
                                <Field label="Tenure (Days)" icon={Calendar}>
                                    <input
                                        className="form-input"
                                        type="number"
                                        name="tenureDays"
                                        placeholder="180"
                                        value={formData.tenureDays}
                                        onChange={handleChange}
                                    />
                                </Field>
                            </div>

                            {/* EMI Preview Card */}
                            {emi && (
                                <div
                                    className="rounded-2xl p-5 mb-6 flex flex-wrap gap-6 items-center"
                                    style={{
                                        background: "rgba(6,182,212,0.06)",
                                        border: "0.5px solid rgba(6,182,212,0.2)",
                                    }}
                                >
                                    <div>
                                        <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Est. Monthly EMI</p>
                                        <p className="text-2xl font-bold" style={{ color: "#22d3ee", fontFamily: "'Syne',sans-serif" }}>
                                            ₹{emi.monthly.toLocaleString("en-IN")}
                                        </p>
                                    </div>
                                    <div
                                        className="w-px h-10 hidden sm:block"
                                        style={{ background: "rgba(255,255,255,0.08)" }}
                                    />
                                    <div>
                                        <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Total Payable</p>
                                        <p className="text-2xl font-bold text-white" style={{ fontFamily: "'Syne',sans-serif" }}>
                                            ₹{emi.total.toLocaleString("en-IN")}
                                        </p>
                                    </div>
                                    <div
                                        className="w-px h-10 hidden sm:block"
                                        style={{ background: "rgba(255,255,255,0.08)" }}
                                    />
                                    <div>
                                        <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Interest Rate</p>
                                        <p className="text-2xl font-bold text-white" style={{ fontFamily: "'Syne',sans-serif" }}>
                                            12% p.a.
                                        </p>
                                    </div>
                                    <p className="text-xs w-full" style={{ color: "rgba(148,163,184,0.35)" }}>
                                        * Indicative estimate at 12% p.a. reducing balance. Final terms subject to approval.
                                    </p>
                                </div>
                            )}

                            <div className="mb-8">
                                <label className={labelClass}>
                                    <span className="inline-flex items-center gap-1.5">
                                        <FileText size={11} />
                                        Loan Purpose
                                    </span>
                                </label>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {PURPOSE_OPTIONS.map((p) => (
                                        <button
                                            type="button"
                                            key={p}
                                            onClick={() =>
                                                setFormData({ ...formData, purpose: p })
                                            }
                                            className="px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200"
                                            style={{
                                                background:
                                                    formData.purpose === p
                                                        ? "rgba(139,92,246,0.15)"
                                                        : "rgba(255,255,255,0.04)",
                                                border:
                                                    formData.purpose === p
                                                        ? "0.5px solid rgba(139,92,246,0.5)"
                                                        : "0.5px solid rgba(255,255,255,0.08)",
                                                color:
                                                    formData.purpose === p
                                                        ? "#a78bfa"
                                                        : "rgba(148,163,184,0.6)",
                                            }}
                                        >
                                            {p}
                                        </button>
                                    ))}
                                </div>
                                {formData.purpose === "Other" && (
                                    <input
                                        className="form-input mt-2"
                                        type="text"
                                        name="purpose"
                                        placeholder="Describe your purpose..."
                                        value={formData.purpose === "Other" ? "" : formData.purpose}
                                        onChange={handleChange}
                                    />
                                )}
                            </div>
                        </div>
                    )}

                    {/* ══ STEP 3: KYC ══ */}
                    {step === 3 && (
                        <div className="step-enter">
                            <p
                                className="text-xs font-bold tracking-[0.16em] uppercase mb-1"
                                style={{ color: "#10b981" }}
                            >
                                Step 3
                            </p>
                            <h2
                                className="text-2xl font-bold text-white mb-1"
                                style={{ fontFamily: "'Syne', sans-serif" }}
                            >
                                KYC Verification
                            </h2>
                            <p
                                className="text-sm mb-8"
                                style={{ color: "rgba(148,163,184,0.55)" }}
                            >
                                Your data is encrypted and used only for verification purposes.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-5 mb-6">
                                <Field label="PAN Number" icon={CreditCard}>
                                    <input
                                        className="form-input"
                                        type="text"
                                        name="panNumber"
                                        placeholder="ABCDE1234F"
                                        value={formData.panNumber}
                                        onChange={handleChange}
                                        maxLength={10}
                                        style={{ textTransform: "uppercase" }}
                                    />
                                </Field>
                                <Field label="Aadhaar Number" icon={Shield}>
                                    <input
                                        className="form-input"
                                        type="text"
                                        name="aadhaarNumber"
                                        placeholder="XXXX XXXX XXXX"
                                        value={formData.aadhaarNumber}
                                        onChange={handleChange}
                                        maxLength={12}
                                    />
                                </Field>
                            </div>

                            {/* Review Summary */}
                            <div
                                className="rounded-2xl p-6 mb-6"
                                style={{
                                    background: "rgba(255,255,255,0.03)",
                                    border: "0.5px solid rgba(255,255,255,0.07)",
                                }}
                            >
                                <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/30 mb-4">
                                    Application Summary
                                </p>
                                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                    {[
                                        { label: "Applicant", value: formData.fullName || "—" },
                                        { label: "Employment", value: EMPLOYMENT_OPTIONS.find(o => o.value === formData.employmentType)?.label || "—" },
                                        {
                                            label: "Loan Amount",
                                            value: formData.amount
                                                ? `₹${parseInt(formData.amount).toLocaleString("en-IN")}`
                                                : "—",
                                        },
                                        {
                                            label: "Tenure",
                                            value: formData.tenureDays ? `${formData.tenureDays} days` : "—",
                                        },
                                        { label: "Purpose", value: formData.purpose || "—" },
                                        {
                                            label: "Annual Income",
                                            value: formData.annualIncome
                                                ? `₹${parseInt(formData.annualIncome).toLocaleString("en-IN")}`
                                                : "—",
                                        },
                                    ].map((row) => (
                                        <div key={row.label} className="flex items-center justify-between sm:block">
                                            <p className="text-xs text-white/30 mb-0.5">{row.label}</p>
                                            <p className="text-sm font-medium text-white/80">{row.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Consent */}
                            <div
                                className="rounded-xl p-4 flex items-start gap-3"
                                style={{
                                    background: "rgba(16,185,129,0.05)",
                                    border: "0.5px solid rgba(16,185,129,0.2)",
                                }}
                            >
                                <Shield size={14} style={{ color: "#34d399", marginTop: 2, flexShrink: 0 }} />
                                <p className="text-xs leading-relaxed" style={{ color: "rgba(148,163,184,0.6)" }}>
                                    By submitting this application, you consent to our credit bureau
                                    enquiry and authorize us to verify your KYC details as per RBI
                                    guidelines. Your data is encrypted and will not be shared with
                                    third parties without consent.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* ── Navigation Buttons ── */}
                    <div className="flex items-center justify-between mt-10 pt-6" style={{ borderTop: "0.5px solid rgba(255,255,255,0.07)" }}>
                        <button
                            type="button"
                            onClick={() => setStep((s) => s - 1)}
                            disabled={step === 1}
                            className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all"
                            style={{
                                background: step === 1 ? "transparent" : "rgba(255,255,255,0.05)",
                                border: "0.5px solid rgba(255,255,255,0.08)",
                                color: step === 1 ? "rgba(148,163,184,0.2)" : "rgba(255,255,255,0.6)",
                                cursor: step === 1 ? "not-allowed" : "pointer",
                            }}
                        >
                            <ArrowLeft size={15} />
                            Back
                        </button>

                        <div className="flex items-center gap-3">
                            {/* Step dots */}
                            <div className="flex gap-1.5 mr-2">
                                {STEPS.map((s) => (
                                    <div
                                        key={s.id}
                                        className="h-1.5 rounded-full transition-all duration-300"
                                        style={{
                                            width: step === s.id ? 24 : 6,
                                            background:
                                                step === s.id
                                                    ? "linear-gradient(90deg,#06b6d4,#8b5cf6)"
                                                    : step > s.id
                                                        ? "rgba(52,211,153,0.5)"
                                                        : "rgba(255,255,255,0.1)",
                                        }}
                                    />
                                ))}
                            </div>

                            {step < 3 ? (
                                <button
                                    type="button"
                                    onClick={() => setStep((s) => s + 1)}
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-80"
                                    style={{
                                        background: "linear-gradient(135deg,#06b6d4,#8b5cf6)",
                                    }}
                                >
                                    Continue
                                    <ArrowRight size={15} />
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-80 disabled:opacity-50"
                                    style={{
                                        background:
                                            "linear-gradient(135deg,#10b981,#06b6d4)",
                                    }}
                                >
                                    {loading ? (
                                        <>
                                            <Clock size={15} className="animate-spin" />
                                            Submitting…
                                        </>
                                    ) : (
                                        <>
                                            <CheckCircle2 size={15} />
                                            Submit Application
                                        </>
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom note */}
                <p className="text-center text-xs mt-5" style={{ color: "rgba(148,163,184,0.3)" }}>
                    🔒 &nbsp;256-bit SSL encrypted · RBI compliant · Your data is safe
                </p>
            </div>
        </main>
    );
}