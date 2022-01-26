import * as React from "react";
import { FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

//Hooks
import { usePoke } from "../../hooks/usePoke";

//Components
import Header from "../../components/Header";
import PokeTypeCard from "../../components/Lists/PokeTypeCard";
import PokeDescritionButton from "../../components/Lists/PokeDescriptionButton";
import PokeAbilityCard from "../../components/Lists/PokeAbilityCard";

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
  Image,
  PokeDescriptions,
  PokeDescritionButtonWrapper,
  PokeDescription,
  PokeAbilities,
  PokeAbilitiesTitle,
  PokeMeasurements,
  PokeMeasure,
  PokeMeasureName,
  PokeMeasureValue,
  LoadingContainer,
  Loading,
} from "./styles";

const PokemonView: React.FC = () => {
  //Hooks
  const {
    pokemon,
    pokemonType,
    pokemonFlavorTextEntrie,
    pokemonAbilities,
    loading,
  } = usePoke();

  //Theme Hook
  const theme = useTheme();

  //States
  const [backgroundColor, setBackgroundColor] = React.useState<string>("");
  const [pokemonDescription, setPokemonDescription] =
    React.useState<string>("");
  const [descriptionSelected, setDescriptionSelected] =
    React.useState<string>("0");

  function handleDescriptionSelected(descriptionId: string) {
    setDescriptionSelected(descriptionId);
  }

  useFocusEffect(
    React.useCallback(() => {
      const types = pokemonType.map((type) => type.type.name);

      setBackgroundColor(`${pokeTypeColor[types[0]]}`);

      pokemonFlavorTextEntrie.some((description) => {
        if (description.language.name === "en") {
          setPokemonDescription(description.flavor_text.replace(/\s/g, " "));
        }
      });

      console.log(pokemonDescription);
    }, [pokemonType, pokemonFlavorTextEntrie])
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
          <Image source={{ uri: pokemon.sprites.other.home.front_default }} />
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
              marginTop: RFValue(52),
              width: "100%",
            }}
          />
        </PokeDescritionButtonWrapper>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1, width: "100%" }}
        >
          <PokeDescription>{pokemonDescription}</PokeDescription>

          <PokeAbilities>
            <PokeAbilitiesTitle>Abilities</PokeAbilitiesTitle>
            <FlatList
              data={pokemonAbilities}
              keyExtractor={(item) => String(item.slot)}
              renderItem={({ item }) => (
                <PokeAbilityCard
                  data={item}
                  backgroundColor={backgroundColor}
                />
              )}
              horizontal={true}
            />
          </PokeAbilities>

          <PokeMeasurements>
            <PokeMeasure>
              <PokeMeasureName>Height</PokeMeasureName>
              <PokeMeasureValue>{pokemon.height / 10}m</PokeMeasureValue>
            </PokeMeasure>

            <PokeMeasure>
              <PokeMeasureName>Weight</PokeMeasureName>
              <PokeMeasureValue>
                {Math.floor(pokemon.weight / 10)}kg
              </PokeMeasureValue>
            </PokeMeasure>
          </PokeMeasurements>
        </ScrollView>
      </PokeDescriptions>
    </Container>
  );
};

export default PokemonView;
