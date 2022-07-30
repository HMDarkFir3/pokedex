import React, { forwardRef, ForwardRefRenderFunction } from "react";
import { TextInput, TextInputProps, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { usePokemon } from "../../hooks/usePokemon";

import { Container, SearchButton, SearchIcon, CustomInput } from "./styles";

interface Props extends TextInputProps {}

const Input: ForwardRefRenderFunction<TextInput, Props> = (props, ref) => {
  const { ...rest } = props;

  //Hooks
  const { fetchPokemon } = usePokemon();

  //States
  const [search, setSearch] = React.useState<string>("");

  //Navigation Hook
  const { navigate } = useNavigation();

  //Theme Hook
  const theme = useTheme();

  function handleSearch() {
    if (search.trim() === "") {
      Alert.alert("Warning!", "Please, blank field.");
      return;
    }

    fetchPokemon(search);
    setSearch("");
    navigate("PokemonView");
  }

  return (
    <Container>
      <SearchButton activeOpacity={0.7} onPress={handleSearch}>
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
};

export default forwardRef(Input);
