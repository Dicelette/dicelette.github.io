import type { Critical } from "@dicelette/core";

type CustomCriticalValues = {
	selection: ">" | ">=" | "<" | "<=" | "==" | "!=";
	name: string;
	formula: string;
	onNaturalDice: boolean;
	affectSkill: boolean;
};

type CriticalValues = {
	success?: number | string;
	failure?: number | string;
};

export type DicesValues = {
	name: string;
	value: string;
};

type StatisticValues = {
	min?: number;
	max?: number;
	combinaison?: string;
	name: string;
	excluded?: boolean;
};

export type StatisticFields = {
	min?: string;
	max?: string;
	combinaison?: string;
	name: string;
	excluded?: boolean;
};

export type DataForm = {
	isCharNameRequired: boolean;
	isPrivate: boolean;
	statistics: StatisticValues[];
	total?: number | string;
	diceType?: string;
	critical?: CriticalValues;
	damages: DicesValues[];
	customCritical: CustomCriticalValues[];
};
