import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

//Interfaces
interface SeparatorProps {
  backgroundColor: string;
}

export const Container = styled.View`
  align-items: center;
`;

export const Separator = styled.View<SeparatorProps>`
  width: 100%;
  height: 1px;

  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 100%;

  margin: 20px 0;
`;

export const Name = styled.Text`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const LearnedLevel = styled.Text`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
`;
