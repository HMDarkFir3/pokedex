import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`;
