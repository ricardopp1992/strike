import React, { FC } from 'react'
import { Text, View } from 'react-native'

import { CounterScreenProps } from '@/interfaces'
import { CountItem } from '@/pages/NewCounter/interfaces'

const CounterScreenView: FC<CounterScreenProps> = ({ route }) => {
  const items: CountItem[] = new Array(...route.params)

  return (
    <View>
      {
        items.map(({ itemName }) => <Text>{itemName}</Text>)
      }
    </View>
  )
}

export default CounterScreenView