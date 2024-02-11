/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			libre: "Libre Baskerville",
			newsReader: "Newsreader",
		},
		extend: {},
	},
	plugins: [],
});
