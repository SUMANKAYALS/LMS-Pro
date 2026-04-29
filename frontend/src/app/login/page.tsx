// "use client";

// import { useState } from "react";

// import Link from "next/link";

// import { useRouter } from "next/navigation";

// import toast, { Toaster } from "react-hot-toast";

// import {
//     Eye,
//     EyeOff,
//     LoaderCircle,
//     Landmark,
// } from "lucide-react";

// import { loginUser } from "@/services/auth.service";

// export default function LoginPage() {
//     const router = useRouter();

//     const [loading, setLoading] = useState(false);

//     const [showPassword, setShowPassword] =
//         useState(false);

//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//     });

//     /**
//      * 🔄 Handle Input Change
//      */
//     const handleChange = (
//         e: React.ChangeEvent<HTMLInputElement>
//     ) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     /**
//      * 🚀 Submit Login
//      */
//     const handleSubmit = async (
//         e: React.FormEvent
//     ) => {
//         e.preventDefault();

//         try {
//             setLoading(true);

//             const response = await loginUser(
//                 formData
//             );

//             toast.success(response.message);

//             /**
//              * ✅ Redirect Dashboard
//              */
//             setTimeout(() => {
//                 router.push("/dashboard");
//             }, 1000);
//         } catch (error: any) {
//             toast.error(
//                 error.response?.data?.message ||
//                 "Login failed"
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <main className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center px-4">
//             <Toaster position="top-right" />

//             {/* 🌈 Background Glow */}
//             <div className="absolute w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-3xl top-[-100px] left-[-100px]" />

//             <div className="absolute w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

//             {/* 🔐 Login Card */}
//             <div className="relative z-10 w-full max-w-md backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,255,255,0.1)]">
//                 {/* 🏦 Logo Section */}
//                 <div className="text-center mb-8">
//                     {/* Icon */}
//                     <div className="flex justify-center mb-4">
//                         <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-4 rounded-2xl shadow-lg">
//                             <Landmark
//                                 className="text-white"
//                                 size={40}
//                             />
//                         </div>
//                     </div>

//                     {/* Title */}
//                     <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
//                     </h1>

//                     {/* Subtitle */}
//                     <p className="text-gray-400 mt-3">
//                         Welcome back to your dashboard
//                     </p>
//                 </div>

//                 {/* 📝 Form */}
//                 <form
//                     onSubmit={handleSubmit}
//                     className="space-y-5"
//                 >
//                     {/* 📧 Email */}
//                     <div>
//                         <label className="block text-sm text-gray-300 mb-2">
//                             Email Address
//                         </label>

//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="john@gmail.com"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                             className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 p-4 rounded-2xl outline-none focus:border-cyan-400 transition"
//                         />
//                     </div>

//                     {/* 🔑 Password */}
//                     <div>
//                         <label className="block text-sm text-gray-300 mb-2">
//                             Password
//                         </label>

//                         <div className="relative">
//                             <input
//                                 type={
//                                     showPassword
//                                         ? "text"
//                                         : "password"
//                                 }
//                                 name="password"
//                                 placeholder="••••••••"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 required
//                                 className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 p-4 rounded-2xl outline-none focus:border-cyan-400 transition"
//                             />

//                             {/* 👁 Toggle Password */}
//                             <button
//                                 type="button"
//                                 onClick={() =>
//                                     setShowPassword(
//                                         !showPassword
//                                     )
//                                 }
//                                 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
//                             >
//                                 {showPassword ? (
//                                     <EyeOff size={20} />
//                                 ) : (
//                                     <Eye size={20} />
//                                 )}
//                             </button>
//                         </div>
//                     </div>

//                     {/* ❓ Forgot Password */}
//                     <div className="flex justify-end">
//                         <button
//                             type="button"
//                             className="text-sm text-cyan-400 hover:underline"
//                         >
//                             Forgot Password?
//                         </button>
//                     </div>

//                     {/* 🚀 Submit Button */}
//                     <button
//                         type="submit"
//                         disabled={loading}
//                         className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 text-white font-semibold p-4 rounded-2xl transition duration-300 disabled:opacity-50"
//                     >
//                         {loading ? (
//                             <>
//                                 <LoaderCircle className="animate-spin" />
//                                 Logging in...
//                             </>
//                         ) : (
//                             "Login"
//                         )}
//                     </button>
//                 </form>

//                 {/* 🔗 Footer */}
//                 <p className="text-center text-gray-400 mt-8">
//                     Don&apos;t have an account?{" "}
//                     <Link
//                         href="/register"
//                         className="text-cyan-400 hover:underline"
//                     >
//                         Register
//                     </Link>
//                 </p>
//             </div>
//         </main>
//     );
// }


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
    ShieldCheck,
    ArrowRight
} from "lucide-react";

import { loginUser } from "@/services/auth.service";

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await loginUser(formData);
            toast.success(response.message);
            setTimeout(() => router.push("/dashboard"), 800);
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Invalid credentials");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen relative flex items-center justify-center px-4 bg-[#030712] selection:bg-cyan-500/30 overflow-hidden">
            <Toaster position="top-right" />

            {/* --- Visual Architecture --- */}
            {/* 1. Subtle Grid Pattern */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

            {/* 2. Floating Ambient Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-[440px] animate-in fade-in zoom-in duration-500">
                {/* Card Container */}
                <div className="bg-[#0b101d]/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl">

                    {/* Brand Identity */}
                    <div className="flex flex-col items-center mb-10">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500" />
                            <div className="relative bg-black border border-white/10 p-4 rounded-2xl">
                                <Landmark size={32} className="text-white" />
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Welcome Back</h1>
                            <p className="text-slate-400 text-sm font-medium">Access your secure LMS dashboard</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Input Group: Email */}
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider ml-1">
                                Corporate Email
                            </label>
                            <div className="relative group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="name@company.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-400/50 transition-all duration-300 hover:bg-white/[0.05]"
                                />
                            </div>
                        </div>

                        {/* Input Group: Password */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                                    Password
                                </label>
                                <Link href="#" className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                                    Forgot?
                                </Link>
                            </div>
                            <div className="relative group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-400/50 transition-all duration-300 hover:bg-white/[0.05]"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Action Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full overflow-hidden bg-white text-black font-bold py-4 rounded-2xl hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <div className="relative z-10 flex items-center justify-center gap-2">
                                {loading ? (
                                    <>
                                        <LoaderCircle className="animate-spin" size={20} />
                                        <span>Authenticating...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Sign In to Dashboard</span>
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </div>
                        </button>
                    </form>

                    {/* Trust Footer */}
                    <div className="mt-10 pt-8 border-t border-white/5 flex flex-col items-center gap-6">
                        <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
                            <ShieldCheck size={14} className="text-emerald-500/70" />
                            End-to-End Encrypted Session
                        </div>

                        <p className="text-slate-400 text-sm">
                            New to the platform?{" "}
                            <Link href="/register" className="text-white font-bold hover:text-cyan-400 transition-colors">
                                Create Account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}