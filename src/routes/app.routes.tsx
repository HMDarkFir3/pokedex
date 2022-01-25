import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import Home from "../screens/Home";
import PokemonView from "../screens/PokemonView";

//Components
import Header from "../components/Header";

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: true,
        header: (props) => <Header {...props} />,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="PokemonView" component={PokemonView} />
    </Navigator>
  );
};

export default AppRoutes;
