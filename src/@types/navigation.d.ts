import { RentxRoutesList } from "./routes";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RentxRoutesList {}
  }
}