import { View, Text, StyleSheet, Image } from 'react-native'
import { elevation } from '../common/styles'

const CategoryItem = () => {
  return (
    <View style={[styles.container, styles.elevation]}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/burger.png')}
        />
      </View>
      <Text style={styles.header}>Burger</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },

  elevation,

  imageContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    marginBottom: 5
  },

  image: {
    width: 35,
    height: 35
  },

  header: {
    fontWeight: 'bold'
  }
})

export default CategoryItem
