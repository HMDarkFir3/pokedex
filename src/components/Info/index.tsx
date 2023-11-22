import { FC } from "react";
import { FlatList, View } from "react-native";

import { usePokemon } from "@hooks/usePokemon";

import { AbilityCard } from "@components/Cards/AbilityCard";
import { StatCard } from "@components/Cards/StatCard";
import { Separator } from "@components/Separator";

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
  backgroundColor: string;
  pokemonDescription: string;
}

export const Info: FC<Props> = (props) => {
  const { backgroundColor, pokemonDescription } = props;

  const { pokemon, pokemonAbilities, pokemonStats } = usePokemon();

  return (
    <Container>
      {pokemonDescription !== "" && (
        <Description>{pokemonDescription}</Description>
      )}

      <Wrapper>
        <Abilities pokemonDescription={!!pokemonDescription}>
          <Title>Abilities</Title>

          <FlatList
            data={pokemonAbilities}
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
            {pokemonStats.map((item, index) => (
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
