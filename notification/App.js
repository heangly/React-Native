import { StatusBar } from 'expo-status-bar'
import { Alert, Button, StyleSheet, View } from 'react-native'
import * as Notification from 'expo-notifications'
import { useEffect } from 'react'

Notification.setNotificationHandler({
  handleNotification: async () => {
    console.log('handler')
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true
    }
  },
  handleSuccess: () => {
    console.log('hanlder success')
  }
})

export default function App() {
  useEffect(() => {
    const configurePushNotifications = async () => {
      const { status } = await Notification.getPermissionsAsync()
      let finalStatus = status

      if (finalStatus !== 'granted') {
        const { status } = await Notification.requestPermissionsAsync()
        finalStatus = status
      }

      if (finalStatus !== 'granted') {
        Alert.alert(
          'Permission required',
          'Push notification need appropriate permission'
        )
        return
      }

      const pushToken = await Notification.getExpoPushTokenAsync()
      console.log(pushToken)
    }

    configurePushNotifications()
  }, [])

  useEffect(() => {
    const subscription1 = Notification.addNotificationReceivedListener(
      (notification) => {
        const userName = notification.request.content.data.userName
      }
    )

    const subscription2 = Notification.addNotificationResponseReceivedListener(
      (response) => {
        const userName = response.notification.request.content.data.userName
      }
    )

    return () => {
      subscription1.remove()
      subscription2.remove()
    }
  }, [])

  // const allowNotificationsAsync = async () => {
  //   const settings = await Notification.getPermissionsAsync()
  //   return (
  //     settings.granted ||
  //     settings.ios?.status === Notification.IosAuthorizationStatus.PROVISIONAL
  //   )
  // }

  function scheduleNotificationHandler() {
    Notification.scheduleNotificationAsync({
      content: {
        title: 'My first Local Notification',
        body: 'This is the body of the notification',
        data: {
          userName: 'Heang'
        }
      },
      trigger: {
        seconds: 5
      }
    })
  }

  return (
    <View style={styles.container}>
      <Button
        title='Schedule Notification'
        onPress={scheduleNotificationHandler}
      />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
