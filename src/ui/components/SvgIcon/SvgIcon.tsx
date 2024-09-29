import { useDynamicSvg } from "@common/hooks";
import { ISvgIconProps } from "./models/interfaces";

export const SvgIcon = ({ iconName, svgProps, wrapperStyle }: ISvgIconProps) => {
  const { loading, SvgIcon } = useDynamicSvg(iconName);

  return (
    <>
      {loading && <div className="rounded-full bg-red-500 animate-pulse h-8 w-8"></div>}
      {SvgIcon && (
        <div className={wrapperStyle}>
          <SvgIcon {...svgProps} />
        </div>
      )}
    </>
  );
};
