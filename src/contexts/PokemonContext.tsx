import { useState, createContext, FC, ReactNode } from "react";
import { Alert } from "react-native";

import { api } from "@/services/api";

import { PokemonsDTO } from "@/dtos/PokemonsDTO";
import { PokemonDTO } from "@/dtos/PokemonDTO";
import { PokemonTypeDTO } from "@/dtos/PokemonTypeDTO";
import { PokemonSpeciesDTO } from "@/dtos/PokemonSpeciesDTO";
import { PokemonFlavorTextEntriesDTO } from "@/dtos/PokemonFlavorTextEntriesDTO";
import { PokemonAbilitiesDTO } from "@/dtos/PokemonAbilitiesDTO";
import { PokemonStatsDTO } from "@/dtos/PokemonStatsDTO";
import { PokemonMovesDTO } from "@/dtos/PokemonMovesDTO";

export const PokemonContext = createContext({} as PokemonContextData);

export interface PokemonContextData {
  pokemon: PokemonDTO;
  pokemonType: PokemonTypeDTO[];
  pokemonSpecies: PokemonSpeciesDTO;
  pokemonFlavorTextEntrie: PokemonFlavorTextEntriesDTO[];
  pokemonAbilities: PokemonAbilitiesDTO[];
  pokemonStats: PokemonStatsDTO[];
  pokemonMoves: PokemonMovesDTO[];
  pokemons: PokemonsDTO.Response["results"];
  isLoading: boolean;
  fetchPokemon: (pokemonId: string) => Promise<boolean>;
}

interface PokemonProviderProps {
  children: ReactNode;
}

export const PokemonProvider: FC<PokemonProviderProps> = ({ children }) => {
  const [pokemon, setPokemon] = useState<PokemonDTO>({} as PokemonDTO);
  const [pokemonType, setPokemonType] = useState<PokemonTypeDTO[]>([]);
  const [pokemonSpecies, setPokemonSpecies] = useState<PokemonSpeciesDTO>(
    {} as PokemonSpeciesDTO
  );
  const [pokemonFlavorTextEntrie, setPokemonFlavorTextEntrie] = useState<
    PokemonFlavorTextEntriesDTO[]
  >([]);
  const [pokemonAbilities, setPokemonAbilities] = useState<
    PokemonAbilitiesDTO[]
  >([]);
  const [pokemonStats, setPokemonStats] = useState<PokemonStatsDTO[]>([]);
  const [pokemonMoves, setPokemonMoves] = useState<PokemonMovesDTO[]>([]);
  const [pokemons, setPokemons] = useState<PokemonsDTO.Response["results"]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchPokemon(pokemonId: string) {
    try {
      setIsLoading(true);

      await api
        .get<PokemonDTO>(`pokemon/${pokemonId.toLowerCase()}/`)
        .then(async (pokemonResponse) => {
          setPokemon(pokemonResponse.data);
          setPokemonType(pokemonResponse.data.types);
          setPokemonAbilities(pokemonResponse.data.abilities);
          setPokemonStats(pokemonResponse.data.stats);
          setPokemonMoves(pokemonResponse.data.moves);

          await api
            .get<PokemonSpeciesDTO>(pokemonResponse.data.species.url)
            .then((speciesResponse) => {
              setPokemonSpecies(speciesResponse.data);
              setPokemonFlavorTextEntrie(
                speciesResponse.data.flavor_text_entries
              );
            });
        });

      return true;
    } catch (error) {
      setPokemon({} as PokemonDTO);
      setPokemonType([]);
      setPokemonAbilities([]);
      setPokemonStats([]);
      setPokemonMoves([]);
      setPokemonSpecies({} as PokemonSpeciesDTO);
      setPokemonFlavorTextEntrie([]);

      return false;
    } finally {
      setIsLoading(false);
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
        isLoading,
        fetchPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
