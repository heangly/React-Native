import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, AntDesign } from '@expo/vector-icons'

import Screens from '../constants/Screens'
import {
  FavoriteScreenNavigator,
  HomeScreenNavigator,
  NotificationScreenNavigator
} from './StackNavigator'
import Colors from '../constants/Colors'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Screens.homeTab}
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: Colors.primary },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black'
      }}
    >
      <Tab.Screen
        name={Screens.favoriteTab}
        component={FavoriteScreenNavigator}
        options={{
          title: Screens.favorite,
          tabBarIcon: ({ color, focused, size }) => (
            <AntDesign
              name={focused ? 'heart' : 'hearto'}
              size={size}
              color={color}
            />
          )
        }}
      />
      <Tab.Screen
        name={Screens.homeTab}
        component={HomeScreenNavigator}
        options={{
          title: Screens.home,
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? 'ios-home-sharp' : 'ios-home-outline'}
              size={size}
              color={color}
            />
          )
        }}
      />
      <Tab.Screen
        name={Screens.notificationTab}
        component={NotificationScreenNavigator}
        options={{
          title: Screens.notification,
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? 'notifications-sharp' : 'notifications-outline'}
              size={size}
              color={color}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
