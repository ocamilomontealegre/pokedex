import { api } from "../adapters/api.adapter";
import { PokeApiResourcesEnum } from "../enums/poke-api-resources.enum";
import { IPokemonListResponse } from "../interfaces";

export const getPokemon = async (page: number = 0): Promise<IPokemonListResponse> => {
  const response = await api.get<IPokemonListResponse>(
    `${PokeApiResourcesEnum.POKEMON}?offset=${page}&limit=20`,
  );
  return response.data;
};
