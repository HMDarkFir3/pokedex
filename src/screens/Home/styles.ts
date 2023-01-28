import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  margin-top: 120px;
  padding: 0 20px;
`;

export const Title = styled.Text`
  margin-bottom: 20px;

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 36px;
  color: ${({ theme }) => theme.colors.text};
`;
