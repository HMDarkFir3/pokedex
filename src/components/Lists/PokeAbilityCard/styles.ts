import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

//Interfaces
interface ContainerProps {
  backgroundColor: string;
}

export const Container = styled.View<ContainerProps>`
  padding: 2px 20px;
  margin-right: 8px;

  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 20px;
`;

export const Title = styled.Text`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
`;
