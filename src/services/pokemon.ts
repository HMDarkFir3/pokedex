import { api } from "./api";

import { PokemonsDTO } from "@/dtos/PokemonsDTO";

const getPokemons = async () => {
  const { data } = await api.get<PokemonsDTO.Response>(
    "pokemon?limit=1106&offset=0"
  );

  return data.results;
};

export { getPokemons };
