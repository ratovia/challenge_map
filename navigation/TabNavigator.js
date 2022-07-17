import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MapScreen } from "../screens/MapScreen"
import { PrefectureNavigator } from "./PrefectureNavigator"

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Prefecture" component={PrefectureNavigator} />
    </Tab.Navigator>
  )
}
