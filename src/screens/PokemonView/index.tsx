import * as React from "react";
import { FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { SvgUri } from "react-native-svg";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

//Hooks
import { usePoke } from "../../hooks/usePoke";

//Components
import Header from "../../components/Header";
import PokemonTypeCard from "../../components/Lists/PokemonTypeCard";

//Utils
import { pokeTypeColor } from "../../utils/pokeTypeColor";

//Styles
import {
  Container,
  Content,
  PokemonHeader,
  PokemonTitle,
  PokemonName,
  PokemonIndex,
  PokemonType,
  PokemonImage,
  LoadingContainer,
  Loading,
} from "./styles";

const PokemonView: React.FC = () => {
  //Hooks
  const { pokemon, pokemonType, loading } = usePoke();

  //Theme Hook
  const theme = useTheme();

  //States
  const [backgroundColor, setBackgroundColor] = React.useState<string>("");

  useFocusEffect(
    React.useCallback(() => {
      const types = pokemonType.map((type) => type.type.name);
      setBackgroundColor(`${pokeTypeColor[types[0]]}`);
    }, [pokemonType])
  );

  if (loading) {
    return (
      <LoadingContainer>
        <Loading size="large" color={theme.colors.text} />
      </LoadingContainer>
    );
  }

  return (
    <Container backgroundColor={backgroundColor}>
      <Header
        leftIcon="chevron-left"
        rightIcon="heart"
        backgroundColor={backgroundColor}
      />

      <Content>
        <PokemonHeader>
          <PokemonTitle>
            <PokemonName>{pokemon.name}</PokemonName>
            <PokemonIndex>#{pokemon.id}</PokemonIndex>
          </PokemonTitle>

          <PokemonType>
            <FlatList
              data={pokemonType}
              keyExtractor={(item) => String(item.slot)}
              renderItem={({ item, index }) => (
                <PokemonTypeCard data={item} index={index} />
              )}
              contentContainerStyle={{ marginTop: 8 }}
              horizontal={true}
            />
          </PokemonType>
        </PokemonHeader>

        <PokemonImage>
          <SvgUri
            width={RFValue(175)}
            height={RFValue(175)}
            uri={pokemon.sprites.other.dream_world.front_default}
          />
        </PokemonImage>
      </Content>
    </Container>
  );
};

export default PokemonView;
