import { translate } from "@docusaurus/Translate";
import type { StatisticFields } from "@site/src/components/interfaces";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { isNumber, under } from "../../utils";

const minimalErrorToolTip = (index: number, statistics: StatisticFields) => {
	if (!statistics.min) return;
	const { min, max } = statistics;
	if (!min) return;
	if (min && max && min > max) {
		return (
			<ReactTooltip
				id={`Min-${index}`}
				content={translate({
					message:
						"La valeur minimale ne peut pas être supérieure à la valeur maximale",
				})}
				style={{ background: "var(--rt-color-error)" }}
				anchorSelect={`#Min-${index}`}
			/>
		);
	}
	if (under(min, 0)) {
		return (
			<ReactTooltip
				id={`Min-${index}`}
				content={translate({
					message: "La valeur minimale ne peut pas être négative",
				})}
				style={{ background: "var(--rt-color-error)" }}
				anchorSelect={`#Min-${index}`}
			/>
		);
	}
	if (!isNumber(min)) {
		return (
			<ReactTooltip
				id={`Min-${index}`}
				content={translate({
					message: "La valeur minimale doit être un nombre",
				})}
				style={{ background: "var(--rt-color-error)" }}
				anchorSelect={`#Min-${index}`}
			/>
		);
	}
	return null;
};

const maximalErrorTollTip = (index: number, statistic: StatisticFields) => {
	const { min, max } = statistic;
	if (!max) return;
	if (min && max && min > max) {
		return (
			<ReactTooltip
				id={`Max-${index}`}
				content={translate({
					message:
						"La valeur maximale ne peut pas être inférieure à la valeur minimale",
				})}
				style={{ background: "var(--rt-color-error)" }}
				anchorSelect={`#Max-${index}`}
			/>
		);
	}
	if (under(max, 0)) {
		return (
			<ReactTooltip
				id={`Max-${index}`}
				content={translate({
					message: "La valeur maximale ne peut pas être négative",
				})}
				style={{ background: "var(--rt-color-error)" }}
				anchorSelect={`#Max-${index}`}
			/>
		);
	}
	if (!isNumber(max)) {
		return (
			<ReactTooltip
				id={`Max-${index}`}
				content={translate({
					message: "La valeur maximale doit être un nombre",
				})}
				style={{ background: "var(--rt-color-error)" }}
				anchorSelect={`#Max-${index}`}
			/>
		);
	}
	return null;
};

const minimalErrorClass = (statistic: StatisticFields) => {
	const { min, max } = statistic;
	if (!min) return;
	if (min && max && min > max) {
		return "error";
	}
	if (under(min, 0)) {
		return "error";
	}
	if (Number.isNaN(Number.parseInt(String(min), 10))) {
		return "error";
	}
	return "";
};

const maximalErrorClass = (statistic: StatisticFields) => {
	const { min, max } = statistic;
	if (!max) return;
	if (min && max && min > max) {
		return "error";
	}
	if (under(max, 0)) {
		return "error";
	}
	if (!isNumber(max)) {
		return "error";
	}
	return "";
};

const nameErrorToolTip = (
	index: number,
	duplicateIndices: number[],
	name: string,
) => {
	if (name.length === 0) {
		return (
			<ReactTooltip
				id={`Stats-Nom-${index}`}
				content={translate({ message: "Le nom ne peut pas être vide" })}
				style={{ background: "var(--rt-color-error)" }}
				anchorSelect={`#Stats-Nom-${index}`}
			/>
		);
	}
	if (duplicateIndices.includes(index)) {
		return (
			<ReactTooltip
				id={`Stats-Nom-${index}`}
				content={translate({ message: "Ce nom est déjà utilisé" })}
				style={{ background: "var(--rt-color-error)" }}
				anchorSelect={`#Stats-Nom-${index}`}
			/>
		);
	}
	return null;
};

const nameErrorClass = (name: string) => {
	if (name.length === 0) {
		return "error";
	}
};

export {
	nameErrorClass,
	maximalErrorClass,
	minimalErrorClass,
	nameErrorToolTip,
	minimalErrorToolTip,
	maximalErrorTollTip,
};
