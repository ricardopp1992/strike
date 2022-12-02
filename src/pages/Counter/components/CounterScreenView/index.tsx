import React, { useEffect, useState, useRef } from 'react'
import type { FC } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { BackHandler, NativeEventSubscription, View } from 'react-native'

import { PrimaryButton } from '@/components/Buttons'
import ConfirmationAlert from '@/components/ConfirmationAlert'
import { CounterScreenProps, CountItem, DrawerMenuScreens, IPreserveCount } from '@/interfaces'
import ItemCounter from '../ItemCounter'
import { useItemsCounterContext } from '../../hooks'
import styles from './styles'

const CounterScreenView: FC<CounterScreenProps> = ({ route, navigation }) => {
  const items = (route.params.params || route.params) as CountItem[] | IPreserveCount
  const backHandlerEventRef = useRef<NativeEventSubscription>()
  const { countItems, initItems } = useItemsCounterContext()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      displayCloseCounterConfirmation()
      return true
    })

    backHandlerEventRef.current = backHandler

    return () => removeBackHandlerEvent()
  }, [])

  useEffect(() => {
    const arrayTypeItem = Array.isArray(items) ? items : items.items
    initItems(arrayTypeItem)
  }, [items])

  const removeBackHandlerEvent = () => backHandlerEventRef.current?.remove()

  const displayCloseCounterConfirmation = () => setShowModal(true)

  const onHandleDismiss = () => {
    setShowModal(false)
    navigateToHome(false)
  }

  const onHandleConfirm = () => {
    setShowModal(false)
    navigateToHome(true)
  }

  const navigateToHome = (preserve: boolean) => {
    const id = Array.isArray(items) ? new Date().getTime() : items.id
    const preservedItem = preserve ? { id , items: countItems.items } : undefined

    removeBackHandlerEvent();
    navigation.getParent()
      ?.navigate(DrawerMenuScreens.HOME_SCREEN, preservedItem)
  }

  return (
    <View>
      <PrimaryButton
        onPress={displayCloseCounterConfirmation}
        textStyle={styles.textButton}
        style={styles.closeButton}
      >x</PrimaryButton>
      <ScrollView style={styles.scrollViewContainer}>
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