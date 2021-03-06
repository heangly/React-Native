import { View, StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/colors'

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>
}

const { width: deviceWidth } = Dimensions.get('window')

const styles = StyleSheet.create({
  card: {
    marginTop: deviceWidth < 415 ? 18 : 36,
    padding: 16,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    // shadow for both andriod and ios
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Card
