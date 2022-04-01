import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native'
import Goal from './Components/Goal/Goal'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Goal />
      <StatusBar barStyle='light-content' backgroundColor='transparent' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 0
  }
})
