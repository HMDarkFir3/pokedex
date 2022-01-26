import * as React from "react";
import { FlatList, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { SvgUri } from "react-native-svg";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

//Hooks
import { usePoke } from "../../hooks/usePoke";

//Components
import Header from "../../components/Header";
import PokeTypeCard from "../../components/Lists/PokeTypeCard";
import PokeDescritionButton from "../../components/Lists/PokeDescriptionButton";

//Utils
import { pokeTypeColor } from "../../utils/pokeTypeColor";
import { pokeDescriptionButton } from "../../utils/pokeDescriptionButton";

//Styles
import {
  Container,
  PokeContent,
  PokeHeader,
  PokeTitle,
  PokeName,
  PokeIndex,
  PokeType,
  PokeImage,
  PokeDescriptions,
  PokeDescritionButtonWrapper,
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
  const [descriptionSelected, setDescriptionSelected] =
    React.useState<string>("0");

  function handleDescriptionSelected(descriptionId: string) {
    setDescriptionSelected(descriptionId);

    console.log(descriptionSelected);
  }

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

      <PokeContent>
        <PokeHeader>
          <PokeTitle>
            <PokeName>{pokemon.name}</PokeName>
            <PokeIndex>#{pokemon.id}</PokeIndex>
          </PokeTitle>

          <PokeType>
            <FlatList
              data={pokemonType}
              keyExtractor={(item) => String(item.slot)}
              renderItem={({ item, index }) => (
                <PokeTypeCard data={item} index={index} />
              )}
              contentContainerStyle={{ marginTop: 8 }}
              horizontal={true}
            />
          </PokeType>
        </PokeHeader>

        <PokeImage>
          <SvgUri
            width={RFValue(175)}
            height={RFValue(175)}
            uri={pokemon.sprites.other.dream_world.front_default}
          />
        </PokeImage>
      </PokeContent>

      <PokeDescriptions>
        <PokeDescritionButtonWrapper>
          <FlatList
            data={pokeDescriptionButton}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <PokeDescritionButton
                data={item}
                isActive={descriptionSelected === String(item.id)}
                backgroundColor={backgroundColor}
                onPress={() => handleDescriptionSelected(String(item.id))}
              />
            )}
            horizontal={true}
            contentContainerStyle={{
              justifyContent: "space-between",
              marginTop: RFValue(44),
              width: "100%",
            }}
          />
        </PokeDescritionButtonWrapper>
      </PokeDescriptions>
    </Container>
  );
};

export default PokemonView;
