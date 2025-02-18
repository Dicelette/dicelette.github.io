import type { Critical } from "@dicelette/core";
import { translate } from "@docusaurus/Translate";
import { Tooltip as ReactTooltip } from "react-tooltip";

export function toolTipOnCondition(values: Critical) {
	if (
		values.success.toString() !== "" &&
		values.failure.toString() !== "" &&
		values.failure === values.success &&
		values.failure >= 0 &&
		values.success >= 0
	) {
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

export function errorClass(values: Critical, type: "failure" | "success") {
	if (
		values.success.toString() !== "" &&
		values.failure.toString() !== "" &&
		values.failure === values.success &&
		values.failure >= 0 &&
		values.success >= 0
	) {
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
