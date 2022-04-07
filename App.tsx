import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'

import { DrawerNavigator } from '@/navigators'

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}

export default App;
