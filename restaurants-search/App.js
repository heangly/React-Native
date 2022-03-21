import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native'
import CategoryItem from './src/components/CategoryItem'
import Header from './src/components/Header'
import Search from './src/components/Search'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Search />
      <CategoryItem />
      <StatusBar style='auto' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 25
  }
})

export default App
