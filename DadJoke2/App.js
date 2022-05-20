import { Fragment } from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'

import TabNavigator from './src/navigations/TabNavigator'

const App = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>

      <StatusBar style='auto' />
    </Fragment>
  )
}

export default App
