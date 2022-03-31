import { Pressable, StyleSheet, Text, View, Modal } from 'react-native'

const GoalItem = ({ item, setGoals }) => {
  const deleteHandler = (id) => {
    setGoals((preState) => preState.filter((state) => state.id !== id))
  }

  // const editHandler = (id, text) => {
  //   setGoals((preState) =>
  //     preState.map((state) => {
  //       if (state.id === id) state.text = text
  //       return state
  //     })
  //   )
  // }

  return (
    <Modal>
      <Pressable
        onPress={deleteHandler.bind(null, item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <View style={styles.goals}>
          <Text style={styles.goalsText}>{item.text}</Text>
        </View>
      </Pressable>
    </Modal>
  )
}

const styles = StyleSheet.create({
  goals: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#5e0acc'
  },

  pressedItem: {
    opacity: 0.5
  },

  goalsText: {
    fontSize: 18,
    flex: 1,
    color: 'white'
  }
})

export default GoalItem
