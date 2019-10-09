import { createSwitchNavigator } from "react-navigation"
import { PrimaryNavigator, SecondaryNavigator } from "./navigators"
import { AuthLoadingScreen } from "../screens/auth-loading-screen"

export const RootNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    User: PrimaryNavigator,
    Admin: SecondaryNavigator,
  },
  {
    initialRouteName: "AuthLoading"
  },
)
