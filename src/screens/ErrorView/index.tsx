import React, { FC } from "react";

import { Container, Image, ErrorTitle } from "./styles";

export const ErrorView: FC = () => {
  return (
    <Container>
      <Image
        source={{
          uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png",
        }}
      />
      <ErrorTitle>Ops..., ocorrer um erro!</ErrorTitle>
    </Container>
  );
};
