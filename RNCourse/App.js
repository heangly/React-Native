import { useState } from 'react'
import {
  ScrollView,
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

export default function App() {
  const [text, setText] = useState('')
  const [goals, setGoals] = useState([])

  const addGoalHandler = () => {
    const newGoal = { id: uuidv4(), text }
    setGoals((preState) => [newGoal, ...preState])
    setText('')
  }

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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.appContainer}>
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
        <View style={styles.goalsContainer}>
          <ScrollView>
            {goals.length > 0 &&
              goals.map((goal) => (
                <View style={styles.goals} key={goal.id}>
                  <Text style={styles.goalsText}>{goal.text}</Text>
                  <Button
                    color='blue'
                    title='Edit'
                    onPress={() =>
                      Alert.prompt('Edit', 'Enter new goal', (editedText) =>
                        editHandler(goal.id, editedText)
                      )
                    }
                  />
                  <Button
                    color='red'
                    title='Delete'
                    onPress={deleteHandler.bind(null, goal.id)}
                  />
                </View>
              ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16
  },

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
  },

  goalsContainer: {
    flex: 5
  },

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
