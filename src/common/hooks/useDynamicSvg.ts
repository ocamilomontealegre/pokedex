import { IUseDynamicSvg } from "@common/interfaces";
import { useEffect, useRef, useState, type FC, type SVGProps } from "react";

export const useDynamicSvg = (iconName: string): IUseDynamicSvg => {
  const importedIconRef = useRef<FC<SVGProps<SVGElement>> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    setLoading(true);

    const importSvgIcon = async (): Promise<void> => {
      try {
        importedIconRef.current = (
          await import(`../../assets/icons/${iconName}.svg?react`)
        ).default;
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    importSvgIcon();
  }, [iconName]);

  return { error, loading, SvgIcon: importedIconRef.current };
};
