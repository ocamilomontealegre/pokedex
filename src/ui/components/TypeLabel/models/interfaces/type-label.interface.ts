import { HTMLProps } from "react";

export interface ITypeLabelProps extends HTMLProps<HTMLDivElement> {
  readonly text: string;
}
