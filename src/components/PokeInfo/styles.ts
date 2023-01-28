import styled, { css } from "styled-components/native";

interface AbilitiesProps {
  pokemonDescription: boolean;
}

export const Container = styled.View``;

export const Description = styled.Text`
  text-align: justify;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.components.pokeInfo.textPrimary};
`;

export const Abilities = styled.View<AbilitiesProps>`
  margin-top: 20px;

  ${({ pokemonDescription }) =>
    !pokemonDescription &&
    css`
      margin-top: 0;
    `}
`;

export const AbilitiesTitle = styled.Text`
  margin-bottom: 8px;

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.components.pokeInfo.textSecondary};
`;

export const Measurements = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const Measure = styled.View`
  align-items: center;
`;

export const MeasureName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.components.pokeInfo.textSecondary};
`;

export const MeasureValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.components.pokeInfo.textSecondary};
`;

export const Stats = styled.View`
  margin-bottom: 20px;
`;

export const StatTitle = styled.Text`
  margin-bottom: 8px;

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.components.pokeInfo.textSecondary};
`;
