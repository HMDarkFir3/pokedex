import { api } from "./api";

import { PokemonDTO } from "@/dtos/PokemonDTO";
import { PokemonSpeciesDTO } from "@/dtos/PokemonSpeciesDTO";
import { PokemonEvolutionChainDTO } from "@/dtos/PokemonEvolutionChainDTO";
import { PokemonsDTO } from "@/dtos/PokemonsDTO";

import { typeColor } from "@/utils/typeColor";

interface PokemonReturn {
  pokemon: PokemonDTO.Response;
  evolutionChain: any;
  description: string;
  backgroundColor: string;
}

const getEvolutionImages = async (
  evolutionChain: PokemonEvolutionChainDTO[]
) => {
  for (let i = 0; i < evolutionChain.length; i++) {
    const { data } = await api.get(
      `pokemon-species/${evolutionChain[i].species_name}`
    );

    evolutionChain[i][
      "image_url"
    ] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`;
  }

  return evolutionChain;
};

const getPokemon = async (pokemonId: string): Promise<PokemonReturn> => {
  try {
    const { data } = await api.get<PokemonDTO.Response>(
      `pokemon/${pokemonId.toLowerCase()}`
    );

    if (data) {
      const { data: speciesData } = await api.get<PokemonSpeciesDTO.Response>(
        data.species.url
      );

      if (speciesData) {
        const { data: evolutionData } = await api.get(
          speciesData.evolution_chain.url
        );

        let evolutionChain: PokemonEvolutionChainDTO[] = [];
        let evolutionDataChain = evolutionData.chain;
        let count: number = 0;

        do {
          let evolutionsDetails = evolutionDataChain["evolution_details"][0];
          let numbersOfEvolutions = evolutionDataChain["evolves_to"].length;

          evolutionChain.push({
            id: count,
            species_name: evolutionDataChain.species.name,
            min_level: !evolutionsDetails ? 1 : evolutionsDetails.min_level,
            trigger_name: !evolutionsDetails
              ? null
              : evolutionsDetails.trigger.name,
            item: !evolutionsDetails ? null : evolutionsDetails.item,
          });

          if (numbersOfEvolutions > 1) {
            for (let i = 1; i < numbersOfEvolutions; i++) {
              evolutionChain.push({
                id: count,
                species_name: evolutionDataChain.evolves_to[i].species.name,
                min_level: !!evolutionDataChain.evolves_to[i]
                  ? 1
                  : evolutionDataChain.evolves_to[i].min_level,
                trigger_name: !!evolutionDataChain.evolves_to[i]
                  ? null
                  : evolutionDataChain.evolves_to[i].trigger.name,
                item: !!evolutionDataChain.evolves_to[i]
                  ? null
                  : evolutionDataChain.evolves_to[i].item,
              });
            }
          }

          count++;
          evolutionDataChain = evolutionDataChain.evolves_to[0];
        } while (
          !!evolutionDataChain &&
          evolutionDataChain.hasOwnProperty("evolves_to")
        );

        const evolutionFormatted = await getEvolutionImages(evolutionChain);

        if (evolutionFormatted) {
          const types = data.types.map((type) => type.type.name);
          const description = speciesData.flavor_text_entries
            .filter((flavor) => flavor.language.name === "en")[0]
            .flavor_text.replace(/\s/g, " ");

          return {
            pokemon: data,
            evolutionChain: evolutionFormatted,
            description,
            backgroundColor: typeColor[types[0]],
          };
        }
      }
    }
  } catch (error) {
    throw new Error("Pokemon not found");
  }
};

const getPokemons = async (): Promise<PokemonsDTO.Results[]> => {
  try {
    const { data } = await api.get<PokemonsDTO.Response>(
      "pokemon?limit=1106&offset=0"
    );

    return data.results;
  } catch (error) {
    throw new Error("Pokemons not found");
  }
};

export { getPokemon, getPokemons };
