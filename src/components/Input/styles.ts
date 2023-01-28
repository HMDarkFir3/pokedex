import styled from "styled-components/native";
import { TextInput } from "react-native";

import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 48px;

  padding: 0 20px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 24px;
`;

export const SearchButton = styled.TouchableOpacity``;

export const SearchIcon = styled(Feather)`
  margin-right: 20px;

  font-size: 24px;
  color: ${({ theme }) => theme.colors.placeholder_text};
`;

export const CustomInput = styled(TextInput)`
  flex: 1;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;
