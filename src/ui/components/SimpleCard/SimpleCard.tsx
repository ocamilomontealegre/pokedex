import { TypeLabel } from "../TypeLabel/TypeLabel";
import { PokemonImage } from "../PokemonImage/PokemonImage";
import { SvgIcon } from "../SvgIcon/SvgIcon";
import { getTypeColor } from "@features/pokemon/utils";
import { TypeColorWeight } from "@features/pokemon/enums";
import type { ISimpleCardProps } from "./models/interfaces/simple-card.interface";
import type { PokemonType } from "@features/pokemon/types/pokemon-type.type";
import { capitalizeText } from "@common/utils";

export const SimpleCard = ({ name, picture, types }: ISimpleCardProps) => {
  const typeName = types.map((type) => type.type.name)[0];
  const svgBgColor = getTypeColor(typeName as PokemonType, TypeColorWeight.LIGHT);
  const capitalizedName = capitalizeText(name);

  return (
    <div
      className={`flex pt-8 px-4 pb-4 max-w-md max-h-60 rounded-3xl bg-${typeName} overflow-hidden`}
    >
      <div className="flex flex-col gap-4 w-full">
        <h3 className="text-4xl">{capitalizedName}</h3>
        <div className="flex flex-col gap-2 w-2/5">
          {types.map((type) => (
            <TypeLabel key={type.slot} text={type.type.name} />
          ))}
        </div>
      </div>
      <div className="relative top-8 left-7">
        <SvgIcon
          iconName="pokeball"
          svgProps={{
            className: "relative",
            width: 220,
            height: 220,
            fill: `${svgBgColor}`,
          }}
        />
        <PokemonImage
          className="size-3/4 z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={picture.src}
          description={picture.description}
        />
      </div>
    </div>
  );
};
