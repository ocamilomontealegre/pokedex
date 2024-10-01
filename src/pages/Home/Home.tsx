import { usePokemonData } from "@features/pokemon/hooks/usePokemonData";
import { SimpleCard } from "@ui/components/SimpleCard/SimpleCard";
import type { ReactNode } from "react";

export const Home = (): ReactNode => {
  const { pokemonData, isLoading, error } = usePokemonData();
  console.log("ok", pokemonData);

  if (isLoading) return "Loading...";

  if (error) return <div>An error has occurred: {JSON.stringify(error)}</div>;

  return (
    <div>
      {pokemonData?.map((pokemon) => (
        <SimpleCard
          key={pokemon.name}
          name={pokemon.name}
          picture={{
            src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
            description: "",
          }}
          types={[
            { slot: 1, type: { name: "grass", url: "" } },
            { slot: 2, type: { name: "poison", url: "" } },
          ]}
        />
      ))}
    </div>
  );
};
