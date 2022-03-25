import CategoryItem from './CategoryItem'
import { FlatList, View } from 'react-native'

const Categories = ({ commonCategories, setTerm, term }) => {
  return (
    <View>
      <FlatList
        style={{ paddingHorizontal: 5 }}
        data={commonCategories}
        renderItem={({ item }) => (
          <CategoryItem
            {...item}
            active={item.name === term}
            setTerm={setTerm}
          />
        )}
        horizontal
        keyExtractor={(item) => item.name}
        decelerationRate={0}
        snapToInterval={80} //your element width
        snapToAlignment={'center'}
      />
    </View>
  )
}

export default Categories
