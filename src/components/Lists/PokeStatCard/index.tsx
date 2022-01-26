import * as React from "react";

//DTOS
import { PokemonStatsDTO } from "../../../dtos";

//Utils
import { pokeStats } from "../../../utils/pokeStats";

//Styles
import { Container, Wrapper, Name, BaseValue, ProgressBar } from "./styles";

//Interfaces
interface Props {
  data: PokemonStatsDTO;
  backgroundColor: string;
}

const PokeStatCard: React.FC<Props> = (props) => {
  const { backgroundColor } = props;
  const { base_stat, stat } = props.data;

  const formattedStat = stat.name.replace("-", "");

  return (
    <Container>
      <Wrapper>
        <Name>{pokeStats[formattedStat]}</Name>
        <BaseValue>{base_stat}</BaseValue>
      </Wrapper>

      <ProgressBar />
    </Container>
  );
};

export default PokeStatCard;
