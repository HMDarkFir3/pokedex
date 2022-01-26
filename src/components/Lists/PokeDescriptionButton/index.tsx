import * as React from "react";
import { TouchableOpacityProps } from "react-native";

//Styles
import { Container, Title } from "./styles";

//Interfaces
interface Props extends TouchableOpacityProps {
  data: {
    id: number;
    title: string;
  };
  isActive: boolean;
  backgroundColor: string;
}

const PokeDescritionButton: React.FC<Props> = (props) => {
  const { isActive, backgroundColor, ...rest } = props;
  const { title } = props.data;

  return (
    <Container
      {...rest}
      isActive={isActive}
      backgroundColor={backgroundColor}
      activeOpacity={0.7}
    >
      <Title>{title}</Title>
    </Container>
  );
};

export default PokeDescritionButton;
