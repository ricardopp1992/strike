import React, { FC, useEffect, useRef, useState } from 'react'
import { KeyboardAvoidingView, Text, View } from 'react-native'
import BottomSheetBehavior from 'reanimated-bottom-sheet'

import { PrimaryButton } from '@/components/Buttons'
import { BottomSheet } from '@/components/BottomSheet'
import CounterItemList from '@/pages/NewCounter/components/ItemsList'
import NewItemForm from '@/pages/NewCounter/components/NewItemForm'
import { CounterStackScreens, CountItem, NewCounterScreenProps } from '@/interfaces'
import { useCounterContext } from '../../hooks'
import styles from './styles'

const NewCounterScreenView: FC<NewCounterScreenProps> = ({ navigation }) => {
  const sheetRef = useRef<BottomSheetBehavior>(null)
  const [disableStart, setDisableStart] = useState(true)
  const { counterState, setCounterItemId } = useCounterContext()

  const openNewEntryForm = () => sheetRef.current?.snapTo(1)

  const snapTo = (snap: number) => {
    sheetRef.current?.snapTo(snap)
  }

  const onNavigateToCounter = () => {
    navigation.navigate(CounterStackScreens.COUNTER_SCREEN, counterState.itemsCounter)
  }

  useEffect(() => {
    const disableStartCounter: boolean = counterState.itemsCounter.length === 0
    setDisableStart(disableStartCounter)
  }, [counterState.itemsCounter])

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Counter Items</Text>
        <CounterItemList openNewEntryForm={openNewEntryForm} />
        <PrimaryButton onPress={openNewEntryForm}>
          +
        </PrimaryButton>
        <View style={styles.startCountingButton}>
          <PrimaryButton disabled={disableStart} onPress={onNavigateToCounter}>
            Start Counting
          </PrimaryButton>
        </View>
      </View>
      <BottomSheet sheetRef={sheetRef}>
        <KeyboardAvoidingView contentContainerStyle={{ position: 'relative', top: 60 }} behavior="position">
          <NewItemForm snapTo={snapTo} />
        </KeyboardAvoidingView>
      </BottomSheet>
    </>
  )
}

export default NewCounterScreenView