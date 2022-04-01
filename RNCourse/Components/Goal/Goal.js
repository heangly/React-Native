import { FlatList, View, StyleSheet, Button } from 'react-native'
import { useState } from 'react'
import GoalItem from './GoalItem'
import GoalInput from './GoalInput'

const Goal = () => {
  const [goals, setGoals] = useState([])
  const [modalisVisible, setModalIsVisible] = useState(false)

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false)
  }

  return (
    <View style={styles.goalContainer}>
      <Button
        title='Add New Goal'
        color='#b180f0'
        onPress={startAddGoalHandler}
      />

      <GoalInput
        setGoals={setGoals}
        visible={modalisVisible}
        endAddGoalHandler={endAddGoalHandler}
      />

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
