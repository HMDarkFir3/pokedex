import * as React from "react";

//Hooks
import { usePokemonEvolution } from "../../hooks/usePokemonEvolution";

//Styles
import { Container, Name } from "./styles";

//Interfaces
interface Props {
  backgroundColor: string;
}

const PokeEvolutionChain: React.FC<Props> = (props) => {
  const { backgroundColor } = props;

  //Hooks
  const { pokemonEvolutionChain } = usePokemonEvolution();

  return (
    <>
      {pokemonEvolutionChain.map((evolution) => (
        <Container key={evolution.species_name}>
          <Name>{evolution.species_name}</Name>
        </Container>
      ))}
    </>
  );
};

export default PokeEvolutionChain;
