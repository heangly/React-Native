import { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList
} from 'react-native'
import yelp from '../api/yelp'
import RestaurantItem from './RestaurantItem'

const Restaurants = ({ term }) => {
  const [results, setResults] = useState({
    data: null,
    loading: false,
    error: null
  })

  const searchRestaurants = async (searchTerm) => {
    setResults({
      data: null,
      loading: true,
      error: null
    })
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 15,
          term: searchTerm,
          location: 'Ottawa'
        }
      })
      setResults({
        data: response.data.businesses,
        loading: false,
        error: null
      })
    } catch (error) {
      setResults({
        data: null,
        loading: false,
        error: 'Something went wrong'
      })
    }
  }

  useEffect(() => {
    searchRestaurants(term)
  }, [term])

  if (results.loading) {
    return <ActivityIndicator size='large' marginVertical={30} />
  }

  if (results.error) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{results.error}</Text>
      </View>
    )
  }

  if (!results.data?.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Found 0 result</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
      <FlatList
        data={results.data}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 10
  }
})

export default Restaurants
