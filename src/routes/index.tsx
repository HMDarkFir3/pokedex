import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

//Routes
import AppRoutes from "./app.routes";

//Interfaces
export interface RoutesProps {
  Home: undefined;
  PokemonView: undefined;
}

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};

export default Routes;
