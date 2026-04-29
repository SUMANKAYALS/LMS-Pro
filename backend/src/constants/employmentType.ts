export const EMPLOYMENT_TYPE = {
    SALARIED: "SALARIED",
    SELF_EMPLOYED: "SELF_EMPLOYED",
    UNEMPLOYED: "UNEMPLOYED",
} as const;

export type EmploymentType =
    typeof EMPLOYMENT_TYPE[keyof typeof EMPLOYMENT_TYPE];