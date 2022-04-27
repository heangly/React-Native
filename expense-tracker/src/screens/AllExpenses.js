import { useSelector } from 'react-redux'

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

const AllExpenses = () => {
  const { expenses } = useSelector((state) => state.expense)

  return (
    <ExpensesOutput
      expenses={expenses}
      expensesPeriod='Total'
      fallbackText='No Expenses Registered'
    />
  )
}

export default AllExpenses
