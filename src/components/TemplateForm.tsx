import { Button, Tooltip } from "@mui/material";
import { Form, Formik } from "formik";
import type { FC } from "react";

import {
	type Critical,
	type CustomCritical as CustomCriticalType,
	type Statistic,
	type StatisticalSchema,
	verifyTemplateValue,
} from "@dicelette/core";
import { translate } from "@docusaurus/Translate";
import useIsBrowser from "@docusaurus/useIsBrowser";
import type { DataForm } from "@site/src/components/interfaces";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import CriticalValue from "./Blocks/CriticalValue";
import Dice from "./Blocks/Dice";
import General from "./Blocks/General";
import Statistics from "./Blocks/Statistics";
import CustomCritical from "./Blocks/customCritical";
import { errorCode } from "./errorsTranslation";
import { isNumber } from "./utils";

function parseNumber(nb?: unknown): number | undefined {
	if (!nb || !isNumber(nb)) return undefined;
	return Number.parseInt(nb.toString(), 10);
}

const downloadCSV = (data: DataForm) => {
	const CSVHeader = ["user", "charName", "avatar", "channel"];
	if (data.isPrivate) CSVHeader.push("isPrivate");
	if (data.statistics.length > 0)
		CSVHeader.push(...Object.keys(data.statistics));
	CSVHeader.push("dice");
	const csv = `\ufeff${CSVHeader.join(";")}\n`;
	const csvBlob = new Blob([csv], { type: "text/csv" });
	const url = URL.createObjectURL(csvBlob);
	const a = document.createElement("a");
	a.href = url;
	a.download = "import.csv";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
};

const handleDownloadCSV = (values) => {
	downloadCSV(values);
};

const TemplateForm: FC = () => {
	const downloadJSON = (data: DataForm) => {
		//convert statistic to Statistic interface
		const stat: Statistic = {};
		const diceSkill: Record<string, string> = {};
		const customCritical: Record<string, CustomCriticalType> = {};
		if (data.statistics.length > 0)
			for (const statistic of data.statistics) {
				stat[statistic.name] = {
					combinaison: statistic.combinaison,
					max: parseNumber(statistic.max),
					min: parseNumber(statistic.min),
					exclude: statistic.excluded,
				};
			}
		if (data.damages.length > 0)
			for (const damage of data.damages) {
				diceSkill[damage.name] = damage.value;
			}
		if (data.customCritical.length > 0)
			for (const critical of data.customCritical) {
				customCritical[critical.name] = {
					sign: critical.selection,
					value: critical.formula,
					onNaturalDice: critical.onNaturalDice,
					affectSkill: critical.affectSkill,
				};
			}
		const critical: Critical = {
			success:
				data.critical.success && isNumber(data.critical.success)
					? Number.parseInt(data.critical.success.toString(), 10)
					: undefined,
			failure:
				data.critical.failure && isNumber(data.critical.failure)
					? Number.parseInt(data.critical.failure.toString(), 10)
					: undefined,
		};
		const total = parseNumber(data.total);
		const templateDataValues: StatisticalSchema = {
			charName: data.isCharNameRequired,
			forceDistrib: data.forceDistrib,
			critical,
			diceType: data.diceType,
			total,
			statistics: data.statistics.length > 0 ? stat : undefined,
			damage: data.damages.length > 0 ? diceSkill : undefined,
			customCritical:
				data.customCritical.length > 0 ? customCritical : undefined,
		};

		try {
			const template = verifyTemplateValue(
				templateDataValues,
			) as StatisticalSchema;
			template.$schema =
				"https://raw.githubusercontent.com/Dicelette/core/refs/heads/main/dicelette.schema.json";
			const jsonBlob = new Blob([JSON.stringify(template, null, 2)], {
				type: "application/json",
			});
			const urls = [
				{
					name: "config.json",
					url: URL.createObjectURL(jsonBlob),
				},
			];
			for (const url of urls) {
				const a = document.createElement("a");
				a.href = url.url;
				a.download = url.name;
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
				URL.revokeObjectURL(url.url);
			}
		} catch (error) {
			const msg = errorCode(error);
			const MySwal = withReactContent(Swal);
			MySwal.fire({
				html: msg,
				icon: "error",
				showCloseButton: true,
				//toast: true,
				backdrop: true,
				showConfirmButton: false,
				customClass: {
					confirmButton: "hide",
					popup: ["error", "swal2-toast"],
					htmlContainer: ["error", "swal2-toast"],
					closeButton: "error",
				},
			}).then();
		}
	};

	const handleSubmit = (values, { setSubmitting }) => {
		setTimeout(() => {
			downloadJSON(values);
			setSubmitting(false);
		}, 400);
	};

	const handleDownloadCSV = (values) => {
		downloadCSV(values);
	};

	const detectAnyErrorClassInPage = () => {
		const isBrowser = useIsBrowser();
		if (!isBrowser) return false;
		const errorClasses = document.getElementsByClassName("error");
		const duplicateErrorClass = document.getElementsByClassName("error-bg");
		return errorClasses.length > 0 || duplicateErrorClass.length > 0;
	};

	const buttonDisabled = (isSubmitting: boolean) => {
		return detectAnyErrorClassInPage() ? (
			<Tooltip
				title={translate({ message: "Veuillez corriger les erreurs" })}
				classes={{ popper: "error" }}
				arrow
			>
				<span>
					<Button
						type="submit"
						disabled={true}
						variant="outlined"
						size="medium"
						id="disabledButton"
						className="download-button"
					>
						{translate({ message: "Télécharger le modèle" })}
					</Button>
				</span>
			</Tooltip>
		) : (
			<Button
				type="submit"
				disabled={isSubmitting}
				variant="outlined"
				size="medium"
				className="download-button"
			>
				{translate({ message: "Télécharger le modèle" })}
			</Button>
		);
	};

	return (
		<Formik
			initialValues={{
				isCharNameRequired: false,
				isPrivate: false,
				statistics: [],
				total: "",
				diceType: "",
				critical: { success: "", failure: "" },
				damages: [],
				customCritical: [],
				forceDistrib: false,
			}}
			onSubmit={handleSubmit}
		>
			{({ isSubmitting, values, setFieldValue }) => (
				<Form>
					<General />
					<CriticalValue critical={values.critical} />
					<Statistics values={values} setFieldValue={setFieldValue} />
					<Dice values={values} setFieldValue={setFieldValue} />
					<CustomCritical values={values} setFieldValue={setFieldValue} />
					<div
						id={"form-buttons"}
						className="flex justify-center gap-2 md:justify-start"
					>
						{buttonDisabled(isSubmitting)}
						<Button
							type="button"
							onClick={() => handleDownloadCSV(values)}
							variant="outlined"
							size="medium"
							className="download-button csv-button"
						>
							{translate({ message: "Télécharger le CSV" })}
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default TemplateForm;
