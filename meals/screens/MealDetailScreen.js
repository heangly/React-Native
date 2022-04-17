import { Text } from 'react-native'

const MealDetailScreen = ({ route }) => {
  const { mealId } = route.params

  return <Text>MealDetailScreen {mealId}</Text>
}

export default MealDetailScreen
