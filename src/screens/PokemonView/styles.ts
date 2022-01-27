import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";

//Interfaces
interface ContainerProps {
  backgroundColor: string;
}

interface PokeVerticalSeparator {
  backgroundColor: string;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;

  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const PokeContent = styled.View`
  width: 100%;

  padding: 0 20px;
`;

export const PokeHeader = styled.View`
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const PokeTitle = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const PokeName = styled.Text`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const PokeIndex = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const PokeType = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const PokeImage = styled(Animated.View)`
  position: absolute;
  top: ${RFValue(65)}px;
  align-self: center;

  z-index: 10;
`;

export const Image = styled.Image`
  width: ${RFValue(220)}px;
  height: ${RFValue(220)}px;
`;

export const PokeDescriptions = styled(Animated.View)`
  flex: 1;

  width: 100%;
  height: 100%;

  margin-top: ${RFValue(154)}px;
  padding: 0 20px;

  background-color: ${({ theme }) => theme.colors.background};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`;

export const PokeDescritionButtonWrapper = styled.View`
  margin-bottom: 20px;
`;

export const PokeDescription = styled.Text`
  text-align: justify;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.placeholder_text};
`;

export const PokeAbilities = styled.View`
  margin-top: 20px;
`;

export const PokeAbilitiesTitle = styled.Text`
  margin-bottom: 8px;

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const PokeMeasurements = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const PokeMeasure = styled.View`
  align-items: center;
`;

export const PokeMeasureName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const PokeMeasureValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const PokeStats = styled.View`
  margin-bottom: 20px;
`;

export const PokeStatTitle = styled.Text`
  margin-bottom: 8px;

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const PokeEvolutionWrapper = styled.View`
  align-items: center;

  margin-bottom: 20px;
`;

export const PokeEvolutionName = styled.Text`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const PokeVerticalSeparator = styled.View<PokeVerticalSeparator>`
  width: 1px;
  height: 40px;

  margin: 12px;

  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const PokeEvolutionLevel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Loading = styled.ActivityIndicator``;
