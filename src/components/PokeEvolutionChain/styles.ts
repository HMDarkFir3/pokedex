import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

//Interfaces`
interface NameProps {
  textColor: string;
}

interface SeparatorProps {
  textColor: string;
}

export const Container = styled.View`
  margin-top: ${RFValue(-80)}px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-bottom: 20px;
`;

export const SubWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: ${RFValue(90)}px;
  height: ${RFValue(90)}px;
`;

export const Name = styled.Text<NameProps>`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ textColor }) => textColor};
`;

export const SeparatorWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Separator = styled.View<SeparatorProps>`
  width: 99%;
  height: 1px;

  background-color: ${({ textColor }) => textColor};
`;

export const LevelWrapper = styled.View`
  align-items: flex-end;
  justify-content: center;

  width: ${RFValue(80)}px;
`;

export const Level = styled.Text`
  text-transform: capitalize;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
`;
