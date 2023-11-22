import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { RectButtonProps } from "react-native-gesture-handler";

import { Results } from "@dtos/PokemonsDTO";

import { usePokemon } from "@hooks/usePokemon";

import { Container, Image, Wrapper, Name, Index } from "./styles";

interface Props extends RectButtonProps {
  data: Results;
  index: number;
}

export const PrimaryCard: FC<Props> = (props) => {
  const { index, ...rest } = props;
  const { name } = props.data;

  const { fetchPokemon } = usePokemon();

  const { navigate } = useNavigation();

  function onPressPokemon(pokemonId: string) {
    fetchPokemon(pokemonId);
    navigate("Pokemon");
  }

  return (
    <Container {...rest} onPress={() => onPressPokemon(name)}>
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
