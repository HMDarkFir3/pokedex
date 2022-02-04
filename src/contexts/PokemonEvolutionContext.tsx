import * as React from "react";

//Services
import api from "../services/api";

//DTOS
import { PokemonEvolutionChainDTO } from "../dtos";

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

const PokemonEvolutionProvider: React.FC<PokemonEvolutionProviderProps> = ({
  children,
}) => {
  //Hooks
  const { pokemonSpecies } = usePokemon();

  //Evolution States
  const [pokemonEvolutionChain, setPokemonEvolutionChain] = React.useState<
    PokemonEvolutionChainDTO[]
  >([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  async function fetchEvolutionImages(evolutionChain) {
    console.log(evolutionChain);

    for (let i = 0; i < evolutionChain.length; i++) {
      const response = await api.get(
        `pokemon-species/${evolutionChain[i].species_name}`
      );

      evolutionChain[i][
        "image_url"
      ] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${response.data.id}.png`;
    }

    setPokemonEvolutionChain((oldState) => [oldState, ...evolutionChain]);
  }

  async function fetchPokemonEvolution() {
    try {
      setLoading(true);

      if (pokemonEvolutionChain.length >= 1) {
        setPokemonEvolutionChain([]);
      }

      await api
        .get(`${pokemonSpecies.evolution_chain.url}`)
        .then((response) => {
          let evoChain = [];
          let evoData = response.data.chain;
          let count: number = 0;

          do {
            let evoDetails = evoData["evolution_details"][0];
            let numberOfEvolutions = evoData.evolves_to.length;

            evoChain.push({
              id: count,
              species_name: evoData.species.name,
              min_level: !evoDetails ? 1 : evoDetails.min_level,
              trigger_name: !evoDetails ? null : evoDetails.trigger.name,
              item: !evoDetails ? null : evoDetails.item,
            });

            if (numberOfEvolutions > 1) {
              for (let i = 1; i < numberOfEvolutions; i++) {
                evoChain.push({
                  id: count,
                  species_name: evoData.evolves_to[i].species.name,
                  min_level: !!evoData.evolves_to[i]
                    ? 1
                    : evoData.evolves_to[i].min_level,
                  trigger_name: !!evoData.evolves_to[i]
                    ? null
                    : evoData.evolves_to[i].trigger.name,
                  item: !!evoData.evolves_to[i]
                    ? null
                    : evoData.evolves_to[i].item,
                });
              }
            }

            count++;
            evoData = evoData.evolves_to[0];
          } while (!!evoData && evoData.hasOwnProperty("evolves_to"));

          fetchEvolutionImages(evoChain);
        });
    } catch (error) {
      setPokemonEvolutionChain([]);
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

export default PokemonEvolutionProvider;
