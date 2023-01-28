import styled from "styled-components/native";

interface LevelProps {
  backgroundColor: string;
}

interface NotEvolution {
  backgroundColor: string;
}

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 100%;

  margin-bottom: 20px;
`;

export const SubWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PokeImage = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 90px;
  height: 90px;
`;

export const Name = styled.Text`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.components.pokeEvolution.text};
`;

export const Level = styled.Text<LevelProps>`
  margin-left: 20px;

  text-transform: capitalize;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  color: ${({ backgroundColor }) => backgroundColor};
`;

export const NotEvolution = styled.View<NotEvolution>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  color: ${({ backgroundColor }) => backgroundColor};
`;
