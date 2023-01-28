import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.screens.home.background};
`;

export const Content = styled.View`
  margin-top: ${getStatusBarHeight() + 100}px;
  padding: 0 20px;
`;

export const Title = styled.Text`
  margin-bottom: 20px;

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 36px;
  color: ${({ theme }) => theme.colors.screens.home.text};
`;
