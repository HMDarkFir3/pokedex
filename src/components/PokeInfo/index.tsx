import * as React from "react";
import { FlatList } from "react-native";

//Hooks
import { usePokemon } from "../../hooks/usePokemon";

//Components
import PokeAbilityCard from "../Lists/PokeAbilityCard";
import PokeStatCard from "../Lists/PokeStatCard";
import PokeSeparator from "../../components/PokeSeparator";

//Styles
import {
  Container,
  Description,
  Abilities,
  AbilitiesTitle,
  Measurements,
  Measure,
  MeasureName,
  MeasureValue,
  Stats,
  StatTitle,
} from "./styles";

//Interfaces
interface Props {
  backgroundColor: string;
  pokemonDescription: string;
}

const PokeInfo: React.FC<Props> = (props) => {
  const { backgroundColor, pokemonDescription } = props;

  const { pokemon, pokemonAbilities, pokemonStats } = usePokemon();

  return (
    <Container>
      <Description>{pokemonDescription}</Description>

      <Abilities>
        <AbilitiesTitle>Abilities</AbilitiesTitle>

        <FlatList
          data={pokemonAbilities}
          keyExtractor={(item) => String(item.slot)}
          renderItem={({ item }) => (
            <PokeAbilityCard data={item} backgroundColor={backgroundColor} />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </Abilities>

      <PokeSeparator />

      <Measurements>
        <Measure>
          <MeasureName>Height</MeasureName>
          <MeasureValue>{pokemon.height / 10}m</MeasureValue>
        </Measure>

        <Measure>
          <MeasureName>Weight</MeasureName>
          <MeasureValue>{Math.floor(pokemon.weight / 10)}kg</MeasureValue>
        </Measure>
      </Measurements>

      <PokeSeparator />

      <Stats>
        <StatTitle>Stats</StatTitle>

        {pokemonStats.map((item, index) => (
          <PokeStatCard
            key={item.stat.name}
            data={item}
            backgroundColor={backgroundColor}
            index={index}
          />
        ))}
      </Stats>
    </Container>
  );
};

export default PokeInfo;
