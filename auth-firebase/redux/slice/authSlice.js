import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

const initialState = {
  token: '',
  isAuthenticated: false
}

export const getTokenInStorage = createAsyncThunk(
  'auth/getAuthInStorage',
  async (_, thunkAPI) => {
    try {
      const response = await AsyncStorage.getItem('token')
      return response
    } catch (error) {
      const message =
        error.response?.data?.message ?? error.message ?? error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

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
      AsyncStorage.clear()
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getTokenInStorage.fulfilled, (state, action) => {
      state.token = action.payload
      state.isAuthenticated = !!state.token
    })
  }
})

export const { authenticate, logout } = authSlice.actions

export default authSlice.reducer
