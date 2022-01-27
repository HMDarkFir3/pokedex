import * as React from "react";
import { FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

//Hooks
import { usePokemon } from "../../hooks/usePokemon";
import { usePokemonEvolution } from "../../hooks/usePokemonEvolution";

//Components
import Header from "../../components/Header";
import PokeTypeCard from "../../components/Lists/PokeTypeCard";
import PokeDescritionButton from "../../components/Lists/PokeDescriptionButton";
import PokeAbilityCard from "../../components/Lists/PokeAbilityCard";
import PokeStatCard from "../../components/Lists/PokeStatCard";
import PokeSeparator from "../../components/PokeSeparator";
import PokeInfo from "../../components/PokeInfo";

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
  PokeStats,
  PokeStatTitle,
  PokeEvolutionWrapper,
  PokeEvolutionName,
  PokeVerticalSeparator,
  PokeEvolutionLevel,
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
    pokemonStats,
    pokemonSpecies,
    loading,
  } = usePokemon();
  const {
    pokemonEvolutionNames,
    pokemonEvolutionLevels,
    fetchPokemonEvolution,
  } = usePokemonEvolution();

  //Theme Hook
  const theme = useTheme();

  //States
  const [backgroundColor, setBackgroundColor] = React.useState<string>("");
  const [pokemonDescription, setPokemonDescription] =
    React.useState<string>("");
  const [descriptionSelected, setDescriptionSelected] = React.useState<
    "info" | "evolution" | "move"
  >("info");

  async function handleDescriptionSelected(descriptionType) {
    switch (descriptionType) {
      case "info": {
        setDescriptionSelected("info");
        break;
      }

      case "evolution": {
        setDescriptionSelected("evolution");
        break;
      }

      case "move": {
        setDescriptionSelected("move");
        break;
      }
    }
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
    }, [pokemonType, pokemonFlavorTextEntrie])
  );

  if (loading && descriptionSelected === "info") {
    return (
      <LoadingContainer>
        <Loading size="large" color={theme.colors.text} />
      </LoadingContainer>
    );
  }

  return (
    <Container backgroundColor={backgroundColor}>
      <Header leftIcon="chevron-left" backgroundColor={backgroundColor} />

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
                isActive={descriptionSelected === item.title}
                backgroundColor={backgroundColor}
                onPress={() => handleDescriptionSelected(item.title)}
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

        <ScrollView showsVerticalScrollIndicator={false}>
          <PokeInfo
            backgroundColor={backgroundColor}
            pokemonDescription={pokemonDescription}
          />
        </ScrollView>
      </PokeDescriptions>
    </Container>
  );
};

export default PokemonView;
