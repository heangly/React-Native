import { Text, View, StyleSheet } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerLight}>Grab Your</Text>
      <Text style={styles.headerBold}>Delicious Meal!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60
  },

  headerLight: {
    fontSize: 35
  },

  headerBold: {
    fontSize: 40,
    fontWeight: 'bold'
  }
})

export default Header
