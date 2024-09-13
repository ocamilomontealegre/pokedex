import { usePokemonData } from "@features/pokemon/hooks/usePokemonData";
import type { ReactNode } from "react";

export const Home = (): ReactNode => {
  const { pokemonData } = usePokemonData(1);
  console.dir(pokemonData);

  return <div>{}</div>;
};
