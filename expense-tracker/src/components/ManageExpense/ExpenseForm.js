import { StyleSheet, Text, View } from 'react-native'

import Input from './Input'

const ExpenseForm = () => {
  const amountChangeHandler = () => {}

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label='Amount'
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangeHandler
          }}
        />
        <Input
          style={styles.rowInput}
          label='Date'
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: () => {}
          }}
        />
      </View>

      <Input
        label='Description'
        textInputConfig={{
          multiline: true
        }}
      />
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
  }
})

export default ExpenseForm
