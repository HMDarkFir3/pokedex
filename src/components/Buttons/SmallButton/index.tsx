import { FC } from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components/native";
import { Icon } from "phosphor-react-native";

import { Container } from "./styles";

interface Props extends RectButtonProps {
  icon: Icon;
}

export const SmallButton: FC<Props> = (props) => {
  const { icon: Icon, ...rest } = props;

  const { colors } = useTheme();

  return (
    <Container {...rest}>
      <Icon color={colors.text100} />
    </Container>
  );
};
