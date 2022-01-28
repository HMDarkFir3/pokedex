import * as React from "react";
import { FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from "react-native-reanimated";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

//Hooks
import { usePokemon } from "../../hooks/usePokemon";
import { usePokemonEvolution } from "../../hooks/usePokemonEvolution";

//Components
import Header from "../../components/Header";
import PokeTypeCard from "../../components/Lists/PokeTypeCard";
import PokeDescritionButton from "../../components/Lists/PokeDescriptionButton";
import PokeInfo from "../../components/PokeInfo";
import PokeEvolutionChain from "../../components/PokeEvolutionChain";

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
  LoadingContainer,
  Loading,
} from "./styles";

const PokemonView: React.FC = () => {
  //Hooks
  const {
    pokemon,
    pokemonType,
    pokemonFlavorTextEntrie,
    pokemonSpecies,
    loading,
  } = usePokemon();
  const { fetchPokemonEvolution } = usePokemonEvolution();

  //Theme Hook
  const theme = useTheme();

  //States
  const [backgroundColor, setBackgroundColor] = React.useState<string>("");
  const [pokemonDescription, setPokemonDescription] =
    React.useState<string>("");
  const [descriptionSelected, setDescriptionSelected] =
    React.useState<string>("info");

  //Animations
  const pokeImageOpacity = useSharedValue<number>(1);
  const pokeImageZIndex = useSharedValue<number>(10);
  const pokeDescriptionsPosition = useSharedValue<number>(RFValue(154));

  const animatedPokeImageStyle = useAnimatedStyle(() => {
    return {
      opacity: pokeImageOpacity.value,
      zIndex: pokeImageZIndex.value,
    };
  });

  const animatedPokeDescriptionsPosition = useAnimatedStyle(() => {
    return {
      marginTop: pokeDescriptionsPosition.value,
    };
  });

  function handleDescriptionSelected(descriptionType: string) {
    switch (descriptionType) {
      case "info": {
        ("worklet");
        pokeImageOpacity.value = withDelay(
          600,
          withTiming(1, {
            duration: 600,
          })
        );
        pokeImageZIndex.value = withDelay(
          400,
          withTiming(10, { duration: 400 })
        );
        pokeDescriptionsPosition.value = withTiming(RFValue(154), {
          duration: 750,
        });

        setDescriptionSelected("info");
        break;
      }

      case "evolution": {
        ("worklet");
        pokeImageOpacity.value = withTiming(0, { duration: 200 });
        pokeImageZIndex.value = withTiming(0, { duration: 200 });
        pokeDescriptionsPosition.value = withTiming(RFValue(20), {
          duration: 750,
        });

        setDescriptionSelected("evolution");
        break;
      }

      case "moves": {
        ("worklet");
        pokeImageOpacity.value = withTiming(0, { duration: 200 });
        pokeImageZIndex.value = withTiming(0, { duration: 200 });
        pokeDescriptionsPosition.value = withTiming(RFValue(20), {
          duration: 750,
        });

        setDescriptionSelected("moves");
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

  useFocusEffect(
    React.useCallback(() => {
      fetchPokemonEvolution();
    }, [pokemonSpecies])
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

        <PokeImage style={animatedPokeImageStyle}>
          <Image source={{ uri: pokemon.sprites.other.home.front_default }} />
        </PokeImage>
      </PokeContent>

      <PokeDescriptions style={animatedPokeDescriptionsPosition}>
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
          {descriptionSelected === "info" && (
            <PokeInfo
              backgroundColor={backgroundColor}
              pokemonDescription={pokemonDescription}
            />
          )}

          {descriptionSelected === "evolution" && (
            <PokeEvolutionChain backgroundColor={backgroundColor} />
          )}
        </ScrollView>
      </PokeDescriptions>
    </Container>
  );
};

export default PokemonView;
