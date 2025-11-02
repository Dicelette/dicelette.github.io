import { translate } from "@docusaurus/Translate";
import type { MacroValues } from "@site/src/components/interfaces";
import { Tooltip as ReactTooltip } from "react-tooltip";

export const errorTooltip = (
	index: number,
	duplicateIndices: number[],
	dice: MacroValues,
) => {
	if (duplicateIndices.includes(index)) {
		return (
			<ReactTooltip
				id={`Dice-Nom-${index}`}
				content={translate({ message: "Ce nom est déjà utilisé" })}
				style={{ background: "var(--rt-color-error)" }}
				anchorSelect={`#Dice-Nom-${index}`}
			/>
		);
	}
	if (dice.name.length === 0) {
		return (
			<ReactTooltip
				id={`Dice-Nom-${index}`}
				content={translate({ message: "Le nom ne peut pas être vide" })}
				style={{ background: "var(--rt-color-error)" }}
				anchorSelect={`#Dice-Nom-${index}`}
			/>
		);
	}
	return null;
};
