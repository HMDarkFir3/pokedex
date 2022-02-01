import * as React from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components";

//Hooks
import { usePokemon } from "../../hooks/usePokemon";

//Components
import Header from "../../components/Header";
import PokeCard from "../../components/Lists/PokeCard";

//Styles
import { Container } from "./styles";

const Pokedex: React.FC = () => {
  //Hooks
  const { pokemons } = usePokemon();

  //Theme Hooks
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

export default Pokedex;
