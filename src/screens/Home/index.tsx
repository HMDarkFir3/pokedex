import { useState, useEffect, useRef, FC } from "react";
import { TextInput, Alert } from "react-native";
import { useKeyboard } from "@react-native-community/hooks";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { usePokemon } from "@hooks/usePokemon";

import { Input } from "@components/Input";
import { PokeSelection } from "@components/PokeSelection";

import { Container, Content, Title } from "./styles";

export const Home: FC = () => {
  const keyboard = useKeyboard();
  const { navigate } = useNavigation();
  const { isLoading, fetchPokemons, fetchPokemon } = usePokemon();
  const theme = useTheme();

  const [search, setSearch] = useState<string>("");

  const inputRef = useRef<TextInput>(null);

  const onPressSelection = () => {
    fetchPokemons();
    navigate("Pokedex");
  };

  const onPressSearch = async () => {
    if (search.trim() === "") {
      Alert.alert("Warning!", "Please, blank field.");
      return;
    }

    inputRef.current?.blur();

    const response = await fetchPokemon(search);

    if (response === undefined) {
      navigate("ErrorView", { message: "Pokemon not found." });
      return;
    }
  };

  const inputOnBlur = () => {
    if (keyboard.keyboardShown === false) {
      inputRef.current?.blur();
    }
  };

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
          value={search}
          onChangeText={setSearch}
          onBlur={inputOnBlur}
          onSearch={onPressSearch}
          editable={!isLoading}
        />

        <PokeSelection
          style={{ marginTop: 16 }}
          title="Pokédex"
          backgroundColor={
            theme.colors.components.pokeSelection.backgroundPokedex
          }
          onPress={onPressSelection}
        />
      </Content>
    </Container>
  );
};
