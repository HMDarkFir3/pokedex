import { FC, ReactNode } from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container } from "./styles";

interface Props extends RectButtonProps {
  type: "primary" | "secondary";
  children: ReactNode;
}

export const RoundedButton: FC<Props> = (props) => {
  const { type = "primary", children, ...rest } = props;

  return (
    <Container type={type} {...rest}>
      {children}
    </Container>
  );
};
