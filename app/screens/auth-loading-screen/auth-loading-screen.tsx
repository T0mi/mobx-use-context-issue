import * as React from "react"
import { Screen } from "../../components/screen"
import { NavigationScreenProps } from "react-navigation"
import { observer } from "mobx-react"
import * as storage from "../../utils/storage"
import {
  AUTH_NAV,
  ADMIN,
  ADMIN_NAV,
  USER,
  USER_NAV,
  STORAGE_TOKEN_KEY,
  STORAGE_USER_KEY,
} from "../../utils/constants"
import { useStores } from "../../models/root-store"
import reactotron from "reactotron-react-native"


class InnerAuthLoadingScreen extends React.Component<NavigationScreenProps> {
  componentDidMount(): void {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const user = await storage.load(STORAGE_USER_KEY);
    const token = await storage.load(STORAGE_TOKEN_KEY);

    reactotron.log(useStores());

    let destination = USER_NAV;

    if (token && user) {
      if (user.type === USER) {
        destination = USER_NAV;
      } else if (user.type === ADMIN) {
        destination = ADMIN_NAV;
      } else {
        await storage.remove(STORAGE_USER_KEY);
        await storage.remove(STORAGE_TOKEN_KEY);
      }
    }

    this.props.navigation.navigate(destination);
  }

  render() {
    return (
      <Screen preset="scroll">
        {/* TODO: Loading placeholder */}
      </Screen>
    )
  }
}

export const AuthLoadingScreen = observer(InnerAuthLoadingScreen)
