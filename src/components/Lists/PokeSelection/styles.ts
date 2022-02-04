import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

//Interfaces
interface ContainerProps {
  color: string;
  //index: number;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex: 1;

  margin-bottom: 10px;

  padding: 12px;

  background-color: ${({ color }) => color};
  border-radius: 20px;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;
