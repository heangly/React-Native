import { Image, StyleSheet, Text, View } from 'react-native'
import Subtitle from '../components/MealDetail/Subtitle'

import MealDetails from '../components/MealDetails'
import { MEALS } from '../data/dummy-data'

const MealDetailScreen = ({ route }) => {
  const { mealId } = route.params

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  return (
    <View>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />

      <Subtitle>Ingredients</Subtitle>

      <Subtitle>Steps</Subtitle>
      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
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
  }
})

export default MealDetailScreen
