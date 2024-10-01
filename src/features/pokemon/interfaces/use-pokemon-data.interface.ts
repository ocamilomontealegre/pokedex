import type { IPokemonItem } from "./pokemon-item.interface";

export interface IUsePokemonData {
  readonly pokemonData: IPokemonItem[] | undefined;
  readonly error: unknown;
  readonly isLoading: boolean;
  readonly isError: boolean;
}
