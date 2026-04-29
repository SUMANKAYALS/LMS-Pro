interface LoanCalculationInput {
    amount: number;
    interestRate: number;
    tenureDays: number;
}

interface LoanCalculationResult {
    interestAmount: number;
    totalRepayment: number;
}

/**
 * Calculate Loan Interest + Total Repayment
 */
export const calculateLoan = ({
    amount,
    interestRate,
    tenureDays,
}: LoanCalculationInput): LoanCalculationResult => {
    // Simple Interest Formula
    const interestAmount =
        (amount * interestRate * tenureDays) / (365 * 100);

    // Total repayment
    const totalRepayment = amount + interestAmount;

    return {
        interestAmount: Number(interestAmount.toFixed(2)),
        totalRepayment: Number(totalRepayment.toFixed(2)),
    };
}; 