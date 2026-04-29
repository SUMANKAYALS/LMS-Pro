"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import {
    Eye,
    EyeOff,
    LoaderCircle,
    Landmark,
    UserPlus,
    ArrowRight,
    ShieldCheck
} from "lucide-react";

import { registerUser } from "@/services/auth.service";

export default function RegisterPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "BORROWER",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await registerUser(formData);
            toast.success(response.message);

            setTimeout(() => {
                router.push("/login");
            }, 1000);
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen relative flex items-center justify-center px-4 bg-[#030712] overflow-hidden selection:bg-purple-500/30">
            <Toaster position="top-right" />

            {/* --- Ambient Background --- */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-[480px] animate-in fade-in zoom-in duration-500">
                <div className="bg-[#0b101d]/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl">

                    {/* Header */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="relative group mb-6">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500" />
                            <div className="relative bg-black border border-white/10 p-4 rounded-2xl">
                                <Landmark size={32} className="text-white" />
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-white">Create Account</h1>
                        <p className="text-slate-400 text-sm mt-2">Join our secure lending ecosystem</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Full Name */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="E.g. Alexander Pierce"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 px-5 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-400/50 transition-all"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                                Work Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="name@company.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 px-5 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-400/50 transition-all"
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                                Security Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Min. 8 characters"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 px-5 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-400/50 transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Role Selection */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                                Account Type
                            </label>
                            <div className="relative">
                                <select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="w-full bg-[#0f172a] border border-white/10 text-white px-5 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-purple-500/40 appearance-none cursor-pointer hover:bg-white/[0.05] transition-all"
                                >
                                    <option value="BORROWER">Borrower (Individual/Business)</option>
                                    <option value="ADMIN">System Administrator</option>
                                    <option value="SANCTION">Sanctioning Officer</option>
                                    <option value="DISBURSEMENT">Disbursement Manager</option>
                                </select>
                                {/* Custom Arrow for Select */}
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                        <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 active:scale-[0.98] transition-all disabled:opacity-50 mt-4"
                        >
                            <div className="relative z-10 flex items-center justify-center gap-2">
                                {loading ? (
                                    <>
                                        <LoaderCircle className="animate-spin" size={20} />
                                        <span>Processing...</span>
                                    </>
                                ) : (
                                    <>
                                        <UserPlus size={18} />
                                        <span>Create Free Account</span>
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </div>
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-white/5 flex flex-col items-center gap-4">
                        <p className="text-slate-400 text-sm">
                            Already a member?{" "}
                            <Link href="/login" className="text-purple-400 font-bold hover:text-purple-300 transition-colors ml-1">
                                Sign In
                            </Link>
                        </p>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-[0.15em]">
                            <ShieldCheck size={12} className="text-emerald-500/60" />
                            Secure Registration Protocol
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}