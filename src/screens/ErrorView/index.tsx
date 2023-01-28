import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import { Container, Header, Image, ErrorTitle, BackButton } from "./styles";

export const ErrorView: FC = () => {
  const { goBack } = useNavigation();
  const theme = useTheme();

  const onBackPress = () => goBack();

  return (
    <Container>
      <Header>
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png",
          }}
        />
        <ErrorTitle>Ops..., ocorrer um erro!</ErrorTitle>
      </Header>

      <BackButton activeOpacity={0.7} onPress={onBackPress}>
        <Feather name="check" size={24} color={theme.colors.pokedex} />
      </BackButton>
    </Container>
  );
};
