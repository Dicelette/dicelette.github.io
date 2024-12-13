import { translate } from "@docusaurus/Translate";
import RenderRow from "@site/src/components/Blocks/customCritical/RenderRow";
import { FieldArray } from "formik";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Section, Tablefield } from "../../Atoms";

export default ({ values, setFieldValue }) => {
	const [duplicateIndices, setDuplicateIndices] = useState([]);
	useEffect(() => {
		const findDuplicates = () => {
			const duplicates = [];
			values.customCritical.forEach((critical, index) => {
				const isDuplicate = values.customCritical.findIndex(
					(c, i) => i !== index && c.name === critical.name,
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

	const onDragEnd = (result) => {
		if (!result.destination) return;

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
													<RenderRow
														key={index}
														index={index}
														duplicateIndices={duplicateIndices}
														push={push}
														remove={remove}
														customCritical={values.customCritical}
														setFieldValue={setFieldValue}
													/>
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
