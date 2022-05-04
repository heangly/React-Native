import axios from 'axios'

const BASE_URL = 'https://expense-tracker-986cd-default-rtdb.firebaseio.com'
const EXPENSES_END_POINT = '/expenses.json'

export const storeExpense = async (expenseData) => {
  const response = await axios.post(BASE_URL + EXPENSES_END_POINT, expenseData)
  const id = response.data.name
  return id
}

export const fetchExpenses = async () => {
  const response = await axios.get(BASE_URL + EXPENSES_END_POINT)
  const expenses = []

  for (const key in response.data) {
    expenses.push({
      id: key,
      ...response.data[key],
      date: new Date(response.data[key].date)
    })
  }

  return expenses
}

export const updateSpecificExpense = (id, expenseData) => {
  return axios.put(BASE_URL + `/expenses/${id}.json`, expenseData)
}

export const deleteSpecificExpense = (id) => {
  return axios.delete(BASE_URL + `/expenses/${id}.json`)
}
