import { FC } from "react";
import { FlatList } from "react-native";

import { usePokemon } from "@hooks/usePokemon";

import { Header } from "@components/Header";
import { PokeCard } from "@components/Lists/PokeCard";
import { Loading } from "@components/Loading";

import { Container } from "./styles";

export const Pokedex: FC = () => {
  const { pokemons, isLoading } = usePokemon();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <Header />

      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => <PokeCard data={item} index={index} />}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
