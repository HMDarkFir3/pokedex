import { FC } from "react";

import { PokemonMovesDTO } from "@dtos/PokemonMovesDTO";

import { Container, Separator, Wrapper, Name, LearnedLevel } from "./styles";
interface Props {
  data: PokemonMovesDTO;
  index: number;
  backgroundColor: string;
}

export const PokeMoves: FC<Props> = (props) => {
  const { index, backgroundColor } = props;
  const { move, version_group_details } = props.data;

  return (
    <Container>
      {index !== 0 && <Separator backgroundColor={backgroundColor} />}
      <Wrapper>
        <Name>{move.name}</Name>
        <LearnedLevel>{`Level Learned At ${version_group_details[0].level_learned_at}`}</LearnedLevel>
      </Wrapper>
    </Container>
  );
};
