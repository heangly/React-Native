import { useState } from 'react'
import { Alert } from 'react-native'

import AuthContent from '../components/Auth/AuthContent'
import { createUser } from '../utils/auth'
import LoadingOverlay from '../components/ui/LoadingOverlay'

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true)
    try {
      const { data } = await createUser(email, password)
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not create user. Please try again!'
      )
    }

    setIsAuthenticating(false)
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Creating user...' />
  }

  return <AuthContent onAuthenticate={signupHandler} />
}

export default SignupScreen
