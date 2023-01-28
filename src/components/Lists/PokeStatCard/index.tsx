import { FC } from "react";

import { PokemonStatsDTO } from "@dtos/PokemonStatsDTO";

import { pokeStats } from "@utils/pokeStats";

import {
  Container,
  Wrapper,
  Name,
  BaseValue,
  ProgressBar,
  CurrentStat,
} from "./styles";

interface Props {
  data: PokemonStatsDTO;
  backgroundColor: string;
  index: number;
}

export const PokeStatCard: FC<Props> = (props) => {
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
