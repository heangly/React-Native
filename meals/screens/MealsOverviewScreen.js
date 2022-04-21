import { useLayoutEffect } from 'react'

import MealList from '../components/MealsList/MealList'
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

  return <MealList items={displayMeals} />
}

export default MealsOverviewScreen
