import { usePokemonData } from "@features/pokemon/hooks/usePokemonData";
import { SimpleCard } from "@ui/components/SimpleCard/SimpleCard";
import type { ReactNode } from "react";

export const Home = (): ReactNode => {
  const { pokemonData } = usePokemonData(1);
  console.dir(pokemonData);

  return (
    <div>
      <SimpleCard
        name="Bulbasaur"
        picture={{
          src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          description: "",
        }}
        types={[
          { slot: 1, type: { name: "grass", url: "" } },
          { slot: 2, type: { name: "poison", url: "" } },
        ]}
      />
    </div>
  );
};
