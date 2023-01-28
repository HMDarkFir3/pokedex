import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 60px;

  margin-top: ${getStatusBarHeight()}px;
  padding: 0 20px;
`;

export const Button = styled.TouchableOpacity``;
