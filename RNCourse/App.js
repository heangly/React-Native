import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.appContainer}>
        <View>
          <TextInput placeholder='Your course goal!' />
          <Button title='Add Goal' />
        </View>
        <View>
          <Text>List of goals...</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flexDirection: 'row'
  }
})
