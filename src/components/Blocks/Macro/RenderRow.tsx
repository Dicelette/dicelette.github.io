import { translate } from "@docusaurus/Translate";
import { Draggable } from "@hello-pangea/dnd";
import { Tablefield } from "@site/src/components/Atoms";
import CopyButton from "@site/src/components/Atoms/button/copyButton";
import RemoveButton from "@site/src/components/Atoms/button/removeButton";
import { errorTooltip } from "@site/src/components/Blocks/Macro/errors";
import type { MacroValues } from "@site/src/components/interfaces";
import { ErrorMessage } from "formik";
import { memo, useMemo } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const DiceRow = ({
	duplicateIndices,
	index,
	macro,
	push,
	remove,
}: {
	duplicateIndices: number[];
	index: number;
	macro: MacroValues[];
	push: any;
	remove: any;
}): JSX.Element => {
	const dice = macro[index];
	const { name, value } = dice;
	const nameError = useMemo(() => name.length === 0, [name]);
	return (
		<Draggable
			key={dice.id || index}
			draggableId={String(dice.id || index)}
			index={index}
		>
			{(provided) => (
				<tr
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					className={`flex flex-col 2xl:flex-row items-start 2xl:w-full ${
						duplicateIndices.includes(index) ? "error-bg" : ""
					} ${index === 0 ? "border-t-0" : ""} 2xl:h-18`}
				>
					<td className="p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-2xl:w-full">
						<CopyButton
							maxLen={25}
							length={macro.length}
							size={1536}
							onClick={() => {
								push({ name, value });
							}}
						/>
					</td>
					<td className="p-2 min-[0px]:max-2xl:w-full">
						<Tablefield
							name={`damages[${index}].name`}
							label={translate({ message: "Nom" })}
							className={`${nameError ? "error" : ""}`}
							id={`Dice-Nom-${index}`}
						/>
						<ErrorMessage name={`damages[${index}].name`} />
						{/* Tooltip duplication / nom vide placé dans la cellule pour éviter <div> direct sous <tr> */}
						{errorTooltip(index, duplicateIndices, dice)}
					</td>
					<td className="p-2 min-[0px]:max-2xl:w-full">
						<Tablefield
							name={`damages[${index}].value`}
							label={translate({ message: "Valeur" })}
							className={`${nameError ? "error" : ""}`}
							id={`Value-${index}`}
						/>
						{nameError && (
							<ReactTooltip
								id={`Value-${index}`}
								content={translate({
									message: "La valeur ne peut pas être vide",
								})}
								style={{ background: "var(--rt-color-error)" }}
								anchorSelect={`#Value-${index}`}
							/>
						)}
					</td>
					<td className="p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-2xl:w-full">
						<RemoveButton size={1536} onClick={() => remove(index)} />
					</td>
				</tr>
			)}
		</Draggable>
	);
};

export default memo(DiceRow);
