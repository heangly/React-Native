import axios from 'axios'
import { useEffect, useState } from 'react'
import { SafeAreaView, Text, View } from 'react-native'

const HomeScreen = () => {
  const [joke, setJoke] = useState('')

  useEffect(() => {
    const fetchJokes = async () => {
      const { data } = await axios.get(
        'https://icanhazdadjoke.com?search=dog?limit=1',
        {
          headers: { Accept: 'application/json' }
        }
      )
      console.log(data)
      setJoke(data.joke)
    }

    fetchJokes()
  }, [])

  return (
    <SafeAreaView>
      <View>
        <Text>{joke}</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
