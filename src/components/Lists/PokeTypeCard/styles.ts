import styled, { css } from "styled-components/native";

//Interfaces
interface ContainerProps {
  backgroundColor: string;
  index: number;
}

export const Container = styled.View<ContainerProps>`
  align-items: center;
  justify-content: center;

  margin-right: 8px;
  padding: 2px 20px;

  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 20px;

  ${({ theme, index }) =>
    index === 0 &&
    css`
      border-width: 1px;
      border-color: ${theme.colors.text};
    `}
`;

export const Title = styled.Text`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;
