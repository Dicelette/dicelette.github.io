import { translate } from "@docusaurus/Translate";
import { DragDropContext, Droppable, type DropResult } from "@hello-pangea/dnd";
import RenderRow from "@site/src/components/Blocks/customCritical/RenderRow";
import { FieldArray } from "formik";
import { useCallback, useEffect, useId, useMemo, useRef } from "react";
import { Section } from "../../Atoms";

export default ({ values, setFieldValue }) => {
	const droppableId = useId();
	const lastLengthRef = useRef(0);
	useEffect(() => {
		if (values.customCritical.length > lastLengthRef.current) {
			values.customCritical.forEach((c) => {
				if (!c.id) c.id = crypto.randomUUID();
			});
			lastLengthRef.current = values.customCritical.length;
		}
	}, [values.customCritical]);

	const duplicateIndices = useMemo(() => {
		const map = new Map<string, number>();
		const d: number[] = [];
		values.customCritical.forEach((c, i) => {
			if (!c.name) return;
			const first = map.get(c.name);
			if (first !== undefined) d.push(first, i);
			else map.set(c.name, i);
		});
		return Array.from(new Set(d));
	}, [values.customCritical]);

	const onDragEnd = useCallback(
		(result: DropResult) => {
			if (!result.destination) return;
			if (result.source.index === result.destination.index) return;
			const items = [...values.customCritical];
			const [r] = items.splice(result.source.index, 1);
			items.splice(result.destination.index, 0, r);
			setFieldValue("customCritical", items);
		},
		[values.customCritical, setFieldValue],
	);

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
									id: crypto.randomUUID(),
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
								<Droppable droppableId={`droppable-${droppableId}`}>
									{(provided) => (
										<tbody
											{...provided.droppableProps}
											ref={provided.innerRef}
											className="divide-y block w-full"
										>
											{values.customCritical.map(
												(_: unknown, index: number) => (
													<RenderRow
														key={values.customCritical[index].id || index}
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
