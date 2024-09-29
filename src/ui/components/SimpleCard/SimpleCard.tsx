import { TypeLabel } from "../TypeLabel/TypeLabel";
import { PokemonImage } from "../PokemonImage/PokemonImage";
import type { ISimpleCardProps } from "./models/interfaces/simple-card.interface";
import { SvgIcon } from "../SvgIcon/SvgIcon";

export const SimpleCard = ({ name, picture, types }: ISimpleCardProps) => {
  const bgColor = types.map((type) => type.type.name)[0];

  return (
    <div className={`flex pt-8 px-4 pb-4 rounded-lg bg-${bgColor}`}>
      <div className="w-full">
        <h3 className="text-3xl">{name}</h3>
        <div className="flex flex-col gap-1 w-2/5">
          {types.map((type) => (
            <TypeLabel key={type.slot} text={type.type.name} />
          ))}
        </div>
        <SvgIcon iconName="pokeball" svgProps={{ width: 500, height: 500, fill: "#61dafb" }} />
      </div>
      <PokemonImage className="size-2/5" src={picture.src} description={picture.description} />
    </div>
  );
};
