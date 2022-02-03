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
  PokemonsDTO,
} from "../dtos";
import { Results } from "../dtos/PokemonsDTO";

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
  pokemons: Results[];
  loading: boolean;
  fetchPokemon: (pokemonId: string) => void;
  fetchPokemons: () => void;
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
  const [pokemons, setPokemons] = React.useState<Results[]>([]);
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

        setPokemonSpecies({} as PokemonSpeciesDTO);
        await api
          .get<PokemonSpeciesDTO>(`pokemon-species/${pokemonId.toLowerCase()}/`)
          .then((speciesResponse) => {
            setPokemonSpecies(speciesResponse.data);
            setPokemonFlavorTextEntrie(
              speciesResponse.data.flavor_text_entries
            );
          });
      } catch (error) {
        setPokemonSpecies({} as PokemonSpeciesDTO);
        setPokemonFlavorTextEntrie([]);
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

  async function fetchPokemons() {
    try {
      setLoading(true);
      await api.get(`pokemon`).then((response) => {
        console.log(response.data);
        setPokemons(response.data.results);
      });
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      setLoading(false);
    }
  }

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
        pokemons,
        loading,
        fetchPokemon,
        fetchPokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
