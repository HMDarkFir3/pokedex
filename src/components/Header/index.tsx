import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { CaretLeft } from "phosphor-react-native";

import { Container, Button } from "./styles";

interface Props {
  iconColor: string;
}

export const Header: FC<Props> = (props) => {
  const { iconColor } = props;

  const { goBack } = useNavigation();

  const onPressBack = () => goBack();

  return (
    <Container>
      <Button activeOpacity={0.7} onPress={onPressBack}>
        <CaretLeft size={24} color={iconColor} />
      </Button>
    </Container>
  );
};
