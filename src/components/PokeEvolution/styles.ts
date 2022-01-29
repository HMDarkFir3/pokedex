import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

//Interfaces`
interface LevelProps {
  backgroundColor: string;
}

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 100%;

  margin-bottom: 20px;
`;

export const SubWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PokeImage = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: ${RFValue(90)}px;
  height: ${RFValue(90)}px;
`;

export const Name = styled.Text`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Level = styled.Text<LevelProps>`
  margin-left: 20px;

  text-transform: capitalize;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ backgroundColor }) => backgroundColor};
`;
