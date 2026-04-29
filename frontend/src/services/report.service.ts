import { api } from "./api";

/**
 * Download Loan Report
 */
export const downloadLoanReport =
    async (loanId: string) => {
        const response =
            await api.get(
                `/report/loan/${loanId}`,
                {
                    responseType: "blob",
                }
            );

        return response.data;
    };