import React, { FC, useEffect } from 'react'
import { Text, View } from 'react-native'

import { CounterScreenProps, CountItem } from '@/interfaces'
import ItemCounter from '../ItemCounter'
import { useItemsCounterContext } from '../../hooks'
import { ScrollView } from 'react-native-gesture-handler'
import styles from './styles'

const CounterScreenView: FC<CounterScreenProps> = ({ route }) => {
  const items: CountItem[] = new Array(...route.params)
  const { countItems, initItems } = useItemsCounterContext()

  useEffect(() => {
    initItems(items)
  }, [])
  

  return (
    <ScrollView style={styles.container}>
      {
        countItems.items.map(({ itemName, itemIcon, value, id }) =>
          <ItemCounter
            key={`${itemName}-${itemIcon}`}
            id={id}
            name={itemName}
            icon={itemIcon}
            value={value}
          />
        )
      }
    </ScrollView>
  )
}

export default CounterScreenView