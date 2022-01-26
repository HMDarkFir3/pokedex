import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

//Interfaces
interface ContainerProps {
  backgroundColor: string;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 60px;

  margin-top: ${getStatusBarHeight()}px;
  padding: 0 20px;

  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Button = styled.TouchableOpacity``;
