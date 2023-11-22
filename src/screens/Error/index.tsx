import { useMemo, FC } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Check } from "phosphor-react-native";

import { Container, Wrapper, Image, Title, BackButton } from "./styles";

interface Params {
  message: string;
}

export const Error: FC = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute();
  const { message } = params as Params;
  const theme = useTheme();

  const onBackPress = () => goBack();

  const randomPokemon = useMemo(() => Math.floor(Math.random() * 898) + 1, []);

  return (
    <Container>
      <Wrapper>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${randomPokemon}.png`,
          }}
        />
        <Title>Ops..., {message}</Title>
      </Wrapper>

      <BackButton onPress={onBackPress}>
        <Check size={24} color={theme.colors.text100} weight="bold" />
      </BackButton>
    </Container>
  );
};
