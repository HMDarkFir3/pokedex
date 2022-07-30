import React, { FC, ComponentProps } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

import { Container, Button } from "./styles";

interface Props {
  leftIcon?: ComponentProps<typeof Feather>["name"];
  rightIcon?: ComponentProps<typeof Feather>["name"];
  backgroundColor: string;
}

export const Header: FC<Props> = (props) => {
  const { leftIcon, rightIcon, backgroundColor } = props;

  const { goBack } = useNavigation();
  const theme = useTheme();

  return (
    <Container backgroundColor={backgroundColor}>
      <Button activeOpacity={0.7} onPress={() => goBack()}>
        <Feather
          name={leftIcon}
          size={RFValue(24)}
          color={theme.colors.icon_color}
        />
      </Button>

      <Button activeOpacity={0.7}>
        <Feather
          name={rightIcon}
          size={RFValue(24)}
          color={theme.colors.icon_color}
        />
      </Button>
    </Container>
  );
};
