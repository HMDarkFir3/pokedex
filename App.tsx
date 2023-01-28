import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { PokemonProvider } from "./src/contexts/PokemonContext";
import { PokemonEvolutionProvider } from "./src/contexts/PokemonEvolutionContext";

import { Routes } from "./src/routes";

import { dark } from "./src/themes/dark";

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
