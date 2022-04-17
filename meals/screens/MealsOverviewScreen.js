import { useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native'
import MealItem from '../components/MealItem'
import { MEALS, CATEGORIES } from '../data/dummy-data'

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params

  const displayMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  )

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === categoryId
  ).title

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle
    })
  }, [categoryId, navigation])

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItem
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            affordability={item.affordability}
            complexity={item.complexity}
            duration={item.duration}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})

export default MealsOverviewScreen
