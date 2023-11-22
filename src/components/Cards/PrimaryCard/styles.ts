import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 20px;
  padding: 12px;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 24px;
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
  color: ${({ theme }) =>
    theme.title === "light" ? theme.colors.text1000 : theme.colors.text100};
`;

export const Name = styled.Text`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
  color: ${({ theme }) =>
    theme.title === "light" ? theme.colors.text1000 : theme.colors.text100};
`;
