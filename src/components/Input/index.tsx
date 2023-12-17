import { forwardRef } from "react";
import { TextInput, TextInputProps, ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";
import { MagnifyingGlass, PaperPlaneRight } from "phosphor-react-native";

import { usePokemon } from "@/hooks/usePokemon";

import { RoundedButton } from "@/components/Buttons/RoundedButton";

import { Container, CustomInput } from "./styles";

interface Props extends TextInputProps {
  onSearch: () => void;
}

export const Input = forwardRef<TextInput, Props>((props, ref) => {
  const { onSearch, value, ...rest } = props;

  const { isLoading } = usePokemon();
  const { colors } = useTheme();

  return (
    <Container>
      <CustomInput
        ref={ref}
        placeholderTextColor={colors.text700}
        onSubmitEditing={onSearch}
        {...rest}
      />

      {value === "" ? (
        <RoundedButton type="primary" enabled={isLoading}>
          <MagnifyingGlass size={24} color={colors.text700} weight="bold" />
        </RoundedButton>
      ) : (
        <RoundedButton type="secondary" onPress={onSearch} enabled={!isLoading}>
          {isLoading ? (
            <ActivityIndicator size="small" color={colors.text100} />
          ) : (
            <PaperPlaneRight size={24} color={colors.text100} />
          )}
        </RoundedButton>
      )}
    </Container>
  );
});
