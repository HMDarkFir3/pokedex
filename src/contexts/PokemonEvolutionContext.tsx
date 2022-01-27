import * as React from "react";
import { Alert } from "react-native";

//Services
import api from "../services/api";

//DTOS
import { PokemonEvolutionDTO } from "../dtos";

//Hooks
import { usePokemon } from "../hooks/usePokemon";

export const PokemonEvolutionContext = React.createContext(
  {} as PokemonEvolutionContextData
);

//Interfaces
interface PokemonEvolutionContextData {
  pokemonEvolution: PokemonEvolutionDTO[];
  pokemonEvolutionNames: {
    first_name: string[] | null;
    mid_name: string[][] | null;
    last_name: string[][][] | null;
  };
  pokemonEvolutionLevels: {
    first_level: number[][][] | null;
    last_level: number[][][][] | null;
  };
  loading: boolean;
  fetchPokemonEvolution: () => void;
}

interface PokemonEvolutionProviderProps {
  children: React.ReactNode;
}

const PokemonProvider: React.FC<PokemonEvolutionProviderProps> = ({
  children,
}) => {
  //Hooks
  const { pokemonSpecies } = usePokemon();

  //Evolution States
  const [pokemonEvolution, setPokemonEvolution] = React.useState<
    PokemonEvolutionDTO[]
  >([]);
  const [pokemonEvolutionNames, setPokemonEvolutionNames] = React.useState<{
    first_name: string[] | null;
    mid_name: string[][] | null;
    last_name: string[][][] | null;
  }>({ first_name: [""], mid_name: [[""]], last_name: [[[""]]] });
  const [pokemonEvolutionLevels, setPokemonEvolutionLevels] = React.useState<{
    first_level: number[][][] | null;
    last_level: number[][][][] | null;
  }>({ first_level: null, last_level: null });
  const [loading, setLoading] = React.useState<boolean>(false);

  async function fetchPokemonEvolution() {
    try {
      setLoading(true);

      await api
        .get<PokemonEvolutionDTO[]>(`${pokemonSpecies.evolution_chain.url}`)
        .then((response) => {
          setPokemonEvolution(response.data);
        })
        .then(() => {
          //console.log(pokemonEvolution);
        });
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <PokemonEvolutionContext.Provider
      value={{
        pokemonEvolution,
        pokemonEvolutionNames,
        pokemonEvolutionLevels,
        loading,
        fetchPokemonEvolution,
      }}
    >
      {children}
    </PokemonEvolutionContext.Provider>
  );
};

export default PokemonProvider;
