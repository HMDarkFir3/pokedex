import * as React from "react";

//DTOS
import { PokemonStatsDTO } from "../../../dtos";

//Utils
import { pokeStats } from "../../../utils/pokeStats";

//Styles
import {
  Container,
  Wrapper,
  Name,
  BaseValue,
  ProgressBar,
  CurrentStat,
} from "./styles";

//Interfaces
interface Props {
  data: PokemonStatsDTO;
  backgroundColor: string;
  index: number;
}

const PokeStatCard: React.FC<Props> = (props) => {
  const { backgroundColor, index } = props;
  const { base_stat, stat } = props.data;

  const formattedNameStat = stat.name.replace("-", "");
  const formattedBaseStat = `${base_stat / 2}%`;

  return (
    <Container index={index}>
      <Wrapper>
        <Name>{pokeStats[formattedNameStat]}</Name>
        <BaseValue>{base_stat}</BaseValue>
      </Wrapper>

      <ProgressBar>
        <CurrentStat
          backgroundColor={backgroundColor}
          stat={formattedBaseStat}
        />
      </ProgressBar>
    </Container>
  );
};

export default PokeStatCard;
