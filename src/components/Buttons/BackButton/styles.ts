import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { BorderlessButton } from "react-native-gesture-handler";

export const Container = styled(BorderlessButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  margin: ${getStatusBarHeight() + 20}px 0 20px 16px;
`;
