import { translate } from "@docusaurus/Translate";
import type { FC } from "react";
import { useId } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { CheckBox, Section, Textfield } from "../Atoms";

const General: FC = () => {
	const totalId = useId();
	const isCharNameId = useId();
	const isPrivateId = useId();
	const forceDistribId = useId();

	return (
		<Section label={translate({ message: "Général" })}>
			<div className="grid grid-cols-[1fr_auto] items-center w-max">
				<label htmlFor={isCharNameId} className="whitespace-normal">
					{translate({ message: "Rendre obligatoire le nom du personnage" })}
				</label>
				<CheckBox
					label={""}
					name="isCharNameRequired"
					id={isCharNameId}
					className="!ml-0"
				/>

				<label htmlFor={isPrivateId} className="whitespace-normal">
					{translate({ message: "Fiches privées" })}
				</label>
				<CheckBox
					label={""}
					aria-label={translate({
						message: "Utilisée uniquement dans le CSV d'importation de fiche",
					})}
					name="isPrivate"
					id={isPrivateId}
					className="!ml-0"
				/>
			</div>
			<ReactTooltip
				anchorSelect={`#${isPrivateId}`}
				content={translate({
					message: "Utilisée uniquement dans le CSV d'importation de fiche",
				})}
			/>
			<div className="flex flex-col sm:flex-row sm:items-start sm:gap-4 ">
				<div className="flex-none">
					<Textfield
						label={translate({ message: "Total" })}
						name="total"
						id={totalId}
						type="number"
						inputProps={{ min: 0 }}
						className={"flex-1 w-150px"}
						classmargin={"sm:!mb-4"}
					/>
				</div>
				<CheckBox
					label={translate({ message: "Forcer la distribution des points" })}
					labelPlacement={"end"}
					name="forceDistrib"
					id={forceDistribId}
					className="flex items-center gap-1"
					aria-label={translate({
						message:
							"Renvoie une erreur si la somme des statistiques est inférieure au total défini",
					})}
				/>
				<ReactTooltip
					anchorSelect={`#${forceDistribId}`}
					content={translate({
						message:
							"Renvoie une erreur si la somme des statistiques est inférieure au total défini",
					})}
				/>
			</div>
			<Textfield
				label={translate({ message: "Dé principal" })}
				name="diceType"
			/>
		</Section>
	);
};

export default General;
