import { Colors } from "./Variants/Colors";

export const theme = (themeMode) => {
	return {colors: Colors(themeMode),
	fonts: ['Lobster', 'Open Sans']}
}