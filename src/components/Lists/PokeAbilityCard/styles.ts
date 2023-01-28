import styled from "styled-components/native";

interface ContainerProps {
  backgroundColor: string;
}

export const Container = styled.View<ContainerProps>`
  padding: 2px 20px;
  margin-right: 8px;

  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 20px;
`;

export const Title = styled.Text`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;
