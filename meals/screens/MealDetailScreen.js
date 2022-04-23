import { Image, StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import { useContext, useLayoutEffect } from 'react'

import MealDetails from '../components/MealDetails'
import { MEALS } from '../data/dummy-data'
import IconButton from '../components/IconButton'
import { FavoritesContext } from '../store/context/favorites-context'
import List from '../components/MealDetail/List'
import Subtitle from '../components/MealDetail/Subtitle'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite } from '../store/redux/favorite'

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params
  // const favoriteMealContext = useContext(FavoritesContext)
  const dispatch = useDispatch()
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.id)

  const mealIsFavorite = favoriteMealIds.includes(mealId)

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  const changeFavoriteStatusHandler = () => {
    console.log(mealId)
    if (mealIsFavorite) {
      // favoriteMealContext.removeFavorite(mealId)
      dispatch(removeFavorite({ id: mealId }))
    } else {
      // favoriteMealContext.addFavorite(mealId)
      dispatch(addFavorite({ id: mealId }))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          onPress={changeFavoriteStatusHandler}
          icon={mealIsFavorite ? 'star' : 'star-outline'}
          color='white'
        />
      )
    })
  }, [navigation, changeFavoriteStatusHandler])

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },

  image: {
    width: '100%',
    height: 350
  },

  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },

  detailText: {
    color: 'white'
  },

  listOuterContainer: {
    alignItems: 'center'
  },

  listContainer: {
    maxWidth: '80%'
  }
})

export default MealDetailScreen
