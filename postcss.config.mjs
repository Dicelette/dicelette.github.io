/** @type {import('tailwindcss').Config} */
export default {
	corePlugins: {
		preflight: false,
	},
	preflight: false,
	// Use Docusaurus data-theme attribute and/or .dark class to control dark mode
	darkMode: ["class", '[data-theme="dark"]'],
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./build/**/*.{js, jsx, ts, tsx}"],
	theme: {
		extend: {},
	},
	plugins: {
		"@tailwindcss/postcss": {},
	},
};