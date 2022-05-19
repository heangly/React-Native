import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, Text, View } from 'react-native'

const RestaurantItem = () => {}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.restaurantContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg'
          }}
        />
        <Text style={styles.title}>El Cabo Coffee Bar Tres De May</Text>
        <Text style={styles.subtitle}>$1.99 15-30 minutes</Text>
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },

  restaurantContainer: {
    width: '100%',
    marginVertical: 10
  },

  image: {
    aspectRatio: 5 / 3,
    marginBottom: 5
  },

  title: {
    fontSize: 15,
    fontWeight: '500',
    marginVertical: 5
  },

  subtitle: {
    color: 'gray'
  }
})
