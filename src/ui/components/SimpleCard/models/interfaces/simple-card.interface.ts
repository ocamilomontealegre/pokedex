import type { HTMLProps } from "react";
import type { IPicture, IPokemonType } from "@common/interfaces";

export interface ISimpleCardProps extends HTMLProps<HTMLDivElement> {
  readonly name: string;
  readonly types: IPokemonType[];
  readonly picture: IPicture;
}
