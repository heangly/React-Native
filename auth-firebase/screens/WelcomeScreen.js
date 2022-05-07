import axios from 'axios'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

function WelcomeScreen() {
  const [fetchMessage, setFetchedMessage] = useState('')

  const { auth } = useSelector((state) => state)

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        'https://expense-tracker-986cd-default-rtdb.firebaseio.com/message.json?auth=' +
          auth.token
      )
      setFetchedMessage(data)
    }

    fetchData()
  }, [])

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchMessage}</Text>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8
  }
})
