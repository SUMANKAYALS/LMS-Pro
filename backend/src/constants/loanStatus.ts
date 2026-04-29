export const LOAN_STATUS = {
    APPLIED: "APPLIED",
    SANCTIONED: "SANCTIONED",
    REJECTED: "REJECTED",
    DISBURSED: "DISBURSED",
    CLOSED: "CLOSED",
} as const;

export type LoanStatus =
    (typeof LOAN_STATUS)[keyof typeof LOAN_STATUS];