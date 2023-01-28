import { useState, forwardRef, ForwardedRef, Ref } from "react";
import { TextInput, TextInputProps, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { usePokemon } from "@hooks/usePokemon";

import { Container, SearchButton, SearchIcon, CustomInput } from "./styles";

interface Props extends TextInputProps {}

export const Input = forwardRef<TextInput, Props>((props, ref) => {
  const { ...rest } = props;

  const { isLoading, fetchPokemon } = usePokemon();

  const [search, setSearch] = useState<string>("");

  const { navigate } = useNavigation();

  const theme = useTheme();

  async function handleSearch() {
    if (search.trim() === "") {
      Alert.alert("Warning!", "Please, blank field.");
      return;
    }

    const response = await fetchPokemon(search);

    setSearch("");
    if (response) {
      navigate("PokemonView");
    } else {
      navigate("ErrorView");
    }
  }

  return (
    <Container>
      <SearchButton
        activeOpacity={0.7}
        onPress={handleSearch}
        disabled={isLoading}
      >
        <SearchIcon name="search" />
      </SearchButton>

      <CustomInput
        {...rest}
        ref={ref}
        placeholderTextColor={theme.colors.placeholder_text}
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={handleSearch}
      />
    </Container>
  );
});
