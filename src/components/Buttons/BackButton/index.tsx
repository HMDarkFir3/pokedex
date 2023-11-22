import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { CaretLeft } from "phosphor-react-native";

import { Container } from "./styles";

interface Props {
  iconColor: string;
}

export const BackButton: FC<Props> = (props) => {
  const { iconColor } = props;

  const { goBack } = useNavigation();

  const onPressBack = () => goBack();

  return (
    <Container onPress={onPressBack}>
      <CaretLeft size={24} color={iconColor} />
    </Container>
  );
};
