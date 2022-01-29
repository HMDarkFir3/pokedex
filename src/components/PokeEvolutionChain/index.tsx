import * as React from "react";

//Hooks
import { usePokemon } from "../../hooks/usePokemon";
import { usePokemonEvolution } from "../../hooks/usePokemonEvolution";

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
interface Props {
  backgroundColor: string;
  pokemonCurrentName: string;
  handleDescriptionSelected: (descriptionType: string) => void;
}

const PokeEvolutionChain: React.FC<Props> = (props) => {
  const { backgroundColor, pokemonCurrentName, handleDescriptionSelected } =
    props;

  //Hooks
  const { fetchPokemon } = usePokemon();
  const { pokemonEvolutionChain } = usePokemonEvolution();

  const handlePokemon = React.useCallback(
    (pokemonName: string) => {
      if (pokemonName) fetchPokemon(pokemonName);
      handleDescriptionSelected("info");
    },
    [pokemonEvolutionChain]
  );

  return (
    <>
      <Container>
        {pokemonEvolutionChain.map(
          (evolution, index) =>
            index !== 0 && (
              <Wrapper
                key={evolution.species_name}
                activeOpacity={0.7}
                onPress={() => handlePokemon(evolution.species_name)}
                disabled={evolution.species_name === pokemonCurrentName}
              >
                <SubWrapper>
                  <PokeImage>
                    <Image source={{ uri: evolution.image_url }} />
                    <Name backgroundColor={backgroundColor}>
                      {evolution.species_name}
                    </Name>
                  </PokeImage>

                  <Level>
                    {!!evolution.min_level
                      ? `Level ${evolution.min_level}`
                      : evolution.item.name.replace("-", " ")}
                  </Level>
                </SubWrapper>
              </Wrapper>
            )
        )}
      </Container>
    </>
  );
};

export default PokeEvolutionChain;
