import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Pokemon } from "@screens/Pokemon";
import { Pokedex } from "@screens/Pokedex";
import { Error } from "@screens/Error";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes: FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false, animation: "fade" }}>
      <Screen name="Home" component={Home} />
      <Screen name="Pokemon" component={Pokemon} />
      <Screen name="Pokedex" component={Pokedex} />
      <Screen name="Error" component={Error} />
    </Navigator>
  );
};
