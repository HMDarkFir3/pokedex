export interface PokemonEvolutionChainDTO {
  id: number;
  item: {
    name: string;
    url: string;
  } | null;
  min_level: number | null;
  species_name: string;
  trigger_name: string | null;
  image_url?: string | null;
}
[];
