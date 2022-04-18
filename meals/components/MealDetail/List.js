import { StyleSheet, Text, View } from 'react-native'

const List = ({ data }) => {
  return selectedMeal.ingredients.map((dataPoint) => (
    <View>
      <Text key={dataPoint}>{dataPoint}</Text>
    </View>
  ))
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontala: 12,
    backgroundColor: '#e2b487'
  }
})

export default List
