import * as React from "react";
import { Alert } from "react-native";

//Services
import api from "../services/api";

//DTOS
import { PokemonDTO, PokemonTypeDTO } from "../dtos";

export const PokeContext = React.createContext({} as PokeContextData);

//Interfaces
interface PokeContextData {
  pokemon: PokemonDTO;
  pokemonType: PokemonTypeDTO[];
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
  const [loading, setLoading] = React.useState<boolean>(false);

  async function fetchPokemon(pokemonName: string) {
    try {
      setLoading(true);

      const response = await api.get<PokemonDTO>(
        `/pokemon/${pokemonName.toLowerCase()}`
      );

      setPokemon(response.data);
      setPokemonType(response.data.types);
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      setLoading(false);
    }

    //GET - Evolution - https://pokeapi.co/api/v2/evolution-chain/{id}/
    //GET - Photos and Types - https://pokeapi.co/api/v2/pokemon-form/{id}/
    //GET - Encounters - https://pokeapi.co/api/v2/pokemon/{id}/encounters
  }

  return (
    <PokeContext.Provider
      value={{ pokemon, pokemonType, loading, fetchPokemon }}
    >
      {children}
    </PokeContext.Provider>
  );
};

export default PokeProvider;
