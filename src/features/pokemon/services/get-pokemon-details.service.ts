import { api } from "../adapters/api.adapter";
import { PokeApiResourcesEnum } from "../enums";
import type { IPokemonDetail } from "../interfaces";

export const getPokemonDetails = async (id: number | string = ""): Promise<IPokemonDetail> => {
  const response = await api.get<IPokemonDetail>(`${PokeApiResourcesEnum.POKEMON}/${id}`);
  return response.data;
};
