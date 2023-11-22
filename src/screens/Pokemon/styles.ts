import styled from "styled-components/native";
import Animated from "react-native-reanimated";

interface ContainerProps {
  backgroundColor: string;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;

  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Content = styled.View`
  width: 100%;

  padding: 0 20px;
`;

export const Wrapper = styled.View`
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const Title = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const Name = styled.Text`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 40px;
  color: ${({ theme }) => theme.colors.text100};
`;

export const Index = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text100};
`;

export const TypeWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const AnimatedImage = styled(Animated.View)`
  position: absolute;
  top: 65px;
  align-self: center;

  z-index: 10;
`;

export const Image = styled.Image`
  width: 220px;
  height: 220px;
`;

export const Descriptions = styled(Animated.View)`
  flex: 1;

  width: 100%;
  height: 100%;

  margin-top: 154px;

  background-color: ${({ theme }) => theme.colors.background};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`;

export const DescriptionsWrapper = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const DescritionButtonWrapper = styled.View`
  margin-bottom: 20px;
`;
