export interface Results {
  name: string;
  url: string;
}
[];

export interface PokemonsDTO {
  count: number;
  next: string;
  previous: string | null;
  results: Results[];
}
