import { Text, FlatList } from 'react-native'

const renderExpenseItem = (item) => {
  return <Text>{item.description}</Text>
}

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={expenses}
      renderItem={({ item }) => renderExpenseItem(item)}
    />
  )
}

export default ExpensesList
