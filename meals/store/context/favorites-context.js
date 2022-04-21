import { createContext, useState } from 'react'

const initialStates = {
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {}
}
export const FavoritesContext = createContext(initialStates)

const FavoritesContextProvider = ({ children }) => {
  const [mealIds, setMealIds] = useState([])

  const addFavorite = (id) => {
    if (mealIds.includes(id)) return
    setMealIds((preState) => [...preState, id])
  }

  const removeFavorite = (id) => {
    setMealIds((preState) => preState.filter((stateId) => stateId !== id))
  }

  const values = {
    id: mealIds,
    addFavorite,
    removeFavorite
  }

  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContextProvider
