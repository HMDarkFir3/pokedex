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
import { TypeCard } from "@components/Cards/TypeCard";
import { DescritionButton } from "@components/Cards/DescriptionCard";
import { Info } from "@components/Info";
import { Evolution } from "@components/Evolution";
import { Moves } from "@components/Moves";
import { Loading } from "@components/Loading";

import { pokeTypeColor } from "@utils/pokeTypeColor";
import { pokeDescriptionButton } from "@utils/pokeDescriptionButton";

import {
  Container,
  Content,
  Wrapper,
  Title,
  Name,
  Index,
  TypeWrapper,
  AnimatedImage,
  Image,
  Descriptions,
  DescriptionsWrapper,
  DescritionButtonWrapper,
} from "./styles";
import { Separator } from "@components/Separator";

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
  const { colors } = useTheme();

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
      <Header iconColor={colors.text100} />

      <Content>
        <Wrapper>
          <Title>
            <Name>{pokemon.name}</Name>
            <Index>#{pokemon.id}</Index>
          </Title>

          <TypeWrapper>
            <FlatList
              data={pokemonType}
              keyExtractor={(item) => String(item.slot)}
              renderItem={({ item, index }) => (
                <TypeCard data={item} index={index} />
              )}
              contentContainerStyle={{ marginTop: 8 }}
              horizontal={true}
            />
          </TypeWrapper>
        </Wrapper>

        <AnimatedImage style={animatedPokeImageStyle}>
          <Image
            source={{ uri: pokemon?.sprites?.other.home?.front_default }}
          />
        </AnimatedImage>
      </Content>

      <Descriptions style={animatedPokeDescriptionsPosition}>
        <DescritionButtonWrapper>
          <FlatList
            data={pokeDescriptionButton}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <DescritionButton
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
        </DescritionButtonWrapper>

        {descriptionSelected === "info" && (
          <ScrollView
            contentContainerStyle={{ paddingHorizontal: 20 }}
            showsVerticalScrollIndicator={false}
          >
            <Info
              backgroundColor={backgroundColor}
              pokemonDescription={pokemonDescription}
            />
          </ScrollView>
        )}

        <DescriptionsWrapper>
          {descriptionSelected === "evolution" && (
            <FlatList
              data={pokemonEvolutionChain}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <Evolution
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
        </DescriptionsWrapper>

        {descriptionSelected === "moves" && (
          <FlatList
            data={pokemonMoves}
            keyExtractor={(item) => item.move.name}
            renderItem={({ item }) => <Moves data={item} />}
            ItemSeparatorComponent={() => <Separator />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          />
        )}
      </Descriptions>
    </Container>
  );
};
