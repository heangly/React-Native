import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailScreen from './screens/MealDetailScreen'
import FavoriteScreen from './screens/FavoriteScreen'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#350401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: '#350401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1'
      }}
    >
      <Drawer.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name='list' />
          )
        }}
      />
      <Drawer.Screen
        name='Favorite'
        component={FavoriteScreen}
        options={{
          title: 'Favorite',
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name='star' />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
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
            name='Drawer'
            component={DrawerNavigator}
            // each individual screen
            options={{
              headerShown: false
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
            options={{ title: 'About the meal' }}
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
