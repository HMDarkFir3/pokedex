import React, { FC } from "react";
import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { usePokemon } from "../../../hooks/usePokemon";

import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  data: {
    id: number;
    title: string;
    color: string;
  };
  index: number;
}

export const PokeSelection: FC<Props> = (props) => {
  const { index, ...rest } = props;
  const { title, color } = props.data;

  const { fetchPokemons } = usePokemon();

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
