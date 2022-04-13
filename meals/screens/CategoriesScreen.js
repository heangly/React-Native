import { FlatList } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'

import { CATEGORIES } from '../data/dummy-data'

const renderCategoryItem = (item, navigation) => {
  const pressHandler = () => {
    navigation.navigate('MealOverview', {
      categoryId: item.id
    })
  }

  return (
    <CategoryGridTile
      title={item.title}
      color={item.color}
      pressHandler={pressHandler}
    />
  )
}

const CategoriesScreen = ({ navigation }) => {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={CATEGORIES}
      renderItem={({ item }) => renderCategoryItem(item, navigation)}
      numColumns={2}
    />
  )
}

export default CategoriesScreen
