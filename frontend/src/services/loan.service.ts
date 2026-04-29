import { api } from "./api";

/**
 * Apply Loan
 */
export const applyLoan = async (data: any) => {
    const response = await api.post(
        "/loan/apply",
        data
    );

    return response.data;
};

/**
 * Get My Loans
 */
export const getMyLoans = async () => {
    const response = await api.get(
        "/loan/my-loans"
    );

    return response.data;
};

/**
 * Get All Loans
 */
export const getAllLoans = async () => {
    const response = await api.get(
        "/loan/all"
    );

    return response.data;
};

/**
 * Update Loan Status
 */
export const updateLoanStatus = async (
    loanId: string,
    status: string
) => {
    const response = await api.patch(
        `/loan/status/${loanId}`,
        { status }
    );

    return response.data;
};