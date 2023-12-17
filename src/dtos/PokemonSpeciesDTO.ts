export namespace PokemonSpeciesDTO {
  interface FlavorTextEntries {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
    version: {
      name: string;
      url: string;
    };
  }

  interface Genera {
    genus: string;
    language: {
      name: string;
      url: string;
    };
  }

  interface Names {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }

  interface PalParkEncounters {
    area: {
      name: string;
      url: string;
    };
    base_score: number;
    rate: number;
  }

  interface PokedexNumbers {
    entry_number: number;
    pokedex: {
      name: string;
      url: string;
    };
  }

  interface Varieties {
    is_default: boolean;
    pokemon: {
      name: string;
      url: string;
    };
  }

  export interface Response {
    base_happiness: number;
    capture_rate: number;
    color: {
      name: string;
      url: string;
    };
    egg_groups: {
      name: string;
      url: string;
    }[];
    evolution_chain: {
      url: string;
    };
    evolves_from_species: null;
    flavor_text_entries: FlavorTextEntries[];
    form_descriptions: [];
    forms_switchable: boolean;
    gender_rate: number;
    genera: Genera[];
    generation: {
      name: string;
      url: string;
    };
    growth_rate: {
      name: string;
      url: string;
    };
    habitat: {
      name: string;
      url: string;
    };
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    name: string;
    names: Names[];
    order: number;
    pal_park_encounters: PalParkEncounters[];
    pokedex_numbers: PokedexNumbers[];
    shape: {
      name: string;
      url: string;
    };
    varieties: Varieties[];
  }
}
