import { Button, TextInput, View, StyleSheet, Modal, Image } from 'react-native'
import { useState } from 'react'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

const GoalInput = ({ setGoals, visible, endAddGoalHandler }) => {
  const [text, setText] = useState('')

  const addGoalHandler = () => {
    if (!text?.trim()) return
    const newGoal = { id: uuidv4(), text }
    setGoals((preState) => [newGoal, ...preState])
    setText('')
    endAddGoalHandler()
  }

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          placeholderTextColor='#b180f0'
          onChangeText={(enteredText) => setText(enteredText)}
          value={text}
          onSubmitEditing={addGoalHandler}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} color='#b180f0' />
          </View>
          <View style={styles.button}>
            <Button
              title='Cancel'
              onPress={endAddGoalHandler}
              color='#f31282'
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#311b6b'
  },

  image: {
    width: 100,
    height: 100,
    margin: 20
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    width: '100%',
    padding: 16,
    color: '#b180f0',
    backgroundColor: '#e4d0ff',
    borderRadius: 8
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },

  button: {
    width: 100,
    marginHorizontal: 8
  }
})

export default GoalInput
