import { Fragment } from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Screens from './src/constants/Screens'
import HomeScreen from './src/screens/HomeScreen'
import FavoriteScreen from './src/screens/FavoriteScreen'
import NotificationScreen from './src/screens/NotificationScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const BottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName={Screens.home}>
      <Tab.Screen name={Screens.favorite} component={FavoriteScreen} />
      <Tab.Screen name={Screens.home} component={HomeScreen} />
      <Tab.Screen name={Screens.notification} component={NotificationScreen} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='DadJokeOverview'
            component={BottomTabs}
            options={{ headerLargeStyle: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style='auto' />
    </Fragment>
  )
}

export default App
