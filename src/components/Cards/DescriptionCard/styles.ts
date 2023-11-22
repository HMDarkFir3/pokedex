import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

interface ContainerProps {
  isActive: boolean;
  backgroundColor: string;
}

interface TitleProps {
  isActive: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  align-items: center;

  width: 100px;

  padding: 2px 0;

  border-radius: 20px;

  ${({ isActive, backgroundColor }) =>
    isActive &&
    css`
      background-color: ${backgroundColor};
    `}
`;

export const Title = styled.Text<TitleProps>`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) =>
    theme.title === "light" ? theme.colors.text1000 : theme.colors.text100};

  ${({ isActive, theme }) =>
    isActive &&
    css`
      color: ${theme.colors.text100};
    `}
`;
