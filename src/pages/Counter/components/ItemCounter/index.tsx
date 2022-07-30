import { PrimaryButton } from '@/components/Buttons'
import React, { FC } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useItemsCounterContext } from '../../hooks'

import { IItemCounterProps } from '../../interfaces'
import styles from './styles'

const ItemCounter: FC<IItemCounterProps> = ({ name, icon, value, id }) => {
  const { addCount, decreaseCount } = useItemsCounterContext()
  const enableDecrease = value > 0 || undefined

  const handleAddClick = () => {
    addCount(id)
  }

  const handleDecreaseClick = () => {
    decreaseCount(id)
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <Icon style={styles.icon} name={icon} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.controls}>
        <PrimaryButton onPress={handleAddClick} style={styles.buttons}>+</PrimaryButton>
        <Text style={styles.value}>{value}</Text>
        <PrimaryButton
          disabled={!enableDecrease}
          onPress={enableDecrease && handleDecreaseClick}
          style={styles.buttons}
        >
          -
        </PrimaryButton>
      </View>
    </View>
  )
}

export default ItemCounter