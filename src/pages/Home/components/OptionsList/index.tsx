import React from 'react'
import type { FC } from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { CounterStackScreens, DrawerMenuScreens, HomeScreenProps, OptionListProps } from '@/interfaces'
import { SecondaryButton } from '@/components/Buttons/SecondaryButton'
import styles from './styles'

const OptionsList: FC<OptionListProps> = ({ oldCounter }) => {
  const navigation = useNavigation<any>()  // need to correct this and use appropriate type HomeScreenProps

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
            <Text key={`${itemName}-${value}`}>{itemName}: {value}</Text>
          ))
        }
      </View>
    </SecondaryButton>
  )
}

export default OptionsList