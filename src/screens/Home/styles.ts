import styled from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

//Icons
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  margin-top: 40px;
  padding: 0 20px;
`;

export const Title = styled.Text`
  margin-bottom: 20px;

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(36)}px;
  color: ${({ theme }) => theme.colors.text};
`;
