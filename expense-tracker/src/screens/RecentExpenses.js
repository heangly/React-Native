import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import ErrorOverlay from '../components/UI/ErrorOverlay'
import LoadingOverlay from '../components/UI/LoadingOverlay'
import { setExpenses } from '../redux/expeneseSlice'
import { getDateMinusDay } from '../util/date'
import { fetchExpenses } from '../util/http'

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState(null)

  const { expenses } = useSelector((state) => state.expense)

  const dispatch = useDispatch()

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date()
    const date7DaysAgo = getDateMinusDay(today, 7)
    return expense.date >= date7DaysAgo
  })

  const errorHandler = () => {
    setError(null)
  }

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true)
      try {
        const expenses = await fetchExpenses()
        dispatch(setExpenses(expenses))
      } catch (error) {
        setError('Could not fetch expenses!')
      }
      setIsFetching(false)
    }
    getExpenses()
  }, [])

  if (isFetching) return <LoadingOverlay />

  if (error && !isFetching)
    return <ErrorOverlay message={error} onConfirm={errorHandler} />

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod='Last 7 days'
      fallbackText='No Expenses For The Last 7 Days'
    />
  )
}

export default RecentExpenses
