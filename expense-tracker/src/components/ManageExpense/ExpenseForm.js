import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'

import { getFormatedDate } from '../../util/date'
import Input from './Input'
import Button from '../UI/Button'
import { GlobalStyles } from '../../constants/styles'

const ExpenseForm = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValue
}) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValue?.amount.toString() ?? '',
      isValid: true
    },
    date: {
      value: defaultValue ? getFormatedDate(defaultValue.date) : '',
      isValid: true
    },
    description: {
      value: defaultValue?.description ?? '',
      isValid: true
    }
  })

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputs((prevState) => ({
      ...prevState,
      [inputIdentifier]: { value: enteredValue, isValid: true }
    }))
  }

  const submitHandler = () => {
    const expenseDate = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value
    }

    const amountIsValid = !isNaN(expenseDate.amount) && expenseDate.amount > 0
    const dateIsValid = expenseDate.date.toString() !== 'Invalid Date'
    const descriptionIsValid = expenseDate.description.trim().length > 0

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      // Alert.alert('Invalid input', 'Please check your input values')
      setInputs((prevStates) => {
        return {
          amount: { value: prevStates.amount.value, isValid: amountIsValid },
          date: { value: prevStates.date.value, isValid: dateIsValid },
          description: {
            value: prevStates.description.value,
            isValid: descriptionIsValid
          }
        }
      })
      return
    }

    onSubmit(expenseDate)
  }

  const formIsInValid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label='Amount'
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            value: inputs.amount.value,
            onChangeText: (enteredValue) =>
              inputChangeHandler('amount', enteredValue)
          }}
        />

        <Input
          style={styles.rowInput}
          label='Date'
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            value: inputs.date.value,
            onChangeText: (enteredValue) =>
              inputChangeHandler('date', enteredValue)
          }}
        />
      </View>

      <Input
        label='Description'
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          value: inputs.description.value,
          onChangeText: (enteredValue) =>
            inputChangeHandler('description', enteredValue)
        }}
      />

      {formIsInValid && (
        <Text style={styles.errorText}>
          Invalid input values - please check your entered data
        </Text>
      )}

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

  errorText: {
    textAlign: 'center',
    color: GlobalStyles.colors.error500,
    margin: 8,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: 'bold'
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
