import { IPicture } from "@common/interfaces";
import type { HTMLProps } from "react";

export interface IPokemonImageProps
  extends Omit<HTMLProps<HTMLImageElement>, "src" | "alt">,
    IPicture {}
