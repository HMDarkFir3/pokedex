import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 20px;
  padding: 12px;

  background-color: ${({ theme }) => theme.colors.background};
  border-color: ${({ theme }) => theme.colors.placeholder_text};
  border-width: 1px;
  border-radius: 20px;
`;

export const Image = styled.Image`
  width: ${RFValue(80)}px;
  height: ${RFValue(80)}px;
`;

export const Wrapper = styled.View`
  justify-content: space-between;
`;

export const Index = styled.Text`
  text-align: right;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.placeholder_text};
`;

export const Name = styled.Text`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.placeholder_text};
`;
