import { FlatList } from 'react-native'

import ExpenseItem from './ExpenseItem'

const renderExpenseItem = (item) => {
  return <ExpenseItem {...item} />
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
