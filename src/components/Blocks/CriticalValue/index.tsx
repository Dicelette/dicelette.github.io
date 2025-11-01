import { translate } from "@docusaurus/Translate";
import {
	errorClass,
	toolTipOnCondition,
} from "@site/src/components/Blocks/CriticalValue/errors";
import { useId } from "react";
import { Section, Textfield } from "../../Atoms";

export default ({ critical }) => {
	const baseId = useId();

	const tooltipBase = `critical-${baseId}`;

	return (
		<Section label={translate({ message: "Critique" })}>
			<Textfield
				label={translate({ message: "Succès" })}
				name="critical.success"
				type="number"
				id={`${tooltipBase}-success`}
				className={`success ${errorClass(critical, "success")}`}
				inputProps={{ min: 0 }}
			/>
			<Textfield
				label={translate({ message: "Échec" })}
				name="critical.failure"
				type="number"
				id={`${tooltipBase}-failure`}
				className={`failure ${errorClass(critical, "failure")}`}
				inputProps={{ min: 0 }}
			/>
			{toolTipOnCondition(critical, baseId)}
		</Section>
	);
};
