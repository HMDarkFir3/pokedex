import "react-native-gesture-handler";
import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { ThemeProvider } from "@contexts/ThemeContext";
import { PokemonProvider } from "@contexts/PokemonContext";
import { PokemonEvolutionProvider } from "@contexts/PokemonEvolutionContext";

import { Routes } from "@routes/index";

export const App: FC = () => {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) return null;

  SplashScreen.hideAsync();

  return (
    <NavigationContainer>
      <ThemeProvider>
        <PokemonProvider>
          <PokemonEvolutionProvider>
            <Routes />
          </PokemonEvolutionProvider>
        </PokemonProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};
