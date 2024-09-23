import type { ReactNode } from "react";
import type { ITypeLabelProps } from "./models/interfaces/type-label.interface";
import { capitalizeText } from "@common/utils";

export const TypeLabel = ({ text }: ITypeLabelProps): ReactNode => {
  const bgColor = `light${capitalizeText(text)}`;

  return (
    <div
      className={`w-fit py-1 px-2 rounded-2xl text-sm text-center capitalize bg-${bgColor} bg-opacity-85`}
    >
      {text}
    </div>
  );
};
