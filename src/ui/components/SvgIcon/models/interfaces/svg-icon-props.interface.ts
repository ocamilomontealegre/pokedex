import { SVGProps } from "react";

export interface ISvgIconProps {
  readonly iconName: string;
  readonly wrapperStyle?: string;
  readonly svgProps?: SVGProps<SVGSVGElement>;
}
