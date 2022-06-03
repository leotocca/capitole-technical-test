const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			blue: {
				500: "#2C348E",
				900: "#0D1935",
			},
			cyan: {
				50: "#ECF6FC",
				100: "#BFE2F5",
				500: "#60BCEA",
			},
			gray: colors.gray,
			green: {
				...colors.green,
				500: "#7BC151",
			},
			navy: {
				100: "#DDDFE3",
				300: "#9EA3AE",
				500: "#565E72",
				900: "#0D1935",
			},
			orange: {
				500: "#E67D40",
			},
			red: {
				...colors.red,
				50: "#FBEDEE",
				100: "#ECA4A8",
				500: "#D12026",
				900: "#FAFCFE",
			},
			yellow: {
				500: "#FAD95B",
			},
			white: colors.white,
		},
		extend: {},
	},
	plugins: [],
};
