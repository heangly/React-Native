import PlaceForm from '../components/PlaceForm'

const AddPlace = ({ navigation }) => {
  const createPlaceHandler = (place) => {
    navigation.navigate('AllPlaces', {
      place
    })
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />
}

export default AddPlace
