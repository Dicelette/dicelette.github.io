import { translate } from "@docusaurus/Translate";
import { Tablefield } from "@site/src/components/Atoms";
import CopyButton from "@site/src/components/Atoms/button/copyButton";
import RemoveButton from "@site/src/components/Atoms/button/removeButton";
import { errorTooltip } from "@site/src/components/Blocks/Dice/errors";
import type { DicesValues } from "@site/src/components/interfaces";
import { ErrorMessage } from "formik";
import { Draggable } from "@hello-pangea/dnd";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { memo, useMemo } from "react";

const DiceRow = ({
  duplicateIndices,
  index,
  dices,
  push,
  remove,
}: {
  duplicateIndices: number[];
  index: number;
  dices: DicesValues[];
  push: any;
  remove: any;
}): JSX.Element => {
  const dice = dices[index];
  const { name, value } = dice;
  const nameError = useMemo(() => name.length === 0, [name]);
  return (
    <Draggable key={dice.id || index} draggableId={String(dice.id || index)} index={index}>
      {(provided) => (
        <tr
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`flex flex-col xl:flex-row items-start xl:w-full ${
            duplicateIndices.includes(index) ? "error-bg" : ""
          } ${index === 0 ? "border-t-0" : ""}`}
        >
          <td className="p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-xl:w-full">
            <CopyButton
              maxLen={25}
              length={dices.length}
              size={1280}
              onClick={() => {
                push({ name, value });
              }}
            />
          </td>
          <td className="p-2 min-[0px]:max-xl:w-full">
            <Tablefield
              name={`damages[${index}].name`}
              label={translate({ message: "Nom" })}
              className={`${nameError ? "error" : ""}`}
              id={`Dice-Nom-${index}`}
            />
            <ErrorMessage name={`damages[${index}].name`} />
          </td>
          <td className="p-2 min-[0px]:max-xl:w-full">
            <Tablefield
              name={`damages[${index}].value`}
              label={translate({ message: "Valeur" })}
              className={`${nameError ? "error" : ""}`}
              id={`Value-${index}`}
            />
          </td>
          {errorTooltip(index, duplicateIndices, dice)}
          {nameError && (
            <ReactTooltip
              id={`Value-${index}`}
              content={translate({ message: "La valeur ne peut pas être vide" })}
              style={{ background: "var(--rt-color-error)" }}
              anchorSelect={`#Value-${index}`}
            />
          )}
          <td className="p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-xl:w-full">
            <RemoveButton size={1280} onClick={() => remove(index)} />
          </td>
        </tr>
      )}
    </Draggable>
  );
};

export default memo(DiceRow);
