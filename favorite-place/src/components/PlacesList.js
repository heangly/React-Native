import { FlatList, StyleSheet, Text, View } from 'react-native'

import { Colors } from '../constants/Colors'
import PlaceItem from './PlaceItem'

const PlacesList = ({ places }) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet - start adding some!
        </Text>
      </View>
    )
  }

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={places}
      renderItem={({ item }) => <PlaceItem {...item} />}
    />
  )
}

export default PlacesList

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  fallbackText: {
    fontSize: 16,
    color: Colors.primary200
  }
})
