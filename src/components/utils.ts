export const isNumber = (value: unknown): boolean =>
	typeof value === "number" ||
	(!Number.isNaN(Number(value)) && typeof value === "string");

export const under = (value: string, min: number): boolean => {
	return isNumber(value) && Number.parseInt(value, 10) < min;
};

