import type {Critical} from "@dicelette/core";

type CustomCriticalValues = {
	selection: ">" | ">=" | "<" | "<=" | "==" | "!=";
	name: string;
	formula: string;
	onNaturalDice: boolean;
	affectSkill: boolean;
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
	critical?: Critical;
	damages: DicesValues[];
	customCritical: CustomCriticalValues[];
}
