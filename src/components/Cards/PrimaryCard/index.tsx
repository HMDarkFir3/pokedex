import { FC } from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { PokemonsDTO } from "@/dtos/PokemonsDTO";

import { Container, Image, Wrapper, Name, Index } from "./styles";

interface Props extends RectButtonProps {
  data: PokemonsDTO.Results;
  index: number;
}

export const PrimaryCard: FC<Props> = (props) => {
  const { index, ...rest } = props;
  const { name } = props.data;

  return (
    <Container {...rest}>
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
