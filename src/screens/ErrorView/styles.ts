import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View``;

export const Image = styled.Image`
  width: 240px;
  height: 240px;

  margin-bottom: 20px;
`;

export const ErrorTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 28px;
  color: ${({ theme }) => theme.colors.text};
`;

export const BackButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  background-color: ${({ theme }) => theme.colors.background};
  border: solid 1px ${({ theme }) => theme.colors.pokedex};
  border-radius: 8px;
`;
