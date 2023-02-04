import { fontWeights, fontsSizes } from "@styles/fonts";
import { rem } from "@utils/style";

interface IColors {
	background: {
		main: string;
		secondary: string;
	};

	text: {
		main: string;
		secondary: string;
	};

	primary: {
		main: string;
		light: string;
		dark: string;
	};
}

const borderRadius = {
	s: rem(0.25), // 4px,
	m: rem(0.5), // 8x,
	l: rem(1), // 16px,
};

const createTheme = (colors: IColors) => {
	return {
		colors,
		fontsSizes,
		fontWeights,
		borderRadius,
	};
};

export const darktheme = createTheme({
	background: {
		main: "#131313",
		secondary: "#2B2B2B",
	},

	text: {
		main: "#FFFFFF",
		secondary: "#929292",
	},

	primary: {
		main: "#15BE77",
		light: "#15BE77",
		dark: "#15BE77",
	},
});

export const lighTheme = createTheme({
	background: {
		main: "#FCFFFF",
		secondary: "#F4F4F4",
	},

	text: {
		main: "#09051C",
		secondary: "#3B3B3B",
	},

	primary: {
		main: "#15BE77",
		light: "#15BE77",
		dark: "#15BE77",
	},
});

export type CustomTheme = typeof darktheme;
