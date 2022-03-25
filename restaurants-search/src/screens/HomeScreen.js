import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Restaurants from '../components/Restaurants'
import Search from '../components/Search'

const HomeScreen = () => {
  const commonCategories = [
    {
      name: 'Burger',
      imageURL: require('../assets/images/burger.png')
    },
    {
      name: 'Pizza',
      imageURL: require('../assets/images/pizza.png')
    },
    {
      name: 'Dessert',
      imageURL: require('../assets/images/cake.png')
    },
    {
      name: 'Drink',
      imageURL: require('../assets/images/smoothies.png')
    },
    {
      name: 'Steak',
      imageURL: require('../assets/images/steak.png')
    },
    {
      name: 'Pasta',
      imageURL: require('../assets/images/pasta.png')
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
      <Restaurants term={term} />
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

export default HomeScreen
