export namespace PokemonsDTO {
  export interface Results {
    name: string;
    url: string;
  }

  export interface Response {
    count: number;
    next: string;
    previous: string | null;
    results: Results[];
  }
}
