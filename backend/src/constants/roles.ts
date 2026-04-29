export const ROLES = {
    ADMIN: "ADMIN",
    SALES: "SALES",
    SANCTION: "SANCTION",
    DISBURSEMENT: "DISBURSEMENT",
    COLLECTION: "COLLECTION",
    BORROWER: "BORROWER",
} as const;

export type Role = typeof ROLES[keyof typeof ROLES];