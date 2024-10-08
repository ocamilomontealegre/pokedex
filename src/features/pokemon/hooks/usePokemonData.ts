import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useQueries,
  UseQueryResult,
} from "@tanstack/react-query";
import { getPokemon } from "../services";
import type { IUsePokemonData } from "../interfaces/use-pokemon-data.interface";
import { IPokemonDetail, IPokemonListResponse } from "../interfaces";
import { getPokemonDetails } from "../services/get-pokemon-details.service";

export const usePokemonData = (): IUsePokemonData => {
  const {
    data: pokemonData,
    error,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage = false,
  }: UseInfiniteQueryResult<IPokemonListResponse, Error> = useInfiniteQuery({
    queryKey: ["pokemonList"],
    queryFn: ({ pageParam }) => getPokemon(pageParam),
    getNextPageParam: (lastPage: IPokemonListResponse) => {
      if (lastPage.next) {
        const nextUrl = new URL(lastPage.next);
        const nextOffset = nextUrl.searchParams.get("offset");
        return nextOffset ? parseInt(nextOffset, 10) : false;
      }
      return false;
    },
  });

  const results: UseQueryResult<IPokemonDetail>[] = useQueries({
    queries: (pokemonData?.pages ?? []).flatMap((page) =>
      page.results.map((pokemon) => ({
        queryKey: ["pokemonDetail", pokemon.name],
        queryFn: () => getPokemonDetails(pokemon.name),
      })),
    ),
  });
  const pokemonDetails = results.map((result) => result.data);

  return {
    pokemonData,
    pokemonDetails,
    error,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
  };
};
