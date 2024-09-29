import { FC, SVGProps } from "react";

export interface IUseDynamicSvg {
  readonly error: unknown;
  readonly loading: boolean;
  readonly SvgIcon: FC<SVGProps<SVGElement>> | null;
}
