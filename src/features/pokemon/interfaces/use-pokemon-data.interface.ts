import type { InfiniteData } from "@tanstack/react-query";
import type { IPokemonListResponse } from "./pokemon-list-response.interface";
import type { IPokemonDetail } from "./pokemon-detail.interface";

export interface IUsePokemonData {
  readonly pokemonData: InfiniteData<IPokemonListResponse> | undefined;
  readonly pokemonDetails: (IPokemonDetail | undefined)[];
  readonly error: unknown;
  readonly isLoading: boolean;
  readonly isError: boolean;
  readonly fetchNextPage: () => void;
  readonly hasNextPage: boolean;
}
