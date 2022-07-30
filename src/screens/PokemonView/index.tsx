import React, { useState, useCallback, FC } from "react";
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

import { usePokemon } from "../../hooks/usePokemon";
import { usePokemonEvolution } from "../../hooks/usePokemonEvolution";

import { Header } from "../../components/Header";
import { PokeTypeCard } from "../../components/Lists/PokeTypeCard";
import { PokeDescritionButton } from "../../components/Lists/PokeDescriptionButton";
import { PokeInfo } from "../../components/PokeInfo";
import { PokeEvolution } from "../../components/PokeEvolution";
import { PokeMoves } from "../../components/PokeMoves";

import { pokeTypeColor } from "../../utils/pokeTypeColor";
import { pokeDescriptionButton } from "../../utils/pokeDescriptionButton";

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

export const PokemonView: FC = () => {
  const {
    pokemon,
    pokemonType,
    pokemonMoves,
    pokemonSpecies,
    pokemonFlavorTextEntrie,
    isLoading,
  } = usePokemon();
  const { pokemonEvolutionChain, fetchPokemonEvolution } =
    usePokemonEvolution();

  //Theme Hook
  const theme = useTheme();

  //States
  const [backgroundColor, setBackgroundColor] = useState<string>("");
  const [pokemonDescription, setPokemonDescription] = useState<string>("");
  const [descriptionSelected, setDescriptionSelected] =
    useState<string>("info");

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
    useCallback(() => {
      const types = pokemonType.map((type) => type.type.name);

      setBackgroundColor(`${pokeTypeColor[types[0]]}`);

      if (pokemonFlavorTextEntrie.length > 0) {
        pokemonFlavorTextEntrie.some((description) => {
          if (description.language.name === "en") {
            setPokemonDescription(description.flavor_text.replace(/\s/g, " "));
            return;
          }
        });
      } else {
        setPokemonDescription("");
      }
    }, [pokemonType, pokemonFlavorTextEntrie])
  );

  useFocusEffect(
    useCallback(() => {
      fetchPokemonEvolution();
    }, [pokemonSpecies])
  );

  if (isLoading) {
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
          <Image
            source={{ uri: pokemon?.sprites?.other.home?.front_default }}
          />
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

        {descriptionSelected === "info" && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <PokeInfo
              backgroundColor={backgroundColor}
              pokemonDescription={pokemonDescription}
            />
          </ScrollView>
        )}

        {descriptionSelected === "evolution" && (
          <FlatList
            data={pokemonEvolutionChain}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <PokeEvolution
                data={item}
                backgroundColor={backgroundColor}
                pokemonCurrentName={pokemon.name}
                handleDescriptionSelected={handleDescriptionSelected}
              />
            )}
            contentContainerStyle={{ marginTop: RFValue(-120) }}
            showsVerticalScrollIndicator={false}
          />
        )}

        {descriptionSelected === "moves" && (
          <FlatList
            data={pokemonMoves}
            keyExtractor={(item) => item.move.name}
            renderItem={({ item, index }) => (
              <PokeMoves
                data={item}
                index={index}
                backgroundColor={backgroundColor}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
      </PokeDescriptions>
    </Container>
  );
};
