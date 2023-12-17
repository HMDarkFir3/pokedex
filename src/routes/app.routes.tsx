import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";

import { Home } from "@/screens/Home";
import { Pokemon } from "@/screens/Pokemon";
import { Pokedex } from "@/screens/Pokedex";
import { Error } from "@/screens/Error";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes: FC = () => {
  const { title } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: true,
        statusBarStyle: title === "light" ? "dark" : "light",
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Pokedex" component={Pokedex} />
      <Screen
        name="Pokemon"
        component={Pokemon}
        options={{
          statusBarStyle: "light",
        }}
      />
      <Screen name="Error" component={Error} />
    </Navigator>
  );
};
