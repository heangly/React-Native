import { Alert, Button, StyleSheet, Text, View } from 'react-native'

const GoalItem = ({ item, setGoals }) => {
  const deleteHandler = (id) => {
    setGoals((preState) => preState.filter((state) => state.id !== id))
  }

  const editHandler = (id, text) => {
    setGoals((preState) =>
      preState.map((state) => {
        if (state.id === id) {
          state.text = text
        }
        return state
      })
    )
  }

  return (
    <View style={styles.goals}>
      <Text style={styles.goalsText}>{item.text}</Text>
      <Button
        color='blue'
        title='Edit'
        onPress={() =>
          Alert.prompt('Edit', 'Enter new goal', (editedText) =>
            editHandler(item.id, editedText)
          )
        }
      />
      <Button
        color='red'
        title='Delete'
        onPress={deleteHandler.bind(null, item.id)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  goals: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
    padding: 10,
    borderRadius: 10,
    borderColor: '#5e0acc',
    borderWidth: 2
  },

  goalsText: {
    fontSize: 18,
    flex: 1,
    color: '#000'
  }
})

export default GoalItem
