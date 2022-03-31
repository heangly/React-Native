import { FlatList, View, StyleSheet } from 'react-native'
import { useState } from 'react'
import GoalItem from './GoalItem'
import GoalInput from './GoalInput'

const Goal = () => {
  const [goals, setGoals] = useState([])

  return (
    <View style={styles.goalContainer}>
      <GoalInput setGoals={setGoals} />
      <View style={styles.goal}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={goals}
          renderItem={({ item }) => (
            <GoalItem item={item} setGoals={setGoals} />
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  goalContainer: {
    flex: 1,
    paddingHorizontal: 16
  },

  goal: {
    flex: 5
  }
})

export default Goal
