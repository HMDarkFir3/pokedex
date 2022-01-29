import * as React from "react";

//DTOS
import { PokemonMovesDTO } from "../../dtos";

//Styles
import { Container, Separator, Wrapper, Name, LearnedLevel } from "./styles";

//Interfaces
interface Props {
  data: PokemonMovesDTO;
  index: number;
  backgroundColor: string;
}

const PokeMoves: React.FC<Props> = (props) => {
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

export default PokeMoves;
