import React, { FC } from 'react'
import { Text, View } from 'react-native'

import OptionsList from './components/OptionsList'
import { CounterStackScreens, CountItem, DrawerMenuScreens, HomeScreenProps } from '@/interfaces'
import { PrimaryButton } from '@/components/Buttons'

export const HomeScreen: FC<HomeScreenProps> = ({ navigation, route }) => {
  const preservedOldCounter: CountItem[] = route.params?.items || []

  const navigateToNewCounterFormScreen = () => {
    navigation.navigate(DrawerMenuScreens.COUNTER_STACK,
      { screen: CounterStackScreens.NEW_COUNTER_SCREEN }
    )
  }

  return (
    <View>
      <Text>Welcome to Strikpe app</Text>
      <View>
        <PrimaryButton onPress={navigateToNewCounterFormScreen}>
          Start New Count
        </PrimaryButton>
      </View>
      <OptionsList />
    </View>
  )
}