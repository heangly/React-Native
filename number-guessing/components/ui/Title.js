import { StyleSheet, Text, Platform } from 'react-native'

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: 'white',
    padding: 12,
    fontFamily: 'open-sans-bold',
    maxWidth: '80%',
    width: 300
  }
})
