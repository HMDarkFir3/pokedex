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

import { PokemonProvider } from "@contexts/PokemonContext";
import { PokemonEvolutionProvider } from "@contexts/PokemonEvolutionContext";

import { Routes } from "@routes/index";

import { light } from "@themes/light";

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
      <ThemeProvider theme={light}>
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
