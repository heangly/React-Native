import { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min
  if (rndNum === exclude) return generateRandomBetween(min, max, exclude)
  return rndNum
}

let minBoundary = 1
let maxBoundary = 100

const GameScreen = ({ userNumber, gameOverHandler }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert('Dont Lie!', 'You know that is wrong...', [
        { text: 'Sorry!', style: 'cancel' }
      ])
      return
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    )

    setCurrentGuess(newRndNumber)
  }

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOverHandler()
    }
  }, [currentGuess, userNumber, gameOverHandler])

  return (
    <View style={styles.screen}>
      <Title>Opponent Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higer or Lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(null, 'lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(null, 'greater')}>
            +
          </PrimaryButton>
        </View>
      </View>
      <View>
        <Text>Logs Round</Text>
      </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  }
})
