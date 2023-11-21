import { FC } from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface Props extends RectButtonProps {
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
