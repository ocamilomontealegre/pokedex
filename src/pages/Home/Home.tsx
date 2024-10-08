import { type ReactNode } from "react";
import {
  useInfiniteScroll,
  usePokemonData,
  useInfiniteScrollObserver,
} from "@features/pokemon/hooks";
import { SimpleCard } from "@ui/components/SimpleCard/SimpleCard";

export const Home = (): ReactNode => {
  const { pokemonDetails, isLoading, error, isError, fetchNextPage, hasNextPage } =
    usePokemonData();
  const { listRef } = useInfiniteScroll(fetchNextPage, hasNextPage);
  const { observerRef } = useInfiniteScrollObserver(fetchNextPage, hasNextPage);

  if (isLoading) return "Loading...";
  if (isError) return <div>An error has occurred: {JSON.stringify(error)}</div>;

  return (
    <div className="flex flex-col gap-2 lg:flex-row flex-wrap">
      {pokemonDetails?.map((pokemon) => {
        if (!pokemon) {
          return null;
        }

        const { name, sprites, types } = pokemon!;
        const picture = sprites.other["official-artwork"].front_default;

        return (
          <SimpleCard
            key={name}
            name={name}
            picture={{
              src: picture,
              description: "",
            }}
            types={types}
          />
        );
      })}
      <div ref={observerRef} style={{ height: "20px", backgroundColor: "transparent" }} />
    </div>
  );
};
