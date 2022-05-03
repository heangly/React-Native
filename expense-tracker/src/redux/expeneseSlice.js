import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  expenses: []
}

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload)
    },

    updateExpense: (state, action) => {
      for (const expense of state.expenses) {
        if (expense.id === action.payload.id) {
          expense.description = action.payload.description
          expense.amount = action.payload.amount
          expense.date = action.payload.date
          return
        }
      }
    },

    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      )
    },

    setExpenses: (state, action) => {
      state.expenses = action.payload
    }
  }
})

export const { addExpense, deleteExpense, updateExpense, setExpenses } =
  expenseSlice.actions

export default expenseSlice.reducer
