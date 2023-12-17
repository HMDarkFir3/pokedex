import { forwardRef } from "react";
import { TextInput, TextInputProps, ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";
import { MagnifyingGlass, PaperPlaneRight } from "phosphor-react-native";

import { RoundedButton } from "@/components/Buttons/RoundedButton";

import { Container, CustomInput } from "./styles";

interface Props extends TextInputProps {
  isLoading?: boolean;
  onSearch: () => void;
}

export const Input = forwardRef<TextInput, Props>((props, ref) => {
  const { onSearch, value, isLoading = false, ...rest } = props;

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
        <RoundedButton type="primary">
          <MagnifyingGlass size={24} color={colors.text700} weight="bold" />
        </RoundedButton>
      ) : (
        <RoundedButton type="secondary" onPress={onSearch}>
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
