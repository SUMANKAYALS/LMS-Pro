"use client";

import { useEffect, useState } from "react";

import { getMe } from "@/services/auth.service";

export interface AuthUser {
    id: string;
    name: string;
    email: string;
    role: string;
}

export const useAuth = () => {
    const [user, setUser] = useState<AuthUser | null>(
        null
    );

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await getMe();

                setUser(response.user);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return {
        user,
        loading,
    };
};