import React, { FC } from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components";

import { usePokemon } from "../../hooks/usePokemon";

import { Header } from "../../components/Header";
import { PokeCard } from "../../components/Lists/PokeCard";

import { Container } from "./styles";

export const Pokedex: FC = () => {
  const { pokemons } = usePokemon();

  const theme = useTheme();

  return (
    <Container>
      <Header
        leftIcon="chevron-left"
        backgroundColor={theme.colors.background}
      />

      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => <PokeCard data={item} index={index} />}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
      />
    </Container>
  );
};
