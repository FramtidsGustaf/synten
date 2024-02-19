export const useTheme = () => {
	const getCSSVariable = (name: string) => {
		const root = document.documentElement;
		return getComputedStyle(root).getPropertyValue(name);
	};

	const theme = {
		xs: getCSSVariable("--xs"),
		sm: getCSSVariable("--sm"),
		md: getCSSVariable("--md"),
		lg: getCSSVariable("--lg"),
		xl: getCSSVariable("--xl"),
		bgColor: getCSSVariable("--bg-color"),
		bgColorLight: getCSSVariable("--bg-color-light"),
		bgColorDark: getCSSVariable("--bg-color-dark"),
		dark: getCSSVariable("--dark"),
		light: getCSSVariable("--light"),
	};

	return theme;
};
