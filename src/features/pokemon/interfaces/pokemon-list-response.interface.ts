import { IPokemonItem } from "./pokemon-item.interface";

export interface IPokemonListResponse {
  readonly count: number;
  readonly next: string | URL;
  readonly results: IPokemonItem[];
}
