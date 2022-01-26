import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

//Contexts
import PokeProvider from "./src/contexts/PokeContext";

//Routes Folder
import Routes from "./src/routes";

//Global Folder
import { dark } from "./src/global/themes/dark";

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={dark}>
      <PokeProvider>
        <StatusBar style="light" translucent={true} />
        <Routes />
      </PokeProvider>
    </ThemeProvider>
  );
};

export default App;
