import { FC } from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

export const Loading: FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <ActivityIndicator size="large" color={colors.primary} />
    </Container>
  );
};
