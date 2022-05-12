import { StatusBar } from 'expo-status-bar'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AllPlaces from './src/screens/AllPlaces'
import AddPlace from './src/screens/AddPlace'
import IconButton from './src/components/UI/IconButton'

import { Colors } from './src/constants/Colors'
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
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </>
  )
}
