import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

//Icons
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const SettingsButton = styled.TouchableOpacity``;

export const SettingsIcon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.icon_color};
`;
