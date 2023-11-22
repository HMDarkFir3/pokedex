import styled, { css } from "styled-components/native";

interface AbilitiesProps {
  pokemonDescription: boolean;
}

export const Container = styled.View``;

export const Wrapper = styled.View`
  gap: 20px;
`;

export const Description = styled.Text`
  text-align: justify;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text700};
`;

export const Abilities = styled.View<AbilitiesProps>`
  gap: 8px;

  margin-top: 20px;

  ${({ pokemonDescription }) =>
    !pokemonDescription &&
    css`
      margin-top: 0;
    `}
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
  color: ${({ theme }) =>
    theme.title === "light" ? theme.colors.text1000 : theme.colors.text100};
`;

export const Measurements = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const Measure = styled.View`
  align-items: center;
`;

export const Stats = styled.View`
  gap: 8px;

  margin-bottom: 20px;
`;
