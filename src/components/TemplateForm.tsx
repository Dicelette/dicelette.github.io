import {
	type Critical,
	type CustomCritical as CustomCriticalType,
	getEngine,
	type Statistic,
	type StatisticalSchema,
	verifyTemplateValue,
} from "@dicelette/core";
import { translate } from "@docusaurus/Translate";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { Icon } from "@iconify/react";
import { Button, Tooltip } from "@mui/material";
import type { DataForm } from "@site/src/components/interfaces";
import { Form, Formik } from "formik";
import type { ChangeEvent, FC } from "react";
import { useEffect, useId, useRef } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import CriticalValue from "./Blocks/CriticalValue";
import CustomCritical from "./Blocks/customCritical";
import General from "./Blocks/General";
import Macro from "./Blocks/Macro";
import Statistics from "./Blocks/Statistics";
import { errorCode } from "./errorsTranslation";
import { isNumber } from "./utils";
import "../css/form.css";

// Persistence
const STORAGE_KEY = "dicelette:template-form:v1";

const engine = getEngine("browserCrypto");

const INITIAL_VALUES: DataForm = {
	isCharNameRequired: false,
	isPrivate: false,
	statistics: [],
	total: "",
	diceType: "",
	critical: { success: "", failure: "" },
	damages: [],
	customCritical: [],
	forceDistrib: false,
};

const FormPersistence: FC<{
	values: DataForm;
	setValues: (v: DataForm) => void;
}> = ({ values, setValues }) => {
	const loadedRef = useRef(false);

	// Load from localStorage on first mount
	useEffect(() => {
		if (loadedRef.current) return;
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (raw) {
				const parsed = JSON.parse(raw);
				// Basic shape check
				if (
					parsed &&
					typeof parsed === "object" &&
					Array.isArray(parsed.statistics)
				) {
					setValues(parsed as DataForm);
				}
			}
		} catch {
			// ignore
		} finally {
			loadedRef.current = true;
		}
	}, [setValues]);

	// Save on every change (after initial load)
	useEffect(() => {
		if (!loadedRef.current) return;
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
		} catch {
			// ignore quota/storage errors silently
		}
	}, [values]);

	return null;
};

function parseNumber(nb?: unknown): number | undefined {
	if (!nb || !isNumber(nb)) return undefined;
	return Number.parseInt(nb.toString(), 10);
}

const downloadCSV = (data: DataForm) => {
	const CSVHeader = ["user", "charName", "avatar", "channel"];
	if (data.isPrivate) CSVHeader.push("isPrivate");
	if (data.statistics.length > 0)
		CSVHeader.push(...Object.keys(data.statistics as any));
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

const TemplateForm: FC = () => {
	const isBrowser = useIsBrowser();
	const formButtonsId = useId();
	const disabledButtonId = useId();
	const fileInputRef = useRef<HTMLInputElement | null>(null);
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
				undefined,
				engine,
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
			const swal = withReactContent(Swal);
			swal
				.fire({
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
				})
				.then();
		}
	};

	// Map a validated StatisticalSchema to DataForm (partial) to merge into current values
	const mapSchemaToFormValues = (
		schema: StatisticalSchema,
		current: DataForm,
	): DataForm => {
		const statisticsArray = schema.statistics
			? Object.entries(schema.statistics).map(([name, value]) => ({
					name,
					combinaison: value.combinaison,
					min: value.min,
					max: value.max,
					excluded: value.exclude,
				}))
			: [];

		const damagesArray = schema.damage
			? Object.entries(schema.damage).map(([name, value]) => ({
					name,
					value,
				}))
			: [];

		const customCriticalArray = schema.customCritical
			? Object.entries(schema.customCritical).map(([name, value]) => ({
					name,
					selection: value.sign as CustomCriticalType["sign"],
					formula: value.value,
					onNaturalDice: Boolean(value.onNaturalDice),
					affectSkill: Boolean(value.affectSkill),
				}))
			: [];

		return {
			...current,
			isCharNameRequired: Boolean(
				schema.charName ?? current.isCharNameRequired,
			),
			forceDistrib: Boolean(schema.forceDistrib ?? current.forceDistrib),
			diceType: schema.diceType ?? current.diceType,
			total: schema.total ?? current.total,
			critical: {
				success: schema.critical?.success ?? current.critical?.success ?? "",
				failure: schema.critical?.failure ?? current.critical?.failure ?? "",
			},
			statistics: statisticsArray,
			damages: damagesArray,
			customCritical: customCriticalArray,
		};
	};

	const handleSubmit = (values: DataForm, { setSubmitting }: any) => {
		setTimeout(() => {
			downloadJSON(values);
			setSubmitting(false);
		}, 400);
	};

	const handleDownloadCSV = (values: DataForm) => {
		downloadCSV(values);
	};

	const handleClear = (setValues: (v: DataForm) => void) => {
		try {
			localStorage.removeItem(STORAGE_KEY);
		} catch (e) {
			console.warn(e);
		}
		setValues(INITIAL_VALUES);
	};

	const handleOpenFileDialog = () => {
		fileInputRef.current?.click();
	};

	const handleImportJSON = (
		event: ChangeEvent<HTMLInputElement>,
		setValues: (values: DataForm) => void,
		currentValues: DataForm,
	) => {
		const file = event.target.files?.[0];
		// Reset the input value to allow re-selecting the same file if needed
		event.target.value = "";
		if (!file) return;
		if (file.type && file.type !== "application/json") {
			const swal = withReactContent(Swal);
			swal.fire({
				title: translate({ message: "Type de fichier invalide" }),
				text: translate({ message: "Veuillez sélectionner un fichier JSON." }),
				icon: "error",
			});
			return;
		}
		const reader = new FileReader();
		reader.onload = () => {
			try {
				const raw = reader.result as string;
				const parsed = JSON.parse(raw);
				// Remove $schema if present to avoid validation issues
				const { $schema: _drop, ...candidate } = parsed ?? {};
				const validated = verifyTemplateValue(
					candidate,
					undefined,
					engine,
				) as StatisticalSchema;
				const mapped = mapSchemaToFormValues(validated, currentValues);
				setValues(mapped);
				const swal = withReactContent(Swal);
				swal.fire({
					text: translate({ message: "Modèle importé avec succès." }),
					icon: "success",
					showConfirmButton: false,
					timer: 1200,
				});
			} catch (error) {
				const msg = errorCode(error);
				const swal = withReactContent(Swal);
				swal.fire({
					html: msg,
					icon: "error",
					showCloseButton: true,
					backdrop: true,
					showConfirmButton: false,
					customClass: {
						confirmButton: "hide",
						popup: ["error", "swal2-toast"],
						htmlContainer: ["error", "swal2-toast"],
						closeButton: "error",
					},
				});
			}
		};
		reader.onerror = () => {
			const swal = withReactContent(Swal);
			swal.fire({
				title: translate({ message: "Erreur de lecture" }),
				text: translate({
					message: "Impossible de lire le fichier sélectionné.",
				}),
				icon: "error",
			});
		};
		reader.readAsText(file, "utf-8");
	};

	const detectAnyErrorClassInPage = () => {
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
						id={`disabledButton-${disabledButtonId}`}
						className="download-button"
						startIcon={
							<Icon
								icon="material-symbols:download-rounded"
								width={20}
								height={20}
							/>
						}
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
				startIcon={
					<Icon
						icon="material-symbols:download-rounded"
						width={20}
						height={20}
					/>
				}
			>
				{translate({ message: "Télécharger le modèle" })}
			</Button>
		);
	};

	return (
		<Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
			{({ isSubmitting, values, setFieldValue, setValues }) => (
				<Form>
					<FormPersistence values={values as DataForm} setValues={setValues} />
					{/* Hidden input for JSON import */}
					<input
						type="file"
						accept="application/json,.json"
						ref={fileInputRef}
						style={{ display: "none" }}
						onChange={(e) =>
							handleImportJSON(
								e as ChangeEvent<HTMLInputElement>,
								setValues,
								values as DataForm,
							)
						}
					/>
					<div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-start md:gap-3">
						<div className="flex gap-2">
							<Tooltip
								title={translate({
									message:
										"Préremplir le formulaire à partir d'un fichier JSON généré précédemment",
								})}
							>
								<Button
									type="button"
									variant="outlined"
									size="medium"
									onClick={handleOpenFileDialog}
									className="import-button"
									aria-label={translate({ message: "Importer un JSON" })}
									aria-description={translate({
										message:
											"Préremplir le formulaire à partir d'un fichier JSON généré précédemment",
									})}
									startIcon={
										<Icon
											icon="material-symbols:upload-rounded"
											width={20}
											height={20}
										/>
									}
								>
									{translate({ message: "Importer un JSON" })}
								</Button>
							</Tooltip>
							<Tooltip
								title={translate({
									message:
										"Réinitialiser le formulaire et supprimer les données enregistrées",
								})}
							>
								<Button
									type="button"
									variant="outlined"
									size="medium"
									onClick={() => handleClear(setValues)}
									className="clear-button"
									aria-description={translate({
										message:
											"Réinitialiser le formulaire et supprimer les données enregistrées",
									})}
									aria-label={translate({ message: "Vider le formulaire" })}
									startIcon={
										<Icon
											icon="material-symbols:delete-outline-rounded"
											width={20}
											height={20}
										/>
									}
								>
									{translate({ message: "Vider le formulaire" })}
								</Button>
							</Tooltip>
						</div>
					</div>
					<General />
					<CriticalValue critical={values.critical} />
					<Statistics values={values} setFieldValue={setFieldValue} />
					<Macro values={values} setFieldValue={setFieldValue} />
					<CustomCritical values={values} setFieldValue={setFieldValue} />
					<div
						id={`form-buttons-${formButtonsId}`}
						className="flex justify-center gap-2 md:justify-start"
					>
						{buttonDisabled(isSubmitting)}
						<Button
							type="button"
							onClick={() => handleDownloadCSV(values)}
							variant="outlined"
							size="medium"
							className="download-button csv-button"
							startIcon={
								<Icon
									icon="material-symbols:download-rounded"
									width={20}
									height={20}
								/>
							}
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
