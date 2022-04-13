import { Text, View, StyleSheet } from 'react-native'

const MealsOverviewScreen = ({ route }) => {
  const { categoryId } = route.params

  return (
    <View style={styles.container}>
      <Text>MealsOverviewScreen</Text>
      <Text>{categoryId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})

export default MealsOverviewScreen
