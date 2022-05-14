import { useIsFocused } from '@react-navigation/native'
import { useEffect, useState } from 'react'

import PlacesList from '../components/PlacesList'
import { fetchPlaces } from '../utils/database'

const AllPlaces = () => {
  const [loadedPlaces, setLoadedPlaces] = useState([])
  const isFocused = useIsFocused()

  useEffect(() => {
    const loadPlaces = async () => {
      const response = await fetchPlaces()
      setLoadedPlaces((prevState) => [...prevState, ...response])
    }

    isFocused && loadPlaces()
  }, [isFocused])

  return <PlacesList places={loadedPlaces} />
}

export default AllPlaces
