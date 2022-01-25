import * as React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

//Styles
import { Container, SettingsButton, SettingsIcon } from "./styles";

//Interfaces
interface Props extends NativeStackHeaderProps {}

const Header: React.FC<Props> = () => {
  return (
    <Container>
      <SettingsButton activeOpacity={0.7}>
        <SettingsIcon name="settings" />
      </SettingsButton>
    </Container>
  );
};

export default Header;
