import { useState, useEffect, FC } from "react";
import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { PokemonEvolutionChainDTO } from "@/dtos/PokemonEvolutionChainDTO";

import { Container, Wrapper, ImageWrapper, Image, Name, Level } from "./styles";

interface Props extends TouchableOpacityProps {
  data: PokemonEvolutionChainDTO;
  currentName: string;
  textColor: string;
}

export const Evolution: FC<Props> = (props) => {
  const { currentName, textColor } = props;
  const { species_name, image_url, min_level, item } = props.data;

  const { navigate } = useNavigation();

  const [evolutionType, setEvolutionType] = useState<string>("");

  const onPokemon = () => navigate("Pokemon", { pokemonId: species_name });

  useEffect(() => {
    if (min_level) {
      setEvolutionType(`Level ${String(min_level)}`);
    } else if (item) {
      setEvolutionType(item?.name.replace("-", " "));
    }
  }, []);

  return (
    <Container
      onPress={() => onPokemon()}
      enabled={species_name !== currentName}
    >
      <Wrapper>
        <ImageWrapper>
          <Image
            source={{
              uri: image_url
                ? image_url
                : "https://img1.gratispng.com/20171220/dxe/question-mark-png-5a3a85e2667e64.6782850215137848024198.jpg",
            }}
          />
          <Name>{species_name}</Name>
        </ImageWrapper>

        <Level textColor={textColor}>{evolutionType}</Level>
      </Wrapper>
    </Container>
  );
};
