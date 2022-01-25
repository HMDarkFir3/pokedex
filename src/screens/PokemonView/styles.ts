import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

//Icons
import { Feather } from "@expo/vector-icons";

//Interfaces
interface ContainerProps {
  color: string;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;

  background-color: ${({ color }) => color};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-top: ${getStatusBarHeight() + 20}px;
  padding: 0 20px;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackIcon = styled(Feather)`
  font-size: ${RFValue(28)}px;
  color: ${({ theme }) => theme.colors.icon_color};
`;

export const FavoriteButton = styled.TouchableOpacity``;

export const FavoriteIcon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.icon_color};
`;

export const Content = styled.View`
  padding: 0 20px;
`;

export const PokemonName = styled.Text``;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Loading = styled.ActivityIndicator``;
