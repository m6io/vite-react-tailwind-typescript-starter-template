/** @type {import('tailwindcss').Config} */

import formsPlugin from "@tailwindcss/forms"
import typographyPlugin from "@tailwindcss/typography"

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: ["class"],
	theme: {
		extend: {},
	},
	plugins: [formsPlugin, typographyPlugin],
}
