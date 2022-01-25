import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

//Styles
import { Container, Button } from "./styles";

//Icons
import { Feather } from "@expo/vector-icons";

//Interfaces
interface Props {
  leftIcon?: React.ComponentProps<typeof Feather>["name"];
  rightIcon?: React.ComponentProps<typeof Feather>["name"];
  backgroundColor: string;
}

const Header: React.FC<Props> = (props) => {
  const { leftIcon, rightIcon, backgroundColor } = props;

  //Navigation Hook
  const { goBack } = useNavigation();

  //Theme Hook
  const theme = useTheme();

  function handleGoBack() {
    goBack();
  }

  return (
    <Container backgroundColor={backgroundColor}>
      <Button activeOpacity={0.7} onPress={handleGoBack}>
        <Feather
          name={leftIcon}
          size={RFValue(24)}
          color={theme.colors.icon_color}
        />
      </Button>

      <Button activeOpacity={0.7}>
        <Feather
          name={rightIcon}
          size={RFValue(24)}
          color={theme.colors.icon_color}
        />
      </Button>
    </Container>
  );
};

export default Header;
