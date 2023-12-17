import { FC } from "react";

import { PokemonDTO } from "@/dtos/PokemonDTO";

import { Container, Title } from "./styles";

interface Props {
  data: PokemonDTO.Abilities;
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
