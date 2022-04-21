import { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import MealList from '../components/MealsList/MealList'
import { MEALS } from '../data/dummy-data'
import { FavoritesContext } from '../store/context/favorites-context'

const FavoriteScreen = () => {
  const favoriteMealsContext = useContext(FavoritesContext)

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsContext.id.includes(meal.id)
  )

  if (!favoriteMeals.length) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You do not have any favorite meals yet!</Text>
      </View>
    )
  }

  return <MealList items={favoriteMeals} />
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default FavoriteScreen
