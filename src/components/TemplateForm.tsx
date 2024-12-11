/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Tooltip } from "@mui/material";
import { Form, Formik } from "formik";
import type { FC } from "react";

import {
	type CustomCritical as CustomCriticalType,
	type Statistic,
	type StatisticalSchema,
	verifyTemplateValue,
} from "@dicelette/core";
import { translate } from "@docusaurus/Translate";
import useIsBrowser from "@docusaurus/useIsBrowser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import CriticalValue from "./Blocks/CriticalValue";
import Dices from "./Blocks/Dices";
import General from "./Blocks/General";
import Statistics from "./Blocks/Statistics";
import CustomCritical from "./Blocks/customCritical";
import { errorCode } from "./errorsTranslation";
import type {DataForm} from "@site/src/components/interfaces";
import {isNumber} from "mathjs";

function parseNumber(nb?: unknown): number | undefined {
	if (nb.toString().length === 0) return undefined;
	return Number.parseInt(nb.toString(), 10);
}

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
		const total = isNumber(data.total) ? Number.parseInt(data.total.toString(), 10) : undefined;
		const templateDataValues: StatisticalSchema = {
			charName: data.isCharNameRequired,
			critical: data.critical,
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
			const CSVHeader = ["user", "charName", "avatar", "channel"];
			if (data.isPrivate) CSVHeader.push("isPrivate");
			if (template.statistics)
				CSVHeader.push(...Object.keys(template.statistics));
			CSVHeader.push("dice");
			const csv = `\ufeff${CSVHeader.join(";")}\n`;
			const CSVblob = new Blob([csv], { type: "text/csv" });
			const urls = [
				{
					name: "statisticalTemplate.json",
					url: URL.createObjectURL(jsonBlob),
				},
				{ name: "import.csv", url: URL.createObjectURL(CSVblob) },
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
			}}
			onSubmit={handleSubmit}
		>
			{({ isSubmitting, values, setFieldValue }) => (
				<Form>
					<General />
					<CriticalValue critical={values.critical} />
					<Statistics values={values} setFieldValue={setFieldValue} />
					<Dices values={values} setFieldValue={setFieldValue} />
					<CustomCritical values={values} setFieldValue={setFieldValue} />
					{buttonDisabled(isSubmitting)}
				</Form>
			)}
		</Formik>
	);
};

export default TemplateForm;
