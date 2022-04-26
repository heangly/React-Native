import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { store } from './src/redux/store'
import { Provider } from 'react-redux'

import AllExpenses from './src/screens/AllExpenses'
import ManageExpenses from './src/screens/ManageExpenses'
import RecentExpenses from './src/screens/RecentExpenses'
import IconButton from './src/components/UI/IconButton'
import { GlobalStyles } from './src/constants/styles'

const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator()

const ExpensesOverview = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon='add'
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageExpenses')
            }}
          />
        )
      })}
    >
      <BottomTab.Screen
        name='RecentExpenses'
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='hourglass' color={color} size={size} />
          )
        }}
      />
      <BottomTab.Screen
        name='AllExpenses'
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' color={color} size={size} />
          )
        }}
      />
    </BottomTab.Navigator>
  )
}

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: 'white'
            }}
          >
            <Stack.Screen
              name='ExpensesOverview'
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='ManageExpenses'
              component={ManageExpenses}
              options={{
                presentation: 'modal'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      <StatusBar style='light' />
    </>
  )
}
