import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;

  padding: 0 24px;

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
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 28px;
  color: ${({ theme }) =>
    theme.title === "light" ? theme.colors.text1000 : theme.colors.text100};
`;
