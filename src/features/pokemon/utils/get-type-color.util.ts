import { POKEMON_TYPE_COLORS } from "../constants";
import { capitalizeText } from "@common/utils";
import { TypeColorWeight } from "../enums";
import type { PokemonType } from "../types/pokemon-type.type";

export const getTypeColor = (pokemonType: PokemonType, weight: TypeColorWeight) => {
  if (weight === TypeColorWeight.REGULAR) return POKEMON_TYPE_COLORS[pokemonType];
  if (weight === TypeColorWeight.LIGHT) {
    const color = `light${capitalizeText(pokemonType)}`;
    return POKEMON_TYPE_COLORS[color as PokemonType];
  }
};
