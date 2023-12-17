import { FC } from "react";

import { PokemonDTO } from "@/dtos/PokemonDTO";

import { stats } from "@/utils/stats";

import {
  Container,
  Wrapper,
  Name,
  Value,
  ProgressBar,
  CurrentStat,
} from "./styles";

interface Props {
  data: PokemonDTO.Stats;
  backgroundColor: string;
  index: number;
}

export const StatCard: FC<Props> = (props) => {
  const { backgroundColor, index } = props;
  const { base_stat, stat } = props.data;

  const formattedNameStat = stat.name.replace("-", "");
  const formattedBaseStat = `${base_stat / 2}%`;

  return (
    <Container index={index}>
      <Wrapper>
        <Name>{stats[formattedNameStat]}</Name>
        <Value>{base_stat}</Value>
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
