import React, { useEffect, useRef, FC } from "react";
import { TextInput, FlatList } from "react-native";
import { useKeyboard } from "@react-native-community/hooks";
import { useTheme } from "styled-components";

import { Header } from "../../components/Header";
import Input from "../../components/Input";
import { PokeSelection } from "../../components/Lists/PokeSelection";

import { pokeSelection } from "../../utils/pokeSelection";

import { Container, Content, Title } from "./styles";

export const Home: FC = () => {
  const keyboard = useKeyboard();

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
      <Header rightIcon="settings" backgroundColor={theme.colors.background} />

      <Content>
        <Title>What are{"\n"}you looking for?</Title>

        <Input
          ref={inputRef}
          placeholder="Search pokemon: name or index"
          onBlur={inputOnBlur}
        />

        <FlatList
          data={pokeSelection}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item, index }) => (
            <PokeSelection data={item} index={index} />
          )}
          contentContainerStyle={{
            marginTop: 20,
          }}
        />
      </Content>
    </Container>
  );
};
