import { api } from "../adapters/api.adapter";
import { PokeApiResourcesEnum } from "../enums/poke-api-resources.enum";
import type { GenericType } from "@common/types";

export const getPokemon = async (id: string | number = ""): Promise<GenericType> => {
  const response = await api.get(`${PokeApiResourcesEnum.POKEMON}/${id}`);
  return response.data;
};
