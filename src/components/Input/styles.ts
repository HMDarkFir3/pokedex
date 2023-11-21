import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface SearchButtonProps {
  variant: "primary" | "secondary";
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 48px;

  background-color: ${({ theme }) =>
    theme.colors.components.input.backgroundPrimary};
  border-radius: 24px;
`;

export const SearchButton = styled(RectButton)<SearchButtonProps>`
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  border-radius: 24px;

  ${({ variant, theme }) =>
    variant === "secondary" &&
    css`
      background-color: ${theme.colors.components.input.backgroundSecondary};
    `}
`;

export const CustomInput = styled(TextInput)`
  flex: 1;

  padding: 0 20px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.components.input.text};
`;
