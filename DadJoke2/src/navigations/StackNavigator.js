import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Screens from '../constants/Screens'
import FavoriteScreen from '../screens/FavoriteScreen'
import HomeScreen from '../screens/HomeScreen'
import NotificationScreen from '../screens/NotificationScreen'
import Colors from '../constants/Colors'

const Stack = createNativeStackNavigator()

const NavigatorFactory = ({ name, component, options }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={name}
        component={component}
        options={{
          headerLargeTitle: true,
          headerTintColor: 'black',
          headerStyle: { backgroundColor: Colors.primary },
          contentStyle: { backgroundColor: Colors.secondary },
          ...options
        }}
      />
    </Stack.Navigator>
  )
}

export const FavoriteScreenNavigator = () => {
  return <NavigatorFactory name={Screens.favorite} component={FavoriteScreen} />
}

export const HomeScreenNavigator = () => {
  return <NavigatorFactory name={Screens.home} component={HomeScreen} />
}

export const NotificationScreenNavigator = () => {
  return (
    <NavigatorFactory
      name={Screens.notification}
      component={NotificationScreen}
    />
  )
}
