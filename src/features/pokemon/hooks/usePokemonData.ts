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

  return {
    pokemonData,
    error,
    isLoading,
    isError,
  };
};
