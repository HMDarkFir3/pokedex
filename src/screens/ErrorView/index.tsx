import { FC } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Check } from "phosphor-react-native";

import { Container, Header, Image, ErrorTitle, BackButton } from "./styles";

interface Params {
  message: string;
}

export const ErrorView: FC = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute();
  const { message } = params as Params;
  const theme = useTheme();

  const onBackPress = () => goBack();

  const randomPokemon = Math.round(Math.random() * 1000);

  return (
    <Container>
      <Header>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${randomPokemon}.png`,
          }}
        />
        <ErrorTitle>Ops..., {message}</ErrorTitle>
      </Header>

      <BackButton activeOpacity={0.7} onPress={onBackPress}>
        <Check
          size={24}
          color={theme.colors.screens.errorView.icon}
          weight="bold"
        />
      </BackButton>
    </Container>
  );
};
