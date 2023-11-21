import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 20px;
  padding: 12px;

  background-color: ${({ theme }) =>
    theme.colors.components.pokeCard.background};
  border-color: ${({ theme }) => theme.colors.components.pokeCard.border};
  border-width: 1px;
  border-radius: 20px;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Wrapper = styled.View`
  justify-content: space-between;
`;

export const Index = styled.Text`
  text-align: right;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.components.pokeCard.text};
`;

export const Name = styled.Text`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.components.pokeCard.text};
`;
