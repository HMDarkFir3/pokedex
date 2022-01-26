import * as React from "react";
import { TouchableOpacityProps } from "react-native";

//Styles
import { Container, Title } from "./styles";

//Interfaces
interface Props extends TouchableOpacityProps {
  data: {
    id: number;
    title: string;
    color: string;
  };
  index: number;
}

const PokeCard: React.FC<Props> = (props) => {
  const { index } = props;
  const { title, color } = props.data;

  return (
    <Container color={color} index={index} activeOpacity={0.7}>
      <Title>{title}</Title>
    </Container>
  );
};

export default PokeCard;
