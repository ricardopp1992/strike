import React, { FC, useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { View } from 'react-native'

import { PrimaryButton } from '@/components/Buttons'
import ConfirmationAlert from '@/components/ConfirmationAlert'
import ItemCounter from '../ItemCounter'
import { CounterScreenProps, CountItem, DrawerMenuScreens } from '@/interfaces'
import { useItemsCounterContext } from '../../hooks'
import styles from './styles'

const CounterScreenView: FC<CounterScreenProps> = ({ route, navigation }) => {
  const items: CountItem[] = new Array(...route.params || [])
  const { countItems, initItems } = useItemsCounterContext()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    initItems(items)
  }, [])

  const displayCloseCounterConfirmation = () => setShowModal(true)

  const onHandleDismiss = () => {
    setShowModal(false)
    navigateToHome()
  }

  const onHandleConfirm = () => {
    setShowModal(false)
    navigateToHome()
  }

  const navigateToHome = () => navigation.getParent()
    ?.navigate(DrawerMenuScreens.HOME_SCREEN, { items: countItems.items })

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
        onConfirm={onHandleConfirm}
        onDismiss={onHandleDismiss}
      />
    </View>
  )
}

export default CounterScreenView