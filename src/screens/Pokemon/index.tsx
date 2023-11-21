import { StatusBar } from "expo-status-bar";
import { useState, useCallback, FC } from "react";
import { FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from "react-native-reanimated";
import { useTheme } from "styled-components/native";

import { usePokemon } from "@hooks/usePokemon";
import { usePokemonEvolution } from "@hooks/usePokemonEvolution";

import { Header } from "@components/Header";
import { PokeTypeCard } from "@components/Lists/PokeTypeCard";
import { PokeDescritionButton } from "@components/Lists/PokeDescriptionButton";
import { PokeInfo } from "@components/PokeInfo";
import { PokeEvolution } from "@components/PokeEvolution";
import { PokeMoves } from "@components/PokeMoves";
import { Loading } from "@components/Loading";

import { pokeTypeColor } from "@utils/pokeTypeColor";
import { pokeDescriptionButton } from "@utils/pokeDescriptionButton";

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
  PokeDescriptionsWrapper,
  PokeDescritionButtonWrapper,
} from "./styles";

export const Pokemon: FC = () => {
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
  const theme = useTheme();

  const [backgroundColor, setBackgroundColor] = useState<string>("red");
  const [pokemonDescription, setPokemonDescription] = useState<string>("");
  const [descriptionSelected, setDescriptionSelected] = useState<
    "info" | "evolution" | "moves"
  >("info");

  const pokeImageOpacity = useSharedValue<number>(1);
  const pokeImageZIndex = useSharedValue<number>(10);
  const pokeDescriptionsPosition = useSharedValue<number>(154);

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

  const onPressDescriptionSelected = (descriptionType: string) => {
    switch (descriptionType) {
      case "info": {
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
        pokeDescriptionsPosition.value = withTiming(154, {
          duration: 750,
        });

        setDescriptionSelected("info");
        break;
      }

      case "evolution": {
        pokeImageOpacity.value = withTiming(0, { duration: 200 });
        pokeImageZIndex.value = withTiming(0, { duration: 200 });
        pokeDescriptionsPosition.value = withTiming(20, {
          duration: 750,
        });

        setDescriptionSelected("evolution");
        break;
      }

      case "moves": {
        pokeImageOpacity.value = withTiming(0, { duration: 200 });
        pokeImageZIndex.value = withTiming(0, { duration: 200 });
        pokeDescriptionsPosition.value = withTiming(20, {
          duration: 750,
        });

        setDescriptionSelected("moves");
        break;
      }
    }
  };

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
    return <Loading />;
  }

  return (
    <Container backgroundColor={backgroundColor}>
      <StatusBar style="light" />

      <Header
        iconColor={
          theme.title === "dark"
            ? theme.colors.components.header.iconPrimary
            : theme.colors.components.header.iconSecondary
        }
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
                backgroundColor={
                  descriptionSelected === item.title
                    ? backgroundColor
                    : "transparent"
                }
                onPress={() => onPressDescriptionSelected(item.title)}
              />
            )}
            horizontal={true}
            contentContainerStyle={{
              justifyContent: "space-between",
              width: "100%",
              marginTop: 52,
              paddingHorizontal: 20,
            }}
          />
        </PokeDescritionButtonWrapper>

        {descriptionSelected === "info" && (
          <ScrollView
            contentContainerStyle={{ paddingHorizontal: 20 }}
            showsVerticalScrollIndicator={false}
          >
            <PokeInfo
              backgroundColor={backgroundColor}
              pokemonDescription={pokemonDescription}
            />
          </ScrollView>
        )}

        <PokeDescriptionsWrapper>
          {descriptionSelected === "evolution" && (
            <FlatList
              data={pokemonEvolutionChain}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <PokeEvolution
                  data={item}
                  textColor={backgroundColor}
                  pokemonCurrentName={pokemon.name}
                  onDescriptionSelected={onPressDescriptionSelected}
                />
              )}
              style={{ width: "100%" }}
              showsVerticalScrollIndicator={false}
            />
          )}
        </PokeDescriptionsWrapper>

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
            contentContainerStyle={{ paddingHorizontal: 20 }}
          />
        )}
      </PokeDescriptions>
    </Container>
  );
};
