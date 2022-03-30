import { useState } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import GoalContainer from './Components/GoalContainer'
import GoalInput from './Components/GoalInput'

export default function App() {
  const [goals, setGoals] = useState([])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.appContainer}>
        <GoalInput setGoals={setGoals} />
        <GoalContainer goals={goals} setGoals={setGoals} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16
  }
})
