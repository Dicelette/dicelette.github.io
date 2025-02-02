import { translate } from "@docusaurus/Translate";
import RenderRow from "@site/src/components/Blocks/Statistics/RenderRow";
import { FieldArray } from "formik";
import { Key, useEffect, useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { Section, Tablefield } from "../../Atoms";

export default ({ values, setFieldValue }) => {
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
								push({
									name: "",
									values: { min: 0, max: 0, combinaison: "", excluded: false },
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
											{values.statistics.map((_: any, statIndex: number) => (
												<RenderRow
													key={statIndex}
													statIndex={statIndex}
													duplicateIndices={duplicateIndices}
													push={push}
													remove={remove}
													statistics={values.statistics}
													setFieldValue={setFieldValue}
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
