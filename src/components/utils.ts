export const isNumber = (value: unknown): boolean => typeof value === "number" || (!Number.isNaN(Number(value)) && typeof value === "string");
