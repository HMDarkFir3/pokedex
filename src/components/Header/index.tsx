import { FC, ComponentProps } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { CaretLeft } from "phosphor-react-native";

import { Container, Button } from "./styles";

export const Header: FC = () => {
  const { goBack } = useNavigation();
  const theme = useTheme();

  return (
    <Container>
      <Button activeOpacity={0.7} onPress={() => goBack()}>
        <CaretLeft size={24} color={theme.colors.components.header.icon} />
      </Button>
    </Container>
  );
};
