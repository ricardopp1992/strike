import { PrimaryButton } from '@/components/Buttons'
import { SimpleText } from '@/components/Texts'
import React, { FC } from 'react'
import { View } from 'react-native'
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
        <SimpleText style={styles.name}>{name}</SimpleText>
      </View>
      <View style={styles.controls}>
        <PrimaryButton
          disabled={!enableDecrease}
          onPress={enableDecrease && handleDecreaseClick}
          style={styles.buttons}
        >
          -
        </PrimaryButton>
        <SimpleText style={styles.value}>{value}</SimpleText>
        <PrimaryButton onPress={handleAddClick} style={styles.buttons}>+</PrimaryButton>
      </View>
    </View>
  )
}

export default ItemCounter