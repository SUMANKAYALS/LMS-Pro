"use client";

import Link from "next/link";

import {
    GitBranch,
    Globe,
    ArrowUpRight,
    Bell,
    Search,
    User,
    Camera,
    Briefcase,
} from "lucide-react";

const socials = [
    {
        name: "GitHub",

        username: "@SUMANKAYALS",

        href: "https://github.com/SUMANKAYALS",

        icon: <GitBranch size={26} />,

        color:
            "from-gray-700/30 to-gray-900/20 border-white/10",
    },

    {
        name: "LinkedIn",

        username: "Suman Kayal",

        href: "https://www.linkedin.com/in/suman-kayal10/",

        icon: <Briefcase size={26} />,

        color:
            "from-cyan-500/20 to-blue-500/10 border-cyan-500/20",
    },

    {
        name: "Instagram",

        username: "@sumankayal_",

        href: "https://www.instagram.com/sumankayal_/",

        icon: <Camera size={26} />,

        color:
            "from-pink-500/20 to-purple-500/10 border-pink-500/20",
    },

    {
        name: "Facebook",

        username: "Suman Kayal",

        href: "https://www.facebook.com/suman.kayal.54390",

        icon: <User size={26} />,

        color:
            "from-blue-500/20 to-cyan-500/10 border-blue-500/20",
    },

    {
        name: "Portfolio",

        username:
            "sumankayaldev.vercel.app",

        href: "https://sumankayaldev.vercel.app/",

        icon: <Globe size={26} />,

        color:
            "from-emerald-500/20 to-cyan-500/10 border-emerald-500/20",
    },

    {
        name: "Upwork",

        username: "Top Freelancer",

        href: "https://www.upwork.com/freelancers/~010329a7025ff4e4d9?mp_source=share",

        icon: (
            <ArrowUpRight size={26} />
        ),

        color:
            "from-green-500/20 to-emerald-500/10 border-green-500/20",
    },
];

export default function AboutPage() {
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
                            placeholder="Search developer profiles..."
                            className="bg-transparent outline-none border-none ml-3 text-sm w-full placeholder:text-gray-500"
                        />
                    </div>

                    {/* Notification */}
                    <button className="relative bg-white/5 border border-white/10 p-3 rounded-2xl hover:bg-white/10 transition">
                        <Bell size={20} />

                        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-400" />
                    </button>
                </div>
            </header>

            {/* MAIN */}
            <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-10 py-12">
                {/* HERO */}
                <div className="text-center max-w-4xl mx-auto mb-14">
                    {/* Developer Image */}
                    <div className="relative w-36 h-36 mx-auto mb-8">
                        <img
                            src="https://github.com/SUMANKAYALS.png"
                            alt="Suman Kayal"
                            className="w-full h-full object-cover rounded-3xl border border-white/10 shadow-2xl shadow-cyan-500/20"
                        />

                        {/* Glow */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl -z-10" />
                    </div>

                    <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
                        Developer Profile
                    </p>

                    <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-5">
                        Suman Kayal
                    </h1>

                    <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto">
                        Full Stack MERN Developer
                        focused on building
                        scalable SaaS platforms,
                        fintech dashboards,
                        modern web applications,
                        and enterprise-grade
                        backend systems using
                        JavaScript, TypeScript,
                        React, Next.js, Node.js,
                        and MongoDB.
                    </p>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-14">
                    {[
                        {
                            value: "20+",
                            label: "Projects",
                        },

                        {
                            value: "MERN",
                            label: "Stack",
                        },

                        {
                            value: "TypeScript",
                            label: "Primary Language",
                        },

                        {
                            value: "Fintech",
                            label: "Specialization",
                        },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="bg-white/5 border border-white/10 rounded-3xl px-6 py-6 text-center backdrop-blur-xl"
                        >
                            <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                {item.value}
                            </p>

                            <p className="text-sm text-gray-400 mt-2">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ABOUT */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl mb-14">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold mb-5">
                            About the Developer
                        </h2>

                        <p className="text-gray-300 leading-8 text-[15px]">
                            I am a passionate Full
                            Stack MERN Developer
                            specializing in
                            building modern web
                            applications,
                            enterprise fintech
                            systems, SaaS
                            platforms, AI-powered
                            tools, and scalable
                            backend architectures.
                            <br />
                            <br />
                            My expertise includes
                            React.js, Next.js,
                            TypeScript, Node.js,
                            Express.js, MongoDB,
                            REST APIs, JWT
                            authentication, role
                            based access control,
                            dashboard systems,
                            payment integration,
                            and production-ready
                            frontend UI/UX design.
                            <br />
                            <br />
                            I focus on writing
                            scalable, clean, and
                            maintainable code with
                            modern architecture
                            patterns and
                            industry-level
                            development practices.
                        </p>
                    </div>
                </div>

                {/* SOCIALS */}
                <div className="mb-16">
                    <div className="mb-8">
                        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
                            Connect
                        </p>

                        <h2 className="text-4xl font-bold">
                            Social Profiles &
                            Platforms
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`bg-gradient-to-br ${social.color} border rounded-3xl p-7 hover:-translate-y-1 transition duration-300 backdrop-blur-xl`}
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                                        {
                                            social.icon
                                        }
                                    </div>

                                    <ArrowUpRight
                                        size={18}
                                        className="text-gray-400"
                                    />
                                </div>

                                <h3 className="text-2xl font-bold mb-2">
                                    {social.name}
                                </h3>

                                <p className="text-gray-400 text-sm">
                                    {
                                        social.username
                                    }
                                </p>
                            </a>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl px-8 py-12 text-center backdrop-blur-xl">
                    <h2 className="text-4xl font-bold mb-4">
                        Let’s build something
                        amazing together
                    </h2>

                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-7">
                        Open to freelance
                        projects, SaaS
                        development, frontend &
                        backend systems, AI tools,
                        fintech dashboards, and
                        scalable web platforms.
                    </p>

                    <a
                        href="https://www.upwork.com/freelancers/~010329a7025ff4e4d9?mp_source=share"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-2xl hover:opacity-90 transition"
                    >
                        Hire on Upwork

                        <ArrowUpRight size={18} />
                    </a>
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
                            platform built with
                            modern fintech
                            architecture.
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
                            href="/about"
                            className="hover:text-white transition"
                        >
                            About
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