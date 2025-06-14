import type { FC } from "react";

import { translate } from "@docusaurus/Translate";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { CheckBox, Section, Textfield } from "../Atoms";

const General: FC = () => (
	<Section label="Général">
		<CheckBox
			className="self-start !ml-0 -mt-2"
			label={translate({ message: "Rendre obligatoire le nom du personnage" })}
			name="isCharNameRequired"
		/>

		<CheckBox
			className="self-start !ml-0 -mt-2"
			label={translate({ message: "Fiches privées" })}
			aria-label={translate({
				message: "Utilisée uniquement dans le CSV d'importation de fiche",
			})}
			name="isPrivate"
		/>
		<ReactTooltip
			anchorSelect="#isPrivate"
			content={translate({
				message: "Utilisée uniquement dans le CSV d'importation de fiche",
			})}
		/>
		<div className="flex flex-col sm:flex-row sm:items-start sm:gap-4 ">
			<div className="flex-none">
				<Textfield
					label={translate({ message: "Total" })}
					name="total"
					id="total"
					type="number"
					inputProps={{ min: 0 }}
					className={"flex-1"}
					classMargin={"sm:!mb-4"}
				/>
			</div>
			<CheckBox
				label={translate({ message: "Forcer la distribution des points" })}
				labelPlacement={"end"}
				name="forceDistrib"
				className="flex items-center gap-1"
				aria-label={translate({
					message:
						"Renvoie une erreur si la somme des statistiques est inférieure au total défini",
				})}
			/>
			<ReactTooltip
				anchorSelect="#forceDistrib"
				content={translate({
					message:
						"Renvoie une erreur si la somme des statistiques est inférieure au total défini",
				})}
			/>
		</div>
		<Textfield label={translate({ message: "Dé principal" })} name="diceType" />
	</Section>
);

export default General;
