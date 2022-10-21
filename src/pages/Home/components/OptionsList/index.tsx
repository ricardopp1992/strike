import React from 'react'
import type { FC } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { CounterStackScreens, DrawerMenuScreens, HomeNavigation, OptionListProps } from '@/interfaces'
import { SecondaryButton } from '@/components/Buttons/SecondaryButton'
import styles from './styles'
import { SimpleText } from '@/components/Texts'

const OptionsList: FC<OptionListProps> = ({ oldCounter }) => {
  const navigation = useNavigation<HomeNavigation>()

  const navigateToCounterScreen = () => {
    navigation.navigate(DrawerMenuScreens.COUNTER_STACK,
      { params: oldCounter, screen: CounterStackScreens.COUNTER_SCREEN }
    )
  }

  return (
    <SecondaryButton style={styles.container} onPress={navigateToCounterScreen}>
      <View>
        {
          oldCounter.map(({ itemName, value }) => (
            <SimpleText key={`${itemName}-${value}`}>{itemName}: {value}</SimpleText>
          ))
        }
      </View>
    </SecondaryButton>
  )
}

export default OptionsList