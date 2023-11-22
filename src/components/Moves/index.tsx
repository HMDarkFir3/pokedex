import { FC } from "react";

import { PokemonMovesDTO } from "@dtos/PokemonMovesDTO";

import { Container, Wrapper, Name, LearnedLevel } from "./styles";
interface Props {
  data: PokemonMovesDTO;
}

export const Moves: FC<Props> = (props) => {
  const { move, version_group_details } = props.data;

  return (
    <Container>
      <Wrapper>
        <Name>{move.name}</Name>
        <LearnedLevel>{`Level Learned At ${version_group_details[0].level_learned_at}`}</LearnedLevel>
      </Wrapper>
    </Container>
  );
};
