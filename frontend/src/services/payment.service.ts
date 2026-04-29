import { api } from "./api";

/**
 * Make Payment
 */
export const makePayment = async (
    loanId: string,
    data: any
) => {
    const response = await api.post(
        `/payment/${loanId}`,
        data
    );

    return response.data;
};