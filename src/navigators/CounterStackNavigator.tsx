import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import NewCounterScreen from '@/pages/NewCounter'
import CounterScreen from '@/pages/Counter'
import { CounterStackRoot, CounterStackScreens } from '@/interfaces'
import { normalTheme } from '@/theme'


const { Navigator, Screen } = createNativeStackNavigator<CounterStackRoot>()

export const CounterNavigator = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: normalTheme.background,
      }
    }}
  >
    <Screen name={CounterStackScreens.NEW_COUNTER_SCREEN} component={NewCounterScreen} />
    <Screen name={CounterStackScreens.COUNTER_SCREEN} component={CounterScreen} />
  </Navigator>
)