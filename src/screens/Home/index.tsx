import { useState, useEffect, useRef, FC } from "react";
import { TextInput, Alert, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme as useStyledTheme } from "styled-components/native";
import { Sun, Moon } from "phosphor-react-native";

import { usePokemon } from "@hooks/usePokemon";
import { useTheme } from "@hooks/useTheme";
import { useKeyboard } from "@hooks/useKeyboard";

import { Input } from "@components/Input";
import { Button } from "@components/Buttons/Button";

import { Container, Content, Title, ToggleButton } from "./styles";

export const Home: FC = () => {
  const { isLoading, fetchPokemons, fetchPokemon } = usePokemon();
  const { onToggleTheme } = useTheme();
  const keyboard = useKeyboard();
  const { navigate } = useNavigation();
  const { title, colors } = useStyledTheme();

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

    if (response) {
      navigate("Pokemon");
    } else {
      navigate("Error", { message: "Pokemon not found." });
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
      <ToggleButton activeOpacity={0.7} onPress={onToggleTheme}>
        {title === "light" ? (
          <Moon size={32} color={colors.icon} weight="fill" />
        ) : (
          <Sun size={32} color={colors.icon} weight="fill" />
        )}
      </ToggleButton>

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

        <Button
          style={{ marginTop: 16 }}
          title="Pokédex"
          backgroundColor={colors.primary}
          onPress={onPressSelection}
        />
      </Content>
    </Container>
  );
};
