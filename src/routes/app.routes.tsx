import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import Home from "../screens/Home";
import PokemonView from "../screens/PokemonView";
import Pokedex from "../screens/Pokedex";

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="PokemonView" component={PokemonView} />
      <Screen name="Pokedex" component={Pokedex} />
    </Navigator>
  );
};

export default AppRoutes;
