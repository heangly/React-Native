import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'

export default function App() {
  const [userNumber, setUserNumber] = useState(null)

  const pickNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen pickNumberHandler={pickNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/dice.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>

      <StatusBar style='auto' />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },

  backgroundImage: {
    opacity: 0.15
  }
})
