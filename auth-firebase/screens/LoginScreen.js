import { useState } from 'react'
import { Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import AuthContent from '../components/Auth/AuthContent'
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { authenticate } from '../redux/slice/authSlice'
import { login } from '../utils/auth'

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const dispatch = useDispatch()

  const auth = useSelector((state) => state.auth)
  console.log(auth)

  const signinHandler = async ({ email, password }) => {
    setIsAuthenticating(true)
    try {
      const { data } = await login(email, password)
      dispatch(authenticate(data.idToken))
    } catch (error) {
      Alert.alert('Authentication', 'Could not log you in. Please try again!')
      setIsAuthenticating(false)
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Logging you in...' />
  }

  return <AuthContent isLogin onAuthenticate={signinHandler} />
}

export default LoginScreen
