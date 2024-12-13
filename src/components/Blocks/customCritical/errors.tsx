import { translate } from "@docusaurus/Translate";
import type { Custom } from "@site/src/components/Blocks/customCritical/RenderRow";
import { Tooltip as ReactTooltip } from "react-tooltip";

export const errorTooltip = ({
	index,
	idName,
	duplicateIndices,
	customCritical,
}: {
	index: number;
	idName: string;
	duplicateIndices: number[];
	customCritical: Custom;
}) => {
	if (duplicateIndices.includes(index) && idName !== "selection") {
		return (
			<ReactTooltip
				id={`Critical-${idName}-${index}`}
				content={translate({ message: "Ce nom est déjà utilisé" })}
				style={{ background: "var(--rt-color-error)" }}
				anchorSelect={`#Critical-${idName}-${index}`}
			/>
		);
	}
	if (customCritical?.[idName].length === 0) {
		return (
			<ReactTooltip
				id={`Critical-${idName}-${index}`}
				content={translate({ message: "Le texte ne peut pas être vide" })}
				style={{ background: "var(--rt-color-error)" }}
				anchorSelect={`#Critical-${idName}-${index}`}
			/>
		);
	}
	return null;
};
