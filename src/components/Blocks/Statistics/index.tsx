import { translate } from "@docusaurus/Translate";
import RenderRow from "@site/src/components/Blocks/Statistics/RenderRow";
import { FieldArray } from "formik";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { Section, Tablefield } from "../../Atoms";

export default ({ values, setFieldValue }) => {
	// Ajouter un id stable si absent (fait une seule fois tant que la longueur augmente)
	const lastLengthRef = useRef(0);
	useEffect(() => {
		if (values.statistics.length > lastLengthRef.current) {
			values.statistics.forEach((s) => {
				if (!s.id) s.id = crypto.randomUUID();
			});
			lastLengthRef.current = values.statistics.length;
		}
	}, [values.statistics]);

	// Détection O(n) des doublons via Map
	const duplicateIndices = useMemo(() => {
		const nameToFirstIndex = new Map<string, number>();
		const dups: number[] = [];
		values.statistics.forEach((stat, idx) => {
			if (!stat.name) return; // on ignore vide ici, on gère ailleurs
			const existing = nameToFirstIndex.get(stat.name);
			if (existing !== undefined) {
				dups.push(existing, idx);
			} else {
				nameToFirstIndex.set(stat.name, idx);
			}
		});
		return Array.from(new Set(dups));
	}, [values.statistics]);

	const onDragEnd = useCallback(
		(result) => {
			if (!result.destination) return;
			if (result.source.index === result.destination.index) return;
			const items = [...values.statistics];
			const [reorderedItem] = items.splice(result.source.index, 1);
			items.splice(result.destination.index, 0, reorderedItem);
			setFieldValue("statistics", items);
		},
		[values.statistics, setFieldValue],
	);

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
									id: crypto.randomUUID(),
									name: "",
									min: "",
									max: "",
									combinaison: "",
									excluded: false,
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
													key={values.statistics[statIndex].id || statIndex}
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
