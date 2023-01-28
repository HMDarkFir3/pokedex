import { useContext } from "react";
import {
  PokemonEvolutionContext,
  PokemonEvolutionContextData,
} from "../contexts/PokemonEvolutionContext";

export const usePokemonEvolution = (): PokemonEvolutionContextData =>
  useContext(PokemonEvolutionContext);
