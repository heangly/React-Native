import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import { useState } from 'react'
import Colors from '../constants/colors'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'

const StartGameScreen = ({ pickNumberHandler }) => {
  const [enteredNumber, setEnteredNumber] = useState('')

  const { width, height } = useWindowDimensions()

  const resetInputHandler = () => {
    setEnteredNumber('')
  }

  const confirmInputHandler = () => {
    if (!enteredNumber.trim().length) return
    const chosenNumber = parseInt(enteredNumber)

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number', 'Please enter number between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler }
      ])
      return
    }

    pickNumberHandler(chosenNumber)
  }

  const marginTop = height < 380 ? 30 : 100

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={[styles.rootContainer, marginTop]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Guess</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType='number-pad'
              autoCapitalize='none'
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={(value) => setEnteredNumber(value)}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.butonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.butonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },

  rootContainer: {
    flex: 1,
    alignItems: 'center'
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 10
  },

  butonContainer: {
    flex: 1
  }
})

export default StartGameScreen
