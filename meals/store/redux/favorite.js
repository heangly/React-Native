import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: []
}

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.id.push(action.payload.id)
    },
    removeFavorite: (state, action) => {
      state.id.splice(state.id.indexOf(action.payload.id), 1)
    }
  }
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
