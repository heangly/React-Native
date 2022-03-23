import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native'
import Header from './src/components/Header'
import Search from './src/components/Search'
import { useState } from 'react'
import Categories from './src/components/Categories'

const App = () => {
  const commonCategories = [
    {
      name: 'Burger',
      imageURL: require('./src/assets/images/burger.png')
    },
    {
      name: 'Pizza',
      imageURL: require('./src/assets/images/pizza.png')
    },
    {
      name: 'Dessert',
      imageURL: require('./src/assets/images/cake.png')
    },
    {
      name: 'Drink',
      imageURL: require('./src/assets/images/smoothies.png')
    },
    {
      name: 'Steak',
      imageURL: require('./src/assets/images/steak.png')
    },
    {
      name: 'Pasta',
      imageURL: require('./src/assets/images/pasta.png')
    }
  ]

  const [term, setTerm] = useState('Burger')

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      <Categories
        commonCategories={commonCategories}
        term={term}
        setTerm={setTerm}
      />
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
