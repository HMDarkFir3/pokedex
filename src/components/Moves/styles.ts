import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 100%;

  margin: 20px 0;
`;

export const Name = styled.Text`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  color: ${({ theme }) =>
    theme.title === "light" ? theme.colors.text1000 : theme.colors.text100};
`;

export const LearnedLevel = styled.Text`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  color: ${({ theme }) =>
    theme.title === "light" ? theme.colors.text1000 : theme.colors.text100};
`;
