import { FC } from "react";
import { FlatList, View } from "react-native";

import { PokemonDTO } from "@/dtos/PokemonDTO";

import { AbilityCard } from "@/components/Cards/AbilityCard";
import { StatCard } from "@/components/Cards/StatCard";
import { Separator } from "@/components/Separator";

import {
  Container,
  Wrapper,
  Description,
  Abilities,
  Title,
  Measurements,
  Measure,
  Stats,
} from "./styles";

interface Props {
  pokemon: PokemonDTO.Response;
  description: string;
  backgroundColor: string;
}

export const Info: FC<Props> = (props) => {
  const { pokemon, description, backgroundColor } = props;

  return (
    <Container>
      {description !== "" && <Description>{description}</Description>}

      <Wrapper>
        <Abilities description={!!description}>
          <Title>Abilities</Title>

          <FlatList
            data={pokemon.abilities}
            keyExtractor={(item) => String(item.slot)}
            renderItem={({ item }) => (
              <AbilityCard data={item} backgroundColor={backgroundColor} />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </Abilities>

        <Separator />

        <Measurements>
          <Measure>
            <Title>Height</Title>
            <Title>{pokemon.height / 10}m</Title>
          </Measure>

          <Measure>
            <Title>Weight</Title>
            <Title>{Math.floor(pokemon.weight / 10)}kg</Title>
          </Measure>
        </Measurements>

        <Separator />

        <Stats>
          <Title>Stats</Title>

          <View>
            {pokemon.stats.map((item, index) => (
              <StatCard
                key={item.stat.name}
                data={item}
                backgroundColor={backgroundColor}
                index={index}
              />
            ))}
          </View>
        </Stats>
      </Wrapper>
    </Container>
  );
};
