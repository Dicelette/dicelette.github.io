import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

// 📄 Chemin vers le fichier CHANGELOG.md
const changelogPath = [
	path.resolve("./docs/dev/CHANGELOG.md"),
	path.resolve(
		"./i18n/en/docusaurus-plugin-content-docs/current/dev/CHANGELOG.md",
	),
];

/**
 * Une seule passe pour tout le fichier : les zones de code (blocs délimités et
 * code inline) sont reconnues en premier et laissées telles quelles, le reste
 * est échappé. Faire l'inverse (plusieurs `replace` successifs) casse le
 * contenu déjà entre backticks, par ex. `1d100<=[$dext+$agi]` qui devenait
 * `1d100`<=`[$dext+$agi]` — et donc du JSX invalide pour MDX.
 */
const MDX_PATTERN = new RegExp(
	[
		// bloc de code délimité par ``` ou ~~~ (protégé)
		"(?<fence>^ {0,3}(?<mark>`{3,}|~{3,})[\\s\\S]*?(?:^ {0,3}\\k<mark>[^\\n]*$|$(?![\\s\\S])))",
		// code inline (protégé)
		"(?<code>(?<ticks>`+)(?:(?!\\k<ticks>)[^\\n])*\\k<ticks>(?!`))",
		// accolades, avec un niveau d'imbrication : {exp}, {exp|0}, {{exp}}, {{dice}>20}
		"(?<braces>\\{(?:[^{}`\\n]|\\{[^{}`\\n]*\\})*\\})",
		// opérateurs de comparaison
		"(?<cmp><=|>=)",
		// <(value)
		"(?<paren><\\([^)`\\n]*\\))",
		// <generic>
		"(?<angle><[^<>`\\n]*>)",
		// `<` isolé : MDX le lit comme le début d'une balise JSX
		"(?<lt><)",
	].join("|"),
	"gm",
);

function escapeBrackets(input: string): string {
	return input.replace(MDX_PATTERN, (match: string, ...args: unknown[]) => {
		const groups = args.at(-1) as Record<string, string | undefined>;
		// déjà du code : ne rien toucher
		if (groups.fence !== undefined || groups.code !== undefined) return match;
		// pas de paire `<…>` à isoler, on neutralise juste le chevron
		if (groups.lt !== undefined) return "&lt;";
		return `\`${match}\``;
	});
}

for (const changelog of changelogPath) {
	const content = readFileSync(changelog, "utf-8");
	writeFileSync(changelog, escapeBrackets(content), "utf-8");
}
console.log("✅ CHANGELOG.md corrigé pour MDX");
