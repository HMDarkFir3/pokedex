import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

interface LevelProps {
  textColor: string;
}

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 100%;

  padding: 12px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 90px;
  height: 90px;
`;

export const Name = styled.Text`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  color: ${({ theme }) =>
    theme.title === "light" ? theme.colors.text1000 : theme.colors.text100};
`;

export const Level = styled.Text<LevelProps>`
  margin-left: 20px;

  text-transform: capitalize;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  color: ${({ textColor }) => textColor};
`;
