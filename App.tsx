import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'

import { DrawerNavigator } from '@/navigators'
import { ToastProvider } from '@/context/toastContext'
import ToastNotifications from '@/components/ToastNotifications'

const App = () => {
  return (
    <NavigationContainer>
      <ToastProvider>
        <DrawerNavigator />
      </ToastProvider>
    </NavigationContainer>
  )
}

export default App
