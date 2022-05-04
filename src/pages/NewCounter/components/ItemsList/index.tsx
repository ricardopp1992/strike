import React, { FC } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { useCounterContext } from '@/pages/NewCounter/hooks'
import styles from './styles'

const CounterItemList: FC = () => {
  const { counterState } = useCounterContext()

  return (
    <View style={styles.container}>
      {
        counterState.itemsCounter.map(({ itemIcon, itemName }) =>
          <View key={`${itemIcon}${itemName}`} style={styles.itemBox}>
            <Icon name={itemIcon} style={styles.icon} />
            <Text style={styles.textItem}>{itemName}</Text>
          </View>
        )
      }
    </View>
  )
}

export default CounterItemList