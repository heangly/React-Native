import { View, TextInput, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { elevation } from '../common/styles'
import { useState } from 'react'

const Search = ({ setTerm }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const endEditingHandler = () => {
    if (!searchTerm?.trim()) return
    setTerm(searchTerm)
    setSearchTerm('')
  }

  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name='search' size={25} />
      <TextInput
        onChangeText={(text) => setSearchTerm(text)}
        value={searchTerm}
        style={styles.input}
        placeholder='Restaurants, food'
        onEndEditing={endEditingHandler}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 25
  },

  elevation,

  input: {
    fontSize: 20,
    marginLeft: 10
  }
})

export default Search
