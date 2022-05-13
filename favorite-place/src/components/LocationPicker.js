import { Alert, StyleSheet, View } from 'react-native'
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions
} from 'expo-location'

import OutlinedButton from './UI/OutlinedButton'
import { Colors } from '../constants/Colors'

const LocationPicker = () => {
  const [locationPermissionInformation, requestLocationPermission] =
    useForegroundPermissions()

  const verifyPermission = async () => {
    switch (locationPermissionInformation.status) {
      case PermissionStatus.UNDETERMINED:
        const permissionRequest = await requestLocationPermission()
        return permissionRequest.granted

      case PermissionStatus.DENIED:
        Alert.alert(
          'Insufficient Permission',
          'You need to grant location permission to use this app'
        )
        return false

      default:
        return true
    }
  }

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermission()
    if (!hasPermission) return

    const location = await getCurrentPositionAsync()
    console.log(location)
  }

  const pickOnMapHandler = () => {}

  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlinedButton icon='location' onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon='map' onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default LocationPicker
