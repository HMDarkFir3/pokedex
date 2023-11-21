import { useState, useEffect, useCallback, FC } from "react";
import { TouchableOpacityProps } from "react-native";

import { PokemonEvolutionChainDTO } from "@dtos/PokemonEvolutionChainDTO";

import { usePokemon } from "@hooks/usePokemon";
import { usePokemonEvolution } from "@hooks/usePokemonEvolution";

import { Container, SubWrapper, PokeImage, Image, Name, Level } from "./styles";

interface Props extends TouchableOpacityProps {
  data: PokemonEvolutionChainDTO;
  textColor: string;
  pokemonCurrentName: string;
  onDescriptionSelected: (descriptionType: string) => void;
}

export const PokeEvolution: FC<Props> = (props) => {
  const { textColor, pokemonCurrentName, onDescriptionSelected } = props;
  const { species_name, image_url, min_level, item } = props.data;

  const { fetchPokemon } = usePokemon();
  const { pokemonEvolutionChain } = usePokemonEvolution();

  const [evolutionType, setEvolutionType] = useState<string>("");

  const handlePokemon = useCallback(
    (pokemonName: string) => {
      fetchPokemon(pokemonName);
      onDescriptionSelected("info");
    },
    [pokemonEvolutionChain]
  );

  useEffect(() => {
    if (min_level) {
      setEvolutionType(`Level ${String(min_level)}`);
    } else if (item) {
      setEvolutionType(item?.name.replace("-", " "));
    }
  }, []);

  return (
    <Container
      onPress={() => handlePokemon(species_name)}
      enabled={species_name !== pokemonCurrentName}
    >
      <SubWrapper>
        <PokeImage>
          <Image
            source={{
              uri: image_url
                ? image_url
                : "https://img1.gratispng.com/20171220/dxe/question-mark-png-5a3a85e2667e64.6782850215137848024198.jpg",
            }}
          />
          <Name>{species_name}</Name>
        </PokeImage>

        <Level textColor={textColor}>{evolutionType}</Level>
      </SubWrapper>
    </Container>
  );
};
