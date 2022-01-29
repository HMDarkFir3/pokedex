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
  PokemonMovesDTO,
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
  pokemonMoves: PokemonMovesDTO[];
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
  const [pokemonMoves, setPokemonMoves] = React.useState<PokemonMovesDTO[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const fetchPokemon = React.useCallback(
    async (pokemonId: string) => {
      try {
        setLoading(true);

        await api
          .get<PokemonDTO>(`pokemon/${pokemonId.toLowerCase()}/`)
          .then((pokemonResponse) => {
            setPokemon(pokemonResponse.data);
            setPokemonType(pokemonResponse.data.types);
            setPokemonAbilities(pokemonResponse.data.abilities);
            setPokemonStats(pokemonResponse.data.stats);
            setPokemonMoves(pokemonResponse.data.moves);
          });

        await api
          .get<PokemonSpeciesDTO>(`pokemon-species/${pokemonId.toLowerCase()}/`)
          .then((speciesResponse) => {
            setPokemonSpecies(speciesResponse.data);
            setPokemonFlavorTextEntrie(
              speciesResponse.data.flavor_text_entries
            );
          });
      } catch (error) {
        Alert.alert(error.message);
      } finally {
        setLoading(false);
      }
    },
    [
      pokemon,
      pokemonType,
      pokemonAbilities,
      pokemonStats,
      pokemonMoves,
      pokemonSpecies,
      pokemonFlavorTextEntrie,
    ]
  );

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        pokemonType,
        pokemonAbilities,
        pokemonStats,
        pokemonMoves,
        pokemonSpecies,
        pokemonFlavorTextEntrie,
        loading,
        fetchPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
