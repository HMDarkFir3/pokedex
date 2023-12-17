import { useState, useEffect, FC } from "react";
import { FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { ScrollView } from "react-native-gesture-handler";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from "react-native-reanimated";
import { useTheme } from "styled-components/native";

import { getPokemon } from "@/services/pokemon";

import { BackButton } from "@/components/Buttons/BackButton";
import { TypeCard } from "@/components/Cards/TypeCard";
import { DescritionButton } from "@/components/Cards/DescriptionCard";
import { Info } from "@/components/Info";
import { Evolution } from "@/components/Evolution";
import { Moves } from "@/components/Moves";
import { Loading } from "@/components/Loading";

import { descriptionButton } from "@/utils/descriptionButton";

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
import { Separator } from "@/components/Separator";

interface Params {
  pokemonId: string;
}

export const Pokemon: FC = () => {
  const { navigate } = useNavigation();
  const route = useRoute();
  const { pokemonId } = route.params as Params;

  const { data, isPending, isError } = useQuery({
    queryKey: ["pokemon", pokemonId],
    queryFn: () => getPokemon(pokemonId),
  });
  const { colors } = useTheme();

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

  const onDescriptionSelected = (descriptionType: string) => {
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

  if (isError) navigate("Error", { message: "Error on fetch pokemon." });

  if (isPending || isError) return <Loading />;

  return (
    <Container backgroundColor={data.backgroundColor}>
      <BackButton iconColor={colors.text100} />

      <Content>
        <Wrapper>
          <Title>
            <Name>{data.pokemon.name}</Name>
            <Index>#{data.pokemon.id}</Index>
          </Title>

          <TypeWrapper>
            <FlatList
              data={data.pokemon.types}
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
            source={{ uri: data.pokemon?.sprites?.other.home?.front_default }}
          />
        </AnimatedImage>
      </Content>

      <Descriptions style={animatedPokeDescriptionsPosition}>
        <DescritionButtonWrapper>
          <FlatList
            data={descriptionButton}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <DescritionButton
                data={item}
                isActive={descriptionSelected === item.title}
                backgroundColor={
                  descriptionSelected === item.title
                    ? data.backgroundColor
                    : "transparent"
                }
                onPress={() => onDescriptionSelected(item.title)}
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
              pokemon={data.pokemon}
              description={data.description}
              backgroundColor={data.backgroundColor}
            />
          </ScrollView>
        )}

        <DescriptionsWrapper>
          {descriptionSelected === "evolution" && (
            <FlatList
              data={data.evolutionChain}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <Evolution
                  data={item}
                  currentName={data.pokemon.name}
                  textColor={data.backgroundColor}
                />
              )}
              style={{ width: "100%" }}
              showsVerticalScrollIndicator={false}
            />
          )}
        </DescriptionsWrapper>

        {descriptionSelected === "moves" && (
          <FlatList
            data={data.pokemon.moves}
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
