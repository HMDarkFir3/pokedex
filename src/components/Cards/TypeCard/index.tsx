import { FC } from "react";

import { PokemonDTO } from "@/dtos/PokemonDTO";

import { pokeTypeColor } from "@/utils/pokeTypeColor";

import { Container, Title } from "./styles";

interface Props {
  data: PokemonDTO.Types;
  index: number;
}

export const TypeCard: FC<Props> = (props) => {
  const { index } = props;
  const { name } = props.data.type;

  return (
    <Container backgroundColor={pokeTypeColor[name]} index={index}>
      <Title>{name}</Title>
    </Container>
  );
};
