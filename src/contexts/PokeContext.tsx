import * as React from "react";
import { Alert } from "react-native";

//Services
import api from "../services/api";

//DTOS
import {
  PokemonDTO,
  PokemonTypeDTO,
  PokemonSpeciesDTO,
  PokemonFlavorTextEntriesDTO,
} from "../dtos";

export const PokeContext = React.createContext({} as PokeContextData);

//Interfaces
interface PokeContextData {
  pokemon: PokemonDTO;
  pokemonType: PokemonTypeDTO[];
  pokemonFlavorTextEntrie: PokemonFlavorTextEntriesDTO[];
  loading: boolean;
  fetchPokemon: (pokemonName: string) => void;
}

interface PokeProviderProps {
  children: React.ReactNode;
}

const PokeProvider: React.FC<PokeProviderProps> = ({ children }) => {
  //States
  const [pokemon, setPokemon] = React.useState<PokemonDTO>({} as PokemonDTO);
  const [pokemonType, setPokemonType] = React.useState<PokemonTypeDTO[]>([]);
  const [pokemonFlavorTextEntrie, setPokemonFlavorTextEntrie] = React.useState<
    PokemonFlavorTextEntriesDTO[]
  >([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  async function fetchPokemon(pokemonName: string) {
    try {
      setLoading(true);

      const pokemonResponse = await api.get<PokemonDTO>(
        `/pokemon/${pokemonName.toLowerCase()}`
      );

      const speciesResponse = await api.get<PokemonSpeciesDTO>(
        `pokemon-species/${pokemonName.toLowerCase()}`
      );

      setPokemon(pokemonResponse.data);
      setPokemonType(pokemonResponse.data.types);
      setPokemonFlavorTextEntrie(speciesResponse.data.flavor_text_entries);
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      setLoading(false);
    }

    //GET - Evolution - https://pokeapi.co/api/v2/evolution-chain/{id}/
    //GET - Encounters - https://pokeapi.co/api/v2/pokemon/{id}/encounters
  }

  return (
    <PokeContext.Provider
      value={{
        pokemon,
        pokemonType,
        pokemonFlavorTextEntrie,
        loading,
        fetchPokemon,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};

export default PokeProvider;
