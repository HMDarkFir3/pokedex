import * as React from "react";

//DTOS
import { PokemonAbilitiesDTO } from "../../../dtos";

//Styles
import { Container, Title } from "./styles";

//Interfaces
interface Props {
  data: PokemonAbilitiesDTO;
  backgroundColor: string;
}

const PokeAbilityCard: React.FC<Props> = (props) => {
  const { backgroundColor } = props;
  const { ability } = props.data;

  return (
    <Container backgroundColor={backgroundColor}>
      <Title>{ability.name}</Title>
    </Container>
  );
};

export default PokeAbilityCard;
