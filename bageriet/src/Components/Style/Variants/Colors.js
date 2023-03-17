export const Colors = (themeMode) => {
	const primary = themeMode === "light" ? "#FF0000" : "#ccc" ;
    return{
        primary: primary,
        secondary: "#333333",
        tertiary: "#BBC8D4",
        quaternary: "#6D8FAB",
        quinary: "#252525",
        senary: "#F0F7FD",
        dark: "#000000",
    }
}