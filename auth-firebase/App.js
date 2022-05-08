import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { Provider, useDispatch, useSelector } from 'react-redux'

import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import { Colors } from './constants/styles'
import { store } from './redux/store'
import IconButton from './components/ui/IconButton'
import { getTokenInStorage, logout } from './redux/slice/authSlice'
import { useEffect } from 'react'

const Stack = createNativeStackNavigator()

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 }
      }}
    >
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Signup' component={SignupScreen} />
    </Stack.Navigator>
  )
}

function AuthenticatedStack() {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 }
      }}
    >
      <Stack.Screen
        name='Welcome'
        component={WelcomeScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon='exit'
              color={tintColor}
              size={24}
              onPress={logoutHandler}
            />
          )
        }}
      />
    </Stack.Navigator>
  )
}

function Navigation() {
  const dispatch = useDispatch()
  const { auth } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getTokenInStorage())
  }, [])

  return (
    <NavigationContainer>
      {auth.isAuthenticated && <AuthenticatedStack />}
      {!auth.isAuthenticated && <AuthStack />}
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  )
}
