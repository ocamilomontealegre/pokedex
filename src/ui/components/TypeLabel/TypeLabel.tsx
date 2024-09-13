import type { ReactNode } from "react";
import type { ITypeLabelProps } from "./models/interfaces/type-label.interface";

export const TypeLabel = ({ text }: ITypeLabelProps): ReactNode => {
  return <div>{text}</div>;
};
