import axios from 'axios'

const API_KEY = 'AIzaSyBT-3fqHQGQ4fIZpCzORjOuwZmmFaSfCkA'

const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`

  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true
  })

  return response
}

export const createUser = async (email, password) => {
  const response = await authenticate('signUp', email, password)
  return response
}
export const login = async (email, password) => {
  const response = await authenticate('signInWithPassword', email, password)
  return response
}
