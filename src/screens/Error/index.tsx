import { useMemo, FC } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Check } from "phosphor-react-native";

import { SmallButton } from "@/components/Buttons/SmallButton";

import { Container, Wrapper, Image, Title } from "./styles";

interface Params {
  message: string;
}

export const Error: FC = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute();
  const { message } = params as Params;

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

      <SmallButton icon={Check} onPress={onBackPress} />
    </Container>
  );
};
