import { forwardRef } from "react";
import { TextInput, TextInputProps, ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";
import { MagnifyingGlass, PaperPlaneRight } from "phosphor-react-native";

import { usePokemon } from "@hooks/usePokemon";

import { Container, SearchButton, CustomInput } from "./styles";

interface Props extends TextInputProps {
  onSearch: () => void;
}

export const Input = forwardRef<TextInput, Props>((props, ref) => {
  const { onSearch, value, ...rest } = props;

  const { isLoading, fetchPokemon } = usePokemon();
  const { colors } = useTheme();

  return (
    <Container>
      <CustomInput
        {...rest}
        ref={ref}
        placeholderTextColor={colors.components.input.placeholder}
        onSubmitEditing={onSearch}
      />

      {value === "" ? (
        <SearchButton
          variant="primary"
          activeOpacity={0.7}
          enabled={!isLoading}
        >
          <MagnifyingGlass
            size={24}
            color={colors.components.input.iconPrimary}
            weight="bold"
          />
        </SearchButton>
      ) : (
        <SearchButton
          variant="secondary"
          activeOpacity={0.7}
          onPress={onSearch}
          enabled={!isLoading}
        >
          {isLoading ? (
            <ActivityIndicator
              size="small"
              color={colors.components.input.loading}
            />
          ) : (
            <PaperPlaneRight
              size={24}
              color={colors.components.input.iconSecondary}
            />
          )}
        </SearchButton>
      )}
    </Container>
  );
});
