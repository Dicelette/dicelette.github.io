import { translate } from "@docusaurus/Translate";
import RenderRow from "@site/src/components/Blocks/Dice/RenderRow";
import { FieldArray } from "formik";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Section } from "../../Atoms";

export default ({ values, setFieldValue }) => {
	const [duplicateIndices, setDuplicateIndices] = useState([]);

	useEffect(() => {
		const findDuplicates = () => {
			const duplicates = [];
			values.damages.forEach((stat, index) => {
				const isDuplicate = values.damages.findIndex(
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
	}, [values.damages]);

	const errorTooltip = (index: number) => {
		if (duplicateIndices.includes(index)) {
			return (
				<ReactTooltip
					id={`Dice-Nom-${index}`}
					content={translate({ message: "Ce nom est déjà utilisé" })}
					style={{ background: "var(--rt-color-error)" }}
					anchorSelect={`#Dice-Nom-${index}`}
				/>
			);
		}
		if (values.damages[index].name.length === 0) {
			return (
				<ReactTooltip
					id={`Dice-Nom-${index}`}
					content={translate({ message: "Le nom ne peut pas être vide" })}
					style={{ background: "var(--rt-color-error)" }}
					anchorSelect={`#Dice-Nom-${index}`}
				/>
			);
		}
		return null;
	};

	const onDragEnd = (result) => {
		if (!result.destination) {
			return;
		}

		const items = Array.from(values.damages);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);

		// Update your state with the new order
		// You might need to implement this function
		setFieldValue("damages", items);
	};

	return (
		<div className="statistic">
			<FieldArray name="damages">
				{({ push, remove }) => (
					<div>
						<Section
							length={values.damages.length}
							type="dice"
							label={translate({ message: "Macros" })}
							onAdd={() => push({ name: "", value: "" })}
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
											{values.damages.map((_: unknown, index: number) => (
												// biome-ignore lint/correctness/useJsxKeyInIterable: bruh
												<RenderRow
													duplicateIndices={duplicateIndices}
													index={index}
													dices={values.damages}
													push={push}
													remove={remove}
												/>
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
