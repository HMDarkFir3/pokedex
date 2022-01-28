import * as React from "react";
import { Alert } from "react-native";

//Services
import api from "../services/api";

//DTOS
import { PokemonEvolutionDTO, PokemonEvolutionChainDTO } from "../dtos";

//Hooks
import { usePokemon } from "../hooks/usePokemon";

export const PokemonEvolutionContext = React.createContext(
  {} as PokemonEvolutionContextData
);

//Interfaces
interface PokemonEvolutionContextData {
  pokemonEvolutionChain: PokemonEvolutionChainDTO[];
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
  const [pokemonEvolutionChain, setPokemonEvolutionChain] = React.useState<
    PokemonEvolutionChainDTO[]
  >([]);

  const [loading, setLoading] = React.useState<boolean>(false);

  async function fetchPokemonEvolution() {
    try {
      setLoading(true);

      if (pokemonEvolutionChain.length >= 1) {
        setPokemonEvolutionChain([]);
      }

      await api
        .get(`${pokemonSpecies.evolution_chain.url}`)
        .then((response) => {
          let evoData = response.data.chain;

          do {
            let evoDetails = evoData["evolution_details"][0];

            pokemonEvolutionChain.push({
              species_name: evoData.species.name,
              min_level: !evoDetails ? 1 : evoDetails.min_level,
              trigger_name: !evoDetails ? null : evoDetails.trigger.name,
              item: !evoDetails ? null : evoDetails.item,
            });

            evoData = evoData["evolves_to"][0];
          } while (!!evoData && evoData.hasOwnProperty("evolves_to"));
        });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  return (
    <PokemonEvolutionContext.Provider
      value={{
        pokemonEvolutionChain,
        loading,
        fetchPokemonEvolution,
      }}
    >
      {children}
    </PokemonEvolutionContext.Provider>
  );
};

export default PokemonProvider;
