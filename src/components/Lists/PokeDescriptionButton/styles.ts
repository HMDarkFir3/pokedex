import styled, { css } from "styled-components/native";

interface ContainerProps {
  isActive: boolean;
  backgroundColor: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;

  width: 100px;

  padding: 2px 0;

  border-radius: 20px;

  ${({ isActive, backgroundColor }) =>
    isActive &&
    css`
      background-color: ${backgroundColor};
    `}
`;

export const Title = styled.Text`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;
