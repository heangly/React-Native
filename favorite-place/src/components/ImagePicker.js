import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus
} from 'expo-image-picker'
import { useState } from 'react'

import { Colors } from '../constants/Colors'
import OutlinedButton from './UI/OutlinedButton'

const ImagePicker = ({ onTakeImage }) => {
  const [pickedImage, setPickedImage] = useState('')
  const [cameraPermissionInformation, requestPermissionFunc] =
    useCameraPermissions()

  const verifyPermission = async () => {
    switch (cameraPermissionInformation.status) {
      case PermissionStatus.UNDETERMINED:
        const permissionResponse = await requestPermissionFunc()
        return permissionResponse.granted

      case PermissionStatus.DENIED:
        Alert.alert(
          'Insufficient Permission!',
          'You need to grant camerapermissions to use this app'
        )
        return false

      default:
        return true
    }
  }

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermission()

    if (!hasPermission) return

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    })

    setPickedImage(image.uri)
    onTakeImage(image.uri)
  }

  let imagePreview = <Text>No image taken yet.</Text>

  if (pickedImage) {
    imagePreview = <Image source={{ uri: pickedImage }} style={style.image} />
  }

  return (
    <View>
      <View style={style.imagePreview}>{imagePreview}</View>
      <OutlinedButton onPress={takeImageHandler} icon='camera'>
        Take Image
      </OutlinedButton>
    </View>
  )
}

const style = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4
  },

  image: {
    width: '100%',
    height: '100%'
  }
})

export default ImagePicker
