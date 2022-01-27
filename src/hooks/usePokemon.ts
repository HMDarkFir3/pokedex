import * as React from "react";
import { PokemonContext } from "../contexts/PokemonContext";

const usePokemon = () => {
  const content = React.useContext(PokemonContext);

  return content;
};

export { usePokemon };
