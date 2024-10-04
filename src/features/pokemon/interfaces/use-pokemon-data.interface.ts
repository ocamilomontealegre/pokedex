import type { IPokemonItem } from "./pokemon-item.interface";
import type { IPokemonDetail } from "./pokemon-detail.interface";

export interface IUsePokemonData {
  readonly pokemonData: IPokemonItem[] | undefined;
  readonly pokemonDetails: (IPokemonDetail | undefined)[];
  readonly error: unknown;
  readonly isLoading: boolean;
  readonly isError: boolean;
}
