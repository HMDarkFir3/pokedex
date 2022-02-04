import * as React from "react";
import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

//Hooks
import { usePokemon } from "../../../hooks/usePokemon";

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

const PokeSelection: React.FC<Props> = (props) => {
  const { index, ...rest } = props;
  const { title, color } = props.data;

  //Hooks
  const { fetchPokemons } = usePokemon();

  //Navigation Hooks
  const { navigate } = useNavigation();

  function handleSelection() {
    fetchPokemons();
    navigate("Pokedex");
  }

  return (
    <Container
      {...rest}
      color={color}
      activeOpacity={0.7}
      onPress={handleSelection}
    >
      <Title>{title}</Title>
    </Container>
  );
};

export default PokeSelection;
