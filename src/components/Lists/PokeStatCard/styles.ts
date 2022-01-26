import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  width: 100%;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 23%;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const BaseValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.placeholder_text};
`;

export const ProgressBar = styled.View`
  flex: 1;

  height: 10px;

  margin-left: 8px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
`;
