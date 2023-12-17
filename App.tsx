import "react-native-gesture-handler";
import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { ThemeProvider } from "@/contexts/ThemeContext";

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
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Routes />
          </GestureHandlerRootView>
        </ThemeProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};
