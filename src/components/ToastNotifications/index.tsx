import React from 'react'
import { View, ViewStyle } from 'react-native'

import { useToastContext } from '@/context/toastContext'
import styles from './styles'
import { ToastType } from '@/interfaces'
import Icon from 'react-native-vector-icons/Ionicons'
import { SimpleText } from '../Texts'


const ToastNotifications = () => {
  const { toastState, closeToast } = useToastContext()
  const { ERROR } = ToastType
  let toastBoxStyle: ViewStyle = {}

  if (!toastState.text) {
    return null
  }

  let message = toastState.text

  switch (toastState?.type) {
    case ERROR:
      toastBoxStyle = styles.errorToastBox
      break
      default:
      message = 'Toast Type invalid'
    }

  return (
    <View style={[styles.toastBox, toastBoxStyle]}>
      <SimpleText>{message}</SimpleText>
      <Icon style={styles.closeToast} onPress={closeToast} name="close-circle-outline" />
    </View>
  )
}

export default ToastNotifications