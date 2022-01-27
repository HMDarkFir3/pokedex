import * as React from "react";
import { PokemonEvolutionContext } from "../contexts/PokemonEvolutionContext";

const usePokemonEvolution = () => {
  const content = React.useContext(PokemonEvolutionContext);

  return content;
};

export { usePokemonEvolution };
