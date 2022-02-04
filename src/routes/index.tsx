import * as React from "react";

//Routes
import AppRoutes from "./app.routes";

//Interfaces
export interface RoutesProps {
  Home: undefined;
  PokemonView: undefined;
  Pokedex: undefined;
  ErrorView: undefined;
}

const Routes: React.FC = () => {
  return <AppRoutes />;
};

export default Routes;
