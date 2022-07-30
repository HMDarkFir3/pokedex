import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface ContainerProps {
  backgroundColor: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  margin-bottom: 10px;

  padding: 8px 0;

  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 20px;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;
