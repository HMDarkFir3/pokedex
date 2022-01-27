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
  PokemonAbilitiesDTO,
  PokemonStatsDTO,
} from "../dtos";

export const PokemonContext = React.createContext({} as PokemonContextData);

//Interfaces
interface PokemonContextData {
  pokemon: PokemonDTO;
  pokemonType: PokemonTypeDTO[];
  pokemonSpecies: PokemonSpeciesDTO;
  pokemonFlavorTextEntrie: PokemonFlavorTextEntriesDTO[];
  pokemonAbilities: PokemonAbilitiesDTO[];
  pokemonStats: PokemonStatsDTO[];
  loading: boolean;
  fetchPokemon: (pokemonId: string) => void;
}

interface PokemonProviderProps {
  children: React.ReactNode;
}

const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
  //Pokemon States
  const [pokemon, setPokemon] = React.useState<PokemonDTO>({} as PokemonDTO);
  const [pokemonType, setPokemonType] = React.useState<PokemonTypeDTO[]>([]);
  const [pokemonSpecies, setPokemonSpecies] = React.useState<PokemonSpeciesDTO>(
    {} as PokemonSpeciesDTO
  );
  const [pokemonFlavorTextEntrie, setPokemonFlavorTextEntrie] = React.useState<
    PokemonFlavorTextEntriesDTO[]
  >([]);
  const [pokemonAbilities, setPokemonAbilities] = React.useState<
    PokemonAbilitiesDTO[]
  >([]);
  const [pokemonStats, setPokemonStats] = React.useState<PokemonStatsDTO[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  async function fetchPokemon(pokemonId: string) {
    try {
      setLoading(true);

      await api
        .get<PokemonDTO>(`pokemon/${pokemonId.toLowerCase()}/`)
        .then((pokemonResponse) => {
          setPokemon(pokemonResponse.data);
          setPokemonType(pokemonResponse.data.types);
          setPokemonAbilities(pokemonResponse.data.abilities);
          setPokemonStats(pokemonResponse.data.stats);
        });

      await api
        .get<PokemonSpeciesDTO>(`pokemon-species/${pokemonId.toLowerCase()}/`)
        .then((speciesResponse) => {
          setPokemonSpecies(speciesResponse.data);
          setPokemonFlavorTextEntrie(speciesResponse.data.flavor_text_entries);
        });
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      setLoading(false);
    }

    //GET - Encounters - https://pokeapi.co/api/v2/pokemon/{id}/encounters
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        pokemonType,
        pokemonSpecies,
        pokemonFlavorTextEntrie,
        pokemonAbilities,
        pokemonStats,
        loading,
        fetchPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;