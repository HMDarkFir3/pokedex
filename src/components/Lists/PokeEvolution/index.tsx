import * as React from "react";
import { TouchableOpacityProps } from "react-native";

//DTOS
import { PokemonEvolutionChainDTO } from "../../../dtos";

//Hooks
import { usePokemon } from "../../../hooks/usePokemon";
import { usePokemonEvolution } from "../../../hooks/usePokemonEvolution";

//Styles
import {
  Container,
  Wrapper,
  SubWrapper,
  PokeImage,
  Image,
  Name,
  Level,
} from "./styles";

//Interfaces
interface Props extends TouchableOpacityProps {
  data: PokemonEvolutionChainDTO;
  backgroundColor: string;
  pokemonCurrentName: string;
  handleDescriptionSelected: (descriptionType: string) => void;
}

const PokeEvolution: React.FC<Props> = (props) => {
  const { backgroundColor, pokemonCurrentName, handleDescriptionSelected } =
    props;
  const { species_name, image_url, min_level, item } = props.data;

  //Hooks
  const { fetchPokemon } = usePokemon();
  const { pokemonEvolutionChain } = usePokemonEvolution();

  const handlePokemon = React.useCallback(
    (pokemonName: string) => {
      fetchPokemon(pokemonName);
      handleDescriptionSelected("info");
    },
    [pokemonEvolutionChain]
  );

  return (
    <Container>
      <Wrapper
        activeOpacity={0.7}
        onPress={() => handlePokemon(species_name)}
        disabled={species_name === pokemonCurrentName}
      >
        <SubWrapper>
          <PokeImage>
            <Image source={{ uri: image_url }} />
            <Name>{species_name}</Name>
          </PokeImage>

          <Level backgroundColor={backgroundColor}>
            {!!min_level ? `Level ${min_level}` : item?.name.replace("-", " ")}
          </Level>
        </SubWrapper>
      </Wrapper>
    </Container>
  );
};

export default PokeEvolution;
