import { View, Image, StyleSheet, Text } from 'react-native'
import { elevation } from '../common/styles'

const RestaurantItem = ({ restaurant }) => {
  return (
    <View style={[styles.container, styles.elevation]}>
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <View style={styles.infoContainer}>
        <Text style={styles.header}>{restaurant.name}</Text>
        <View style={styles.info}>
          <Text style={styles.rating}>{restaurant.rating}</Text>
          <Text style={styles.money}>{restaurant.price}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  elevation,
  container: {
    backgroundColor: 'white',
    height: 100,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 20
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4
  },
  info: {
    flexDirection: 'row'
  },
  rating: {
    marginRight: 20
  },
  money: {
    color: 'gold'
  }
})

export default RestaurantItem
