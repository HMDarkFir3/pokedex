import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View``;

export const Image = styled.Image`
  width: ${RFValue(240)}px;
  height: ${RFValue(240)}px;

  margin-bottom: 20px;
`;

export const ErrorTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(28)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const BackButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;

  background-color: ${({ theme }) => theme.colors.background};
  border: solid 1px ${({ theme }) => theme.colors.pokedex};
  border-radius: 8px;
`;
