import { FC } from "react";

import { PokemonTypeDTO } from "@dtos/PokemonTypeDTO";

import { pokeTypeColor } from "@utils/pokeTypeColor";

import { Container, Title } from "./styles";

interface Props {
  data: PokemonTypeDTO;
  index: number;
}

export const PokeTypeCard: FC<Props> = (props) => {
  const { index } = props;
  const { name } = props.data.type;

  return (
    <Container backgroundColor={pokeTypeColor[name]} index={index}>
      <Title>{name}</Title>
    </Container>
  );
};
