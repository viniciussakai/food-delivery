import { Routes } from "./routes";
import { ThemeProvider } from "@emotion/react";
import { darktheme } from "@styles/theme";
import { registerRootComponent } from "expo";

const App = () => {
	return (
		<ThemeProvider theme={darktheme}>
			<Routes />
		</ThemeProvider>
	);
};

export default registerRootComponent(App);
