import { isNumber } from "@dicelette/core";

export const under = (value: string, min: number): boolean => {
	return isNumber(value) && Number.parseInt(value, 10) < min;
};
