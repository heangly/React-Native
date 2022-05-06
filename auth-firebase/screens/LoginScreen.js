import { useState } from 'react'
import { Alert } from 'react-native'

import AuthContent from '../components/Auth/AuthContent'
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { login } from '../utils/auth'

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const signinHandler = async ({ email, password }) => {
    setIsAuthenticating(true)
    try {
      const { data } = await login(email, password)
    } catch (error) {
      Alert.alert('Authentication', 'Could not log you in. Please try again!')
    }

    setIsAuthenticating(false)
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Logging you in...' />
  }

  return <AuthContent isLogin onAuthenticate={signinHandler} />
}

export default LoginScreen
