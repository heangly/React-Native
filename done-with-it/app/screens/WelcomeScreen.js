import React from 'react'
import { ImageBackground, StyleSheet, View, Image } from 'react-native'

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <Image styles={styles.logo} source={require('../assets/logo-red.png')} />
      <View styles={styles.loginButton}></View>
      <View styles={styles.registerButton}></View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end'
  },

  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65'
  },

  logo: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 70
  },

  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4'
  }
})

export default WelcomeScreen
