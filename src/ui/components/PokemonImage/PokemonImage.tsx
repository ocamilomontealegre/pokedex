import type { ReactNode } from "react";
import type { IPokemonImageProps } from "./models/interfaces/pokemon-image.interface";

export const PokemonImage = ({ src, description = "Pokemon" }: IPokemonImageProps): ReactNode => {
  return <img src={src} alt={description} />;
};
