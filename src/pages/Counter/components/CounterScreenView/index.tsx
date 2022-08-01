import React, { FC, useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Modal, Text, TouchableOpacity, View } from 'react-native'

import { CounterScreenProps, CountItem } from '@/interfaces'
import ItemCounter from '../ItemCounter'
import { useItemsCounterContext } from '../../hooks'
import { PrimaryButton } from '@/components/Buttons'
import styles from './styles'
import ConfirmationAlert from '@/components/ConfirmationAlert'

const CounterScreenView: FC<CounterScreenProps> = ({ route }) => {
  const items: CountItem[] = new Array(...route.params)
  const { countItems, initItems } = useItemsCounterContext()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    initItems(items)
  }, [])

  const displayCloseCounterConfirmation = () => setShowModal(true)

  const onHandleDismiss = () => {
    setShowModal(false)
  }

  const onHandleConfirm = () => {
    setShowModal(false)
  }

  return (
    <View>
      <PrimaryButton
        onPress={displayCloseCounterConfirmation}
        textStyle={styles.textButton}
        style={styles.closeButton}
      >x</PrimaryButton>
      <ScrollView>
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
      <ConfirmationAlert
        visible={showModal}
        headerText="You are about to leave the counter!"
        alertMessage="Would you like to preserve the counter for next time or reset?"
        confirmText="Preserve my count"
        cancelText="Reset count"
        onConfirm={() => {}}
        onDismiss={onHandleDismiss}
      />
    </View>
  )
}

export default CounterScreenView