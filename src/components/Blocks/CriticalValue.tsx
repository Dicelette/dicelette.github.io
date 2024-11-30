import type { Critical } from "@dicelette/core";
import { translate } from "@docusaurus/Translate";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Section, Textfield } from "../Atoms";

function toolTipOnCondition(values: Critical) {
	if (values.failure === values.success) {
		return (
			<ReactTooltip
				id="critical"
				anchorSelect="#critical"
				content={translate({
					message: "Les deux valeurs ne peuvent être identiques",
				})}
				style={{ background: "var(--rt-color-error)" }}
			/>
		);
	}
	if (values.failure < 0) {
		return (
			<ReactTooltip
				id="critical"
				anchorSelect=".failure"
				content={translate({
					message: "La valeur ne peut pas être inférieure à 0",
				})}
				style={{ background: "var(--rt-color-error)" }}
			/>
		);
	}
	if (values.success < 0) {
		return (
			<ReactTooltip
				id="critical"
				anchorSelect=".success"
				content={translate({
					message: "La valeur ne peut pas être inférieure à 0",
				})}
				style={{ background: "var(--rt-color-error)" }}
			/>
		);
	}
}

function errorClass(values: Critical, type: "failure" | "success") {
	if (values.failure === values.success) {
		return "error";
	}
	if (type === "failure" && values.failure < 0) {
		return "error";
	}
	if (type === "success" && values.success < 0) {
		return "error";
	}
	return "";
}

const CriticalValue = ({ critical }) => (
	<Section label="Critique">
		<Textfield
			label={translate({ message: "Succès" })}
			name="critical.success"
			type="number"
			id="critical"
			className={`success ${errorClass(critical, "success")}`}
			inputProps={{ min: 0 }}
		/>
		<Textfield
			label={translate({ message: "Échec" })}
			name="critical.failure"
			type="number"
			id="critical"
			className={`failure ${errorClass(critical, "failure")}`}
			inputProps={{ min: 0 }}
		/>
		{toolTipOnCondition(critical)}
	</Section>
);

export default CriticalValue;
