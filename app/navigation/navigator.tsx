import * as React from "react"
import { observer } from "mobx-react"
// @ts-ignore: until they update @type/react-navigation
import { createAppContainer } from "react-navigation"
import { RootNavigator } from "./root-navigator"

export const Navigator: React.FunctionComponent<{}> = observer(() => {
  const Navigator = createAppContainer(RootNavigator)

  return <Navigator/>
})
