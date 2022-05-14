import { StatusBar } from 'expo-status-bar'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import AppLoading from 'expo-app-loading'

import AllPlaces from './src/screens/AllPlaces'
import AddPlace from './src/screens/AddPlace'
import IconButton from './src/components/UI/IconButton'
import { Colors } from './src/constants/Colors'
import { init } from './src/utils/database'

const Stack = createNativeStackNavigator()

const NavigationStack = () => {
  const navigation = useNavigation()

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: Colors.gray700,
        contentStyle: { backgroundColor: Colors.gray700 }
      }}
    >
      <Stack.Screen
        name='AllPlaces'
        component={AllPlaces}
        options={{
          title: 'Your Favorite Places',
          headerRight: ({ tintColor }) => (
            <IconButton
              icon='add'
              size={24}
              color={tintColor}
              onPress={() => navigation.navigate('AddPlace')}
            />
          )
        }}
      />
      <Stack.Screen
        name='AddPlace'
        component={AddPlace}
        options={{ title: 'Add a New Place' }}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  const [dbInsitialed, setDbInitialized] = useState(false)

  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true)
      })
      .catch((err) => {
        console.log(err)
        setDbInitialized(false)
      })
  }, [])

  if (!dbInsitialed) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </>
  )
}
