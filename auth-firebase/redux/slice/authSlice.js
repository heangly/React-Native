import { createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

const initialState = {
  token: AsyncStorage.getItem('token') ?? '',
  isAuthenticated: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state, action) => {
      state.token = action.payload
      state.isAuthenticated = true
      AsyncStorage.setItem('token', state.token)
    },
    logout: (state) => {
      state.token = ''
      state.isAuthenticated = false
    }
  }
})

export const { authenticate, logout } = authSlice.actions

export default authSlice.reducer
