import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { HomeScreen } from '@/pages/Home'
import HistoryScreen from '@/pages/History'
import NewCounterScreen from '@/pages/NewCounter'
import { DrawerMenuRoot, DrawerMenuScreens } from '@/interfaces/navigator'

const { Navigator, Screen } = createDrawerNavigator<DrawerMenuRoot>()

export const DrawerNavigator = () => {
  return (
    <Navigator>
      <Screen name={DrawerMenuScreens.NEW_COUNTER_SCREEN} component={NewCounterScreen} />
      <Screen name={DrawerMenuScreens.HOME_SCREEN} component={HomeScreen} />
      <Screen name={DrawerMenuScreens.HISTORY_SCREEN} component={HistoryScreen} />
    </Navigator>
  )
}