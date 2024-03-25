import type * as Preset from "@docusaurus/preset-classic";
import type {Config} from "@docusaurus/types";
import {themes as prismThemes} from "prism-react-renderer";

const config: Config = {
	title: "Dicelette",
	tagline: "Un bot discord qui lance des dés dans des fils... Et bien plus !",
	favicon: "img/dicelette.png",
	url: "https://dicelette.github.io/",
	baseUrl: "/",

	organizationName: "Dicelette", 
	projectName: "dicelette.github.io", 
	trailingSlash: false,
	onBrokenLinks: "throw",
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
						"https://github.com/Dicelette/docs/tree/main/",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		image: "img/dice.png",
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
					sidebarId: "model",
					label: "Fiches",
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
				}
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
						}
					],
				},
			],
			copyright: `Licence GPLv3 © ${new Date().getFullYear()} Dicelette`,
		},
		prism: {
			theme: prismThemes.oneLight,
			darkTheme: prismThemes.oneDark,
			additionalLanguages: ["json", "md"]
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
