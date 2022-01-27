import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

//Interfaces
interface ContainerProps {
  isActive: boolean;
  backgroundColor: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;

  width: ${RFValue(100)}px;

  padding: 2px 0;

  border-radius: 20px;

  ${({ isActive, backgroundColor }) =>
    isActive &&
    css`
      background-color: ${backgroundColor};
    `}
`;

export const Title = styled.Text`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;
