import {
	DiceTypeError,
	EmptyObjectError,
	FormulaError,
	MaxGreater,
	NoStatisticsError,
	TooManyDice,
	TooManyStats,
} from "@dicelette/core";
import { translate } from "@docusaurus/Translate";

/** Convert [error, errorcode] {errorMessageValue} to something readable */
export function errorCode(error: Error) {
	console.error(error);
	if (error instanceof DiceTypeError) {
		if (error.cause === "createCriticalCustom")
			return translate({
				message:
					"Le dé de critique est invalide : $ ne peut pas être utilisé sans statistiques.",
			});
		if (error.message === "no_dice_type")
			return translate({
				message:
					"Les critiques customisés ne peuvent pas être utilisés sans dé type.",
			});
		if (error.message === "no_roll_result")
			return translate({
				message:
					'Le dé de compétence nommé "{{x}}" ("{{formule}}") ne semble pas être un dé.',
			})
				.replace("{{x}}", error.dice)
				.replace("{{formule}}", error.method.toString());
		return translate({
			message: 'Le dé "{{x}}" est invalide. Journalisation : {{error}}',
		})
			.replace("{{x}}", error.dice)
			.replace("{{error}}", error.method.toString());
	}
	if (error instanceof FormulaError) {
		return translate({ message: 'La formule "{{x}}" est invalide.' }).replace(
			"{{x}}",
			error.formula,
		);
	}
	if (error instanceof MaxGreater) {
		return translate({ message: "Le maximum est supérieur au minimum" });
	}
	if (error instanceof EmptyObjectError) {
		return translate({
			message: "Les dés de capacités ont été mal renseignés.",
		});
	}
	if (error instanceof TooManyDice) {
		return translate({ message: "Trop de dés (max : 25)" });
	}
	if (error instanceof NoStatisticsError) {
		return translate({ message: "Aucune statistique n'a été trouvée" });
	}
	if (error instanceof TooManyStats) {
		return translate({ message: "Trop de statistiques (max : 25)" });
	}
	return translate({ message: "Une erreur est survenue : {{x}}" }).replace(
		"{{x}}",
		error.message,
	);
}
