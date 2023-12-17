export namespace PokemonDTO {
  export interface Abilities {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }

  interface Forms {
    name: string;
    url: string;
  }

  interface GameIndeces {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }

  export interface Moves {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    }[];
  }

  interface Sprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string | null;
        front_female: string | null;
      };
      home: {
        front_default: string | null;
        front_female: string | null;
      };
    };
  }

  export interface Stats {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }

  export interface Types {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }
  export interface Response {
    abilities: Abilities[];
    base_experience: number;
    forms: Forms[];
    game_indices: GameIndeces[];
    height: number;
    held_items: [];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Moves[];
    name: string;
    order: number;
    past_types: [];
    species: {
      name: string;
      url: string;
    };
    sprites: Sprites;
    stats: Stats[];
    types: Types[];
    weight: number;
  }
}
