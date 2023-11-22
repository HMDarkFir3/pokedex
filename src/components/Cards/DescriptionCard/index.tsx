import { FC } from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface Props extends RectButtonProps {
  data: {
    id: number;
    title: string;
  };
  isActive: boolean;
  backgroundColor: string;
}

export const DescritionButton: FC<Props> = (props) => {
  const { isActive, backgroundColor, ...rest } = props;
  const { title } = props.data;

  return (
    <Container {...rest} isActive={isActive} backgroundColor={backgroundColor}>
      <Title isActive={isActive}>{title}</Title>
    </Container>
  );
};
