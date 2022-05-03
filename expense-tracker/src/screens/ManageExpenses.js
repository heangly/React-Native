import { useLayoutEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import IconButton from '../components/UI/IconButton'
import ExpenseForm from '../components/ManageExpense/ExpenseForm'
import { storeExpense } from '../util/http'
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

  const selectedExpense = useSelector((state) =>
    state.expense.expenses.find((expense) => expense.id === editedExpenseId)
  )

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

  const confirmHandler = (expenseData) => {
    if (editedExpenseId) {
      // edit
      dispatch(
        updateExpense({
          id: editedExpenseId,
          ...expenseData
        })
      )
    } else {
      // add
      // const id = new Date().toString() + Math.random().toString()
      storeExpense(expenseData)
      dispatch(
        addExpense({
          ...expenseData
        })
      )
    }

    closeModal()
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Update Expense' : 'Add Expense'
    })
  }, [navigation, isEditing])

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValue={selectedExpense}
      />
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

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopColor: GlobalStyles.colors.primary200,
    borderTopWidth: 2,
    alignItems: 'center'
  }
})

export default ManageExpenses
