import CategoryItem from './Categories'
import { FlatList } from 'react-native'

const Categories = ({ commonCategories, setTerm, term }) => {
  return (
    <FlatList
      data={commonCategories}
      renderItem={({ item }) => (
        <CategoryItem {...item} active={item.name === term} setTerm={setTerm} />
      )}
      horizontal
      keyExtractor={(item) => item.name}
      decelerationRate={0}
      snapToInterval={80} //your element width
      snapToAlignment={'center'}
    />
  )
}

export default Categories
