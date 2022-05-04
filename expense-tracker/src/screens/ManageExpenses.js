import { useLayoutEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import IconButton from '../components/UI/IconButton'
import ExpenseForm from '../components/ManageExpense/ExpenseForm'
import LoadingOverlay from '../components/UI/LoadingOverlay'
import ErrorOverlay from '../components/UI/ErrorOverlay'
import {
  storeExpense,
  updateSpecificExpense,
  deleteSpecificExpense
} from '../util/http'
import {
  addExpense,
  deleteExpense,
  updateExpense
} from '../redux/expeneseSlice'
import { GlobalStyles } from '../constants/styles'
import { useState } from 'react'

const ManageExpenses = ({ route, navigation }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

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
    setIsSubmitting(true)
    try {
      dispatch(deleteExpense({ id: editedExpenseId }))
      deleteSpecificExpense(editedExpenseId)
      closeModal()
    } catch (error) {
      setError('Could not delete expense - please try again later')
    }
    setIsSubmitting(false)
  }

  const cancelHandler = () => {
    closeModal()
  }

  const confirmHandler = async (expenseData) => {
    setIsSubmitting(true)
    try {
      if (editedExpenseId) {
        // edit

        dispatch(
          updateExpense({
            id: editedExpenseId,
            ...expenseData
          })
        )
        updateSpecificExpense(editedExpenseId, expenseData)
        closeModal()
      } else {
        // add
        const id = await storeExpense(expenseData)
        dispatch(
          addExpense({
            ...expenseData,
            id
          })
        )
      }
    } catch (error) {
      setError('Cound not save data - please try again later')
    }

    setIsSubmitting(false)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Update Expense' : 'Add Expense'
    })
  }, [navigation, isEditing])

  const errorHandler = () => {
    setError(null)
  }

  if (isSubmitting) return <LoadingOverlay />

  if (error && !isSubmitting)
    return <ErrorOverlay onConfirm={errorHandler}>{error}</ErrorOverlay>

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
