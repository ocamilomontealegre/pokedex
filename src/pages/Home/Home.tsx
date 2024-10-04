import { usePokemonData } from "@features/pokemon/hooks/usePokemonData";
import { SimpleCard } from "@ui/components/SimpleCard/SimpleCard";
import type { ReactNode } from "react";

export const Home = (): ReactNode => {
  const { pokemonDetails, isLoading, error } = usePokemonData();

  if (isLoading) return "Loading...";

  if (error) return <div>An error has occurred: {JSON.stringify(error)}</div>;

  return (
    <div>
      {pokemonDetails?.map((pokemon) => {
        if (!pokemon) {
          return null;
        }

        const { name, sprites, types } = pokemon!;

        const ok = sprites.other["official-artwork"].front_default;

        return (
          <SimpleCard
            key={name}
            name={name}
            picture={{
              src: ok,
              description: "",
            }}
            types={types}
          />
        );
      })}
    </div>
  );
};
