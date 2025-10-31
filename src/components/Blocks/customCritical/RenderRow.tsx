import { translate } from "@docusaurus/Translate";
import { Draggable } from "@hello-pangea/dnd";
import { Autocomplete, TextField } from "@mui/material";
import { Tablefield } from "@site/src/components/Atoms";
import CopyButton from "@site/src/components/Atoms/button/copyButton";
import RemoveButton from "@site/src/components/Atoms/button/removeButton";
import StandaloneToggleButton from "@site/src/components/Atoms/toggle-custom";
import { errorTooltip } from "@site/src/components/Blocks/customCritical/errors";
import { ErrorMessage } from "formik";
import { memo, useMemo } from "react";

export type Custom = {
	id?: string;
	selection: string;
	name: string;
	formula: string;
	text: string;
	onNaturalDice: boolean;
	affectSkill: boolean;
};

const pushSelection = (values) => ({
	selection: values.selection,
	name: values?.name,
	formula: values?.formula,
	text: values?.text,
	onNaturalDice: values?.onNaturalDice,
	affectSkill: values?.affectSkill,
});

const CustomCriticalRow = ({
	index,
	duplicateIndices,
	push,
	remove,
	customCritical,
	setFieldValue,
}: {
	index: number;
	duplicateIndices: number[];
	push: any;
	remove: any;
	setFieldValue: any;
	customCritical: Custom[];
}): JSX.Element => {
	const custom = customCritical[index];
	const { onNaturalDice, affectSkill, selection, name, formula } = custom;

	const selectionError = useMemo(() => selection.length === 0, [selection]);
	const nameError = useMemo(() => name.length === 0, [name]);
	const formulaError = useMemo(() => formula.length === 0, [formula]);

	return (
		<Draggable
			key={custom.id || index}
			draggableId={String(custom.id || index)}
			index={index}
		>
			{(provided) => (
				<tr
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					className={`flex flex-col xl:flex-row items-start xl:w-full ${
						duplicateIndices.includes(index) ? "error-bg" : ""
					} ${index === 0 ? "border-t-0" : ""}`}
				>
					<td className="p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-xl:w-full">
						<CopyButton
							maxLen={22}
							length={customCritical.length}
							size={1280}
							onClick={() => {
								push({ ...pushSelection(customCritical[index]) });
							}}
						/>
					</td>
					<td className="p-2 min-[0px]:max-xl:w-full">
						<Autocomplete
							size={"small"}
							slotProps={{
								paper: { className: "autocomplete" },
							}}
							id={`Critical-selection-${index}`}
							className={
								"autocomplete 2xl:w-[200px] !mb-0 min-[0px]:max-2xl:w-full"
							}
							style={{ fontFamily: "Fira Code VF" }}
							options={[">", ">=", "<", "<=", "==", "!="]}
							value={selection || ""}
							onChange={(_e, newValue) =>
								setFieldValue(
									`customCritical[${index}].selection`,
									newValue || "",
								)
							}
							renderInput={(params) => (
								<TextField
									size={"medium"}
									{...params}
									label={translate({ message: "Signe" })}
									style={{ fontFamily: "Fira Code VF" }}
									variant="outlined"
									className={`2xl:w-[200px] !mb-0 min-[0px]:max-2xl:w-full ${selectionError ? "error" : ""}`}
								/>
							)}
						/>
						<ErrorMessage name={`customCritical[${index}].selection`} />
						{errorTooltip({
							index,
							idName: "selection",
							duplicateIndices,
							customCritical: custom,
						})}
					</td>
					<td className="p-2 min-[0px]:max-xl:w-full">
						<Tablefield
							name={`customCritical[${index}].name`}
							label={translate({ message: "Nom" })}
							variant="outlined"
							className={`${nameError ? "error" : ""}`}
							id={`Critical-name-${index}`}
						/>
						<ErrorMessage name={`customCritical[${index}].name`} />
						{errorTooltip({
							index,
							idName: "name",
							duplicateIndices,
							customCritical: custom,
						})}
					</td>
					<td className="p-2 min-[0px]:max-xl:w-full h-200px">
						<Tablefield
							name={`customCritical[${index}].formula`}
							label={translate({ message: "Formule" })}
							variant="outlined"
							className={`${formulaError ? "error" : ""}`}
							id={`Critical-formula-${index}`}
						/>
						<ErrorMessage name={`customCritical[${index}].formula`} />
						{errorTooltip({
							index,
							idName: "formula",
							duplicateIndices,
							customCritical: custom,
						})}
					</td>
					<td className="p-2 min-[0px]:max-xl:w-full h-200px">
						<StandaloneToggleButton
							selected={onNaturalDice}
							onChange={() =>
								setFieldValue(
									`customCritical[${index}].onNaturalDice`,
									!onNaturalDice,
								)
							}
							size={1280}
							opt={"naturalDice"}
						/>
					</td>
					<td className="p-2 min-[0px]:max-xl:w-full h-200px">
						<StandaloneToggleButton
							selected={affectSkill}
							onChange={() =>
								setFieldValue(
									`customCritical[${index}].affectSkill`,
									!affectSkill,
								)
							}
							size={1280}
							opt={"affectSkill"}
						/>
					</td>
					<td className="p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-xl:w-full">
						<RemoveButton size={1280} onClick={() => remove(index)} />
					</td>
				</tr>
			)}
		</Draggable>
	);
};

export default memo(CustomCriticalRow);
