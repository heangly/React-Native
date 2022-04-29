import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  expenses: [
    {
      id: 'e1',
      description: 'A pair of shoes',
      amount: 59.99,
      date: new Date('2021-12-19')
    },
    {
      id: 'e2',
      description: 'A pair of trousers',
      amount: 99.99,
      date: new Date('2022-01-05')
    },
    {
      id: 'e3',
      description: 'Some bananas',
      amount: 5.99,
      date: new Date('2021-12-01')
    },
    {
      id: 'e4',
      description: 'A book',
      amount: 18.99,
      date: new Date('2022-04-20')
    },
    {
      id: 'e5',
      description: 'Another book',
      amount: 14.59,
      date: new Date('2022-04-22')
    },
    {
      id: 'e6',
      description: 'A pair of shoes',
      amount: 59.99,
      date: new Date('2021-12-19')
    },
    {
      id: 'e7',
      description: 'A pair of trousers',
      amount: 99.99,
      date: new Date('2022-01-05')
    },
    {
      id: 'e8',
      description: 'Some bananas',
      amount: 5.99,
      date: new Date('2021-12-01')
    },
    {
      id: 'e9',
      description: 'A book',
      amount: 18.99,
      date: new Date('2022-02-19')
    },
    {
      id: 'e10',
      description: 'Another book',
      amount: 14.59,
      date: new Date('2022-02-22')
    }
  ]
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
    }
  }
})

export const { addExpense, deleteExpense, updateExpense } = expenseSlice.actions

export default expenseSlice.reducer