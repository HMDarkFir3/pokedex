import * as React from "react";

//Hooks
import { usePokemonEvolution } from "../../hooks/usePokemonEvolution";

//Styles
import {
  Container,
  Wrapper,
  SubWrapper,
  Image,
  SeparatorWrapper,
  Separator,
  Name,
  LevelWrapper,
  Level,
} from "./styles";

//Interfaces
interface Props {
  backgroundColor: string;
}

const PokeEvolutionChain: React.FC<Props> = (props) => {
  const { backgroundColor: textColor } = props;

  //Hooks
  const { pokemonEvolutionChain } = usePokemonEvolution();

  console.log(pokemonEvolutionChain);

  return (
    <>
      <Container>
        {pokemonEvolutionChain.map((evolution) => (
          <Wrapper key={String(evolution.species_name)}>
            <SubWrapper>
              <Image source={{ uri: evolution?.image_url }} />
            </SubWrapper>

            <SeparatorWrapper>
              <Name textColor={textColor}>{evolution.species_name}</Name>
              <Separator textColor={textColor} />
            </SeparatorWrapper>

            <LevelWrapper>
              <Level>
                {!!evolution.min_level
                  ? `Level ${evolution.min_level}`
                  : evolution.item?.name.replace("-", "\n")}
              </Level>
            </LevelWrapper>
          </Wrapper>
        ))}
      </Container>
    </>
  );
};

export default PokeEvolutionChain;
