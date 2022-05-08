import { FlatList } from 'react-native'

const PlacesList = ({ places }) => {
  return (
    <FlatList
      keyExtractor={(place) => place.id}
      data={places}
      renderItem={({ item }) => item}
    />
  )
}

export default PlacesList
