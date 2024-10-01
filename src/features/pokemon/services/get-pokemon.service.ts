import { api } from "../adapters/api.adapter";
import { PokeApiResourcesEnum } from "../enums/poke-api-resources.enum";
import { IPokemonItem, IPokemonList } from "../interfaces";

export const getPokemon = async (): Promise<IPokemonItem[]> => {
  const response = await api.get<IPokemonList>(PokeApiResourcesEnum.POKEMON);
  return response.data.results;
};
