"use client";

import {
    useEffect,
} from "react";

import {
    useRouter,
    usePathname,
} from "next/navigation";

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const router =
        useRouter();

    const pathname =
        usePathname();

    useEffect(() => {
        const syncLogout = (
            event: StorageEvent
        ) => {
            if (
                event.key ===
                "logout"
            ) {
                router.replace(
                    "/login"
                );
            }
        };

        window.addEventListener(
            "storage",
            syncLogout
        );

        return () => {
            window.removeEventListener(
                "storage",
                syncLogout
            );
        };
    }, [router]);

    useEffect(() => {
        const protectedRoutes =
            [
                "/dashboard",
            ];

        const isProtected =
            protectedRoutes.some(
                (route) =>
                    pathname.startsWith(
                        route
                    )
            );

        if (
            isProtected
        ) {
            fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/me`,
                {
                    credentials:
                        "include",
                }
            )
                .then(
                    async (
                        res
                    ) => {
                        if (
                            !res.ok
                        ) {
                            router.replace(
                                "/login"
                            );
                        }
                    }
                )
                .catch(() => {
                    router.replace(
                        "/login"
                    );
                });
        }
    }, [
        pathname,
        router,
    ]);

    return children;
}