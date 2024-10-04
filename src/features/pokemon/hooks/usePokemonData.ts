import { useQueries, useQuery, UseQueryResult } from "@tanstack/react-query";
import { getPokemon } from "../services";
import type { IUsePokemonData } from "../interfaces/use-pokemon-data.interface";
import { IPokemonDetail, IPokemonItem } from "../interfaces";
import { getPokemonDetails } from "../services/get-pokemon-details.service";

export const usePokemonData = (): IUsePokemonData => {
  const {
    data: pokemonData,
    error,
    isLoading,
    isError,
  }: UseQueryResult<IPokemonItem[]> = useQuery({ queryKey: ["pokemonList"], queryFn: getPokemon });

  const results: UseQueryResult<IPokemonDetail>[] = useQueries({
    queries: (pokemonData ?? []).map((pokemon) => ({
      queryKey: ["pokemonDetail", pokemon.name],
      queryFn: () => getPokemonDetails(pokemon.name),
    })),
  });

  const pokemonDetails = results.map((result) => result.data);

  return {
    pokemonData,
    pokemonDetails,
    error,
    isLoading,
    isError,
  };
};
