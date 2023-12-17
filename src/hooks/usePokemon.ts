import { useContext } from "react";
import { PokemonContext, PokemonContextData } from "@/contexts/PokemonContext";

export const usePokemon = (): PokemonContextData => useContext(PokemonContext);
