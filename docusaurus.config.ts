/* eslint-disable @typescript-eslint/no-var-requires */
import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
	title: "Dicelette",
	tagline: "Un bot discord qui lance des dés dans des fils... Et bien plus !",
	favicon: "img/dicelette.png",
	url: "https://dicelette.github.io/",
	baseUrl: "/",

	organizationName: "Dicelette",
	projectName: "dicelette.github.io",
	trailingSlash: false,
	onBrokenLinks: "warn",
	onBrokenMarkdownLinks: "warn",
	i18n: {
		defaultLocale: "fr",
		locales: ["en", "fr"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					editUrl:
						"https://github.com/Dicelette/dicelette.github.io/tree/main/",
					admonitions: {
						keywords: ["usage", "example", "pin", "roll", "tldr", "warning"],
						extendDefaults: true,
					},
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	plugins: [
		"docusaurus-node-polyfills",
		async function myPlugin() {
			return {
				name: "docusaurus-tailwindcss",
				configurePostCss(postcssOptions) {
					// Appends TailwindCSS and AutoPrefixer.
					postcssOptions.plugins.push(require("postcss-import"));
					postcssOptions.plugins.push(require("tailwindcss"));
					postcssOptions.plugins.push(require("autoprefixer"));
					return postcssOptions;
				},
			};
		},
	],

	themeConfig: {
		image: "img/dice.png",
		algolia: {
			appId: "FJJXF4SEGY",
			apiKey: "e3ec9ed76aeec871f7a6726169ec20f5",
			indexName: "diceletteio",
			contextualSearch: true,
		},
		navbar: {
			title: "Dicelette",
			logo: {
				alt: "Dicelette logo",
				src: "img/dicelette.png",
			},
			items: [
				{
					type: "docSidebar",
					position: "left",
					sidebarId: "introduction",
					label: "Introduction",
				},
				{
					type: "docSidebar",
					position: "left",
					sidebarId: "config",
					label: "Configuration",
				},
				{
					type: "docSidebar",
					position: "left",
					sidebarId: "model",
					label: "Fiche de personnage",
				},
				{
					type: "docSidebar",
					position: "left",
					sidebarId: "commands",
					label: "Commandes",
				},
				{
					type: "docSidebar",
					position: "left",
					sidebarId: "TOS",
					label: "CGU & Développement",
				},
				{
					href: "https://github.com/dicelette/docs",
					label: "GitHub",
					position: "right",
				},
				{
					href: "https://dice-roller.github.io/documentation/guide/notation/",
					label: "Dés et notation",
					position: "right",
				},
				{
					type: "localeDropdown",
					position: "right",
				},
				{
					type: "search",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Liens",
					items: [
						{
							label: "GitHub",
							href: "https://github.com/Dicelette/discord-dicelette",
						},
						{
							label: "Invitation",
							href: "https://discord.com/oauth2/authorize?client_id=839830334315141120&permissions=8&scope=bot",
						},
						{
							label: "Discord",
							href: "https://discord.gg/5w2guxa2kS",
						},
					],
				},
			],
			copyright: `Licence GPLv3 © ${new Date().getFullYear()} Dicelette`,
		},
		prism: {
			theme: prismThemes.oneLight,
			darkTheme: prismThemes.oneDark,
			additionalLanguages: ["json", "markdown"],
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
