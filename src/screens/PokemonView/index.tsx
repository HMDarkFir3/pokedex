import * as React from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components";

//Hooks
import { usePoke } from "../../hooks/usePoke";

//Utils
import { pokeTypeColor } from "../../utils/pokeTypeColor";

//Styles
import {
  Container,
  Header,
  BackButton,
  BackIcon,
  FavoriteButton,
  FavoriteIcon,
  Content,
  PokemonName,
  LoadingContainer,
  Loading,
} from "./styles";

const PokemonView: React.FC = () => {
  //Hooks
  const { pokemon, pokemonType, loading } = usePoke();

  //Navigation Hook
  const { goBack } = useNavigation();

  //Theme Hook
  const theme = useTheme();

  //States
  const [color, setColor] = React.useState<string>("");

  function handleGoBack() {
    goBack();
  }

  useFocusEffect(
    React.useCallback(() => {
      const types = pokemonType.map((type) => type.type.name);
      setColor(`${pokeTypeColor[types[0]]}`);
    }, [pokemonType])
  );

  if (loading) {
    return (
      <LoadingContainer>
        <Loading size="large" color={theme.colors.text} />
      </LoadingContainer>
    );
  }

  return (
    <Container color={color}>
      <Header>
        <BackButton activeOpacity={0.7} onPress={handleGoBack}>
          <BackIcon name="chevron-left" />
        </BackButton>

        <FavoriteButton activeOpacity={0.7}>
          <FavoriteIcon name="heart" />
        </FavoriteButton>
      </Header>

      <Content>
        <PokemonName>{pokemon.name}</PokemonName>
      </Content>
    </Container>
  );
};

export default PokemonView;
