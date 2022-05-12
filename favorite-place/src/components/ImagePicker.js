import { Alert, Button, View } from 'react-native'
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus
} from 'expo-image-picker'

const ImagePicker = () => {
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
    console.log(image)
  }

  return (
    <View>
      <View></View>
      <Button title='Take Image' onPress={takeImageHandler} />
    </View>
  )
}

export default ImagePicker
