import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'

import Input from './Input'
import Button from '../UI/Button'

const ExpenseForm = ({ onCancel, onSubmit, submitButtonLabel }) => {
  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    description: ''
  })

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputValues((prevState) => ({
      ...prevState,
      [inputIdentifier]: enteredValue
    }))
  }

  const submitHandler = () => {
    const expenseDate = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description
    }

    onSubmit(expenseDate)
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label='Amount'
          textInputConfig={{
            keyboardType: 'decimal-pad',
            value: inputValues.amount,
            onChangeText: (enteredValue) =>
              inputChangeHandler('amount', enteredValue)
          }}
        />

        <Input
          style={styles.rowInput}
          label='Date'
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            value: inputValues.date,
            onChangeText: (enteredValue) =>
              inputChangeHandler('date', enteredValue)
          }}
        />
      </View>

      <Input
        label='Description'
        textInputConfig={{
          multiline: true,
          value: inputValues.description,
          onChangeText: (enteredValue) =>
            inputChangeHandler('description', enteredValue)
        }}
      />

      <View style={styles.buttons}>
        <Button mode='flat' onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    marginTop: 10
  },

  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 18
  },

  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  rowInput: {
    flex: 1
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    minWidth: 120,
    marginHorizontal: 8
  }
})

export default ExpenseForm
