import { PrimaryButton } from '@/components/Buttons'
import React, { FC } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useItemsCounterContext } from '../../hooks'

import { IItemCounterProps } from '../../interfaces'
import styles from './styles'

const ItemCounter: FC<IItemCounterProps> = ({ name, icon, value }) => {
  const {} = useItemsCounterContext()

  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <Icon style={styles.icon} name={icon} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.controls}>
        <PrimaryButton style={styles.buttons}>+</PrimaryButton>
        <Text style={styles.value}>{value}</Text>
        <PrimaryButton style={styles.buttons}>-</PrimaryButton>
      </View>
    </View>
  )
}

export default ItemCounter