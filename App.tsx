import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

//Contexts
import PokemonProvider from "./src/contexts/PokemonContext";
import PokemonEvolutionProvider from "./src/contexts/PokemonEvolutionContext";

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
    <NavigationContainer>
      <ThemeProvider theme={dark}>
        <PokemonProvider>
          <PokemonEvolutionProvider>
            <StatusBar style="light" translucent={true} />
            <Routes />
          </PokemonEvolutionProvider>
        </PokemonProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
