import { useState } from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

const GoalInput = ({ setGoals }) => {
  const [text, setText] = useState('')

  const addGoalHandler = () => {
    if (!text?.trim()) return

    const newGoal = { id: uuidv4(), text }
    setGoals((preState) => [newGoal, ...preState])
    setText('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='Your course goal!'
        onChangeText={(enteredText) => setText(enteredText)}
        value={text}
        onSubmitEditing={addGoalHandler}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Button title='Add Goal' onPress={addGoalHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  }
})

export default GoalInput
