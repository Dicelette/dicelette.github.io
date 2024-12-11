import type {Critical} from "@dicelette/core";

type CustomCriticalValues = {
	selection: ">" | ">=" | "<" | "<=" | "==" | "!=";
	name: string;
	formula: string;
	onNaturalDice: boolean;
	affectSkill: boolean;
}

type CriticalValues = {
	success?: number | string;
	failure?: number | string;
}

type DicesValues = {
	name: string,
	value: string;
}

type StatisticValues = {
	min?: number,
	max?: number,
	combinaison?: string;
	name: string;
}


export type DataForm = {
	isCharNameRequired: boolean;
	isPrivate: boolean;
	statistics: StatisticValues[];
	total?: number | string;
	diceType?: string;
	critical?: CriticalValues;
	damages: DicesValues[];
	customCritical: CustomCriticalValues[];
}
