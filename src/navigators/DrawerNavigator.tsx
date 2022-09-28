import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { HomeScreen } from '@/pages/Home'
import { DrawerMenuRoot, DrawerMenuScreens } from '@/interfaces'
import { CounterNavigator } from './CounterStackNavigator'

const { Navigator, Screen } = createDrawerNavigator<DrawerMenuRoot>()

export const DrawerNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={DrawerMenuScreens.HOME_SCREEN} component={HomeScreen} />
      <Screen name={DrawerMenuScreens.COUNTER_STACK} component={CounterNavigator} />
    </Navigator>
  )
}