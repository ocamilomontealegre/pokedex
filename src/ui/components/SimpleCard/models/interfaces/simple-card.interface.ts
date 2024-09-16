import type { HTMLProps } from "react";
import type { IPicture } from "@common/interfaces";
import type { IPokemonType } from "@features/pokemon/interfaces";

export interface ISimpleCardProps extends HTMLProps<HTMLDivElement> {
  readonly name: string;
  readonly types: IPokemonType[];
  readonly picture: IPicture;
}
