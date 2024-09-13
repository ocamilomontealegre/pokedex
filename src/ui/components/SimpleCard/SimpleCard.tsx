import { TypeLabel } from "../TypeLabel/TypeLabel";
import type { ISimpleCardProps } from "./models/interfaces/simple-card.interface";

export const SimpleCard = ({ name, picture, types }: ISimpleCardProps) => {
  return (
    <div>
      <h3>{name}</h3>
      <div>
        {types.map((type) => (
          <TypeLabel text={type.text} />
        ))}
      </div>
      <img src={picture.src} alt={picture.description} />
    </div>
  );
};
