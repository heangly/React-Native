import { useSelector } from 'react-redux'

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { getDateMinusDay } from '../util/date'

const RecentExpenses = () => {
  const { expenses } = useSelector((state) => state.expense)

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date()
    const date7DaysAgo = getDateMinusDay(today, 7)
    return expense.date >= date7DaysAgo
  })

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod='Last 7 days'
      fallbackText='No Expenses For The Last 7 Days'
    />
  )
}

export default RecentExpenses
