import { FC } from "react";
import { View } from "react-native";

import { useTheme } from "styled-components/native";

import { AppRoutes } from "@/routes/app.routes";

export const Routes: FC = () => {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <AppRoutes />
    </View>
  );
};
