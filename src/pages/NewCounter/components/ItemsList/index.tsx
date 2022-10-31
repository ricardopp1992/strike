import React, { FC } from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { useCounterContext } from '@/pages/NewCounter/hooks'
import { CountItem } from '@/interfaces'
import { ICounterItemProps } from '../../interfaces'
import styles from './styles'
import { SimpleText } from '@/components/Texts'

const CounterItemList: FC<ICounterItemProps> = ({ openNewEntryForm }) => {
  const { counterState, setCounterItemId, removeItem } = useCounterContext()

  const handleEditItem = (item: CountItem) => {
    setCounterItemId(item.id)
    openNewEntryForm()
  }

  const handleRemoveItem = (id: string) => {
    removeItem(id);
  }

  return (
    <View style={styles.container}>
      {
        counterState.itemsCounter.map(({ itemIcon, itemName, id, value }) =>
          <View key={id} style={styles.itemBox}>
            <View style={styles.itemInfoBox}>
              <Icon name={itemIcon} style={styles.icon} />
              <SimpleText style={styles.textItem}>{itemName}</SimpleText>
            </View>
            <View style={styles.actionsBox}>
              <TouchableOpacity
                onPress={() => handleEditItem({ itemIcon, itemName, id, value })}
                style={styles.actionButton}
              >
                <Icon style={styles.actionIcon} name="create-outline" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleRemoveItem(id)}
                style={styles.actionButton}
              >
                <Icon style={styles.actionIcon} name="remove-circle-outline" />
              </TouchableOpacity>
            </View>
          </View>
        )
      }
    </View>
  )
}

export default CounterItemList