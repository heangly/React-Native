import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailScreen from './screens/MealDetailScreen'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          // apply to all screens as default
          screenOptions={{
            headerStyle: { backgroundColor: '#350401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}
        >
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            // each individual screen
            options={{
              title: 'All Categories'
            }}
          />
          <Stack.Screen
            name='MealOverview'
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const { categoryId } = route.params
            //   return {
            //     title: categoryId
            //   }
            // }}
          />
          <Stack.Screen
            name='MealDetail'
            component={MealDetailScreen}
            // options={{ headerRight: () => <Button title='Tab Me' /> }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='light' />
    </>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  }
})
