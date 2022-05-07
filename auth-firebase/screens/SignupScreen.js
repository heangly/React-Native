import { useState } from 'react'
import { Alert } from 'react-native'
import { useDispatch } from 'react-redux'

import AuthContent from '../components/Auth/AuthContent'
import { createUser } from '../utils/auth'
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { authenticate } from '../redux/slice/authSlice'

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const dispatch = useDispatch()

  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true)
    try {
      const { data } = await createUser(email, password)
      dispatch(authenticate(data.idToken))
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not create user. Please try again!'
      )
      setIsAuthenticating(false)
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Creating user...' />
  }

  return <AuthContent onAuthenticate={signupHandler} />
}

export default SignupScreen
