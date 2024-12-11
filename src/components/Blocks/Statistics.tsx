import { translate } from "@docusaurus/Translate";
import { ErrorMessage, FieldArray } from "formik";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Section, Tablefield } from "../Atoms";
import CopyButton from "../Atoms/button/copyButton";
import RemoveButton from "../Atoms/button/removeButton";

const Statistics = ({ values, setFieldValue }) => {
	const [duplicateIndices, setDuplicateIndices] = useState([]);

	useEffect(() => {
		const findDuplicates = () => {
			const duplicates = [];
			values.statistics.forEach((stat, index) => {
				const isDuplicate = values.statistics.findIndex(
					(s, i) => i !== index && s.name === stat.name,
				);
				if (isDuplicate !== -1 && !duplicates.includes(index)) {
					duplicates.push(index);
					duplicates.push(isDuplicate);
				}
			});
			setDuplicateIndices(duplicates);
		};
		findDuplicates();
	}, [values.statistics]);

	const minimalErrorToolTip = (index: number) => {
		if (!values.statistics[index].min) return;
		if (
			values.statistics[index].min &&
			values.statistics[index].max &&
			values.statistics[index].min > values.statistics[index].max
		) {
			return (
				<ReactTooltip
					id={`Min-${index}`}
					content={translate({
						message:
							"La valeur minimale ne peut pas être supérieure à la valeur maximale",
					})}
					style={{ background: "var(--rt-color-error)" }}
					anchorSelect={`#Min-${index}`}
				/>
			);
		}
		if (values.statistics[index].min < 0) {
			return (
				<ReactTooltip
					id={`Min-${index}`}
					content={translate({
						message: "La valeur minimale ne peut pas être négative",
					})}
					style={{ background: "var(--rt-color-error)" }}
					anchorSelect={`#Min-${index}`}
				/>
			);
		}
		if (Number.isNaN(Number.parseInt(values.statistics[index].min, 10))) {
			return (
				<ReactTooltip
					id={`Min-${index}`}
					content={translate({
						message: "La valeur minimale doit être un nombre",
					})}
					style={{ background: "var(--rt-color-error)" }}
					anchorSelect={`#Min-${index}`}
				/>
			);
		}
		return null;
	};

	const maximalErrorTollTip = (index: number) => {
		if (!values.statistics[index].max) return;
		if (
			values.statistics[index].min &&
			values.statistics[index].max &&
			values.statistics[index].min > values.statistics[index].max
		) {
			return (
				<ReactTooltip
					id={`Max-${index}`}
					content={translate({
						message:
							"La valeur maximale ne peut pas être inférieure à la valeur minimale",
					})}
					style={{ background: "var(--rt-color-error)" }}
					anchorSelect={`#Max-${index}`}
				/>
			);
		}
		if (values.statistics[index].max < 0) {
			return (
				<ReactTooltip
					id={`Max-${index}`}
					content={translate({
						message: "La valeur maximale ne peut pas être négative",
					})}
					style={{ background: "var(--rt-color-error)" }}
					anchorSelect={`#Max-${index}`}
				/>
			);
		}
		if (Number.isNaN(Number.parseInt(values.statistics[index].max, 10))) {
			return (
				<ReactTooltip
					id={`Max-${index}`}
					content={translate({
						message: "La valeur maximale doit être un nombre",
					})}
					style={{ background: "var(--rt-color-error)" }}
					anchorSelect={`#Max-${index}`}
				/>
			);
		}
		return null;
	};

	const minimalErrorClass = (index: number) => {
		if (!values.statistics[index].min) return;
		if (
			values.statistics[index].min &&
			values.statistics[index].max &&
			values.statistics[index].min > values.statistics[index].max
		) {
			return "error";
		}
		if (values.statistics[index].min < 0) {
			return "error";
		}
		if (Number.isNaN(Number.parseInt(values.statistics[index].min, 10))) {
			return "error";
		}
		return "";
	};

	const maximalErrorClass = (index: number) => {
		if (!values.statistics[index].max) return;
		if (
			values.statistics[index].min &&
			values.statistics[index].max &&
			values.statistics[index].min > values.statistics[index].max
		) {
			return "error";
		}
		if (values.statistics[index].max < 0) {
			return "error";
		}
		if (Number.isNaN(Number.parseInt(values.statistics[index].max, 10))) {
			return "error";
		}
		return "";
	};

	const nameErrorToolTip = (index: number) => {
		if (values.statistics[index].name.length === 0) {
			return (
				<ReactTooltip
					id={`Stats-Nom-${index}`}
					content={translate({ message: "Le nom ne peut pas être vide" })}
					style={{ background: "var(--rt-color-error)" }}
					anchorSelect={`#Stats-Nom-${index}`}
				/>
			);
		}
		if (duplicateIndices.includes(index)) {
			return (
				<ReactTooltip
					id={`Stats-Nom-${index}`}
					content={translate({ message: "Ce nom est déjà utilisé" })}
					style={{ background: "var(--rt-color-error)" }}
					anchorSelect={`#Stats-Nom-${index}`}
				/>
			);
		}
		return null;
	};

	const nameErrorClass = (index: number) => {
		if (values.statistics[index].name.length === 0) {
			return "error";
		}
	};

	const onDragEnd = (result) => {
		if (!result.destination) return;
		const items = Array.from(values.statistics);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);
		setFieldValue("statistics", items);
	};

	return (
		<div className="statistic">
			<FieldArray name="statistics">
				{({ push, remove }) => (
					<div>
						<Section
							type="stats"
							length={values.statistics.length}
							label={translate({ message: "Statistiques" })}
							onAdd={() =>
								push({ name: "", values: { min: 0, max: 0, combinaison: "" } })
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
											{values.statistics.map((_, statIndex) => (
												<Draggable
													key={statIndex}
													draggableId={String(statIndex)}
													index={statIndex}
												>
													{(provided) => (
														<tr
															ref={provided.innerRef}
															{...provided.draggableProps}
															{...provided.dragHandleProps}
															key={statIndex}
															className={`flex flex-col 2xl:flex-row items-start 2xl:w-full ${
																statIndex === 0 ? "border-t-0" : ""
															}  ${
																duplicateIndices.includes(statIndex)
																	? "error-bg"
																	: ""
															} 2xl:h-18`}
														>
															<td className="p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-2xl:w-full">
																<CopyButton
																	size={1536}
																	length={values.statistics.length}
																	maxLen={25}
																	onClick={() => {
																		push({
																			name: "",
																			max: values.statistics[statIndex].max,
																			min: values.statistics[statIndex].min,
																			combinaison:
																				values.statistics[statIndex]
																					.combinaison,
																		});
																	}}
																/>
															</td>
															<td className="p-2 min-[0px]:max-2xl:w-full">
																<Tablefield
																	label={translate({ message: "Nom" })}
																	name={`statistics[${statIndex}].name`}
																	id={`Stats-Nom-${statIndex}`}
																	className={`${nameErrorClass(statIndex)}`}
																	data-tooltip-variant="error"
																/>
																<ErrorMessage
																	name={`statistics[${statIndex}].name`}
																/>
																{nameErrorToolTip(statIndex)}
															</td>
															<td className="p-2 min-[0px]:max-2xl:w-full">
																<Tablefield
																	type="number"
																	inputProps={{ min: 0 }}
																	name={`statistics[${statIndex}].min`}
																	label={translate({ message: "Min" })}
																	className={`2xl:w-[100px] ${minimalErrorClass(
																		statIndex,
																	)}`}
																	id={`Min-${statIndex}`}
																	data-tooltip-variant="error"
																	disabled={
																		!!values.statistics[statIndex].combinaison
																	}
																/>
																{minimalErrorToolTip(statIndex)}
															</td>
															<td className="p-2 min-[0px]:max-2xl:w-full">
																<Tablefield
																	type="number"
																	inputProps={{ min: 0 }}
																	name={`statistics[${statIndex}].max`}
																	label={translate({ message: "Max" })}
																	id={`Max-${statIndex}`}
																	className={`2xl:w-[100px] ${maximalErrorClass(
																		statIndex,
																	)}`}
																	disabled={
																		!!values.statistics[statIndex].combinaison
																	}
																/>
																{maximalErrorTollTip(statIndex)}
															</td>
															<td className="p-2 min-[0px]:max-2xl:w-full ">
																<Tablefield
																	label={translate({ message: "Combinaison" })}
																	name={`statistics[${statIndex}].combinaison`}
																	disabled={
																		!!(
																			values.statistics[statIndex].min ||
																			values.statistics[statIndex].max
																		)
																	}
																/>
															</td>
															<td className="p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-2xl:w-full ">
																<RemoveButton
																	size={1536}
																	onClick={() => remove(statIndex)}
																/>
															</td>
														</tr>
													)}
												</Draggable>
											))}
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

export default Statistics;
