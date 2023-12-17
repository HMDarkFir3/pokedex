import { FC } from "react";

import { PokemonAbilitiesDTO } from "@/dtos/PokemonAbilitiesDTO";

import { Container, Title } from "./styles";

interface Props {
  data: PokemonAbilitiesDTO;
  backgroundColor: string;
}

export const AbilityCard: FC<Props> = (props) => {
  const { backgroundColor } = props;
  const { ability } = props.data;

  return (
    <Container backgroundColor={backgroundColor}>
      <Title>{ability.name}</Title>
    </Container>
  );
};
