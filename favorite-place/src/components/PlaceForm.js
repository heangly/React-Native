import { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

import { Colors } from '../constants/Colors'
import { Place } from '../models/place'
import ImagePicker from './ImagePicker'
import LocationPicker from './LocationPicker'
import Button from './UI/Button'

const PlaceForm = ({ onCreatePlace }) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [selectedImage, setSelectedImage] = useState('')

  const changeTitleHandler = (enteredText) => {
    setEnteredTitle(enteredText)
  }

  const takeImageHandler = (imageUri) => {
    setSelectedImage(imageUri)
  }

  const savePlaceHandler = () => {
    if (!enteredTitle || !selectedImage) return
    const placeData = new Place(enteredTitle, selectedImage, null, null)
    console.log(placeData)
    onCreatePlace(placeData)
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker />
      <Button buttonStyle={styles.addPlaceButton} onPress={savePlaceHandler}>
        Add Place
      </Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24
  },

  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary500
  },

  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100
  },

  addPlaceButton: {
    marginVertical: 24
  }
})

export default PlaceForm
