import { useEffect, useRef, FC } from "react";
import { TextInput } from "react-native";
import { useKeyboard } from "@react-native-community/hooks";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { usePokemon } from "@hooks/usePokemon";

import Input from "@components/Input";
import { PokeSelection } from "@components/PokeSelection";

import { Container, Content, Title } from "./styles";

export const Home: FC = () => {
  const keyboard = useKeyboard();
  const { navigate } = useNavigation();
  const { fetchPokemons } = usePokemon();
  const theme = useTheme();

  const inputRef = useRef<TextInput>(null);

  function inputOnBlur() {
    if (keyboard.keyboardShown === false) {
      inputRef.current?.blur();
    }
  }

  useEffect(() => {
    inputOnBlur();
  }, [keyboard.keyboardShown]);

  return (
    <Container>
      <Content>
        <Title>What are{"\n"}you looking for?</Title>

        <Input
          ref={inputRef}
          placeholder="Search pokemon: name or index"
          onBlur={inputOnBlur}
        />

        <PokeSelection
          style={{ marginTop: 16 }}
          title="Pokédex"
          backgroundColor={theme.colors.pokedex}
          onPress={() => {
            fetchPokemons();
            navigate("Pokedex");
          }}
        />
      </Content>
    </Container>
  );
};
