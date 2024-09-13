import { useEffect, useState } from "react";
import type { IUsePokemonData } from "../interfaces/use-pokemon-data.interface";
import type { GenericType } from "@common/types";
import { getPokemon } from "../services";

export const usePokemonData = (id: string | number = ""): IUsePokemonData => {
  const [pokemonData, setPokemonData] = useState<GenericType | null>(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await getPokemon(id);
      setPokemonData(response);
    };

    fetchPokemonData();
  }, []);

  return {
    pokemonData,
  };
};
