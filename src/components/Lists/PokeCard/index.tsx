import { FC } from "react";
import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Results } from "@dtos/PokemonsDTO";

import { usePokemon } from "@hooks/usePokemon";

import { Container, Image, Wrapper, Name, Index } from "./styles";

interface Props extends TouchableOpacityProps {
  data: Results;
  index: number;
}

export const PokeCard: FC<Props> = (props) => {
  const { index, ...rest } = props;
  const { name } = props.data;

  const { fetchPokemon } = usePokemon();

  const { navigate } = useNavigation();

  function onPressPokemon(pokemonId: string) {
    fetchPokemon(pokemonId);
    navigate("Pokemon");
  }

  return (
    <Container
      {...rest}
      activeOpacity={0.7}
      onPress={() => onPressPokemon(name)}
    >
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
            index + 1
          }.png`,
        }}
      />

      <Wrapper>
        <Index>#{index + 1}</Index>
        <Name>{name}</Name>
      </Wrapper>
    </Container>
  );
};
