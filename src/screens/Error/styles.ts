import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.View`
  align-items: center;
  gap: 20px;
`;

export const Image = styled.Image`
  width: 240px;
  height: 240px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 28px;
  color: ${({ theme }) => theme.colors.text100};
`;

export const BackButton = styled(RectButton)`
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`;
