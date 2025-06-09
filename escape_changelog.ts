import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

// 📄 Chemin vers le fichier CHANGELOG.md
const changelogPath = [
	path.resolve("./docs/dev/CHANGELOG.md"),
	path.resolve(
		"./i18n/en/docusaurus-plugin-content-docs/current/dev/CHANGELOG.md",
	),
];

function escapeBrackets(input: string): string {
	return input
		.replace(/(?<![`\\]){([\w\d\s\-._]+)}(?![`\\])/g, "`{$1}`")
		.replace(/(?<![`\\])<([\w\d\s\-._]+)>(?![`\\])/g, "`<$1>`");
}

for (const changelog of changelogPath) {
	const content = readFileSync(changelog, "utf-8");
	writeFileSync(changelog, escapeBrackets(content), "utf-8");
}
console.log("✅ CHANGELOG.md corrigé pour MDX");
