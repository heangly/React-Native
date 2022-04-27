import { useLayoutEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'

import IconButton from '../components/UI/IconButton'
import Button from '../components/UI/Button'
import {
  addExpense,
  deleteExpense,
  updateExpense
} from '../redux/expeneseSlice'
import { GlobalStyles } from '../constants/styles'

const ManageExpenses = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId
  const isEditing = !!editedExpenseId

  const dispatch = useDispatch()

  const closeModal = () => {
    navigation.goBack()
  }

  const deleteExpenseHandler = () => {
    dispatch(deleteExpense({ id: editedExpenseId }))
    closeModal()
  }

  const cancelHandler = () => {
    closeModal()
  }

  const confirmHandler = () => {
    if (editedExpenseId) {
      // edit
      dispatch(
        updateExpense({
          id: editedExpenseId,
          description: 'EDITING',
          amount: 5555.99,
          date: new Date('2022-01-05')
        })
      )
    } else {
      // add
      const id = new Date().toString() + Math.random().toString()

      dispatch(
        addExpense({
          id,
          description: 'TESTING',
          amount: 1111.99,
          date: new Date('2022-04-28')
        })
      )
    }

    closeModal()
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing])

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button mode='flat' onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon='trash'
            color={GlobalStyles.colors.error500}
            size={24}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    minWidth: 120,
    marginHorizontal: 8
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopColor: GlobalStyles.colors.primary200,
    borderTopWidth: 2,
    alignItems: 'center'
  }
})

export default ManageExpenses
