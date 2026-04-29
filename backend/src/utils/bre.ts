interface BreInput {
    annualIncome: number;
    amount: number;
    employmentType: string;
    panNumber: string;
    aadhaarNumber: string;
}

interface BreResult {
    eligible: boolean;
    message: string;
}

/**
 * Business Rules Engine
 */
export const breCheck = ({
    annualIncome,
    amount,
    employmentType,
    panNumber,
    aadhaarNumber,
}: BreInput): BreResult => {
    /**
     * Minimum Income Check
     */
    if (annualIncome < 25000) {
        return {
            eligible: false,
            message: "Minimum income requirement not met",
        };
    }

    /**
     * Loan Amount Limit
     */
    if (amount > 500000) {
        return {
            eligible: false,
            message: "Loan amount exceeds limit",
        };
    }

    /**
     * Employment Check
     */
    if (employmentType === "UNEMPLOYED") {
        return {
            eligible: false,
            message: "Unemployed applicants are not eligible",
        };
    }

    /**
     * PAN Validation
     */
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (!panRegex.test(panNumber)) {
        return {
            eligible: false,
            message: "Invalid PAN number",
        };
    }

    /**
     * Aadhaar Validation
     */
    const aadhaarRegex = /^\d{12}$/;

    if (!aadhaarRegex.test(aadhaarNumber)) {
        return {
            eligible: false,
            message: "Invalid Aadhaar number",
        };
    }

    /**
     * Passed All Rules
     */
    return {
        eligible: true,
        message: "Loan eligible",
    };
};