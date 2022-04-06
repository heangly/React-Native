import { StyleSheet, Text, View } from 'react-native'
import Title from '../components/Title'

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent Guess</Title>
      <View>
        <Text>Higer or Lower</Text>
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
