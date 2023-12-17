import { FC } from "react";
import { FlatList, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { getPokemons } from "@/services/pokemon";

import { BackButton } from "@/components/Buttons/BackButton";
import { PrimaryCard } from "@/components/Cards/PrimaryCard";
import { Loading } from "@/components/Loading";

import { Container } from "./styles";

export const Pokedex: FC = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getPokemons,
  });
  const { navigate } = useNavigation();
  const { title, colors } = useTheme();

  const onPressPokemon = (pokemonName: string) =>
    navigate("Pokemon", { pokemonName: pokemonName });

  if (isError) navigate("Error", { message: "Error on fetch pokemons." });

  if (isPending) return <Loading />;

  return (
    <Container>
      <BackButton
        iconColor={title === "light" ? colors.text1000 : colors.text100}
      />

      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => (
          <PrimaryCard
            data={item}
            index={index}
            onPress={() => onPressPokemon(item.name)}
          />
        )}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
