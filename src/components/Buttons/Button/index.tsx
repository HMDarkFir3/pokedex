import { FC } from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  backgroundColor: string;
}

export const Button: FC<Props> = (props) => {
  const { title, backgroundColor, ...rest } = props;

  return (
    <Container backgroundColor={backgroundColor} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
