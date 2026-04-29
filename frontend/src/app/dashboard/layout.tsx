"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { Toaster } from "react-hot-toast";

import Sidebar from "@/components/dashboard/Sidebar";

import Navbar from "@/components/dashboard/Navbar";

import { useAuth } from "@/hooks/useAuth";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();

    const { user, loading } = useAuth();

    /**
     * Protect Route
     */
    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
    }, [loading, user, router]);

    if (loading) {
        return (
            <main className="min-h-screen bg-black text-white flex items-center justify-center">
                Loading...
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-black text-white">
            <Toaster position="top-right" />

            {/* Sidebar */}
            <Sidebar role={user?.role} />

            {/* Content */}
            <section className="ml-[260px] p-8">
                <Navbar
                    name={user?.name}
                    role={user?.role}
                />

                {children}
            </section>
        </main>
    );
}