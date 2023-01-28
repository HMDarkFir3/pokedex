import { FC } from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  backgroundColor: string;
}

export const PokeSelection: FC<Props> = (props) => {
  const { title, backgroundColor, ...rest } = props;

  return (
    <Container backgroundColor={backgroundColor} activeOpacity={0.7} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
