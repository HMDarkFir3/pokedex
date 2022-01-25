import { RoutesProps } from "../../routes";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RoutesProps {}
  }
}
