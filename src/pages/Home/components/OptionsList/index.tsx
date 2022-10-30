import React from 'react'
import type { FC } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { CounterStackScreens, DrawerMenuScreens, HomeNavigation, OptionListProps } from '@/interfaces'
import { SecondaryButton } from '@/components/Buttons/SecondaryButton'
import { SimpleText } from '@/components/Texts'
import styles from './styles'

const OptionsList: FC<OptionListProps> = ({ oldCounter, preservedId }) => {
  const navigation = useNavigation<HomeNavigation>()

  const navigateToCounterScreen = () => {
    navigation.navigate(DrawerMenuScreens.COUNTER_STACK,
      {
        params: {
          id: preservedId,
          items: oldCounter
        },
        screen: CounterStackScreens.COUNTER_SCREEN
      }
    )
  }

  return (
    <SecondaryButton style={styles.container} onPress={navigateToCounterScreen}>
      <View>
        {
          oldCounter.map(({ itemName, value }, i) => (
            <SimpleText key={`${itemName}-${i}`}>{itemName}: {value}</SimpleText>
          ))
        }
      </View>
    </SecondaryButton>
  )
}

export default OptionsList