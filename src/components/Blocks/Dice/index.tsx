import { translate } from "@docusaurus/Translate";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import RenderRow from "@site/src/components/Blocks/Dice/RenderRow";
import { FieldArray } from "formik";
import { useCallback, useEffect, useId, useMemo, useRef } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Section } from "../../Atoms";

export default ({ values, setFieldValue }) => {
	const droppableId = useId();
	const lastLengthRef = useRef(0);
	useEffect(() => {
		if (values.damages.length > lastLengthRef.current) {
			values.damages.forEach((d) => {
				if (!d.id) d.id = crypto.randomUUID();
			});
			lastLengthRef.current = values.damages.length;
		}
	}, [values.damages]);

	const duplicateIndices = useMemo(() => {
		const map = new Map<string, number>();
		const dups: number[] = [];
		values.damages.forEach((d, i) => {
			if (!d.name) return;
			const first = map.get(d.name);
			if (first !== undefined) dups.push(first, i);
			else map.set(d.name, i);
		});
		return Array.from(new Set(dups));
	}, [values.damages]);

	const _errorTooltip = (index: number) => {
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

	const onDragEnd = useCallback(
		(result) => {
			if (!result.destination) return;
			if (result.source.index === result.destination.index) return;
			const items = [...values.damages];
			const [r] = items.splice(result.source.index, 1);
			items.splice(result.destination.index, 0, r);
			setFieldValue("damages", items);
		},
		[values.damages, setFieldValue],
	);

	return (
		<div className="statistic">
			<FieldArray name="damages">
				{({ push, remove }) => (
					<div>
						<Section
							length={values.damages.length}
							type="dice"
							label={translate({ message: "Macros" })}
							onAdd={() =>
								push({ id: crypto.randomUUID(), name: "", value: "" })
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
											{values.damages.map((_: unknown, index: number) => (
												<RenderRow
													key={values.damages[index].id || index}
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
