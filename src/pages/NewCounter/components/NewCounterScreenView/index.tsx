import React, { useRef } from 'react'
import { KeyboardAvoidingView, View } from 'react-native'
import BottomSheetBehavior from 'reanimated-bottom-sheet'

import { PrimaryButton } from '@/components/Buttons'
import { BottomSheet } from '@/components/BottomSheet'
import CounterItemList from '@/pages/NewCounter/components/ItemsList'
import NewItemForm from '@/pages/NewCounter/components/NewItemForm'
import styles from './styles'

const NewCounterScreenView = () => {
  const sheetRef = useRef<BottomSheetBehavior>(null)

  const openNewEntryForm = () => sheetRef.current?.snapTo(1)

  const snapTo = (snap: number) => {
    sheetRef.current?.snapTo(snap)
  }

  return (
    <>
      <View style={styles.container}>
        <CounterItemList />
        <PrimaryButton onPress={openNewEntryForm}>
          +
        </PrimaryButton>
        <View style={styles.startCountingButton}>
          <PrimaryButton onPress={() => { }}>
            Start Counting
          </PrimaryButton>
        </View>
      </View>
        <BottomSheet sheetRef={sheetRef}>
          <KeyboardAvoidingView contentContainerStyle={{ position: 'relative', top: 50 }} behavior="position">
            <NewItemForm snapTo={snapTo} />
          </KeyboardAvoidingView>
        </BottomSheet>
    </>
  )
}

export default NewCounterScreenView