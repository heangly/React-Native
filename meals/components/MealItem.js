import {
  Pressable,
  Text,
  View,
  Image,
  StyleSheet,
  Platform
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import MealDetails from './MealDetails'

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability
}) => {
  const navigation = useNavigation()

  const pressHandler = () => {
    navigation.navigate('MealDetail', {
      mealId: id
    })
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    // box-shadow
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    overflow: Platform.select({ ios: 'visible', android: 'hidden' })
  },

  buttonPressed: {
    opacity: 0.5
  },

  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },

  image: {
    width: '100%',
    height: 200
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8
  }
})

export default MealItem
