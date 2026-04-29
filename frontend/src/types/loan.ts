export interface Loan {
    _id: string;

    fullName: string;

    amount: number;

    tenureDays: number;

    annualIncome: number;

    employmentType: string;

    panNumber: string;

    aadhaarNumber: string;

    purpose: string;

    interestRate: number;

    interestAmount: number;

    totalRepayment: number;

    status: string;

    createdAt: string;
}