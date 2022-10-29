import React, { FC } from 'react'

import { CounterStackScreens, DrawerMenuScreens, HomeScreenProps, ICounterItemsValues } from '@/interfaces'
import HomeView from './components/HomeView'

export const HomeScreen: FC<HomeScreenProps> = ({ navigation, route }) => {
  const preservedOldCounter: ICounterItemsValues[] = route.params?.items || []

  const navigateToNewCounterFormScreen = () => {
    navigation.navigate(DrawerMenuScreens.COUNTER_STACK,
      { screen: CounterStackScreens.NEW_COUNTER_SCREEN }
    )
  }

  return (
    <HomeView
      navigateToToNewCounter={navigateToNewCounterFormScreen}
      oldCounter={preservedOldCounter}
    />

  )
}