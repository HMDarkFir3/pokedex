import "react-native-gesture-handler";
import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClientProvider } from "@tanstack/react-query";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { ThemeProvider } from "@/contexts/ThemeContext";
import { PokemonProvider } from "@/contexts/PokemonContext";
import { PokemonEvolutionProvider } from "@/contexts/PokemonEvolutionContext";

import { Routes } from "@/routes/index";

import { queryClient } from "@/services/queryClient";

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
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <PokemonProvider>
            <PokemonEvolutionProvider>
              <GestureHandlerRootView style={{ flex: 1 }}>
                <Routes />
              </GestureHandlerRootView>
            </PokemonEvolutionProvider>
          </PokemonProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};
