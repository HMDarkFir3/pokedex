import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

interface ContainerProps {
  type: "primary" | "secondary";
}

export const Container = styled(RectButton)<ContainerProps>`
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  border-radius: 24px;

  ${({ type, theme }) =>
    type === "secondary" &&
    css`
      background-color: ${theme.colors.primary};
    `}
`;
