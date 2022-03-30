import { FlatList, View, StyleSheet } from 'react-native'
import GoalItem from './GoalItem'

const GoalContainer = ({ goals, setGoals }) => {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={goals}
        renderItem={({ item }) => <GoalItem item={item} setGoals={setGoals} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5
  }
})

export default GoalContainer
