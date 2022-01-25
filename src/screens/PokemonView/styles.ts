import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

//Interfaces
interface ContainerProps {
  backgroundColor: string;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;

  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Content = styled.View`
  padding: 0 20px;
`;

export const PokemonHeader = styled.View`
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const PokemonTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const PokemonName = styled.Text`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const PokemonIndex = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const PokemonType = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const PokemonImage = styled.View`
  align-items: center;

  margin-top: 20px;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Loading = styled.ActivityIndicator``;
