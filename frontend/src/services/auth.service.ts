import { api } from "./api";

/**
 * Register User
 */
export const registerUser = async (data: any) => {
    const response = await api.post(
        "/auth/register",
        data
    );

    return response.data;
};

/**
 * Login User
 */
export const loginUser = async (data: any) => {
    const response = await api.post(
        "/auth/login",
        data
    );

    return response.data;
};

/**
 * Get Current User
 */
export const getMe = async () => {
    const response = await api.get("/auth/me");

    return response.data;
};

/**
 * Logout User
 */
export const logoutUser = async () => {
    const response = await api.post(
        "/auth/logout"
    );

    return response.data;
};