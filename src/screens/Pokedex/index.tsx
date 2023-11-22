import { FC } from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components/native";

import { usePokemon } from "@hooks/usePokemon";

import { BackButton } from "@components/Buttons/BackButton";
import { PrimaryCard } from "@components/Cards/PrimaryCard";
import { Loading } from "@components/Loading";

import { Container } from "./styles";

export const Pokedex: FC = () => {
  const { pokemons, isLoading } = usePokemon();
  const { title, colors } = useTheme();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <BackButton
        iconColor={title === "light" ? colors.text1000 : colors.text100}
      />

      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => (
          <PrimaryCard data={item} index={index} />
        )}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
