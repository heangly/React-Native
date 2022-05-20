import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Screens from '../constants/Screens'
import FavoriteScreen from '../screens/FavoriteScreen'
import HomeScreen from '../screens/HomeScreen'
import NotificationScreen from '../screens/NotificationScreen'

const Stack = createNativeStackNavigator()

export const FavoriteScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.favorite}
        component={FavoriteScreen}
        options={{ headerLargeTitle: true }}
      />
    </Stack.Navigator>
  )
}

export const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.home}
        component={HomeScreen}
        options={{ headerLargeTitle: true }}
      />
    </Stack.Navigator>
  )
}

export const NotificationScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.notification}
        component={NotificationScreen}
        options={{ headerLargeTitle: true }}
      />
    </Stack.Navigator>
  )
}
