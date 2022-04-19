import { Image, StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import List from '../components/MealDetail/List'
import Subtitle from '../components/MealDetail/Subtitle'
import { useLayoutEffect } from 'react'

import MealDetails from '../components/MealDetails'
import { MEALS } from '../data/dummy-data'
import IconButton from '../components/IconButton'

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)
  const headerButtonPressHanlder = () => {
    console.log('pressed')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          onPress={headerButtonPressHanlder}
          icon='star'
          color='white'
        />
      )
    })
  })

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
