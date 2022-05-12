import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import NewCounterScreen from '@/pages/NewCounter'
import CounterScreen from '@/pages/Counter'
import { CounterStackRoot, CounterStackScreens } from '@/interfaces'


const { Navigator, Screen } = createNativeStackNavigator<CounterStackRoot>()

export const CounterNavigator = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name={CounterStackScreens.NEW_COUNTER_SCREEN} component={NewCounterScreen} />
    <Screen name={CounterStackScreens.COUNTER_SCREEN} component={CounterScreen} />
  </Navigator>
)