import styled, { css } from "styled-components/native";

interface ContainerProps {
  index: number;
}

interface CurrentStatProps {
  backgroundColor: string;
  stat: string;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;

  width: 100%;

  ${({ index }) =>
    index !== 0 &&
    css`
      margin-top: 2px;
    `}
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 23%;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.components.pokeStatCard.textPrimary};
`;

export const BaseValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.components.pokeStatCard.textSecondary};
`;

export const ProgressBar = styled.View`
  flex: 1;

  height: 10px;

  margin-left: 8px;

  background-color: ${({ theme }) =>
    theme.colors.components.pokeStatCard.background};
  border-radius: 20px;
`;

export const CurrentStat = styled.View<CurrentStatProps>`
  position: absolute;

  height: 10px;
  width: ${({ stat }) => stat};

  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 20px;
`;
