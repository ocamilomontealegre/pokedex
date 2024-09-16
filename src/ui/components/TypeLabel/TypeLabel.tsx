import type { ReactNode } from "react";
import type { ITypeLabelProps } from "./models/interfaces/type-label.interface";

export const TypeLabel = ({ text }: ITypeLabelProps): ReactNode => {
  return (
    <div className={`py-1 px-2 rounded-2xl text-sm text-center capitalize opacity-65 bg-${text}`}>
      {text}
    </div>
  );
};
