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
  color: ${({ theme }) =>
    theme.title === "light" ? theme.colors.text1000 : theme.colors.text100};
`;

export const Value = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text700};
`;

export const ProgressBar = styled.View`
  flex: 1;

  height: 10px;

  margin-left: 8px;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 20px;
`;

export const CurrentStat = styled.View<CurrentStatProps>`
  position: absolute;

  height: 10px;
  width: ${({ stat }) => stat};

  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 20px;
`;
