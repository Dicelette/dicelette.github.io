import { translate } from "@docusaurus/Translate";
import { Autocomplete, TextField } from "@mui/material";
import StandaloneToggleButton from "@site/src/components/Atoms/toggle-custom";
import { ErrorMessage, FieldArray } from "formik";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Section, Tablefield } from "../Atoms";
import CopyButton from "../Atoms/button/copyButton";
import RemoveButton from "../Atoms/button/removeButton";

const CustomCritical = ({ values, setFieldValue }) => {
	const [duplicateIndices, setDuplicateIndices] = useState([]);
	useEffect(() => {
		const findDuplicates = () => {
			const duplicates = [];
			values.customCritical.forEach((critical, index) => {
				const isDuplicate = values.customCritical.findIndex(
					(c, i) => i !== index && c.selection === critical.selection,
				);
				if (isDuplicate !== -1 && !duplicates.includes(index)) {
					duplicates.push(index);
					duplicates.push(isDuplicate);
				}
			});
			setDuplicateIndices(duplicates);
		};
		findDuplicates();
	}, [values.customCritical]);

	const errorTooltip = (index) => {
		if (duplicateIndices.includes(index)) {
			return (
				<ReactTooltip
					id={`Critical-Selection-${index}`}
					content={translate({ message: "Ce texte est déjà utilisé" })}
					style={{ background: "var(--rt-color-error)" }}
					anchorSelect={`#Critical-Selection-${index}`}
				/>
			);
		}
		if (values.customCritical[index]?.selection.length === 0) {
			return (
				<ReactTooltip
					id={`Critical-Selection-${index}`}
					content={translate({ message: "Le texte ne peut pas être vide" })}
					style={{ background: "var(--rt-color-error)" }}
					anchorSelect={`#Critical-Selection-${index}`}
				/>
			);
		}
		return null;
	};

	const onDragEnd = (result) => {
		if (!result.destination) {
			return;
		}

		const items = Array.from(values.customCritical);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);

		setFieldValue("customCritical", items);
	};

	return (
		<div className="statistic">
			<FieldArray name="customCritical">
				{({ push, remove }) => (
					<div>
						<Section
							length={values.customCritical.length}
							type="critical"
							label={translate({ message: "Critiques Personnalisés" })}
							onAdd={() =>
								push({
									selection: ">=",
									name: "",
									formula: "",
									text: "",
									onNaturalDice: false,
									affectSkill: false,
								})
							}
							children={""}
						/>
						<table className="w-full">
							<DragDropContext onDragEnd={onDragEnd}>
								<Droppable droppableId="droppable">
									{(provided) => (
										<tbody
											{...provided.droppableProps}
											ref={provided.innerRef}
											className="divide-y block w-full"
										>
											{values.customCritical.map(
												(_: unknown, index: number) => (
													<Draggable
														key={index}
														draggableId={String(index)}
														index={index}
													>
														{(provided) => (
															<tr
																ref={provided.innerRef}
																{...provided.draggableProps}
																{...provided.dragHandleProps}
																key={index}
																className={`flex flex-col xl:flex-row items-start xl:w-full ${
																	duplicateIndices.includes(index)
																		? "error-bg"
																		: ""
																} ${index === 0 ? "border-t-0" : ""}`}
															>
																<td className="p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-xl:w-full">
																	<CopyButton
																		maxLen={22}
																		length={values.customCritical.length}
																		size={1280}
																		onClick={() => {
																			push({
																				selection:
																				values.customCritical[index]
																					?.selection,
																				name: values.customCritical[index]
																					?.name,
																				formula:
																				values.customCritical[index]?.formula,
																				text: values.customCritical[index]
																					?.text,
																				checked:
																				values.customCritical[index]?.checked,
																			});
																		}}
																	/>
																</td>
																<td className="p-2 min-[0px]:max-xl:w-full">
																	<Autocomplete
																		size={"small"}
																		slotProps={{
																			paper: {
																				className: "autocomplete",
																			},
																		}}
																		id={`Critical-Selection-${index}`}
																		className={
																			"autocomplete 2xl:w-[200px] !mb-0 min-[0px]:max-2xl:w-full"
																		}
																		style={{fontFamily: "Fira Code VF"}}
																		options={[
																			">",
																			">",
																			">=",
																			"<",
																			"<=",
																			"==",
																			"!=",
																		]}
																		value={
																			values.customCritical[index]?.selection ||
																			""
																		}
																		onChange={(e, newValue) =>
																			setFieldValue(
																				`customCritical[${index}].selection`,
																				newValue || "",
																			)
																		}
																		renderInput={(params) => (
																			<TextField
																				size={"medium"}
																				{...params}
																				label={translate({
																					message: "Signe",
																				})}
																				style={{fontFamily: "Fira Code VF"}}
																				variant="outlined"
																				className={`2xl:w-[200px] !mb-0 min-[0px]:max-2xl:w-full ${
																					values.customCritical[index]
																						?.selection.length === 0
																						? "error"
																						: ""
																				}`}
																			/>
																		)}
																	/>
																	<ErrorMessage
																		name={`customCritical[${index}].selection`}
																	/>
																	{errorTooltip(index)}
																</td>
																<td className="p-2 min-[0px]:max-xl:w-full">
																	<Tablefield
																		name={`customCritical[${index}].name`}
																		label={translate({message: "Nom"})}
																		variant="outlined"
																		className={`${
																			values.customCritical[index]?.name
																				.length === 0
																				? "error"
																				: ""
																		}`}
																		id={`Critical-Nom-${index}`}
																	/>
																	<ErrorMessage
																		name={`customCritical[${index}].name`}
																	/>
																</td>
																<td className="p-2 min-[0px]:max-xl:w-full h-200px">
																	<Tablefield
																		name={`customCritical[${index}].formula`}
																		label={translate({message: "Formule"})}
																		variant="outlined"
																		className={`${
																			values.customCritical[index]?.formula
																				.length === 0
																				? "error"
																				: ""
																		}`}
																		id={`Critical-Formula-${index}`}
																	/>
																	<ErrorMessage
																		name={`customCritical[${index}].formula`}
																	/>
																</td>
																<td className="p-2 min-[0px]:max-xl:w-full h-200px">
																	<StandaloneToggleButton
																		selected={
																			values.customCritical[index]?.onNaturalDice
																		}
																		onChange={() =>
																			setFieldValue(
																				`customCritical[${index}].onNaturalDice`,
																				!values.customCritical[index]?.onNaturalDice,
																			)
																		}
																		size={1280}
																		opt={"naturalDice"}
																	/>
																</td>
																<td className="p-2 min-[0px]:max-xl:w-full h-200px">
																	<StandaloneToggleButton
																		selected={
																			values.customCritical[index]?.affectSkill
																		}
																		onChange={() =>
																			setFieldValue(
																				`customCritical[${index}].affectSkill`,
																				!values.customCritical[index]?.affectSkill,
																			)
																		}
																		size={1280}
																		opt={"affectSkill"}
																	/>
																</td>
																<td className="p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-xl:w-full">
																	<RemoveButton
																		size={1280}
																		onClick={() => remove(index)}
																	/>
																</td>
															</tr>
														)}
													</Draggable>
												),
											)}
											{provided.placeholder}
										</tbody>
									)}
								</Droppable>
							</DragDropContext>
						</table>
					</div>
				)}
			</FieldArray>
		</div>
	);
};

export default CustomCritical;
