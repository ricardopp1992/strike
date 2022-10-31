import React from 'react'
import type { FC } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'

import { CounterStackScreens, DrawerMenuScreens, HomeNavigation, OptionListProps } from '@/interfaces'
import { PrimaryButton, SecondaryButton } from '@/components/Buttons'
import styles from './styles'

const OptionsList: FC<OptionListProps> = ({ oldCounter, preservedId, removePreviousCount }) => {
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

  const removeCounter = () => {
    removePreviousCount(preservedId)
  }

  return (
    <View style={styles.listRow}>
      <SecondaryButton style={styles.container} onPress={navigateToCounterScreen}>
        {
          oldCounter.map(({ itemName, value }, i) => (
            `${itemName} - ${value} ${i !== oldCounter.length - 1 ? '\n' : ''}`
          ))
        }
      </SecondaryButton>
      <PrimaryButton
        onPress={removeCounter}
        style={styles.closeButton}
      >
        <Icon style={styles.removeIcon} name="trash" />
      </PrimaryButton>
    </View>
  )
}

export default OptionsList