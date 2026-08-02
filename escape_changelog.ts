import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

// 📄 Chemin vers le fichier CHANGELOG.md
const changelogPath = [
	path.resolve("./docs/dev/CHANGELOG.md"),
	path.resolve(
		"./i18n/en/docusaurus-plugin-content-docs/current/dev/CHANGELOG.md",
	),
];

/** Un morceau de ligne : `code` marque ce qui est déjà entre backticks, donc intouchable. */
type Segment = { value: string; code: boolean };

/** Ouverture/fermeture d'un bloc de code délimité. */
const FENCE = /^\s{0,3}(`{3,}|~{3,})/;

/** Cherche une suite de backticks de longueur exactement `length`, à partir de `from`. */
function findClosingBackticks(line: string, from: number, length: number) {
	for (let i = from; i < line.length; i++) {
		if (line[i] !== "`") continue;
		let run = 0;
		while (line[i + run] === "`") run++;
		if (run === length) return i;
		i += run - 1;
	}
	return -1;
}

/** Découpe une ligne en isolant les code spans (`…`, ``…``) du texte brut. */
function tokenize(line: string): Segment[] {
	const segments: Segment[] = [];
	let text = "";
	let i = 0;
	while (i < line.length) {
		if (line[i] !== "`") {
			text += line[i++];
			continue;
		}
		let length = 0;
		while (line[i + length] === "`") length++;
		const closing = findClosingBackticks(line, i + length, length);
		if (closing === -1) {
			// Backticks orphelins : ce n'est pas un code span, on garde tel quel.
			text += line.slice(i, i + length);
			i += length;
			continue;
		}
		if (text) segments.push({ value: text, code: false });
		text = "";
		segments.push({ value: line.slice(i, closing + length), code: true });
		i = closing + length;
	}
	if (text) segments.push({ value: text, code: false });
	return segments;
}

/**
 * Applique une règle au seul texte hors code span, puis re-découpe le résultat :
 * les backticks ajoutés protègent à leur tour ce qu'ils entourent des règles suivantes.
 */
function transform(segments: Segment[], rule: (text: string) => string) {
	return segments.flatMap((segment) =>
		segment.code ? [segment] : tokenize(rule(segment.value)),
	);
}

/** Index de l'accolade fermante correspondante, ou -1 si le groupe n'est pas équilibré. */
function findClosingBrace(text: string, start: number) {
	let depth = 0;
	for (let i = start; i < text.length; i++) {
		if (text[i] === "\\") {
			i++;
			continue;
		}
		if (text[i] === "{") depth++;
		else if (text[i] === "}" && --depth === 0) return i;
	}
	return -1;
}

/** Entoure de backticks les groupes d'accolades équilibrés, imbrication comprise. */
function wrapBraces(text: string): string {
	let output = "";
	let i = 0;
	while (i < text.length) {
		if (text[i] !== "{" || text[i - 1] === "\\") {
			output += text[i++];
			continue;
		}
		const end = findClosingBrace(text, i);
		if (end === -1) {
			output += text[i++];
			continue;
		}
		output += `\`${text.slice(i, end + 1)}\``;
		i = end + 1;
	}
	return output;
}

const rules: ((text: string) => string)[] = [
	wrapBraces,
	(text) => text.replace(/(?<!\\)<=/g, "`<=`"),
	(text) => text.replace(/(?<!\\)>=/g, "`>=`"),
	(text) => text.replace(/(?<!\\)<\(([^`\\)]+)\)/g, "`<($1)`"),
	(text) => text.replace(/(?<!\\)<([^`\\>]+)>/g, "`<$1>`"),
];

function escapeChangelog(content: string): string {
	let fence: string | null = null;
	return content
		.split("\n")
		.map((line) => {
			const marker = FENCE.exec(line)?.[1];
			if (fence) {
				if (marker?.[0] === fence[0] && marker.length >= fence.length)
					fence = null;
				return line;
			}
			if (marker) {
				fence = marker;
				return line;
			}
			return rules
				.reduce(transform, tokenize(line))
				.map((segment) => segment.value)
				.join("");
		})
		.join("\n");
}

for (const changelog of changelogPath) {
	const content = readFileSync(changelog, "utf-8");
	writeFileSync(changelog, escapeChangelog(content), "utf-8");
}
console.log("✅ CHANGELOG.md corrigé pour MDX");
