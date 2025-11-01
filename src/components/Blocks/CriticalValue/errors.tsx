import type { Critical } from "@dicelette/core";
import { translate } from "@docusaurus/Translate";
import { Tooltip as ReactTooltip } from "react-tooltip";

// baseId can be string or number (ex: from useId or external numeric ids).
// We stringify it when building DOM ids to remain permissive while
// ensuring valid selectors for react-tooltip's anchorSelect.
export function toolTipOnCondition(values: Critical, baseId?: string | number) {
	const base = baseId !== undefined ? String(baseId) : undefined;
	if (
		values.success.toString() !== "" &&
		values.failure.toString() !== "" &&
		values.failure === values.success &&
		values.failure >= 0 &&
		values.success >= 0
	) {
		const tooltipId = base ? `critical-${base}` : "critical";
		const anchor = base
			? `#${tooltipId}-success, #${tooltipId}-failure`
			: "#critical";

		return (
			<ReactTooltip
				id={tooltipId}
				anchorSelect={anchor}
				content={translate({
					message: "Les deux valeurs ne peuvent être identiques",
				})}
				style={{ background: "var(--rt-color-error)" }}
			/>
		);
	}
	if (values.failure < 0) {
		const tooltipId = base ? `critical-${base}` : "critical";
		const anchor = base ? `#${tooltipId}-failure` : ".failure";
		return (
			<ReactTooltip
				id={tooltipId}
				anchorSelect={anchor}
				content={translate({
					message: "La valeur ne peut pas être inférieure à 0",
				})}
				style={{ background: "var(--rt-color-error)" }}
			/>
		);
	}
	if (values.success < 0) {
		const tooltipId = base ? `critical-${base}` : "critical";
		const anchor = base ? `#${tooltipId}-success` : ".success";
		return (
			<ReactTooltip
				id={tooltipId}
				anchorSelect={anchor}
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
	)
		return "error";

	if (type === "failure" && values.failure < 0) return "error";

	if (type === "success" && values.success < 0) return "error";

	return "";
}
