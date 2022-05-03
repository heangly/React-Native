import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { setExpenses } from '../redux/expeneseSlice'
import { getDateMinusDay } from '../util/date'
import { fetchExpenses } from '../util/http'

const RecentExpenses = () => {
  const { expenses } = useSelector((state) => state.expense)

  const dispatch = useDispatch()

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date()
    const date7DaysAgo = getDateMinusDay(today, 7)
    return expense.date >= date7DaysAgo
  })

  useEffect(() => {
    const getExpenses = async () => {
      const expenses = await fetchExpenses()
      dispatch(setExpenses(expenses))
    }
    getExpenses()
  }, [])

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod='Last 7 days'
      fallbackText='No Expenses For The Last 7 Days'
    />
  )
}

export default RecentExpenses
