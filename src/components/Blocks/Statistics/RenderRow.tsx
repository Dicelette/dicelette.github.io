import { translate } from "@docusaurus/Translate";
import { Tablefield } from "@site/src/components/Atoms";
import CopyButton from "@site/src/components/Atoms/button/copyButton";
import RemoveButton from "@site/src/components/Atoms/button/removeButton";
import StandaloneToggleButton from "@site/src/components/Atoms/toggle-custom";
import {
	maximalErrorClass,
	maximalErrorTollTip,
	minimalErrorClass,
	minimalErrorToolTip,
	nameErrorClass,
	nameErrorToolTip,
} from "@site/src/components/Blocks/Statistics/errors";
import type { StatisticFields } from "@site/src/components/interfaces";
import { ErrorMessage } from "formik";
import { Draggable } from "@hello-pangea/dnd";

export default ({
	statIndex,
	duplicateIndices,
	push,
	remove,
	statistics,
	setFieldValue,
}: {
	statIndex: number;
	duplicateIndices: number[];
	push: any;
	remove: any;
	statistics: StatisticFields[];
	setFieldValue: any;
}): JSX.Element => {
	const stat = statistics[statIndex];
	const { max, min, combinaison, excluded, name } = stat;
	return (
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
						duplicateIndices.includes(statIndex) ? "error-bg" : ""
					} 2xl:h-18`}
				>
					<td className="p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-2xl:w-full">
						<CopyButton
							size={1536}
							length={statistics.length}
							maxLen={25}
							onClick={() => {
								push({ name: "", max, min, combinaison, excluded });
							}}
						/>
					</td>
					<td className="p-2 min-[0px]:max-2xl:w-full">
						<Tablefield
							label={translate({ message: "Nom" })}
							name={`statistics[${statIndex}].name`}
							id={`Stats-Nom-${statIndex}`}
							className={`${nameErrorClass(name)}`}
							data-tooltip-variant="error"
						/>
						<ErrorMessage name={`statistics[${statIndex}].name`} />
						{nameErrorToolTip(statIndex, duplicateIndices, name)}
					</td>
					<td className="p-2 min-[0px]:max-2xl:w-full">
						<Tablefield
							type="number"
							inputProps={{ min: 0 }}
							name={`statistics[${statIndex}].min`}
							label={translate({ message: "Min" })}
							className={`2xl:w-[100px] ${minimalErrorClass(stat)}`}
							id={`Min-${statIndex}`}
							data-tooltip-variant="error"
							disabled={!!combinaison}
						/>
						{minimalErrorToolTip(statIndex, stat)}
					</td>
					<td className="p-2 min-[0px]:max-2xl:w-full">
						<Tablefield
							type="number"
							inputProps={{ min: 0 }}
							name={`statistics[${statIndex}].max`}
							label={translate({ message: "Max" })}
							id={`Max-${statIndex}`}
							className={`2xl:w-[100px] ${maximalErrorClass(stat)}`}
							disabled={!!combinaison}
						/>
						{maximalErrorTollTip(statIndex, stat)}
					</td>
					<td className="p-2 min-[0px]:max-2xl:w-full ">
						<Tablefield
							label={translate({
								message: "Combinaison",
							})}
							name={`statistics[${statIndex}].combinaison`}
							disabled={!!(min || max)}
						/>
					</td>
					<td className="p-2 min-[0px]:max-2xl:w-full ">
						<StandaloneToggleButton
							selected={excluded}
							onChange={() =>
								setFieldValue(`statistics[${statIndex}].excluded`, !excluded)
							}
							size={1280}
							opt={"excludedStat"}
						/>
					</td>
					<td className="p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-2xl:w-full ">
						<RemoveButton size={1536} onClick={() => remove(statIndex)} />
					</td>
				</tr>
			)}
		</Draggable>
	);
};
