import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{ title: 'Home' }}
          />
          <Stack.Screen
            name='MealOverview'
            component={MealsOverviewScreen}
            options={{ title: 'Overview' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='dark' />
    </>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  }
})
