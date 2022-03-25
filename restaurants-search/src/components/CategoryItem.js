import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { elevation } from '../common/styles'

const CategoryItem = ({ name, imageURL, active, setTerm }) => {
  return (
    <View style={{ marginVertical: 30 }}>
      <TouchableOpacity onPress={() => setTerm(name)}>
        <View
          style={[
            styles.container,
            styles.elevation,
            active && { backgroundColor: 'rgb(241, 186, 87)' }
          ]}
        >
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={imageURL} />
          </View>
          <Text style={styles.header}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginRight: 25
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
