"use client";

import { Bell, LogOut, User, Search } from "lucide-react";
import { logoutUser } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface NavbarProps {
    name?: string;
    role?: string;
}

export default function Navbar({ name = "User", role = "Guest" }: NavbarProps) {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await logoutUser();
            toast.success("Signed out successfully");
            router.push("/login");
        } catch (error) {
            toast.error("Sign out failed");
        }
    };

    return (
        <header className="relative z-50 flex items-center justify-between px-6 py-4 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-[2rem] mb-10 shadow-2xl">
            {/* Left: User Identity */}
            <div className="flex items-center gap-4">
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition duration-500" />
                    <div className="relative h-12 w-12 bg-[#0f172a] border border-white/10 rounded-2xl flex items-center justify-center text-white overflow-hidden">
                        {/* Initial Avatar */}
                        <span className="text-xl font-bold bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                            {name.charAt(0).toUpperCase()}
                        </span>
                    </div>
                </div>

                <div>
                    <h1 className="text-lg font-bold text-white tracking-tight leading-tight">
                        Welcome, {name.split(" ")[0]}
                    </h1>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                            {role.replace("_", " ")}
                        </p>
                    </div>
                </div>
            </div>

            {/* Center: Subtle Search (Standard in modern Dashboards) */}
            {/* <div className="hidden md:flex items-center flex-1 max-w-md mx-8 group">
                <div className="relative w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search records..."
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-2.5 pl-12 pr-4 text-sm text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500/30 transition-all"
                    />
                </div>
            </div> */}

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
                {/* Notifications */}
                <button className="relative p-3 text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 rounded-xl transition-all group">
                    <Bell size={20} />
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-purple-500 rounded-full border-2 border-[#030712] group-hover:scale-110 transition-transform" />
                </button>

                <div className="h-8 w-[1px] bg-white/10 mx-1" />

                {/* Logout */}
                <button
                    onClick={handleLogout}
                    className="group flex items-center gap-2 px-5 py-3 text-sm font-bold text-slate-300 hover:text-white bg-white/[0.03] hover:bg-red-500/10 border border-white/5 hover:border-red-500/30 rounded-xl transition-all"
                >
                    <LogOut size={18} className="group-hover:text-red-400 transition-colors" />
                    <span className="hidden sm:inline">Logout</span>
                </button>
            </div>
        </header>
    );
}