import { FC } from "react";
import { StatusBar } from "expo-status-bar";

import { AppRoutes } from "@routes/app.routes";

export const Routes: FC = () => {
  return (
    <>
      <StatusBar />
      <AppRoutes />
    </>
  );
};
