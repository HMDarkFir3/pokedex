import * as React from "react";

//DTOS
import { PokemonTypeDTO } from "../../../dtos/PokemonTypeDTO";

//Utils
import { pokeTypeColor } from "../../../utils/pokeTypeColor";

//Styles
import { Container, Title } from "./styles";

//Interfaces
interface Props {
  data: PokemonTypeDTO;
  index: number;
}

const PokemonTypeCard: React.FC<Props> = (props) => {
  const { index } = props;
  const { name } = props.data.type;

  return (
    <Container backgroundColor={pokeTypeColor[name]} index={index}>
      <Title>{name}</Title>
    </Container>
  );
};

export default PokemonTypeCard;
