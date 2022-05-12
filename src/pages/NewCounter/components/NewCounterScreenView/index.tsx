import React, { FC, useRef } from 'react'
import { KeyboardAvoidingView, Text, View } from 'react-native'
import BottomSheetBehavior from 'reanimated-bottom-sheet'

import { PrimaryButton } from '@/components/Buttons'
import { BottomSheet } from '@/components/BottomSheet'
import CounterItemList from '@/pages/NewCounter/components/ItemsList'
import NewItemForm from '@/pages/NewCounter/components/NewItemForm'
import styles from './styles'
import { CounterStackScreens, NewCounterScreenProps } from '@/interfaces'
import { useCounterContext } from '../../hooks'

const NewCounterScreenView: FC<NewCounterScreenProps> = ({ navigation }) => {
  const sheetRef = useRef<BottomSheetBehavior>(null)
  const { counterState } = useCounterContext()

  const openNewEntryForm = () => sheetRef.current?.snapTo(1)

  const snapTo = (snap: number) => {
    sheetRef.current?.snapTo(snap)
  }

  const onNavigateToCounter = () => {
    navigation.navigate(CounterStackScreens.COUNTER_SCREEN, counterState.itemsCounter)
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Counter Items</Text>
        <CounterItemList />
        <PrimaryButton onPress={openNewEntryForm}>
          +
        </PrimaryButton>
        <View style={styles.startCountingButton}>
          <PrimaryButton onPress={onNavigateToCounter}>
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